import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

export function DestinationsSection() {
  return (
    <section id="destinations" className="pb-20 pt-0 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Destinations"
          title="Where Will You Go?"
          description="From volcanic peaks to turquoise shores — Indonesia holds a lifetime of discoveries."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <AnimateIn key={dest.slug} delay={staggerDelay(i)} variant="scale">
              <Link
                href={`/tours?destination=${dest.slug}`}
                className="group relative block aspect-4/5 overflow-hidden rounded-3xl sm:aspect-3/4"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/25 to-stone-950/10 transition-opacity group-hover:from-stone-950/95" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="pill bg-white/15 text-primary-200 backdrop-blur-sm">
                    Indonesia
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {dest.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-300">{dest.tagline}</p>
                  <span className="mt-4 inline-flex translate-y-2 items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore tours
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200} className="mt-14 text-center">
          <blockquote>
            <p className="font-display text-xl italic text-ink-muted sm:text-2xl text-balance">
              &ldquo;Indonesia is not a destination — it is a feeling that stays
              with you forever.&rdquo;
            </p>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}
