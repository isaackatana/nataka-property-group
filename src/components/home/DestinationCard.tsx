import type { Destination } from "../../data/destinations";
import { ArrowRight } from "lucide-react";

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <div className="group relative h-[450px] overflow-hidden rounded-3xl">
      <img
        src={destination.image}
        alt={destination.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-0 p-8 text-white">
        <h3 className="text-3xl font-bold">
          {destination.title}
        </h3>

        <p className="mt-4 text-white/80">
          {destination.description}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-amber-400">
          Explore
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}