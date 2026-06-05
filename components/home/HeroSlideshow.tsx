"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {HERO_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          className={cn(
            "hero-slide object-cover transition-opacity duration-1000 ease-in-out",
            index === active ? "opacity-100" : "opacity-0",
          )}
          sizes="100vw"
        />
      ))}
    </div>
  );
}
