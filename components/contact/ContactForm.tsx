"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-linear-to-br from-primary-50 to-primary-100/50 p-10 text-center ring-1 ring-primary-200">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white">
          <Send className="h-7 w-7" />
        </div>
        <p className="mt-5 font-display text-xl font-bold text-primary-900">
          Thank you for your message!
        </p>
        <p className="mt-2 text-sm text-primary-800/80">
          We will respond within 24 hours. For urgent questions, reach us on
          WhatsApp.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-stone-200 bg-surface px-4 py-3.5 text-sm text-ink transition-all placeholder:text-stone-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-500/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-ink"
          >
            Full Name <span className="text-accent-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-ink"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClass}
            placeholder="+62 xxx xxxx xxxx"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-ink"
        >
          Email Address <span className="text-accent-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-ink"
        >
          Your Message <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your dream Indonesian adventure — destinations, dates, group size..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
        <Send className="h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-ink-muted">
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
