import { Check, Compass, Target, Quote as QuoteIcon } from "lucide-react";
import {
  certifications,
  company,
  leadership,
  quotes,
  strengths,
  timeline,
  values,
} from "@/content/site";
import { regionSummary } from "@/content/projects";
import { img } from "@/lib/image";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export default function About() {
  useDocumentMeta({
    title: "About Us",
    description:
      "PPIS is a power infrastructure company delivering generation-to-end-user electrical solutions — cable systems, substations, transmission & distribution, products and EV charging.",
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Engineering power infrastructure that{" "}
            <span className="text-gold-metal">performs for decades</span>
          </>
        }
        subtitle={company.description}
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button to="/contact#quote" variant="primary" showArrow>
            Get a Quote
          </Button>
          <Button to="/downloads" variant="secondary">
            Company Profile
          </Button>
        </div>
      </PageHero>

      {/* -------------------------------------------------------- Overview */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
            <Reveal className="relative">
              <Figure
                src={img(
                  "bright modern electrical engineering campus with silver structures, ice blue sky, architectural photography, clean minimal, no text",
                  "portrait_4_3",
                )}
                alt="PPIS infrastructure"
                ratio="aspect-[4/5]"
                className="shadow-neu-lg"
                eager
              />
              <div className="absolute -bottom-10 right-0 hidden w-64 sm:block">
                <div className="neu-lg p-6">
                  <p className="font-display text-4xl font-extrabold text-navy">
                    End&#8209;to&#8209;end
                  </p>
                  <p className="mt-2 text-sm text-slate">
                    Design, supply, execution, testing and commissioning under one
                    accountable scope.
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="A single partner across the power value chain"
                description={company.foundedNote}
              />
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate">
                <p>
                  PPIS delivers end-to-end power infrastructure for utilities,
                  industry and communities. Our work spans underground cable
                  systems, HV/EHV jointing and terminations, turnkey AIS/GIS
                  substations, transmission and distribution networks, covered
                  conductors, testing and commissioning.
                </p>
                <p>
                  Alongside execution we supply and integrate the equipment that
                  completes the system — covered conductors and accessories, heat
                  shrinkable joints, surge arresters, capacitors, power cables up to
                  220 kV, energy metering and EV charging solutions.
                </p>
                <p>
                  Every package is delivered with documented quality plans,
                  traceable test records and disciplined site safety governance —
                  so what we build keeps working long after handover.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 shadow-neu-sm"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- Vision / Mission / Values */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Vision, Mission & Values"
            title="What guides every decision we make"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <SurfaceCard className="h-full">
                <span className="icon-well h-12 w-12">
                  <Compass className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  To be the power infrastructure partner of choice — recognised for
                  engineering precision, safety and networks that perform reliably
                  across their entire service life.
                </p>
              </SurfaceCard>
            </Reveal>
            <Reveal delay={90}>
              <SurfaceCard className="h-full">
                <span className="icon-well h-12 w-12">
                  <Target className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  To deliver generation-to-end-user electrical solutions with
                  single-point accountability — combining in-house engineering,
                  disciplined execution and honest reporting.
                </p>
              </SurfaceCard>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <div className="neu h-full p-6">
                  <div className="rule-metal" />
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Our Story */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Our Story"
            title="Built capability by capability"
            description="Years shown as placeholders pending confirmed company chronology."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="neu-inset h-full p-6">
                  <Badge tone="champagne">{item.year}</Badge>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- Leadership & founder */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership Team"
            title="Experienced people, accountable delivery"
            description="Placeholder profiles pending verified names, roles and biographies."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="neu-lg h-full p-8">
                <Badge tone="gold">Founder &amp; Managing Director</Badge>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-navy">
                  {leadership[0].name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate">
                  {leadership[0].role}
                </p>
                <div className="rule-metal my-6" />
                <p className="text-[15px] leading-relaxed text-slate">
                  {leadership[0].bio}
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="neu-inset-sm p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                      Focus
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-navy">
                      Strategy &amp; client partnerships
                    </p>
                  </div>
                  <div className="neu-inset-sm p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                      Commitment
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-navy">
                      Safety, precision, accountability
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {leadership.slice(1).map((person, index) => (
                <Reveal key={person.role} delay={index * 80}>
                  <SurfaceCard interactive className="h-full">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(145deg,#eef2f7,#c9d1da)] font-display text-sm font-extrabold text-navy shadow-neu-sm">
                      {person.initials}
                    </span>
                    <h3 className="mt-5 text-base font-bold text-navy">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      {person.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      {person.bio}
                    </p>
                  </SurfaceCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ QHSE & Approach */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Quality, Health, Safety & Environment"
                title="A zero-harm, quality-first culture"
                description="Safety is treated as a licence to operate, not a compliance formality."
              />
              <div className="mt-9 space-y-4">
                {[
                  {
                    title: "Permit-to-work discipline",
                    text: "Structured permits, isolation procedures and toolbox talks before every high-risk activity.",
                  },
                  {
                    title: "Documented quality plans",
                    text: "Inspection and test plans, witness points and traceable records for every package.",
                  },
                  {
                    title: "Environmental responsibility",
                    text: "Controlled excavation, spoil management, reinstatement and waste discipline on site.",
                  },
                  {
                    title: "Competence & training",
                    text: "Certified jointers, authorised test engineers and ongoing technical upskilling.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="neu flex gap-4 p-5">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                        <Check className="h-4 w-4" strokeWidth={2.4} aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="One team from concept to commissioning"
              />
              <div className="mt-9 grid gap-4">
                {[
                  { step: "01", title: "Understand", text: "Scope, constraints, site realities and stakeholder expectations." },
                  { step: "02", title: "Engineer", text: "Design review, drawings, calculations and procurement planning." },
                  { step: "03", title: "Execute", text: "Disciplined site delivery with safety and quality governance." },
                  { step: "04", title: "Prove", text: "Testing, commissioning and traceable documentation handover." },
                  { step: "05", title: "Support", text: "Responsive after-sales support and long-term partnership." },
                ].map((item, index) => (
                  <Reveal key={item.step} delay={index * 60}>
                    <div className="neu flex items-start gap-5 p-5">
                      <span className="font-display text-2xl font-extrabold text-platinum">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Certifications */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications & Licences"
            title="Certified systems, statutory compliance"
            description="Placeholder certificate details pending verified licence numbers."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal key={cert.name} delay={index * 70}>
                <SurfaceCard className="h-full">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                    Certified
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug text-navy">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{cert.detail}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Geographic presence */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Geographic Presence"
            title="Mobilised across India"
            description="Regional presence based on the project record structure — counts update automatically as verified projects are added."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {regionSummary.map((region, index) => (
              <Reveal key={region.region} delay={index * 60}>
                <div className="neu flex h-full items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-base font-bold text-navy">{region.region} India</h3>
                    <p className="mt-2 text-sm text-slate">
                      {region.states.filter(Boolean).join(" · ") || "Coverage data pending"}
                    </p>
                  </div>
                  <span className="font-display text-3xl font-extrabold text-platinum">
                    {String(region.count).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Testimonial band */}
      <section className="section bg-ice">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {quotes.map((quote, index) => (
              <Reveal key={`${quote.author}-${index}`} delay={index * 80}>
                <SurfaceCard className="h-full">
                  <QuoteIcon className="h-6 w-6 text-gold" aria-hidden />
                  <p className="mt-5 text-sm leading-relaxed text-slate">
                    {quote.text}
                  </p>
                  <div className="rule-metal my-5" />
                  <p className="text-sm font-bold text-navy">{quote.author}</p>
                  <p className="mt-0.5 text-xs text-slate">{quote.role}</p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section className="section bg-pearl">
        <div className="container">
          <Reveal>
            <div className="neu-lg flex flex-col items-center gap-6 p-10 text-center md:p-14">
              <SectionHeading
                align="center"
                eyebrow="Work With Us"
                title="Let's engineer your next power package"
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/contact#quote" variant="primary" size="lg" showArrow>
                  Get a Quote
                </Button>
                <Button to="/projects" variant="secondary" size="lg">
                  View Projects
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
