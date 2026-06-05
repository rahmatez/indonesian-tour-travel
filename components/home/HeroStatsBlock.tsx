import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";

export function HeroStatsBlock() {
  return (
    <>
      <HeroSection />
      <div className="bg-surface py-10 sm:py-12">
        <StatsSection />
      </div>
    </>
  );
}
