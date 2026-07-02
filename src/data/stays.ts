export interface Stay {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

export const stays: Stay[] = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Diani Beach",
    price: "KSh 28,000 / night",
    rating: 4.9,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
  },
  {
    id: 2,
    title: "Oceanfront Apartment",
    location: "Galu Beach",
    price: "KSh 14,500 / night",
    rating: 4.8,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80",
  },
  {
    id: 3,
    title: "Private Pool Villa",
    location: "Tiwi",
    price: "KSh 35,000 / night",
    rating: 5.0,
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
];