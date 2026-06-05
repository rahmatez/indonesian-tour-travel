"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star, ArrowLeft, MapPin } from "lucide-react";
import type { Tour } from "@/lib/types";
import type { Destination } from "@/lib/types";
import type { Category } from "@/lib/types";
import { formatDuration } from "@/lib/utils";
import { AnimateIn } from "@/components/ui/AnimateIn";

interface TourDetailHeroProps {
  tour: Tour;
  destination: Destination | undefined;
  tourCategories: Category[];
}

export function TourDetailHero({
  tour,
  destination,
  tourCategories,
}: TourDetailHeroProps) {
  return (
    <section className="relative min-h-[55vh]">
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/50 to-stone-950/30" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-36 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-down">
            <Link
              href="/tours"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tours
            </Link>
          </AnimateIn>

          <AnimateIn delay={100} variant="fade-up">
            <div className="flex flex-wrap gap-2">
              {destination && (
                <span className="pill bg-primary-600/90 text-white backdrop-blur-sm">
                  <MapPin className="h-3 w-3" />
                  {destination.name}
                </span>
              )}
              {tourCategories.map((cat) => (
                <span
                  key={cat.slug}
                  className="pill bg-white/15 text-white backdrop-blur-sm"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={200} variant="fade-up">
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {tour.title}
            </h1>
          </AnimateIn>

          <AnimateIn delay={300} variant="fade-up">
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" />
                {formatDuration(tour.durationDays)}
              </span>
              <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
                <Users className="h-3.5 w-3.5" />
                {tour.minPax}–{tour.maxPax} people
              </span>
              <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                4.9 rating
              </span>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
