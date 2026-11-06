import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onNavigate?: () => void;
}

/** Original PPIS logo mark — kept as supplied, no replacement. */
export function Logo({ className, onNavigate }: LogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to="/"
      aria-label="PPIS — Home"
      onClick={onNavigate}
      className={cn("inline-flex items-center", className)}
    >
      {failed ? (
        <span className="font-display text-2xl font-extrabold tracking-tight text-navy">
          PPIS
        </span>
      ) : (
        <img
          src="/ppis-logo.png"
          alt="PPIS"
          onError={() => setFailed(true)}
          className="h-9 w-auto object-contain md:h-11"
        />
      )}
    </Link>
  );
}
