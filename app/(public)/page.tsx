import { HeroStatsBlock } from "@/components/home/HeroStatsBlock";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { FeaturedToursSection } from "@/components/home/FeaturedToursSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroStatsBlock />
      <DestinationsSection />
      <FeaturedToursSection />
      <ExperienceSection />
      <WhyUsSection />
      <CategoriesSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
