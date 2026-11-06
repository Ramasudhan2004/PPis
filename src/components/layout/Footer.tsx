import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { company, contact, navItems, socials } from "@/content/site";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ice pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_0%,rgba(255,255,255,0.9),transparent_60%),radial-gradient(70%_60%_at_100%_10%,rgba(233,221,200,0.5),transparent_60%)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="neu-lg grid gap-10 p-8 md:p-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy shadow-neu-sm transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:text-gold hover:shadow-neu"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-slate transition-colors hover:text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="link-underline text-sm text-slate transition-colors hover:text-navy"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-navy">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{contact.addressLines.join(", ")}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="flex flex-col">
                  {contact.phones.map((phone, index) => (
                    <a
                      key={`${phone}-${index}`}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="link-underline transition-colors hover:text-navy"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="flex flex-col">
                  {contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="link-underline break-all transition-colors hover:text-navy"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{contact.hours[0].day}: {contact.hours[0].time}</span>
              </li>
            </ul>

            <Link
              to="/contact#quote"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold"
            >
              Request a quotation
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-10 rule-metal" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-slate md:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy" className="link-underline hover:text-navy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="link-underline hover:text-navy">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="link-underline hover:text-navy">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
