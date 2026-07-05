import { properties } from "../../data/properties";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Available Properties
          </h2>

          <span className="text-slate-500">
            {properties.length} Listings
          </span>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

      </div>
    </section>
  );
}