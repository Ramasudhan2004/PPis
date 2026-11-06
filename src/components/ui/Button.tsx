import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    to?: undefined;
    href?: undefined;
  };

type AnchorProps = CommonProps & {
  href: string;
  to?: undefined;
  onClick?: () => void;
};

type LinkProps = CommonProps & {
  to: string;
  href?: undefined;
  onClick?: () => void;
  state?: unknown;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-all duration-300 ease-smooth select-none disabled:opacity-55 disabled:pointer-events-none";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "text-navy shadow-gold-sm hover:-translate-y-0.5 hover:shadow-gold bg-[linear-gradient(135deg,#f4ead6_0%,#e9ddc8_38%,#c5a46d_100%)]",
  secondary:
    "bg-white text-navy border border-platinum shadow-neu-sm hover:-translate-y-0.5 hover:border-gold hover:text-navy",
  tertiary:
    "bg-ice text-navy shadow-neu-sm hover:-translate-y-0.5 hover:shadow-neu",
  ghost:
    "bg-transparent text-navy hover:text-gold px-0",
};

function Content({
  children,
  icon: Icon,
  iconPosition = "right",
  showArrow,
}: CommonProps) {
  return (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.9} aria-hidden />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && !showArrow && (
        <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.9} aria-hidden />
      )}
      {showArrow && (
        <ArrowRight
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 ease-smooth group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden
        />
      )}
    </>
  );
}

export function Button(props: ButtonProps | AnchorProps | LinkProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    fullWidth,
    className,
    children,
    showArrow,
  } = props;

  const classes = cn(
    base,
    variant !== "ghost" && sizes[size],
    variants[variant],
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <Content
      variant={variant}
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      showArrow={showArrow ?? false}
    >
      {children}
    </Content>
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick as () => void}>
        {inner}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.href.startsWith("http") ? "_blank" : undefined}
        rel={props.href.startsWith("http") ? "noreferrer" : undefined}
        onClick={props.onClick as () => void}
      >
        {inner}
      </a>
    );
  }

  const {
    variant: _v,
    size: _s,
    icon: _i,
    iconPosition: _ip,
    fullWidth: _fw,
    className: _c,
    children: _ch,
    showArrow: _sa,
    ...buttonProps
  } = props as ButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {inner}
    </button>
  );
}
