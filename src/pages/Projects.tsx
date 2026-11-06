import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Quote as QuoteIcon } from "lucide-react";
import { projects, featuredProjects, regionSummary } from "@/content/projects";
import { quotes } from "@/content/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { cn } from "@/lib/utils";

type StatusFilter = "All" | "Ongoing" | "Completed";

export default function Projects() {
  useDocumentMeta({
    title: "Projects",
    description:
      "PPIS project experience across substations, underground cables, transmission and distribution networks, covered conductors and EV infrastructure in India.",
  });

  const [status, setStatus] = useState<StatusFilter>("All");
  const [region, setRegion] = useState<string>("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (project) =>
          (status === "All" || project.status === status) &&
          (region === "All" || project.region === region),
      ),
    [status, region],
  );

  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const completed = projects.filter((p) => p.status === "Completed");

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Delivered across <span className="text-gold-metal">India&rsquo;s grid</span>
          </>
        }
        subtitle="Substations, underground cable systems, transmission and distribution networks, covered conductor conversions and EV infrastructure — executed with documented quality and safety governance."
        crumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      >
        <div className="neu-inset grid gap-4 p-5 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
              Total records
            </p>
            <p className="font-display text-3xl font-extrabold text-navy">
              {projects.length}
              <span className="text-gold">+</span>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
              Ongoing
            </p>
            <p className="font-display text-3xl font-extrabold text-navy">
              {ongoing.length}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate">
              Completed
            </p>
            <p className="font-display text-3xl font-extrabold text-navy">
              {completed.length}
            </p>
          </div>
        </div>
      </PageHero>

      {/* -------------------------------------------------------- Featured */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected delivery highlights"
            description="Project values are placeholders pending verified client data."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <article className="neu neu-hover group flex h-full flex-col overflow-hidden p-3">
                  <div className="relative">
                    <Figure
                      src={project.image}
                      alt={project.title}
                      ratio="aspect-[16/11]"
                      imgClassName="group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-4 top-4">
                      <Badge tone={project.status === "Ongoing" ? "gold" : "ice"}>
                        {project.status}
                      </Badge>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                      {project.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 border-t border-platinum/50 pt-4 text-xs text-slate">
                      <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                      {project.state} · {project.year}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------- Interactive region map */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Interactive Project Map"
            title="Presence by region"
            description="Verified site coordinates are pending, so presence is presented by region. Select a region to filter the project record below."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <div className="neu-lg p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {regionSummary.map((item) => {
                    const isActive = region === item.region;
                    return (
                      <button
                        key={item.region}
                        type="button"
                        onClick={() =>
                          setRegion(isActive ? "All" : item.region)
                        }
                        aria-pressed={isActive}
                        className={cn(
                          "rounded-3xl p-5 text-left transition-all duration-300 ease-smooth",
                          isActive
                            ? "bg-[linear-gradient(145deg,#f4ead6,#e9ddc8)] shadow-gold-sm"
                            : "neu-inset hover:-translate-y-0.5",
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-navy">
                            {item.region}
                          </span>
                          <span className="font-display text-2xl font-extrabold text-navy/70">
                            {String(item.count).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate">
                          {item.states.filter(Boolean).join(" · ") || "Data pending"}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setRegion("All");
                      setStatus("All");
                    }}
                  >
                    Reset filters
                  </Button>
                  <span className="text-xs text-slate">
                    {filtered.length} project record
                    {filtered.length === 1 ? "" : "s"} shown
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <SurfaceCard className="h-full">
                <h3 className="text-lg font-bold text-navy">
                  {region === "All" ? "India-wide footprint" : `${region} India`}
                </h3>
                <div className="rule-metal my-5" />
                <ul className="space-y-4">
                  {(region === "All"
                    ? regionSummary
                    : regionSummary.filter((r) => r.region === region)
                  ).map((item) => (
                    <li key={item.region} className="flex items-start gap-3">
                      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                        <MapPin className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy">
                          {item.region} India — {item.count} project
                          {item.count === 1 ? "" : "s"}
                        </p>
                        <p className="mt-0.5 text-xs text-slate">
                          {item.states.filter(Boolean).join(", ") || "States pending"}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl bg-ice p-4 text-xs leading-relaxed text-slate">
                  A precise pin map will be published once verified site
                  coordinates are available — we do not plot unverified locations.
                </p>
              </SurfaceCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Project records */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Project Record"
              title="Ongoing and completed packages"
            />
            <div className="flex flex-wrap gap-2">
              {(["All", "Ongoing", "Completed"] as StatusFilter[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStatus(option)}
                  aria-pressed={status === option}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ease-smooth",
                    status === option
                      ? "bg-[linear-gradient(145deg,#f4ead6,#c5a46d)] text-navy shadow-gold-sm"
                      : "bg-white text-slate shadow-neu-sm hover:-translate-y-0.5 hover:text-navy",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="neu mt-12 p-10 text-center">
              <p className="text-sm text-slate">
                No projects match the selected filters.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <Reveal key={project.id} delay={(index % 3) * 70}>
                  <article className="neu neu-hover group flex h-full flex-col overflow-hidden p-3">
                    <div className="relative">
                      <Figure
                        src={project.image}
                        alt={project.title}
                        ratio="aspect-[16/10]"
                        imgClassName="group-hover:scale-[1.06]"
                      />
                      <span className="absolute left-4 top-4">
                        <Badge tone={project.status === "Ongoing" ? "gold" : "ice"}>
                          {project.status}
                        </Badge>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-base font-bold leading-snug text-navy">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                        {project.description}
                      </p>
                      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-platinum/50 pt-4 text-xs">
                        <div>
                          <dt className="text-slate">Scope</dt>
                          <dd className="mt-0.5 font-semibold text-navy">
                            {project.scope}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate">Capacity</dt>
                          <dd className="mt-0.5 font-semibold text-navy">
                            {project.capacity}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate">Location</dt>
                          <dd className="mt-0.5 font-semibold text-navy">
                            {project.state}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate">Client</dt>
                          <dd className="mt-0.5 font-semibold text-navy">
                            {project.client}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --------------------------------------------------------- Case studies */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Detailed Case Studies"
            title="How the work was delivered"
            description="Illustrative delivery narratives based on the scope structure of representative packages."
          />

          <div className="mt-12 space-y-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} delay={index * 60}>
                <article
                  className={cn(
                    "neu-lg grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.2fr]",
                    index % 2 === 1 && "lg:grid-cols-[1.2fr_1fr]",
                  )}
                >
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <Figure
                      src={project.image}
                      alt={project.title}
                      ratio="aspect-[4/3]"
                    />
                  </div>
                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <Badge tone="champagne">{project.category}</Badge>
                    <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate">
                      {project.description}
                    </p>
                    <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {[
                        { label: "Client", value: project.client },
                        { label: "Location", value: project.state },
                        { label: "Scope", value: project.scope },
                        { label: "Capacity", value: project.capacity },
                      ].map((item) => (
                        <div key={item.label} className="neu-inset-sm p-3">
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate">
                            {item.label}
                          </dt>
                          <dd className="mt-1 text-xs font-semibold leading-snug text-navy">
                            {item.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-7">
                      <Button to="/contact#quote" variant="secondary" size="sm">
                        Discuss a similar scope
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Gallery */}
      <section className="section bg-pearl">
        <div className="container">
          <SectionHeading eyebrow="Project Gallery" title="From site and switchyard" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {projects.slice(0, 8).map((project, index) => (
              <Reveal key={`gallery-${project.id}`} delay={(index % 4) * 60}>
                <Figure
                  src={project.image}
                  alt={project.title}
                  ratio={index % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}
                  className="neu neu-hover group p-2"
                  imgClassName="group-hover:scale-[1.07]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Testimonials */}
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What partners say"
            description="Placeholder testimonials pending approved client references."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section bg-pearl">
        <div className="container">
          <Reveal>
            <div className="neu-lg flex flex-col items-center gap-6 p-10 text-center md:p-14">
              <SectionHeading
                align="center"
                eyebrow="Your Project Next"
                title="Share your scope and we'll engineer the solution"
              />
              <div className="flex flex-wrap justify-center gap-3">
                <Button to="/contact#quote" variant="primary" size="lg" showArrow>
                  Get a Quote
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>
              <p className="inline-flex items-center gap-2 text-xs text-slate">
                <ArrowUpRight className="h-3.5 w-3.5 text-gold" aria-hidden />
                Project records are placeholders pending verified client information.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
