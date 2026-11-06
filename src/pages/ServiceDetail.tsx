import { ArrowUpRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { services, getService } from "@/content/services";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  useDocumentMeta({
    title: service ? service.title : "Service",
    description: service?.summary,
  });

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.summary}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.shortTitle },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact#quote" variant="primary" showArrow>
            Get a Quote
          </Button>
          <Button to="/services" variant="secondary">
            All Services
          </Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------ Overview + image */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <SectionHeading eyebrow="Technical Overview" title="What this scope covers" />
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-slate">
                {service.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {service.technical.map((row) => (
                  <div key={row.label} className="neu-inset-sm p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                      {row.label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-navy">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal className="relative">
              <Figure
                src={service.image}
                alt={service.title}
                ratio="aspect-[4/5]"
                className="shadow-neu-lg"
                eager
              />
              <div className="absolute -bottom-8 -left-4 hidden w-64 sm:block">
                <div className="neu-lg p-5">
                  <Badge tone="gold">Delivered with</Badge>
                  <p className="mt-3 text-sm font-semibold leading-snug text-navy">
                    Documented quality plans, test records and safety governance.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- Capability / application */}
      <section className="section bg-ice">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <SurfaceCard className="h-full">
                <h3 className="text-lg font-bold text-navy">Capabilities</h3>
                <div className="rule-metal my-5" />
                <ul className="space-y-3">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                        <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={80}>
              <SurfaceCard className="h-full">
                <h3 className="text-lg font-bold text-navy">Applications</h3>
                <div className="rule-metal my-5" />
                <ul className="space-y-3">
                  {service.applications.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 translate-y-1.5 rounded-full bg-gold" aria-hidden />
                      <span className="text-sm leading-relaxed text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </Reveal>

            <Reveal delay={160}>
              <SurfaceCard className="h-full">
                <h3 className="text-lg font-bold text-navy">Related Equipment</h3>
                <div className="rule-metal my-5" />
                <ul className="space-y-3">
                  {service.equipment.map((item) => (
                    <li key={item} className="neu-inset-sm px-4 py-3 text-sm text-navy">
                      {item}
                    </li>
                  ))}
                </ul>
              </SurfaceCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Gallery */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Representative imagery"
            description="Editorial visuals — replace with the client's own project photography."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 80}>
                <Figure
                  src={image}
                  alt={`${service.title} — view ${index + 1}`}
                  ratio="aspect-[4/3]"
                  className="neu neu-hover p-2"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Related */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading eyebrow="Related Services" title="Explore more of what we do" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link to={`/services/${item.slug}`} className="group block h-full">
                  <SurfaceCard interactive className="flex h-full flex-col">
                    <span className="icon-well h-11 w-11">
                      <item.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-navy">
                      {item.shortTitle}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                      {item.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors group-hover:text-gold">
                      Learn more
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </SurfaceCard>
                </Link>
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
                eyebrow="Next Step"
                title={`Enquire about ${service.shortTitle}`}
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/contact#quote" variant="primary" size="lg" showArrow>
                  Get a Quote
                </Button>
                <Button to="/products" variant="secondary" size="lg">
                  Related Products
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
