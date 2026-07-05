export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    role: "Property Buyer",
    comment:
      "Nataka Property Group made finding our dream holiday home incredibly easy. Professional, responsive and trustworthy.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "James Otieno",
    role: "Investor",
    comment:
      "Their knowledge of the Diani property market helped me invest with confidence. Highly recommended.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Holiday Guest",
    comment:
      "Our beachfront villa was exactly as advertised. The entire booking experience was smooth from start to finish.",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
];