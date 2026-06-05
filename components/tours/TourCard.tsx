import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Play, Sparkles } from "lucide-react";
import type { Tour } from "@/lib/types";
import { getDestinationBySlug } from "@/lib/data/destinations";
import { formatPrice, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

interface TourCardProps {
  tour: Tour;
  featured?: boolean;
  index?: number;
}

export function TourCard({ tour, featured, index = 0 }: TourCardProps) {
  const destination = getDestinationBySlug(tour.destination);
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi! I'm interested in: ${tour.title}`)}`;

  return (
    <AnimateIn delay={staggerDelay(index)} variant="fade-up">
      <article className="card-hover group flex flex-col overflow-hidden rounded-3xl bg-surface-elevated ring-1 ring-stone-100">
        <Link href={`/tours/${tour.slug}`} className="relative block aspect-4/3 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {(featured || tour.isFeatured) && (
              <span className="pill bg-accent-500 text-white shadow-md">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
            {tour.hasVideo && (
              <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
                <Play className="h-3 w-3 fill-white" />
                Video
              </span>
            )}
          </div>

          {destination && (
            <span className="absolute right-4 top-4 pill bg-primary-600/90 text-white backdrop-blur-sm">
              {destination.name}
            </span>
          )}

          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              {formatDuration(tour.durationDays)}
            </span>
            <span className="pill bg-stone-950/50 text-white backdrop-blur-sm">
              <Users className="h-3 w-3" />
              {tour.minPax}–{tour.maxPax}
            </span>
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <Link href={`/tours/${tour.slug}`}>
            <h3 className="font-display text-xl font-bold leading-snug text-ink transition-colors group-hover:text-primary-700 line-clamp-2">
              {tour.title}
            </h3>
          </Link>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-2">
            {tour.shortDescription}
          </p>

          <div className="mt-5 flex items-end justify-between border-t border-stone-100 pt-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                From
              </p>
              <p className="text-2xl font-bold text-primary-700">
                {formatPrice(tour.priceFrom)}
                <span className="text-sm font-normal text-ink-muted"> /pp</span>
              </p>
              {tour.groupDiscountPct > 0 && (
                <p className="mt-0.5 text-xs font-medium text-accent-600">
                  Save up to {tour.groupDiscountPct}% for groups
                </p>
              )}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button href={`/tours/${tour.slug}`} size="sm">
              Book Now
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" size="sm" external>
              WhatsApp
            </Button>
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}
