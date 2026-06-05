import { MapPin, Sparkles, Headphones, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

const values = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Born and raised in Indonesia, our guides bring authentic knowledge and deep cultural insight to every journey.",
  },
  {
    icon: Sparkles,
    title: "Tailored Experiences",
    description:
      "Every tour is crafted around your interests, pace, and budget. No cookie-cutter packages.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "From the moment you book until you return home, our team is always reachable via WhatsApp.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    description:
      "We partner with local communities and follow sustainable practices to protect Indonesia's natural heritage.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-stone-950">
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Travel With Us"
          title="More Than a Tour Operator"
          description="We are your local guides, storytellers, and travel companions — dedicated to showing you the real Indonesia."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={staggerDelay(i)} variant="fade-up">
              <div className="group h-full rounded-3xl border border-stone-800 bg-stone-900/60 p-6 backdrop-blur-sm transition-colors hover:border-primary-600/40 hover:bg-stone-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600/20 text-primary-400 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {value.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
