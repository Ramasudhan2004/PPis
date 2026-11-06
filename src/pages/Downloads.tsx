import { useState } from "react";
import { Download, FileText, FileCheck2, ShieldCheck } from "lucide-react";
import { downloadCategories, downloads } from "@/content/downloads";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Downloads() {
  useDocumentMeta({
    title: "Downloads",
    description:
      "Download the PPIS company profile, capability statement, certifications, HSE and quality policies, technical documents, brochures and vendor registration documents.",
  });

  const [active, setActive] = useState<string>("All");
  const filtered =
    active === "All"
      ? downloads
      : downloads.filter((doc) => doc.category === active);

  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title={
          <>
            Documents, policies and{" "}
            <span className="text-gold-metal">technical references</span>
          </>
        }
        subtitle="Download company, policy, technical and commercial documents. Each card links to a real, working download."
        crumbs={[{ label: "Home", to: "/" }, { label: "Downloads" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={downloads[0].file}
            variant="primary"
            icon={Download}
            iconPosition="left"
          >
            Company Profile
          </Button>
          <Button to="/contact#quote" variant="secondary">
            Request a Document
          </Button>
        </div>
      </PageHero>

      <section className="section bg-pearl">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Document Centre"
              title="Everything in one place"
              description="Documents are clearly-marked placeholder cover pages until the approved files are supplied — the download mechanism is fully functional."
            />
            <div className="flex flex-wrap gap-2">
              {["All", ...downloadCategories].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={active === category}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ease-smooth",
                    active === category
                      ? "bg-[linear-gradient(145deg,#f4ead6,#c5a46d)] text-navy shadow-gold-sm"
                      : "bg-white text-slate shadow-neu-sm hover:-translate-y-0.5 hover:text-navy",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((doc, index) => (
              <Reveal key={doc.id} delay={(index % 3) * 70}>
                <article className="neu neu-hover flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-12 place-items-center rounded-2xl bg-[linear-gradient(145deg,#f2f9ff,#d5e7f3)] text-navy shadow-neu-sm">
                      <FileText className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="rounded-full bg-champagne px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy">
                      {doc.type}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-bold leading-snug text-navy">
                    {doc.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate">
                    {doc.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-platinum/50 pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate">
                      {doc.category} · {doc.size}
                    </span>
                    <a
                      href={doc.file}
                      download
                      className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(145deg,#f2f9ff,#d5e7f3)] px-4 py-2 text-[13px] font-semibold text-navy shadow-neu-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-neu"
                    >
                      <Download
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                        aria-hidden
                      />
                      Download
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Assurance band */}
      <section className="section bg-ice">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileCheck2,
                title: "Approved Documents",
                text: "Published files are controlled and version-managed before release.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance Ready",
                text: "Policies and certifications suitable for vendor and prequalification packs.",
              },
              {
                icon: Download,
                title: "Direct Downloads",
                text: "No forms or gating — documents download immediately.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="neu flex items-start gap-4 p-6">
                  <span className="icon-well h-11 w-11 shrink-0">
                    <item.icon className="h-5 w-5" aria-hidden />
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
      </section>
    </>
  );
}
