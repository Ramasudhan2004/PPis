import type { ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "platinum" | "ice" | "gold" | "white";

const variants: Record<Variant, string> = {
  platinum:
    "bg-[linear-gradient(145deg,#eef2f7,#c9d1da)] text-navy hover:text-navy",
  ice: "bg-[linear-gradient(145deg,#f2f9ff,#d5e7f3)] text-navy hover:text-navy",
  gold: "bg-[linear-gradient(145deg,#f4ead6,#c5a46d)] text-navy hover:text-navy",
  white: "bg-white text-navy hover:text-navy",
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: Variant;
  size?: "sm" | "md";
}

/** Circular raised icon button with a tactile press animation. */
export function IconButton({
  icon: Icon,
  label,
  variant = "platinum",
  size = "md",
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "grid place-items-center rounded-full shadow-neu-sm transition-all duration-300 ease-smooth",
        "hover:-translate-y-0.5 hover:shadow-neu active:translate-y-0 active:shadow-neu-inset-sm",
        size === "sm" ? "h-9 w-9" : "h-11 w-11",
        variants[variant],
        className,
      )}
      {...rest}
    >
      <Icon
        className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"}
        strokeWidth={1.9}
        aria-hidden
      />
    </button>
  );
}
