import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
}

/** Shared inner-page banner with breadcrumb trail and soft editorial styling. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ice pt-32 pb-16 md:pt-40 md:pb-24",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_0%,rgba(255,255,255,0.95),transparent_55%),radial-gradient(80%_80%_at_100%_0%,rgba(233,221,200,0.55),transparent_60%)]"
        aria-hidden
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate">
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.to ? (
                    <Link
                      to={crumb.to}
                      className="link-underline transition-colors hover:text-navy"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-navy">{crumb.label}</span>
                  )}
                  {index < crumbs.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 text-platinum" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
