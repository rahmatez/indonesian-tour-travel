import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { APP_NAME, CONTACT, NAV_LINKS } from "@/lib/constants";
import { destinations } from "@/lib/data/destinations";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerDelay } from "@/lib/animation";

export function Footer() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="border-b border-stone-800">
        <AnimateIn className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              Plan your dream trip today
            </h3>
            <p className="mt-2 text-sm text-stone-400">
              Free consultation · Custom itineraries · 24h response
            </p>
          </div>
          <Button href="/contact" size="lg">
            Get Free Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </AnimateIn>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <AnimateIn delay={staggerDelay(0)} variant="fade-up" className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Expert-guided private tours across Indonesia. Authentic experiences,
              local expertise, unforgettable memories.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/15 px-4 py-2 text-sm font-medium text-[#4ade80] transition-colors hover:bg-[#25D366]/25"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </AnimateIn>

          <AnimateIn delay={staggerDelay(1)} variant="fade-up">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tours"
                  className="transition-colors hover:text-primary-300"
                >
                  All Tours
                </Link>
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={staggerDelay(2)} variant="fade-up">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Destinations
            </h3>
            <ul className="space-y-3 text-sm">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/tours?destination=${dest.slug}`}
                    className="transition-colors hover:text-primary-300"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={staggerDelay(3)} variant="fade-up">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-primary-300"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-primary-300"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </AnimateIn>
        </div>

        <AnimateIn delay={200} variant="fade" className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-stone-500">
            <span>Secure Booking</span>
            <span>4.9/5 Rating</span>
            <span>12,000+ Travelers</span>
            <span>Responsible Travel</span>
          </div>
        </AnimateIn>
      </div>
    </footer>
  );
}
