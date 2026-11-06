import { useSearchParams } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, socials } from "@/content/site";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Contact() {
  useDocumentMeta({
    title: "Contact Us — Get a Quote",
    description:
      "Contact PPIS for power infrastructure enquiries and quotations. Office address, telephone, email, WhatsApp, business hours and a full quotation request form.",
  });

  const [params] = useSearchParams();
  const product = params.get("product") ?? undefined;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery,
  )}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title={
          <>
            Let&rsquo;s engineer your{" "}
            <span className="text-gold-metal">power infrastructure</span>
          </>
        }
        subtitle="Send us your scope, location and requirement. Our team prepares a considered technical and commercial response — usually within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#quote" variant="primary" showArrow>
            Request a Quotation
          </Button>
          <Button href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`} variant="secondary">
            WhatsApp Us
          </Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------- Contact details */}
      <section className="section bg-pearl">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="neu-lg h-full p-7">
                <span className="icon-well h-12 w-12">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-6 text-lg font-bold text-navy">Office Address</h2>
                <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-slate">
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="neu-lg h-full p-7">
                <span className="icon-well h-12 w-12">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-6 text-lg font-bold text-navy">
                  Telephone &amp; Email
                </h2>
                <ul className="mt-3 space-y-3 text-sm text-slate">
                  {contact.phones.map((phone, index) => (
                    <li key={`${phone}-${index}`}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 transition-colors hover:text-navy"
                      >
                        <Phone className="h-3.5 w-3.5 text-gold" aria-hidden />
                        {phone}
                      </a>
                    </li>
                  ))}
                  {contact.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 break-all transition-colors hover:text-navy"
                      >
                        <Mail className="h-3.5 w-3.5 text-gold" aria-hidden />
                        {email}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-navy"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden />
                      {contact.whatsapp}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="neu-lg h-full p-7">
                <span className="icon-well h-12 w-12">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-6 text-lg font-bold text-navy">Business Hours</h2>
                <ul className="mt-3 space-y-3 text-sm text-slate">
                  {contact.hours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between gap-4 border-b border-platinum/40 pb-2.5 last:border-0"
                    >
                      <span>{entry.day}</span>
                      <span className="font-semibold text-navy">{entry.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-neu-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:text-gold"
                    >
                      <Icon name={social.icon} className="h-[18px] w-[18px]" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ---------------------------------------------------------- Map */}
          <Reveal delay={80}>
            <div className="neu-lg mt-8 overflow-hidden p-2">
              <iframe
                title="PPIS office location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full rounded-[1.6rem] border-0 md:h-[420px]"
              />
            </div>
            <p className="mt-3 px-2 text-xs text-slate">
              Map centred on the search term “{contact.mapQuery}” — the precise
              address pin will be published once verified.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Quote form */}
      <section id="quote" className="section scroll-mt-28 bg-ice">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeading
                eyebrow="Quotation Request"
                title="Get a Quote"
                description="Complete the form and our engineering team will revert with a technical scope and commercial proposal."
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Clear scope, accurate pricing",
                    text: "Share quantities, voltage class and site conditions for a realistic estimate.",
                  },
                  {
                    title: "One accountable contact",
                    text: "A single PPIS point of contact owns your enquiry end to end.",
                  },
                  {
                    title: "Confidential by default",
                    text: "Submitted information is used only to prepare and discuss your enquiry.",
                  },
                ].map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="neu p-5">
                      <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {product && (
                <div className="mt-6">
                  <Badge tone="champagne">
                    Enquiry about: {product}
                  </Badge>
                </div>
              )}
            </div>

            <EnquiryForm defaultInterest={product} />
          </div>
        </div>
      </section>
    </>
  );
}
