import { Shield, Star, Users, MessageCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

const trustBadges = [
  { icon: Shield, label: "Secure Booking" },
  { icon: Star, label: "4.9/5 Rating" },
  { icon: Users, label: "12,000+ Travelers" },
  { icon: MessageCircle, label: "WhatsApp Support" },
  { icon: Leaf, label: "Responsible Travel" },
];

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-primary-800 via-primary-900 to-stone-950" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Ready to Start Your Indonesian Adventure?
          </h2>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100">
            Let us craft your perfect journey. From day trips to grand tours, every
            experience is tailored just for you.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/tours"
              size="lg"
              className="bg-white text-primary-800 shadow-xl hover:bg-primary-50"
            >
              Explore All Tours
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Plan Your Trip
            </Button>
          </div>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm font-medium text-primary-200/80"
              >
                <badge.icon className="h-4 w-4 text-primary-300" />
                {badge.label}
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
