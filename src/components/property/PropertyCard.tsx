import {
  Bath,
  BedDouble,
  Camera,
  MapPin,
  Ruler,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { Property } from "../../types/property";
import { formatCurrency } from "../../utils/formatCurrency";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.thumbnail}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status */}
        <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold text-white">
          {property.status}
        </span>

        {/* Featured */}
        {property.featured && (
          <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            Featured
          </span>
        )}

        {/* Image Count */}
        <span className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs text-white backdrop-blur">
          <Camera size={14} />
          {property.images.length}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {property.type}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {property.title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-slate-500">
            <MapPin size={16} />
            {property.location}
          </p>
        </div>

        {/* Features */}
        <div className="flex justify-between border-y border-slate-100 py-4 text-slate-600">
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
            {property.area} sqm
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-amber-600">
            {formatCurrency(property.price)}
          </h4>

          <Link
            to={`/properties/${property.slug}`}
            className="rounded-full bg-slate-900 px-5 py-2 text-white transition hover:bg-amber-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}