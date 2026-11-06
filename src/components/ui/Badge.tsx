import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "ice" | "champagne" | "platinum" | "gold";
}

const tones = {
  ice: "bg-ice text-navy",
  champagne: "bg-champagne text-navy",
  platinum: "bg-platinum/60 text-navy",
  gold: "bg-gold/20 text-navy ring-1 ring-gold/40",
};

export function Badge({ children, className, tone = "ice" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
