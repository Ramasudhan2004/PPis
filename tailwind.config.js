/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        pearl: "#F8F9F7",
        ice: "#E6F2FA",
        champagne: "#E9DDC8",
        platinum: "#C9D1DA",
        navy: "#152B46",
        slate: "#64748B",
        gold: "#C5A46D",
        mist: "#D5E7F3",
        ink: {
          DEFAULT: "#152B46",
          soft: "#243D5C",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Manrope", "Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        "neu-sm":
          "3px 3px 8px rgba(21,43,70,0.06), -3px -3px 8px rgba(255,255,255,0.92)",
        neu: "8px 8px 22px rgba(21,43,70,0.08), -8px -8px 22px rgba(255,255,255,0.95)",
        "neu-lg":
          "16px 16px 40px rgba(21,43,70,0.10), -14px -14px 36px rgba(255,255,255,0.98)",
        "neu-xl":
          "24px 24px 60px rgba(21,43,70,0.12), -20px -20px 50px rgba(255,255,255,1)",
        "neu-inset":
          "inset 4px 4px 10px rgba(21,43,70,0.08), inset -4px -4px 10px rgba(255,255,255,0.95)",
        "neu-inset-sm":
          "inset 2px 2px 6px rgba(21,43,70,0.07), inset -2px -2px 6px rgba(255,255,255,0.9)",
        gold: "0 14px 34px -12px rgba(197,164,109,0.65)",
        "gold-sm": "0 8px 20px -10px rgba(197,164,109,0.6)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.6s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
