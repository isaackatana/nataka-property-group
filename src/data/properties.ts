import type { Property } from "../types/property";

export const properties: Property[] = [
  {
    id: 1,
    slug: "luxury-beach-villa-diani",
    title: "Luxury Beach Villa",
    location: "Diani Beach",
    price: 65000000,
    beds: 4,
    baths: 3,
    area: 450,
    status: "For Sale",
    type: "Villa",
    featured: true,
    description:
      "A stunning beachfront villa featuring spacious living areas, a private swimming pool, lush tropical gardens, and direct access to Diani Beach.",
    amenities: [
      "Swimming Pool",
      "Ocean View",
      "Garden",
      "Air Conditioning",
      "Parking",
      "Beach Access",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    ],
    latitude: -4.282,
    longitude: 39.594,
  },

  {
    id: 2,
    slug: "modern-apartment-galu",
    title: "Modern Apartment",
    location: "Galu Beach",
    price: 18500000,
    beds: 2,
    baths: 2,
    area: 145,
    status: "For Sale",
    type: "Apartment",
    featured: true,
    description:
      "Modern apartment located just minutes from Galu Beach, offering contemporary finishes, secure parking, and excellent rental investment potential.",
    amenities: [
      "Balcony",
      "Swimming Pool",
      "Security",
      "Parking",
      "Internet",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    ],
    latitude: -4.306,
    longitude: 39.581,
  },

  {
    id: 3,
    slug: "ocean-view-villa-tiwi",
    title: "Ocean View Villa",
    location: "Tiwi Beach",
    price: 42000000,
    beds: 5,
    baths: 4,
    area: 620,
    status: "Holiday Home",
    type: "Villa",
    featured: false,
    description:
      "Luxury holiday villa with breathtaking ocean views, expansive terraces, private pool, and beautifully landscaped gardens.",
    amenities: [
      "Private Pool",
      "Ocean View",
      "Garden",
      "BBQ Area",
      "Parking",
      "Wi-Fi",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    ],
    latitude: -4.248,
    longitude: 39.622,
  },
];