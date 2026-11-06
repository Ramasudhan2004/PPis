import { useState } from "react";
import { cn } from "@/lib/utils";

interface FigureProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  overlay?: boolean;
  eager?: boolean;
}

/**
 * Image with a graceful gradient fallback — if the remote asset cannot be
 * loaded the frame still looks intentional rather than broken.
 */
export function Figure({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[4/3]",
  overlay,
  eager,
}: FigureProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#e6f2fa,#f8f9f7_45%,#e9ddc8)]",
        ratio,
        className,
      )}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-transform duration-[900ms] ease-smooth",
            imgClassName,
          )}
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
          <span className="relative text-xs font-semibold uppercase tracking-[0.24em] text-slate/70">
            PPIS
          </span>
        </div>
      )}
      {overlay && (
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(21,43,70,0)_35%,rgba(21,43,70,0.55)_100%)]"
          aria-hidden
        />
      )}
    </div>
  );
}
