export type DestinationSlug =
  | "java"
  | "bali"
  | "komodo"
  | "sumatra"
  | "borneo"
  | "raja-ampat";

export type CategorySlug =
  | "volcano"
  | "diving"
  | "cultural"
  | "wildlife"
  | "culinary"
  | "luxury";

export interface Destination {
  slug: DestinationSlug;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
}

export interface TourInclusion {
  description: string;
}

export interface Tour {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  destination: DestinationSlug;
  categories: CategorySlug[];
  durationDays: number;
  minPax: number;
  maxPax: number;
  priceFrom: number;
  groupDiscountPct: number;
  isFeatured: boolean;
  hasVideo: boolean;
  image: string;
  gallery: string[];
  inclusions: TourInclusion[];
  highlights: string[];
}

export interface Review {
  id: string;
  author: string;
  country: string;
  flag: string;
  tourTitle: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: string;
  location: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
