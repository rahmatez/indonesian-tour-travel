import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

const experiences = [
  {
    title: "Borobudur at Sunrise",
    description:
      "Witness the world's largest Buddhist temple emerge from morning mist",
    image:
      "https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=800&q=80",
  },
  {
    title: "Bali's Hidden Beauty",
    description:
      "Discover lush rice terraces, sacred temples, and pristine beaches",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    title: "Raja Ampat Paradise",
    description: "Dive into the world's richest marine biodiversity",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
  },
];

export function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience the Magic"
          title="Watch Indonesia Come Alive"
          description="From ancient temples at dawn to pristine coral reefs — see why Indonesia captivates every traveler."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <AnimateIn key={exp.title} delay={staggerDelay(i)} variant="fade-up">
              <div className="group relative aspect-4/5 overflow-hidden rounded-3xl sm:aspect-3/4">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-300">{exp.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
