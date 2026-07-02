export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    title: "Diani Beach",
    description: "One of Africa's most beautiful white-sand beaches.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
  },
  {
    id: 2,
    title: "Golf & Leisure",
    description: "Championship golf courses and luxury resorts.",
    image:
      "https://images.unsplash.com/photo-1592919505780-303950717480?w=900&q=80",
  },
  {
    id: 3,
    title: "Restaurants",
    description: "Discover amazing restaurants and beachfront cafés.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
  },
  {
    id: 4,
    title: "Marine Adventures",
    description: "Snorkeling, diving and unforgettable ocean experiences.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80",
  },
];