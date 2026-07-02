import { Star, Users, BedDouble, Bath } from "lucide-react";
import type { Stay } from "../../data/stays";

interface Props {
  stay: Stay;
}

export default function StayCard({ stay }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={stay.image}
          alt={stay.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{stay.title}</h3>

          <div className="flex items-center gap-1">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            {stay.rating}
          </div>
        </div>

        <p className="text-slate-500">{stay.location}</p>

        <div className="flex justify-between text-sm text-slate-600">
          <span className="flex items-center gap-1">
            <Users size={16} />
            {stay.guests}
          </span>

          <span className="flex items-center gap-1">
            <BedDouble size={16} />
            {stay.bedrooms}
          </span>

          <span className="flex items-center gap-1">
            <Bath size={16} />
            {stay.bathrooms}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold text-amber-600">
            {stay.price}
          </p>

          <button className="rounded-full bg-slate-900 px-5 py-2 text-white hover:bg-amber-500">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}