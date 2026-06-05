import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { APP_NAME, CONTACT } from "@/lib/constants";
import { faqs } from "@/lib/data/faqs";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${APP_NAME} for free Indonesia travel advice and custom tour quotes.`,
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Plan Your Adventure"
        description="Free travel advice, custom quotes, and answers to all your questions — we're here to help."
        image="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&q=80"
        imageAlt="Komodo Islands Indonesia"
      />

      <section className="section-padding pt-12!">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <AnimateIn variant="fade-right" className="lg:col-span-3">
              <div className="rounded-3xl border border-stone-100 bg-white p-8 shadow-sm sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Tell us about your dream trip and we&apos;ll craft a personalised
                  itinerary within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </AnimateIn>

            <div className="space-y-5 lg:col-span-2">
              <AnimateIn variant="fade-left" delay={100}>
                <div className="overflow-hidden rounded-3xl bg-[#25D366] p-6 text-white shadow-lg shadow-[#25D366]/20">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <MessageCircle className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">
                        Chat on WhatsApp
                      </h3>
                      <p className="text-sm text-white/80">
                        Fastest response · {CONTACT.whatsappHours}
                      </p>
                    </div>
                  </div>
                  <Button
                    href={whatsappUrl}
                    size="md"
                    className="mt-5 w-full bg-white text-[#128C7E] hover:bg-white/90"
                    external
                  >
                    Open WhatsApp
                  </Button>
                </div>
              </AnimateIn>

              <AnimateIn variant="fade-left" delay={200}>
                <div className="rounded-3xl border border-stone-100 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-ink">
                    Contact Details
                  </h3>
                  <ul className="mt-5 space-y-5 text-sm text-ink-muted">
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="pt-2">{CONTACT.address}</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="pt-2 hover:text-primary-700"
                      >
                        {CONTACT.phone}
                      </a>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="pt-2 hover:text-primary-700"
                      >
                        {CONTACT.email}
                      </a>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="pt-2">
                        <p>Office: {CONTACT.officeHours}</p>
                        <p>WhatsApp: {CONTACT.whatsappHours}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn variant="fade-left" delay={300}>
                <div className="rounded-3xl bg-primary-50 p-6 ring-1 ring-primary-100">
                  <p className="font-semibold text-primary-900">
                    Fast Response Guaranteed
                  </p>
                  <p className="mt-2 text-sm text-primary-800/80">
                    All inquiries answered within 24 hours. Urgent? WhatsApp is the
                    fastest route.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.question} delay={staggerDelay(i, 60)} variant="fade-up">
                <details className="group rounded-2xl bg-surface ring-1 ring-stone-100 transition-colors open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-ink marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
