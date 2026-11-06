import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  inset?: boolean;
  as?: "div" | "li" | "article";
}

/** Neumorphic surface card — raised by default, inset on request. */
export function SurfaceCard({
  children,
  className,
  interactive,
  inset,
  as: Tag = "div",
}: SurfaceCardProps) {
  return (
    <Tag
      className={cn(
        inset ? "neu-inset" : "neu",
        interactive && "neu-hover",
        "p-6 md:p-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
