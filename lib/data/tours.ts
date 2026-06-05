import type { Tour } from "@/lib/types";

export const tours: Tour[] = [
  {
    slug: "secret-waterfalls-north-sumatra",
    title: "Secret Waterfalls & Indigenous Villages of North Sumatra",
    shortDescription:
      "Unearth Sumatra's pristine beauty and rich cultural tapestry on this transformative 3-day adventure.",
    description:
      "Venture deep into North Sumatra's lush highlands, where cascading waterfalls meet centuries-old indigenous traditions. This off-the-beaten-path journey takes you through remote villages, pristine jungle trails, and warm hospitality that few travelers ever experience.",
    destination: "sumatra",
    categories: ["cultural", "wildlife"],
    durationDays: 3,
    minPax: 2,
    maxPax: 12,
    priceFrom: 320,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: true,
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
    inclusions: [
      { description: "Private air-conditioned transportation throughout the tour" },
      { description: "Expert English-speaking local guide" },
      { description: "2 nights accommodation in charming local guesthouses" },
      { description: "All entrance fees and village donations" },
      { description: "Daily breakfast and selected meals" },
    ],
    highlights: [
      "Visit hidden waterfalls accessible only by jungle trail",
      "Stay with indigenous Batak communities",
      "Traditional music and dance performance",
    ],
  },
  {
    slug: "bali-farm-to-table-ubud",
    title: "Bali's Authentic Farm-to-Table Culinary Journey in Ubud",
    shortDescription:
      "Savor the vibrant flavors of Bali from farm to table in the heart of Ubud.",
    description:
      "Embark on an unforgettable culinary odyssey through Bali's spiritual heartland. Visit traditional markets, organic farms, and learn to cook authentic Balinese dishes with a local chef in a stunning open-air kitchen.",
    destination: "bali",
    categories: ["culinary", "cultural"],
    durationDays: 1,
    minPax: 2,
    maxPax: 10,
    priceFrom: 75,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=1200&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    ],
    inclusions: [
      { description: "Round-trip hotel transfers from Ubud area" },
      { description: "Expert local guide and Balinese cooking instructor" },
      { description: "Guided visit to a traditional Balinese market" },
      { description: "Organic farm tour and ingredient harvesting" },
      { description: "Full cooking class with recipe booklet" },
    ],
    highlights: [
      "Hands-on cooking of 5 traditional Balinese dishes",
      "Visit to Ubud morning market",
      "Organic farm experience in Tegallalang",
    ],
  },
  {
    slug: "east-java-volcano-culture",
    title: "4-Day East Java Volcano & Culture Expedition",
    shortDescription:
      "An unparalleled private adventure through Java's majestic volcanoes and ancient cultural heartland.",
    description:
      "From the misty peaks of Mount Bromo to the blue flames of Ijen crater, this expedition combines Indonesia's most dramatic volcanic landscapes with the rich cultural heritage of East Java.",
    destination: "java",
    categories: ["volcano", "cultural"],
    durationDays: 4,
    minPax: 2,
    maxPax: 12,
    priceFrom: 255,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
      "https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=1200&q=80",
    ],
    inclusions: [
      { description: "Private air-conditioned vehicle with professional driver" },
      { description: "Accommodation for 3 nights" },
      { description: "Fuel and parking fees" },
      { description: "Expert English-speaking guide" },
      { description: "Bromo jeep tour and Ijen trekking permit" },
    ],
    highlights: [
      "Sunrise at Mount Bromo crater",
      "Blue fire phenomenon at Kawah Ijen",
      "Traditional Madurese fishing village visit",
    ],
  },
  {
    slug: "raja-ampat-diving-paradise",
    title: "Raja Ampat — Diving Paradise & Island Hopping",
    shortDescription:
      "Explore the world's most biodiverse marine ecosystem in one breathtaking archipelago.",
    description:
      "Raja Ampat is home to 75% of all known coral species. This 6-day expedition combines world-class diving, island hopping, and eco-resort stays in the most pristine marine environment on Earth.",
    destination: "raja-ampat",
    categories: ["diving", "luxury"],
    durationDays: 6,
    minPax: 2,
    maxPax: 12,
    priceFrom: 1295,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: true,
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
    ],
    inclusions: [
      { description: "5 nights accommodation (eco-resort + homestay)" },
      { description: "All meals (full board)" },
      { description: "Raja Ampat marine park entrance permit" },
      { description: "10 guided dives with equipment" },
      { description: "Island hopping boat trips" },
    ],
    highlights: [
      "Dive among 1,500+ fish species",
      "Piaynemo viewpoint panorama",
      "Local Papuan village cultural visit",
    ],
  },
  {
    slug: "borneo-orangutan-safari",
    title: "Borneo Orangutan & Proboscis Monkey Jungle Safari",
    shortDescription:
      "An exclusive journey into the heart of Kalimantan's pristine rainforests.",
    description:
      "Cruise the Sekonyer River on a traditional klotok boat, spotting wild orangutans, proboscis monkeys, and countless bird species in one of the world's oldest rainforests.",
    destination: "borneo",
    categories: ["wildlife"],
    durationDays: 4,
    minPax: 2,
    maxPax: 8,
    priceFrom: 680,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    ],
    inclusions: [
      { description: "Round-trip airport transfers from Pangkalan Bun" },
      { description: "3 nights on a private traditional klotok boat" },
      { description: "All meals and snacks during the safari" },
      { description: "National park entrance fees" },
      { description: "Expert wildlife guide" },
    ],
    highlights: [
      "Wild orangutan sightings at feeding stations",
      "Night jungle trekking for nocturnal wildlife",
      "Proboscis monkey river colonies",
    ],
  },
  {
    slug: "komodo-dragons-sailing",
    title: "Komodo Island — Dragons & Sailing Adventure",
    shortDescription:
      "Sail through the Komodo archipelago, encounter prehistoric dragons, and snorkel pristine reefs.",
    description:
      "Board a traditional Phinisi schooner and explore the legendary Komodo National Park. Trek with dragons, swim at Pink Beach, and snorkel among manta rays in crystal-clear waters.",
    destination: "komodo",
    categories: ["wildlife", "diving"],
    durationDays: 4,
    minPax: 2,
    maxPax: 12,
    priceFrom: 695,
    groupDiscountPct: 15,
    isFeatured: true,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    ],
    inclusions: [
      { description: "3 nights on traditional Phinisi boat (private cabin)" },
      { description: "All meals on board (full board)" },
      { description: "Komodo National Park entrance fees" },
      { description: "Snorkeling equipment" },
      { description: "Ranger-guided dragon trekking" },
    ],
    highlights: [
      "Close encounter with Komodo dragons",
      "Snorkeling at Manta Point",
      "Sunset sailing through the archipelago",
    ],
  },
  {
    slug: "royal-java-yogyakarta",
    title: "Royal Java: Private Heritage Tour with Luxury Stays",
    shortDescription:
      "Unveil the majestic heart of Java through Yogyakarta's royal past and vibrant present.",
    description:
      "Experience the grandeur of the Javanese royal court with exclusive access to heritage sites, private batik workshops, and luxury accommodation in the cultural capital of Indonesia.",
    destination: "java",
    categories: ["cultural", "luxury"],
    durationDays: 3,
    minPax: 2,
    maxPax: 8,
    priceFrom: 950,
    groupDiscountPct: 15,
    isFeatured: false,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566559532224-6d65e9fc0f37?w=1200&q=80",
    ],
    inclusions: [
      { description: "3 days/2 nights luxury accommodation in Yogyakarta" },
      { description: "Private air-conditioned transportation" },
      { description: "Expert English-speaking local guide" },
      { description: "Borobudur sunrise access" },
      { description: "Royal palace and batik workshop visit" },
    ],
    highlights: [
      "Exclusive Borobudur sunrise experience",
      "Private audience at Kraton Yogyakarta",
      "Hands-on batik masterclass",
    ],
  },
  {
    slug: "java-volcano-ring-of-fire",
    title: "Java Volcano Ring of Fire: Bromo, Ijen & Semeru Viewpoint Trek",
    shortDescription:
      "Conquer three of Java's mightiest volcanoes in one epic 4-day expedition.",
    description:
      "The ultimate volcanic adventure in Indonesia. Trek to viewpoints overlooking Mount Semeru, witness Bromo's otherworldly crater, and descend into Ijen's sulfur mines under starlight.",
    destination: "java",
    categories: ["volcano"],
    durationDays: 4,
    minPax: 2,
    maxPax: 12,
    priceFrom: 380,
    groupDiscountPct: 15,
    isFeatured: false,
    hasVideo: true,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
    inclusions: [
      { description: "4 days / 3 nights accommodation in mountain lodges" },
      { description: "All meals included" },
      { description: "Private 4x4 jeep for Bromo" },
      { description: "Ijen trekking guide and gas mask" },
      { description: "All park entrance fees" },
    ],
    highlights: [
      "Panoramic Semeru viewpoint at sunrise",
      "Bromo crater rim walk",
      "Ijen blue fire night trek",
    ],
  },
  {
    slug: "ubud-soul-retreat",
    title: "Ubud Soul Retreat: Yoga, Meditation & Balinese Healing",
    shortDescription:
      "A transformative journey of self-discovery amidst Bali's serene spiritual heartland.",
    description:
      "Reconnect with yourself through daily yoga, guided meditation, and traditional Balinese healing ceremonies in the tranquil surroundings of Ubud's lush valleys.",
    destination: "bali",
    categories: ["luxury", "cultural"],
    durationDays: 3,
    minPax: 1,
    maxPax: 8,
    priceFrom: 350,
    groupDiscountPct: 10,
    isFeatured: false,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    ],
    inclusions: [
      { description: "2 nights boutique retreat accommodation" },
      { description: "Daily yoga and meditation sessions" },
      { description: "Balinese healing ceremony" },
      { description: "All vegetarian meals" },
      { description: "Spa treatment (1 session)" },
    ],
    highlights: [
      "Sunrise yoga overlooking rice terraces",
      "Traditional melukat purification ritual",
      "Organic spa and wellness treatments",
    ],
  },
  {
    slug: "yogyakarta-culinary-odyssey",
    title: "Yogyakarta Royal Culinary Odyssey: Market to Table",
    shortDescription:
      "Uncover the secret flavors of Javanese royal cuisine in the heart of Yogyakarta.",
    description:
      "From bustling traditional markets to a royal-inspired kitchen, discover the intricate flavors and techniques behind Javanese cuisine with an expert culinary guide.",
    destination: "java",
    categories: ["culinary", "cultural"],
    durationDays: 1,
    minPax: 2,
    maxPax: 10,
    priceFrom: 55,
    groupDiscountPct: 15,
    isFeatured: false,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    ],
    inclusions: [
      { description: "Private transportation throughout" },
      { description: "Expert culinary guide" },
      { description: "Market visit with ingredient explanations" },
      { description: "Cooking class and lunch" },
    ],
    highlights: [
      "Beringharjo market exploration",
      "Cook 4 royal Javanese recipes",
      "Lunch in a heritage joglo house",
    ],
  },
  {
    slug: "bali-underwater-paradise",
    title: "Bali Underwater Paradise: Shipwreck & Mola Mola Diving",
    shortDescription:
      "Plunge into Bali's mesmerizing marine world on an exclusive diving adventure.",
    description:
      "Explore the USAT Liberty shipwreck in Tulamben and encounter the elusive Mola Mola (sunfish) around Nusa Penida on this 3-day diving expedition for certified divers.",
    destination: "bali",
    categories: ["diving"],
    durationDays: 3,
    minPax: 2,
    maxPax: 8,
    priceFrom: 450,
    groupDiscountPct: 15,
    isFeatured: false,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    ],
    inclusions: [
      { description: "Round-trip transfers from Bali accommodation" },
      { description: "3 days guided diving with PADI instructors" },
      { description: "All dive equipment rental" },
      { description: "2 nights beachfront accommodation" },
    ],
    highlights: [
      "USAT Liberty wreck dive at Tulamben",
      "Mola Mola encounter at Nusa Penida",
      "Coral garden snorkeling at Amed",
    ],
  },
  {
    slug: "bali-coffee-chocolate",
    title: "Bali's Aromatic Journey: Coffee & Chocolate Crafting",
    shortDescription:
      "Unveil the secrets of Bali's finest coffee and craft your own chocolate creations.",
    description:
      "Visit organic coffee plantations in the highlands, learn the art of roasting, and create handmade chocolate from locally sourced cacao beans.",
    destination: "bali",
    categories: ["culinary"],
    durationDays: 1,
    minPax: 2,
    maxPax: 12,
    priceFrom: 60,
    groupDiscountPct: 15,
    isFeatured: false,
    hasVideo: false,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    ],
    inclusions: [
      { description: "Private transportation with driver" },
      { description: "English-speaking guide" },
      { description: "Plantation entrance fees" },
      { description: "Coffee tasting and chocolate workshop" },
    ],
    highlights: [
      "Kintamani volcano coffee plantation",
      "Hands-on chocolate making workshop",
      "Traditional Balinese coffee ceremony",
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours() {
  return tours.filter((t) => t.isFeatured);
}

export function getToursByDestination(destination: string) {
  return tours.filter((t) => t.destination === destination);
}
