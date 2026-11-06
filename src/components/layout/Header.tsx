import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { navItems } from "@/content/site";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useUIStore } from "@/store/ui";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const mobileNavOpen = useUIStore((s) => s.mobileNavOpen);
  const setMobileNav = useUIStore((s) => s.setMobileNav);
  const openSearch = useUIStore((s) => s.openSearch);

  useLockBodyScroll(mobileNavOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileNav(false);
  }, [pathname, setMobileNav]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled ? "py-2" : "py-3.5",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-smooth md:px-6",
            scrolled
              ? "glass shadow-neu"
              : "bg-white/40 backdrop-blur-md border border-white/50",
          )}
        >
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 xl:flex"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "link-underline rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors duration-300",
                    isActive ? "text-navy" : "text-slate hover:text-navy",
                  )
                }
              >
                {({ isActive }) => (
                  <span data-active={isActive}>{item.label}</span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <IconButton
              icon={Search}
              label="Search the website"
              variant="white"
              size="sm"
              onClick={openSearch}
              className="hidden sm:grid"
            />
            <Button
              to="/contact#quote"
              variant="primary"
              size="sm"
              showArrow
              className="hidden md:inline-flex"
            >
              Get a Quote
            </Button>
            <IconButton
              icon={mobileNavOpen ? X : Menu}
              label={mobileNavOpen ? "Close menu" : "Open menu"}
              variant="ice"
              size="sm"
              className="xl:hidden"
              onClick={() => setMobileNav(!mobileNavOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden",
          mobileNavOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileNavOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy/20 backdrop-blur-sm transition-opacity duration-400",
            mobileNavOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileNav(false)}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-24 rounded-4xl bg-white p-5 shadow-neu-xl transition-all duration-400 ease-smooth",
            mobileNavOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between border-b border-platinum/40 py-3.5 text-[15px] font-medium transition-colors",
                    isActive ? "text-gold" : "text-navy",
                  )
                }
                style={{ transitionDelay: `${index * 22}ms` }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-3">
            <Button to="/contact#quote" variant="primary" size="md" showArrow fullWidth>
              Get a Quote
            </Button>
            <IconButton
              icon={Search}
              label="Search the website"
              variant="ice"
              onClick={openSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
