import { useEffect, useRef, useState } from "react";

interface Options {
  /** Load every Nth frame (halves memory on smaller devices). */
  stride?: number;
  /** Frames to load before the hero becomes interactive. */
  eagerCount?: number;
  /** Concurrent request limit for the remaining frames. */
  concurrency?: number;
}

interface Result {
  images: HTMLImageElement[];
  /** 0 → 1 preload progress for all frames. */
  loadProgress: number;
  /** True once the eager batch has decoded and can be drawn. */
  ready: boolean;
}

/**
 * Preloads a numbered image sequence for scroll-driven playback, returns only
 * the images that have decoded so scrubbing works progressively.
 */
export function useFrameSequence(
  total: number,
  makeSrc: (index: number) => string,
  { stride = 1, eagerCount = 8, concurrency = 6 }: Options = {},
): Result {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const loadedRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let cancelled = false;

    const indices: number[] = [];
    for (let i = 0; i < total; i += stride) indices.push(i);
    if (indices[indices.length - 1] !== total - 1) indices.push(total - 1);

    const slots: HTMLImageElement[] = new Array(indices.length);
    let done = 0;

    const commit = () => {
      if (cancelled) return;
      loadedRef.current = slots.filter(Boolean);
      setImages(loadedRef.current);
      setLoadProgress(done / indices.length);
    };

    const load = (slot: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = "async";
        const finish = (ok: boolean) => {
          done += 1;
          if (ok) slots[slot] = img;
          if (done % 12 === 0 || done === indices.length || done <= eagerCount) {
            commit();
          }
          resolve();
        };
        img.onload = () => finish(true);
        img.onerror = () => finish(false);
        img.src = makeSrc(indices[slot]);
      });

    (async () => {
      const eager = Math.min(eagerCount, indices.length);
      await Promise.all(Array.from({ length: eager }, (_, slot) => load(slot)));
      if (cancelled) return;
      commit();
      setReady(true);

      let next = eager;
      const workers = Array.from(
        { length: Math.min(concurrency, Math.max(indices.length - eager, 1)) },
        async () => {
          while (next < indices.length && !cancelled) {
            const slot = next;
            next += 1;
            await load(slot);
          }
        },
      );
      await Promise.all(workers);
      if (!cancelled) commit();
    })();

    return () => {
      cancelled = true;
    };
  }, [total, stride, eagerCount, concurrency, makeSrc]);

  return { images, loadProgress, ready };
}
