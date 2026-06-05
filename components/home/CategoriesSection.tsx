import Link from "next/link";
import {
  Mountain,
  Waves,
  Landmark,
  Binoculars,
  Utensils,
  Gem,
  ArrowRight,
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

const iconMap = {
  mountain: Mountain,
  waves: Waves,
  landmark: Landmark,
  binoculars: Binoculars,
  utensils: Utensils,
  gem: Gem,
};

export function CategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Choose Your Adventure"
          title="How Do You Want to Explore?"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <AnimateIn key={cat.slug} delay={staggerDelay(i)} variant="fade-right">
                <Link
                  href={`/tours?category=${cat.slug}`}
                  className="group flex h-full items-start gap-5 rounded-3xl border border-stone-100 bg-surface p-6 transition-all hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-lg hover:shadow-primary-600/5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 transition-all group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary-600/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {cat.name}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-primary-600 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
