import { Link } from "react-router-dom";
import { policyPages } from "@/content/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

type PolicyKind = keyof typeof policyPages;

const siblingLinks: { kind: PolicyKind; to: string; label: string }[] = [
  { kind: "privacy", to: "/privacy", label: "Privacy Policy" },
  { kind: "terms", to: "/terms", label: "Terms & Conditions" },
  { kind: "cookies", to: "/cookies", label: "Cookie Policy" },
];

export default function PolicyPage({ kind }: { kind: PolicyKind }) {
  const policy = policyPages[kind];

  useDocumentMeta({
    title: policy.title,
    description: policy.intro,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={policy.title}
        subtitle={policy.intro}
        crumbs={[{ label: "Home", to: "/" }, { label: policy.title }]}
      />

      <section className="section bg-pearl">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
            <div className="space-y-6">
              {policy.sections.map((section, index) => (
                <Reveal key={section.heading} delay={index * 60}>
                  <article className="neu p-7 md:p-9">
                    <h2 className="text-lg font-bold text-navy md:text-xl">
                      {section.heading}
                    </h2>
                    <div className="rule-metal my-5" />
                    <p className="text-[15px] leading-relaxed text-slate">
                      {section.body}
                    </p>
                  </article>
                </Reveal>
              ))}

              <Reveal>
                <div className="neu-inset p-7 text-sm leading-relaxed text-slate">
                  This document is a general website policy and is not legal advice.
                  Approved legal wording will replace this content before launch.
                </div>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="neu p-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-slate">
                  Related Pages
                </h2>
                <ul className="mt-4 space-y-3">
                  {siblingLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        aria-current={link.kind === kind ? "page" : undefined}
                        className={
                          link.kind === kind
                            ? "text-sm font-semibold text-gold"
                            : "link-underline text-sm text-slate transition-colors hover:text-navy"
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="rule-metal my-5" />
                <Button to="/contact#quote" variant="secondary" size="sm" fullWidth showArrow>
                  Get a Quote
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
