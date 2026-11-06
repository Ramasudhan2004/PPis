import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { heroScenes } from "@/content/site";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import { useMediaQuery, useReducedMotion } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HeroCanvas } from "./HeroCanvas";

const TOTAL_FRAMES = 300;
const frameSrc = (index: number) =>
  `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

/**
 * Scroll-driven 3D storytelling hero.
 * The frame sequence is scrubbed by scroll progress (forward and reverse) —
 * never autoplayed — so the visitor literally drives the camera through all
 * five scenes of the power journey.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);

  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const { images, loadProgress, ready } = useFrameSequence(
    TOTAL_FRAMES,
    frameSrc,
    { stride: isDesktop ? 1 : 2, eagerCount: 12, concurrency: 6 },
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateTarget = () => {
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const raw = distance > 0 ? -rect.top / distance : 0;
      targetRef.current = Math.min(Math.max(raw, 0), 1);
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    let raf = 0;
    let lastScene = -1;
    const ease = reduced ? 1 : 0.09;

    const tick = () => {
      const target = targetRef.current;
      progressRef.current += (target - progressRef.current) * ease;
      if (Math.abs(target - progressRef.current) < 0.0006) {
        progressRef.current = target;
      }

      const p = progressRef.current;
      const fade = 0.3;
      let scene = 0;

      heroScenes.forEach((s, i) => {
        const [a, b] = s.range;
        const span = b - a;
        const t = (p - a) / span;

        const isFirst = i === 0;
        const isLast = i === heroScenes.length - 1;
        const fadeIn = isFirst ? 1 : Math.min(Math.max(t / fade, 0), 1);
        const fadeOut = isLast ? 1 : Math.min(Math.max((1 - t) / fade, 0), 1);
        const opacity = Math.min(fadeIn, fadeOut);

        const el = panelRefs.current[i];
        if (el) {
          el.style.opacity = String(opacity);
          el.style.transform = `translate3d(0, ${(0.5 - t) * 46}px, 0)`;
          el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
          el.style.pointerEvents = opacity > 0.7 ? "auto" : "none";
        }

        if (t >= 0 && t < 1) scene = i;
        else if (isLast && t >= 1) scene = i;
      });

      if (railRef.current) {
        railRef.current.style.transform = `scaleY(${p})`;
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(1 - p * 12, 0));
      }
      if (scene !== lastScene) {
        lastScene = scene;
        setActiveScene(scene);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      aria-label="The PPIS power journey — powering the future"
      className="relative h-[380vh] bg-pearl lg:h-[500vh]"
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ height: "100svh" }}
      >
        <HeroCanvas
          images={images}
          progressRef={progressRef}
          className="absolute inset-0"
        />

        {/* Light-theme veils keep the navy typography legible over bright renders */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(248,249,247,0.97)_0%,rgba(230,242,250,0.86)_36%,rgba(248,249,247,0.2)_62%,rgba(248,249,247,0)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(248,249,247,0.92),rgba(248,249,247,0))]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(248,249,247,0),rgba(248,249,247,0.96))]"
          aria-hidden
        />

        {/* Scene copy */}
        <div className="container relative flex h-full items-center">
          <div className="relative w-full max-w-2xl">
            <div className="relative min-h-[24rem] md:min-h-[26rem]">
              {heroScenes.map((scene, index) => (
                <div
                  key={scene.id}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center will-change-transform"
                  style={{ opacity: index === 0 ? 1 : 0 }}
                  aria-hidden={activeScene !== index}
                >
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                    {"Scene 0" + (index + 1) + " — " + scene.label}
                  </span>

                  <h1 className="mt-5 text-balance font-display text-[2.4rem] font-extrabold leading-[1.03] tracking-tight text-navy sm:text-5xl lg:text-[3.9rem]">
                    {scene.title.split(" ").map((word, i, arr) =>
                      i === arr.length - 1 ? (
                        <span key={`${word}-${i}`} className="text-gold-metal">
                          {word}
                          {i < arr.length - 1 ? " " : ""}
                        </span>
                      ) : (
                        <span key={`${word}-${i}`}>{word} </span>
                      ),
                    )}
                  </h1>

                  <p className="mt-5 max-w-lg text-base leading-relaxed text-slate md:text-lg">
                    {scene.subtitle}
                  </p>

                  {index === heroScenes.length - 1 && (
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Button to="/services" variant="primary" size="lg" showArrow>
                        Explore Our Solutions
                      </Button>
                      <Button to="/contact#quote" variant="secondary" size="lg">
                        Get a Quote
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical scene rail (desktop) */}
        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
          {heroScenes.map((scene, index) => (
            <div key={scene.id} className="flex items-center gap-3">
              <span
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-smooth",
                  index === activeScene
                    ? "text-navy opacity-100"
                    : "text-slate opacity-45",
                )}
              >
                {scene.label}
              </span>
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full ring-1 transition-all duration-500 ease-smooth",
                  index === activeScene
                    ? "scale-125 bg-gold ring-gold"
                    : "bg-platinum ring-platinum",
                )}
              />
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-1 bg-platinum/40 lg:block"
          aria-hidden
        >
          <div ref={railRef} className="h-full w-full origin-top bg-gold" />
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate">
            Scroll to explore
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-gold shadow-neu-sm">
            <ChevronDown className="h-4 w-4 animate-float" aria-hidden />
          </span>
        </div>

        {/* Frame preloader */}
        {!ready && (
          <div className="absolute inset-0 z-20 grid place-items-center bg-pearl">
            <div className="flex flex-col items-center">
              <span className="font-display text-2xl font-extrabold tracking-tight text-navy">
                PPIS
              </span>
              <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-platinum/50">
                <div
                  className="h-full bg-gold transition-all duration-300 ease-smooth"
                  style={{ width: `${Math.max(Math.round(loadProgress * 100), 6)}%` }}
                />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate">
                Preparing the experience…
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
