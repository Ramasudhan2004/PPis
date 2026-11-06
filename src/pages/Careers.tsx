import { ArrowDown, Briefcase, MapPin } from "lucide-react";
import {
  benefits,
  culturePillars,
  hiringProcess,
  openings,
} from "@/content/careers";
import { img } from "@/lib/image";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export default function Careers() {
  useDocumentMeta({
    title: "Careers",
    description:
      "Build a career at PPIS — engineering, execution, commissioning, HSE and commercial roles across power infrastructure projects in India.",
  });

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a career that{" "}
            <span className="text-gold-metal">powers the country</span>
          </>
        }
        subtitle="Join engineers and execution teams working on substations, cable systems and distribution networks — with real ownership, structured training and a genuine safety culture."
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#openings" variant="primary" icon={ArrowDown} iconPosition="right">
            View Openings
          </Button>
          <Button href="#apply" variant="secondary">
            Submit Resume
          </Button>
        </div>
      </PageHero>

      {/* --------------------------------------------------- Why work with PPIS */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <Figure
                src={img(
                  "diverse engineering team in white helmets collaborating at a bright clean power substation, blue and white tones, no text",
                  "landscape_4_3",
                )}
                alt="PPIS team at work"
                ratio="aspect-[4/3]"
                className="shadow-neu-lg"
                eager
              />
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Why Work With PPIS"
                title="Real projects. Real responsibility. Real growth."
                description="You will work on live infrastructure where engineering judgement matters — supported by experienced seniors and clear processes."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Own your scope from planning to handover",
                  "Mentorship from senior engineers",
                  "Certification and technical upskilling",
                  "Site and office career tracks",
                ].map((item, index) => (
                  <Reveal key={item} delay={index * 60}>
                    <div className="neu-inset-sm p-4 text-sm font-medium text-navy">
                      {item}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Current openings */}
      <section id="openings" className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Current Openings"
            title="Roles we are hiring for"
            description="Placeholder vacancies pending the client's live list — the application flow below is fully functional."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {openings.map((opening, index) => (
              <Reveal key={opening.id} delay={(index % 2) * 70}>
                <SurfaceCard interactive className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge tone="ice">{opening.department}</Badge>
                      <h3 className="mt-4 text-lg font-bold leading-snug text-navy">
                        {opening.role}
                      </h3>
                    </div>
                    <span className="icon-well h-11 w-11 shrink-0">
                      <Briefcase className="h-5 w-5" aria-hidden />
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                    {opening.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                      {opening.location}
                    </span>
                    <span>{opening.type}</span>
                    <span>{opening.experience}</span>
                  </div>

                  <div className="mt-6 border-t border-platinum/50 pt-5">
                    <Button href="#apply" variant="secondary" size="sm" showArrow>
                      Apply for this role
                    </Button>
                  </div>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Life at PPIS */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Life at PPIS"
            title="Culture, values and how we work"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {culturePillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 70}>
                  <SurfaceCard className="h-full">
                    <h3 className="text-base font-bold text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate">
                      {pillar.text}
                    </p>
                  </SurfaceCard>
                </Reveal>
              ))}
            </div>
            <Reveal delay={80}>
              <Figure
                src={img(
                  "engineers reviewing drawings on site with a tablet, bright clean daylight, blue tones, no text",
                  "portrait_4_3",
                )}
                alt="PPIS culture"
                ratio="aspect-[4/5]"
                className="shadow-neu-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Benefits */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Employee Benefits"
            title="Support that goes beyond the paycheque"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 60}>
                <SurfaceCard interactive className="h-full">
                  <span className="icon-well h-12 w-12">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {benefit.text}
                  </p>
                </SurfaceCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Application process */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Application Process"
            title="Straightforward, four steps"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {hiringProcess.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <div className="neu h-full p-6">
                  <span className="font-display text-3xl font-extrabold text-platinum">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Submit resume */}
      <section id="apply" className="section bg-ice">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <SectionHeading
                eyebrow="Submit Resume"
                title="Apply to join PPIS"
                description="Share your details against a listed role or as a general application. Our HR and technical team will review your profile."
              />
              <div className="mt-8 space-y-4">
                <div className="neu p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                    What to include
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    Your role of interest, total experience, key voltage classes and
                    projects handled, plus a link to your resume or profile.
                  </p>
                </div>
                <div className="neu p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
                    Note
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    This site version has no login or candidate dashboard by design —
                    your application is routed straight to our HR team.
                  </p>
                </div>
              </div>
            </div>

            <EnquiryForm variant="careers" />
          </div>
        </div>
      </section>
    </>
  );
}
