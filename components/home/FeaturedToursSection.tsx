import { ArrowRight } from "lucide-react";
import { getFeaturedTours } from "@/lib/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function FeaturedToursSection() {
  const featuredTours = getFeaturedTours();

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Tours"
            title="Handcrafted Journeys"
            description="Immerse yourself in the authentic heart of Indonesia with our most loved itineraries."
            align="left"
            className="mx-0"
          />
          <AnimateIn delay={150}>
            <Button
              href="/tours"
              variant="ghost"
              className="shrink-0 self-start lg:self-auto"
            >
              View All Tours
              <ArrowRight className="h-4 w-4" />
            </Button>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {featuredTours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} featured index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
