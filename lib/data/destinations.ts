import type { Destination } from "@/lib/types";

export const destinations: Destination[] = [
  {
    slug: "java",
    name: "Java",
    tagline: "Temples, Volcanoes & Culture",
    description:
      "Explore ancient temples, majestic volcanoes, and the royal heritage of Yogyakarta.",
    image:
      "https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=800&q=80",
  },
  {
    slug: "bali",
    name: "Bali",
    tagline: "Luxury, Beaches & Spirit",
    description:
      "Discover lush rice terraces, sacred temples, and world-class wellness retreats.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    slug: "komodo",
    name: "Komodo Islands",
    tagline: "Dragons & Sailing Adventure",
    description:
      "Sail through pristine archipelagos and encounter the legendary Komodo dragons.",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
  },
  {
    slug: "sumatra",
    name: "Sumatra",
    tagline: "Rainforests & Indigenous Culture",
    description:
      "Journey through lush rainforests, hidden waterfalls, and authentic village life.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    slug: "borneo",
    name: "Borneo",
    tagline: "Ancient Rainforests & Wildlife",
    description:
      "Encounter orangutans and proboscis monkeys in Kalimantan's pristine jungles.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    slug: "raja-ampat",
    name: "Raja Ampat",
    tagline: "Diving Paradise",
    description:
      "Dive into the world's richest marine biodiversity in a turquoise paradise.",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
