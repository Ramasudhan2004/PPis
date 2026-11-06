import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Download,
  Search,
  SlidersHorizontal,
  X,
  FileText,
} from "lucide-react";
import {
  productCategories,
  products,
  type Product,
} from "@/content/products";
import { downloads } from "@/content/downloads";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useUIStore } from "@/store/ui";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { IconButton } from "@/components/ui/IconButton";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const catalogueDocs = downloads.filter(
  (doc) => doc.category === "Technical" || doc.category === "Commercial",
);

export default function Products() {
  useDocumentMeta({
    title: "Products",
    description:
      "PPIS product catalogue — covered conductors and accessories, heat shrinkable joints and terminations, surge arresters, capacitors, power cables up to 220 kV, metering, EV chargers, power equipment and system integration.",
  });

  const [params, setParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>(
    params.get("category") ?? "all",
  );
  const [query, setQuery] = useState<string>(params.get("q") ?? "");

  const catalogueOpen = useUIStore((s) => s.catalogueOpen);
  const setCatalogue = useUIStore((s) => s.setCatalogue);
  useLockBodyScroll(catalogueOpen);

  // Keep the URL in step so product links from search / the homepage resolve.
  useEffect(() => {
    const next = new URLSearchParams();
    if (activeCategory !== "all") next.set("category", activeCategory);
    if (query.trim()) next.set("q", query.trim());
    setParams(next, { replace: true });
  }, [activeCategory, query, setParams]);

  useEffect(() => {
    if (!catalogueOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCatalogue(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [catalogueOpen, setCatalogue]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = `${product.name} ${product.description} ${product.specs.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [activeCategory, query]);

  const categoryLabel = (product: Product) =>
    productCategories.find((c) => c.id === product.category)?.label ??
    product.category;

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            A catalogue built around{" "}
            <span className="text-gold-metal">real project needs</span>
          </>
        }
        subtitle="Covered conductors, jointing systems, arresters, capacitors, power cables, metering, EV charging, power equipment and system integration — supplied, supported and integrated by PPIS."
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="neu-inset flex flex-1 items-center gap-3 rounded-2xl px-4">
            <Search className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products — cables, arresters, EV chargers…"
              aria-label="Search products"
              className="w-full bg-transparent py-3.5 text-sm text-navy placeholder:text-slate/60 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="text-slate transition-colors hover:text-navy"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </div>
          <Button
            variant="tertiary"
            size="lg"
            icon={Download}
            iconPosition="left"
            onClick={() => setCatalogue(true)}
          >
            Download Catalogue
          </Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------------ Category tabs */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Browse the Catalogue"
              title="Filter by category"
              description="Ten product families — select a tab or search to narrow the catalogue."
            />
            <span className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate md:inline-flex">
              <SlidersHorizontal className="h-4 w-4 text-gold" aria-hidden />
              {filtered.length} item{filtered.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="no-scrollbar -mx-1 mt-9 flex gap-2.5 overflow-x-auto px-1 pb-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              aria-pressed={activeCategory === "all"}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ease-smooth",
                activeCategory === "all"
                  ? "bg-[linear-gradient(145deg,#f4ead6,#c5a46d)] text-navy shadow-gold-sm"
                  : "bg-white text-slate shadow-neu-sm hover:-translate-y-0.5 hover:text-navy",
              )}
            >
              All Products
            </button>
            {productCategories.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={active}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ease-smooth",
                    active
                      ? "bg-[linear-gradient(145deg,#f4ead6,#c5a46d)] text-navy shadow-gold-sm"
                      : "bg-white text-slate shadow-neu-sm hover:-translate-y-0.5 hover:text-navy",
                  )}
                >
                  <category.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden />
                  {category.label}
                </button>
              );
            })}
          </div>

          {activeCategory !== "all" && (
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate">
              {productCategories.find((c) => c.id === activeCategory)?.blurb}
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="neu mt-10 p-10 text-center">
              <p className="text-sm text-slate">
                No products match your search. Try another term or category.
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Reset filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, index) => (
                <Reveal key={product.id} delay={(index % 3) * 70}>
                  <article className="neu neu-hover group flex h-full flex-col p-4 transition-transform duration-300 ease-smooth hover:[transform:perspective(1200px)_rotateX(1.6deg)_translateY(-6px)]">
                    <Figure
                      src={product.image}
                      alt={product.name}
                      ratio="aspect-[4/3]"
                      imgClassName="group-hover:scale-[1.07]"
                    />
                    <div className="flex flex-1 flex-col px-1 pt-5">
                      <Badge tone="ice" className="w-fit">
                        {categoryLabel(product)}
                      </Badge>
                      <h3 className="mt-4 text-base font-bold leading-snug text-navy">
                        {product.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate">
                        {product.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {product.specs.slice(0, 3).map((spec) => (
                          <li
                            key={spec}
                            className="rounded-full bg-pearl px-3 py-1 text-[11px] font-medium text-navy shadow-neu-inset-sm"
                          >
                            {spec}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center gap-3 border-t border-platinum/50 pt-5">
                        <Button
                          to={`/contact?product=${encodeURIComponent(product.name)}#quote`}
                          variant="primary"
                          size="sm"
                          showArrow
                        >
                          Enquire
                        </Button>
                        <button
                          type="button"
                          onClick={() => setCatalogue(true)}
                          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate transition-colors hover:text-gold"
                        >
                          <Download className="h-4 w-4" aria-hidden />
                          Brochure
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------ Category overview */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Product Families"
            title="Everything under one accountable supplier"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <Reveal key={category.id} delay={(index % 3) * 60}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="neu neu-hover flex h-full w-full items-start gap-4 p-5 text-left"
                >
                  <span className="icon-well h-11 w-11 shrink-0">
                    <category.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy">
                      {category.label}
                    </span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-slate">
                      {category.blurb}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section bg-pearl">
        <div className="container">
          <Reveal>
            <div className="neu-lg flex flex-col items-center gap-6 p-10 text-center md:p-14">
              <SectionHeading
                align="center"
                eyebrow="Need a Specification?"
                title="Request pricing, data sheets or a tailored BOQ"
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/contact#quote" variant="primary" size="lg" showArrow>
                  Get a Quote
                </Button>
                <Button
                  variant="tertiary"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  onClick={() => setCatalogue(true)}
                >
                  Download Catalogue
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Catalogue drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[65]",
          catalogueOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!catalogueOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy/25 backdrop-blur-sm transition-opacity duration-400",
            catalogueOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setCatalogue(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Catalogue downloads"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-pearl shadow-neu-xl transition-transform duration-500 ease-smooth",
            catalogueOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-platinum/50 p-6">
            <div>
              <p className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                Document Centre
              </p>
              <h2 className="mt-2 text-lg font-bold text-navy">
                Catalogue &amp; Technical Downloads
              </h2>
            </div>
            <IconButton
              icon={X}
              label="Close catalogue drawer"
              variant="white"
              size="sm"
              onClick={() => setCatalogue(false)}
            />
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {catalogueDocs.map((doc) => (
                <li key={doc.id}>
                  <a
                    href={doc.file}
                    download
                    className="neu neu-hover flex items-start gap-4 p-4"
                  >
                    <span className="icon-well h-11 w-11 shrink-0">
                      <FileText className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-bold text-navy">
                          {doc.title}
                        </span>
                        <span className="rounded-full bg-champagne px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy">
                          {doc.type}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-slate">
                        {doc.description}
                      </span>
                      <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                        {doc.size}
                      </span>
                    </span>
                    <Download className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-2xl bg-ice p-4 text-xs leading-relaxed text-slate">
              Documents are placeholder cover pages until the approved catalogue
              files are supplied — the download flow itself is fully functional.
            </p>
          </div>

          <div className="border-t border-platinum/50 p-6">
            <Button
              to="/downloads"
              variant="secondary"
              fullWidth
              showArrow
              onClick={() => setCatalogue(false)}
            >
              Open Full Document Centre
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
