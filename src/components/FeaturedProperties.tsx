import PropertyCard from "./PropertyCard";
import { properties } from "../data/properties";

export default function FeaturedProperties() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[5px] text-amber-500">
            Featured Listings
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Discover Exceptional Properties
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Explore handpicked homes, beachfront villas, and investment
            opportunities across Diani and the Kenyan coast.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
      </div>
    </section>
  );
}