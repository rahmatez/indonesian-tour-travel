import { Suspense } from "react";
import type { Metadata } from "next";
import { tours } from "@/lib/data/tours";
import { TourCard } from "@/components/tours/TourCard";
import { TourFilter } from "@/components/tours/TourFilter";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Indonesia Tours & Travel Packages",
  description:
    "Browse 80+ handcrafted tour packages across Java, Bali, Komodo, Sumatra, Borneo, and Raja Ampat.",
};

interface ToursPageProps {
  searchParams: Promise<{ destination?: string; category?: string }>;
}

export default async function ToursPage({ searchParams }: ToursPageProps) {
  const params = await searchParams;
  const destination = params.destination;
  const category = params.category;

  const filteredTours = tours.filter((tour) => {
    const matchDestination = destination
      ? tour.destination === destination
      : true;
    const matchCategory = category
      ? tour.categories.includes(
          category as (typeof tour.categories)[number],
        )
      : true;
    return matchDestination && matchCategory;
  });

  return (
    <>
      <PageHeader
        eyebrow="All Tours"
        title="Indonesia Tours & Packages"
        description="Handcrafted itineraries designed to immerse you in the authentic heart of Indonesia."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        imageAlt="Volcano landscape in Indonesia"
      />

      <section className="section-padding pt-12!">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
            <aside className="lg:col-span-1">
              <AnimateIn variant="fade-right" className="sticky top-28 rounded-3xl border border-stone-100 bg-white p-6 shadow-sm">
                <Suspense
                  fallback={
                    <div className="space-y-4">
                      <div className="h-6 w-24 animate-pulse rounded-lg bg-stone-100" />
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="h-8 w-20 animate-pulse rounded-full bg-stone-100"
                          />
                        ))}
                      </div>
                    </div>
                  }
                >
                  <TourFilter />
                </Suspense>
              </AnimateIn>
            </aside>

            <div className="lg:col-span-3">
              <AnimateIn variant="fade-up" className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-muted">
                  Showing{" "}
                  <span className="font-bold text-ink">
                    {filteredTours.length}
                  </span>{" "}
                  of {tours.length} tours
                </p>
                {(destination || category) && (
                  <p className="text-xs font-medium text-primary-700">
                    Filters applied
                  </p>
                )}
              </AnimateIn>

              {filteredTours.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2">
                  {filteredTours.map((tour, i) => (
                    <TourCard key={tour.slug} tour={tour} index={i} />
                  ))}
                </div>
              ) : (
                <AnimateIn variant="scale" className="rounded-3xl border-2 border-dashed border-stone-200 bg-white px-8 py-20 text-center">
                  <p className="font-display text-xl font-bold text-ink">
                    No tours found
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Try adjusting your filters or contact us for a custom
                    itinerary.
                  </p>
                  <Button href="/contact" className="mt-6">
                    Request Custom Trip
                  </Button>
                </AnimateIn>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
