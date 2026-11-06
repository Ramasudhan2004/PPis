import { Link } from "react-router-dom";
import { navItems } from "@/content/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  useDocumentMeta({
    title: "Page Not Found",
    description: "The page you were looking for could not be found.",
  });

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ice pt-32 pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(255,255,255,0.95),transparent_55%),radial-gradient(80%_80%_at_100%_10%,rgba(233,221,200,0.6),transparent_60%)]"
        aria-hidden
      />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="container relative">
        <Reveal>
          <div className="neu-lg mx-auto max-w-2xl p-10 text-center md:p-14">
            <span className="eyebrow justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              Error 404
            </span>
            <p className="mt-6 font-display text-6xl font-extrabold tracking-tight text-navy md:text-7xl">
              404
            </p>
            <h1 className="mt-4 text-2xl font-bold text-navy md:text-3xl">
              This circuit doesn&rsquo;t lead anywhere
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate">
              The page you were looking for has been moved, renamed, or never
              existed. Let&rsquo;s get you back on the grid.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/" variant="primary" size="lg" showArrow>
                Back to Home
              </Button>
              <Button to="/contact#quote" variant="secondary" size="lg">
                Get a Quote
              </Button>
            </div>

            <div className="rule-metal my-8" />

            <nav aria-label="Site pages">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="link-underline text-sm text-slate transition-colors hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
