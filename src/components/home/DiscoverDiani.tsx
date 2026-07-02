import DestinationCard from "./DestinationCard";
import { destinations } from "../../data/destinations";

export default function DiscoverDiani() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center text-white">

          <p className="uppercase tracking-[5px] text-amber-400">
            Explore Diani
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            More Than a Destination
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Discover why thousands of visitors and investors fall in love with
            Kenya's most beautiful coastline.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>

      </div>
    </section>
  );
}