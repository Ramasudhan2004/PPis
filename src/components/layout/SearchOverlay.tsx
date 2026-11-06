import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useUIStore } from "@/store/ui";
import { searchSite } from "@/lib/search";
import { IconButton } from "@/components/ui/IconButton";

const SUGGESTIONS = [
  "Substations",
  "Cable laying",
  "Covered conductors",
  "EV chargers",
  "Get a Quote",
];

export function SearchOverlay() {
  const open = useUIStore((s) => s.searchOpen);
  const closeSearch = useUIStore((s) => s.closeSearch);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useLockBodyScroll(open);

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeSearch]);

  if (!open) return null;

  const go = (to: string) => {
    closeSearch();
    navigate(to);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="absolute inset-0 bg-navy/25 backdrop-blur-sm"
        onClick={closeSearch}
      />
      <div className="relative w-full max-w-2xl">
        <div className="neu-lg overflow-hidden p-2">
          <div className="flex items-center gap-2 px-3">
            <Search className="h-5 w-5 shrink-0 text-gold" aria-hidden />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, products, pages…"
              aria-label="Search the website"
              className="w-full bg-transparent py-4 text-[15px] text-navy placeholder:text-slate/60 focus:outline-none"
            />
            <IconButton
              icon={X}
              label="Close search"
              variant="white"
              size="sm"
              onClick={closeSearch}
            />
          </div>

          <div className="mt-1 max-h-[55vh] overflow-y-auto rounded-3xl bg-pearl p-2 shadow-neu-inset-sm">
            {query.trim() === "" ? (
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                  Popular searches
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setQuery(suggestion)}
                      className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-navy shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-gold"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <p className="p-5 text-sm text-slate">
                No matches for “{query}”. Try a service, product or page name.
              </p>
            ) : (
              <ul className="divide-y divide-platinum/40">
                {results.map((result) => (
                  <li key={`${result.group}-${result.to}-${result.title}`}>
                    <button
                      type="button"
                      onClick={() => go(result.to)}
                      className="group flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-white"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-navy">
                          {result.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-slate">
                          {result.group} — {result.description}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-platinum transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                        aria-hidden
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
