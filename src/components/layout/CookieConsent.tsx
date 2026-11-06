import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { useUIStore } from "@/store/ui";

export function CookieConsent() {
  const decision = useUIStore((s) => s.cookieDecision);
  const setDecision = useUIStore((s) => s.setCookieDecision);

  if (decision !== null) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[65] sm:inset-x-auto sm:left-6 sm:max-w-md">
      <div className="neu-lg animate-fade-up p-5">
        <div className="flex items-start gap-3">
          <span className="icon-well h-10 w-10 shrink-0">
            <Cookie className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">Cookies on this site</p>
            <p className="mt-1 text-xs leading-relaxed text-slate">
              We use essential and preference cookies to make the site work and to
              remember your choices. See our{" "}
              <Link to="/cookies" className="link-underline font-medium text-navy">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setDecision("accepted")}
            className="rounded-2xl bg-[linear-gradient(135deg,#f4ead6,#e9ddc8_40%,#c5a46d)] px-4 py-2 text-[13px] font-semibold text-navy shadow-gold-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => setDecision("declined")}
            className="rounded-2xl bg-white px-4 py-2 text-[13px] font-semibold text-navy shadow-neu-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neu"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
