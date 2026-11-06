import type { RefObject } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroCanvasProps {
  images: HTMLImageElement[];
  /** Smoothed playback position, 0 → 1. Driven by the parent's RAF loop. */
  progressRef: RefObject<number>;
  className?: string;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.round(canvas.clientWidth * dpr);
  const height = Math.round(canvas.clientHeight * dpr);

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(
    image,
    (width - drawWidth) / 2,
    (height - drawHeight) / 2,
    drawWidth,
    drawHeight,
  );
}

/** Full-bleed canvas that renders the frame matching the current progress. */
export function HeroCanvas({
  images,
  progressRef,
  className,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let lastDrawn = -1;

    const onResize = () => {
      lastDrawn = -1;
    };
    window.addEventListener("resize", onResize);

    const render = () => {
      const frames = imagesRef.current;
      if (frames.length) {
        const progress = Math.min(Math.max(progressRef.current ?? 0, 0), 1);
        const index = Math.round(progress * (frames.length - 1));
        if (index !== lastDrawn) {
          const image = frames[index];
          if (image) {
            drawCover(ctx, canvas, image);
            lastDrawn = index;
          }
        }
      }
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [progressRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("h-full w-full", className)}
    />
  );
}
