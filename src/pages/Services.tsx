import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/content/services";
import { capabilities } from "@/content/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export default function Services() {
  useDocumentMeta({
    title: "Services",
    description:
      "Underground cable laying, cable jointing and terminations, AIS/GIS substations, transmission & distribution networks, covered conductors, project management consultancy and testing & commissioning.",
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Power infrastructure services,{" "}
            <span className="text-gold-metal">delivered end to end</span>
          </>
        }
        subtitle="Seven core disciplines executed with in-house engineering, specialised crews, documented quality and disciplined site safety."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact#quote" variant="primary" showArrow>
            Get a Quote
          </Button>
          <Button to="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------- Service cards */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <article className="neu neu-hover group flex h-full flex-col overflow-hidden p-3">
                  <div className="relative">
                    <Figure
                      src={service.image}
                      alt={service.title}
                      ratio="aspect-[16/10]"
                      imgClassName="group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-gold shadow-neu-sm backdrop-blur">
                      <service.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-3 pb-2 pt-6">
                    <h2 className="text-xl font-bold leading-snug text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                      {service.summary}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.capabilities.slice(0, 3).map((capability) => (
                        <li key={capability} className="flex items-start gap-2.5">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                            <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden />
                          </span>
                          <span className="text-[13px] text-slate">{capability}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
                    >
                      Explore this service
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Capabilities */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Supporting Capabilities"
            title="The depth behind every service"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 60}>
                <SurfaceCard interactive className="h-full">
                  <span className="icon-well h-12 w-12">
                    <Icon name={capability.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {capability.text}
                  </p>
                </SurfaceCard>
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
                eyebrow="Ready When You Are"
                title="Discuss your scope with our engineering team"
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/contact#quote" variant="primary" size="lg" showArrow>
                  Get a Quote
                </Button>
                <Button to="/downloads" variant="secondary" size="lg">
                  Capability Statement
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
