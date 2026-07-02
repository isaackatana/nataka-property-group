import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "../types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white">
          {property.status}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-bold">{property.title}</h3>

          <p className="mt-2 flex items-center gap-2 text-slate-500">
            <MapPin size={16} />
            {property.location}
          </p>
        </div>

        <div className="flex justify-between text-slate-600">
          <span className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.beds} Beds
          </span>

          <span className="flex items-center gap-2">
            <Bath size={18} />
            {property.baths} Baths
          </span>

          <span className="flex items-center gap-2">
            <Ruler size={18} />
            {property.area}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-amber-600">
            {property.price}
          </h4>

          <button className="rounded-full bg-slate-900 px-5 py-2 text-white transition hover:bg-amber-500">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}