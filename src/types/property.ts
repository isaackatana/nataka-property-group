export interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  status: "For Sale" | "For Rent" | "Holiday Home";
  type: string;
  featured: boolean;
  description: string;
  amenities: string[];
  thumbnail: string;
  images: string[];
  latitude: number;
  longitude: number;
}