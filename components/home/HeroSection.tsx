import { ChevronDown, ArrowRight } from "lucide-react";
import {
  APP_HERO_EYEBROW,
  APP_HERO_HEADLINE,
  APP_DESCRIPTION,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh overflow-hidden sm:min-h-screen">
      <HeroSlideshow />
      <div className="absolute inset-0 bg-linear-to-r from-stone-950/95 via-stone-950/60 to-stone-950/20" />
      <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-stone-950/30" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-between px-5 pt-24 pb-10 sm:min-h-screen sm:justify-center sm:px-6 sm:pb-44 sm:pt-32 lg:px-8">
        <div className="w-full max-w-xl text-left sm:max-w-2xl lg:max-w-2xl">
          <div className="animate-fade-up mb-5 h-0.5 w-12 rounded-full bg-accent-500 sm:mb-7" />

          <p className="animate-fade-up text-[10px] font-bold uppercase tracking-[0.2em] text-accent-400 sm:text-sm sm:tracking-[0.3em]">
            {APP_HERO_EYEBROW}
          </p>

          <h1 className="animate-fade-up animation-delay-150 mt-5 flex flex-col gap-1.5 font-display text-[2.125rem] font-bold leading-[1.1] text-white sm:mt-8 sm:gap-3 sm:text-[3.25rem] lg:text-[4.25rem]">
            {APP_HERO_HEADLINE.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="animate-fade-up animation-delay-300 mt-5 max-w-lg text-sm leading-relaxed text-stone-300 sm:mt-9 sm:max-w-xl sm:text-base">
            {APP_DESCRIPTION}
          </p>

          <div className="animate-fade-up animation-delay-450 mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="/tours"
              variant="secondary"
              size="md"
              className="min-h-12 w-full justify-center px-7 py-3.5 text-sm uppercase tracking-wider sm:w-auto"
            >
              Explore Tours
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="min-h-12 w-full justify-center px-7 py-3.5 text-sm uppercase tracking-wider sm:w-auto"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        <a
          href="#destinations"
          className="mt-10 flex shrink-0 flex-col items-center gap-2 self-center text-white/50 transition-colors hover:text-white sm:absolute sm:bottom-32 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">
            Scroll to Explore
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
