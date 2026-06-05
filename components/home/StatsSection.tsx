import { stats } from "@/lib/data/stats";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

export function StatsSection() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-5xl px-5 sm:px-6">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-stone-900/15 ring-1 ring-stone-100 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimateIn
            key={stat.label}
            delay={staggerDelay(i, 100)}
            variant="scale"
            className={`px-3 py-6 text-center sm:px-6 sm:py-10 ${
              i % 2 === 0 ? "border-r border-stone-100" : ""
            } ${i < 2 ? "border-b border-stone-100 sm:border-b-0" : ""} ${
              i < stats.length - 1 ? "sm:border-r sm:border-stone-100" : "sm:border-r-0"
            } ${i === stats.length - 1 ? "border-r-0" : ""}`}
          >
            <p className="bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-xl font-bold text-transparent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[9px] font-medium uppercase leading-snug tracking-wider text-ink-muted sm:mt-1.5 sm:text-sm">
              {stat.label}
            </p>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
