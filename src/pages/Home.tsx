import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import {
  capabilities,
  company,
  industries,
  partners,
  stats,
  strengths,
  whyChoose,
} from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { img } from "@/lib/image";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Hero } from "@/components/hero/Hero";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

export default function Home() {
  useDocumentMeta({
    title: "PPIS — Powering the Future",
    description: company.description,
  });

  return (
    <>
      <Hero />

      {/* ---------------------------------------------------------------- About */}
      <section className="section relative overflow-hidden bg-pearl">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="About PPIS"
                title={
                  <>
                    One accountable partner for the entire{" "}
                    <span className="text-gold-metal">power value chain</span>
                  </>
                }
                description="From generation and high-voltage transmission to AIS/GIS substations, distribution networks, cables, products and EV charging — PPIS engineers, builds, tests and commissions the infrastructure that keeps energy moving."
              />

              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {strengths.slice(0, 4).map((item, index) => (
                  <Reveal as="li" key={item} delay={index * 60}>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-neu-sm">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
                      </span>
                      <span className="text-sm font-medium text-navy">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button to="/about" variant="primary" size="lg" showArrow>
                  More About Us
                </Button>
                <Button to="/downloads" variant="secondary" size="lg">
                  Company Profile
                </Button>
              </div>
            </div>

            <Reveal className="relative">
              <Figure
                src={img(
                  "bright white modern electrical substation with silver structures and ice blue sky, architectural photography, clean minimal, no text",
                  "portrait_4_3",
                )}
                alt="PPIS power infrastructure"
                ratio="aspect-[4/5]"
                className="shadow-neu-lg"
                eager
              />
              <div className="absolute -bottom-8 -left-6 hidden w-56 sm:block">
                <div className="neu-lg overflow-hidden p-3">
                  <Figure
                    src={img(
                      "engineer in white helmet inspecting electrical control panel, bright clean industrial, blue tones",
                      "square",
                    )}
                    alt="PPIS engineering team"
                    ratio="aspect-square"
                  />
                  <div className="px-2 pb-1 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                      Engineering Depth
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">
                      In-house design, jointing &amp; testing crews
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 -top-6 hidden animate-float lg:block">
                <div className="neu flex items-center gap-3 px-5 py-4">
                  <span className="icon-well h-11 w-11">
                    <Sparkles className="h-5 w-5 text-gold" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    Generation to end&nbsp;user
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Statistics */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="By the Numbers"
            title="Scale that delivers, discipline that lasts"
            description="Placeholder metrics shown pending verified figures — the delivery model behind them is real: single-point responsibility from design to energisation."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  sub={stat.sub}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Capabilities */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Core Capabilities"
              title="Engineering capability across every voltage class"
              description="Six disciplines that combine into a single, coordinated delivery scope."
            />
            <Button to="/services" variant="secondary">
              All Services
            </Button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 70}>
                <SurfaceCard interactive className="h-full">
                  <span className="icon-well h-12 w-12">
                    <Icon name={capability.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy">
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

      {/* ------------------------------------------------------------ Services */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Services engineered for reliability"
            description="Each service is delivered with documented quality plans, test records and safety governance."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link to={`/services/${service.slug}`} className="group block h-full">
                  <SurfaceCard interactive className="flex h-full flex-col">
                    <span className="icon-well h-11 w-11">
                      <service.icon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-navy">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors group-hover:text-gold">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
                  </SurfaceCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Featured projects */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Built, tested and energised"
              description="Representative project records — values are placeholders pending verified client data."
            />
            <Button to="/projects" variant="secondary">
              All Projects
            </Button>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <article className="neu neu-hover group h-full overflow-hidden p-3">
                  <div className="relative">
                    <Figure
                      src={project.image}
                      alt={project.title}
                      ratio="aspect-[16/11]"
                      imgClassName="group-hover:scale-[1.06]"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge tone={project.status === "Ongoing" ? "gold" : "ice"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="px-3 pb-2 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate">
                      {project.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-platinum/50 pt-4 text-xs text-slate">
                      <span>{project.state}</span>
                      <span className="font-semibold text-navy">{project.capacity}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Product highlights */}
      <section className="section bg-ice">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product Highlights"
              title="Equipment that completes the system"
              description="Covered conductors, jointing systems, arresters, cables, metering and EV charging — supplied and integrated."
            />
            <Button to="/products" variant="secondary">
              Full Catalogue
            </Button>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 70}>
                <article className="neu neu-hover group h-full p-3">
                  <Figure
                    src={product.image}
                    alt={product.name}
                    ratio="aspect-square"
                    imgClassName="group-hover:scale-[1.06]"
                  />
                  <div className="px-2 pb-1 pt-4">
                    <h3 className="text-base font-bold leading-snug text-navy">
                      {product.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                      {product.description}
                    </p>
                    <Link
                      to={`/products?category=${product.category}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy transition-colors hover:text-gold"
                    >
                      Enquire
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Industries */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Industries Served"
            title="Powering every kind of operation"
            description="Utilities, industry, transport, healthcare, data and mobility — engineered to each sector's reliability demands."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.label} delay={index * 45}>
                <div className="neu neu-hover flex h-full items-center gap-3 p-4">
                  <span className="icon-well h-10 w-10 shrink-0">
                    <Icon name={industry.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy">
                    {industry.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Why PPIS */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose PPIS"
            title="Reasons clients keep us on the next package"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <SurfaceCard interactive className="h-full">
                  <div className="flex items-center gap-4">
                    <span className="icon-well h-12 w-12">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-navy">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Partners */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="OEM Partners & Clients"
            title="Working alongside trusted manufacturers"
            description="Placeholder partner list pending verified OEM and client approvals."
          />
        </div>
        <div className="mask-fade-x mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="neu flex h-20 w-56 shrink-0 items-center justify-center"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section bg-ice">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-5xl bg-[linear-gradient(135deg,#f8f9f7_0%,#e9ddc8_52%,#c5a46d_100%)] p-1 shadow-neu-lg">
              <div className="relative overflow-hidden rounded-[1.9rem] bg-white/70 px-7 py-14 backdrop-blur-xl md:px-14 md:py-16">
                <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden />
                <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
                  <div>
                    <span className="eyebrow">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                      Start a Conversation
                    </span>
                    <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-[1.1] text-navy sm:text-4xl md:text-[2.7rem]">
                      Tell us about your project — we&rsquo;ll engineer the right
                      solution.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
                      Share your scope, location and requirement. Our team responds
                      with a considered technical and commercial proposal.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button to="/contact#quote" variant="primary" size="lg" showArrow fullWidth>
                      Get a Quote
                    </Button>
                    <Button to="/downloads" variant="secondary" size="lg" fullWidth>
                      Download Catalogue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
