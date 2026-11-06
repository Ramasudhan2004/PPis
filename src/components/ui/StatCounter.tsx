import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
}

export function StatCounter({ value, suffix, label, sub }: StatCounterProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const current = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      className="neu-inset group flex flex-col items-center px-5 py-7 text-center transition-transform duration-500 ease-smooth hover:-translate-y-1"
    >
      <span className="font-display text-4xl font-extrabold tracking-tight text-navy md:text-[2.6rem]">
        {current.toLocaleString("en-IN")}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="mt-2 text-sm font-semibold text-navy">{label}</span>
      {sub && <span className="mt-1 text-xs text-slate">{sub}</span>}
    </div>
  );
}
