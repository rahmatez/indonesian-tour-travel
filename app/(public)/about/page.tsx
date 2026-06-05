import Image from "next/image";
import type { Metadata } from "next";
import { stats } from "@/lib/data/stats";
import { teamMembers } from "@/lib/data/team";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${APP_NAME} — trusted Indonesia tour operator since 2009, based in Yogyakarta.`,
};

const values = [
  {
    title: "Authentic Experiences",
    desc: "We go beyond tourist spots to share the real Indonesia — its people, traditions, and hidden treasures.",
  },
  {
    title: "Local First",
    desc: "Every guide, driver, and partner is Indonesian. Your money directly supports local communities.",
  },
  {
    title: "Premium Quality",
    desc: "Handpicked accommodations, private transport, and meticulous attention to every detail.",
  },
  {
    title: "Personal Touch",
    desc: "No cookie-cutter tours. Every itinerary is tailored to your interests, pace, and travel style.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Crafting Unforgettable Adventures Since 2009"
        description="15 years of passion, expertise, and love for Indonesia."
        image="https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=1920&q=80"
        imageAlt="Borobudur Temple Indonesia"
      />

      <section className="section-padding pt-12!">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <AnimateIn variant="fade-right">
              <div className="relative">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl shadow-stone-900/10">
                  <Image
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
                    alt="Bali rice terraces"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-600 px-6 py-4 text-white shadow-xl sm:block">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-primary-100">Years of Excellence</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-left" delay={100}>
              <h2 className="font-display text-3xl font-bold text-ink">
                Born From a Love of Indonesia
              </h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                {APP_NAME} was founded in 2009 by passionate Indonesian travel
                experts who believed the best way to experience Indonesia is
                through the eyes of those who call it home.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Today, we are one of Indonesia&apos;s most trusted tour operators,
                with local guides who bring authentic knowledge and genuine
                hospitality to every journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Based in Yogyakarta", "Serving worldwide"].map((tag) => (
                  <span
                    key={tag}
                    className="pill bg-primary-50 text-primary-800 ring-1 ring-primary-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={staggerDelay(i)} variant="scale">
                <div className="rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-stone-100">
                  <p className="bg-linear-to-r from-primary-600 to-primary-800 bg-clip-text text-3xl font-bold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-muted sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="To create deeply personal, authentic travel experiences that connect visitors with the true soul of Indonesia."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={staggerDelay(i)} variant="fade-up">
                <div className="h-full rounded-3xl border border-stone-100 bg-surface p-6 transition-shadow hover:shadow-lg">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {value.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the People Behind ITT"
            description="A passionate group of Indonesians dedicated to showing you the very best of our homeland."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <AnimateIn key={member.name} delay={staggerDelay(i)} variant="fade-up">
                <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-100 transition-shadow hover:shadow-lg">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                        {member.experience}
                      </p>
                      <h3 className="font-display text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-stone-300">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {member.bio}
                    </p>
                    <p className="mt-3 text-xs font-medium text-primary-700">
                      {member.location}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-primary-700 to-primary-900" />
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AnimateIn>
            <h2 className="font-display text-3xl font-bold text-white">
              Ready to Explore Indonesia?
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="mt-4 text-primary-100">
              Let our team of local experts create your perfect adventure.
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/tours"
                size="lg"
                className="bg-white text-primary-800 hover:bg-primary-50"
              >
                Browse Our Tours
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
