"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function WhatsAppFab() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'd like to plan an Indonesian tour.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-fade-up animation-delay-600 fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/50 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-400" />
      </span>
    </a>
  );
}
