import { create } from "zustand";

interface UIState {
  searchOpen: boolean;
  mobileNavOpen: boolean;
  catalogueOpen: boolean;
  cookieDecision: "accepted" | "declined" | null;
  openSearch: () => void;
  closeSearch: () => void;
  setMobileNav: (open: boolean) => void;
  setCatalogue: (open: boolean) => void;
  setCookieDecision: (decision: "accepted" | "declined") => void;
}

const COOKIE_KEY = "ppis-cookie-consent";

function readCookieDecision(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(COOKIE_KEY);
  return stored === "accepted" || stored === "declined" ? stored : null;
}

export const useUIStore = create<UIState>((set) => ({
  searchOpen: false,
  mobileNavOpen: false,
  catalogueOpen: false,
  cookieDecision: readCookieDecision(),
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  setMobileNav: (open) => set({ mobileNavOpen: open }),
  setCatalogue: (open) => set({ catalogueOpen: open }),
  setCookieDecision: (decision) => {
    try {
      window.localStorage.setItem(COOKIE_KEY, decision);
    } catch {
      /* storage unavailable — ignore */
    }
    set({ cookieDecision: decision });
  },
}));
