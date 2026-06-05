import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Shield } from "lucide-react";
import { tours, getTourBySlug } from "@/lib/data/tours";
import { getDestinationBySlug } from "@/lib/data/destinations";
import { categories } from "@/lib/data/categories";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { TourDetailHero } from "@/components/tours/TourDetailHero";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

interface TourDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.title,
    description: tour.shortDescription,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) notFound();

  const destination = getDestinationBySlug(tour.destination);
  const tourCategories = categories.filter((c) =>
    tour.categories.includes(c.slug),
  );
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi! I'd like to book: ${tour.title}`)}`;

  return (
    <>
      <TourDetailHero
        tour={tour}
        destination={destination}
        tourCategories={tourCategories}
      />

      <section className="section-padding pt-12!">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="space-y-12 lg:col-span-2">
              <AnimateIn variant="fade-up">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    About This Tour
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {tour.description}
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={100}>
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    Highlights
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {tour.highlights.map((highlight, i) => (
                      <AnimateIn
                        key={highlight}
                        delay={staggerDelay(i, 60)}
                        variant="fade-right"
                      >
                        <li className="flex items-start gap-3 rounded-2xl bg-primary-50/60 px-4 py-3 text-ink-muted">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                          {highlight}
                        </li>
                      </AnimateIn>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn variant="fade-up" delay={100}>
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">
                    What&apos;s Included
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {tour.inclusions.map((inclusion, i) => (
                      <AnimateIn
                        key={inclusion.description}
                        delay={staggerDelay(i, 50)}
                        variant="fade-up"
                      >
                        <li className="flex items-start gap-3 text-sm text-ink-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                          {inclusion.description}
                        </li>
                      </AnimateIn>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              {tour.gallery.length > 1 && (
                <AnimateIn variant="fade-up">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink">
                      Gallery
                    </h2>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {tour.gallery.map((img, i) => (
                        <AnimateIn
                          key={img}
                          delay={staggerDelay(i, 80)}
                          variant="scale"
                          className={`relative overflow-hidden rounded-3xl ${i === 0 ? "sm:col-span-2 aspect-21/9" : "aspect-4/3"}`}
                        >
                          <Image
                            src={img}
                            alt={tour.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>

            <div className="lg:col-span-1">
              <AnimateIn variant="fade-left" delay={150}>
                <div className="sticky top-28 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-stone-100">
                  <div className="bg-linear-to-r from-primary-600 to-primary-800 px-6 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-100">
                      Starting from
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {formatPrice(tour.priceFrom)}
                      <span className="text-base font-normal text-primary-200">
                        {" "}
                        / person
                      </span>
                    </p>
                    {tour.groupDiscountPct > 0 && (
                      <p className="mt-1 text-sm text-primary-100">
                        Save up to {tour.groupDiscountPct}% for groups
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 p-6">
                    <Button href={whatsappUrl} size="lg" className="w-full" external>
                      Book Now
                    </Button>
                    <Button
                      href={whatsappUrl}
                      variant="whatsapp"
                      size="lg"
                      className="w-full"
                      external
                    >
                      Ask via WhatsApp
                    </Button>

                    <div className="flex items-center justify-center gap-2 pt-2 text-xs text-ink-muted">
                      <Shield className="h-3.5 w-3.5 text-primary-600" />
                      Secure booking · Free cancellation 30+ days
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-stone-100 px-6 py-5 text-sm">
                    {[
                      ["Duration", formatDuration(tour.durationDays)],
                      ["Group size", `${tour.minPax}–${tour.maxPax} people`],
                      ["Destination", destination?.name ?? "—"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between text-ink-muted"
                      >
                        <span>{label}</span>
                        <span className="font-semibold text-ink">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
