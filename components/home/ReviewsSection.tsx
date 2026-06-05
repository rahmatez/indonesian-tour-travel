import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

export function ReviewsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Travelers Say"
          description="Real stories from adventurers who explored Indonesia with us."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <AnimateIn
              key={review.id}
              delay={staggerDelay(i)}
              variant="fade-up"
              className={i === 1 ? "lg:-translate-y-4" : ""}
            >
              <blockquote className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-100">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-primary-100" />
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent-400 text-accent-400"
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-muted">
                  &ldquo;{review.content}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-lg">
                    {review.flag}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{review.author}</p>
                    <p className="text-xs text-ink-muted">
                      {review.country} · {review.tourTitle}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
