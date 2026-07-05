import { Search } from "lucide-react";

export default function PropertyFilters() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-5">

        <input
          placeholder="Search..."
          className="rounded-xl border p-3"
        />

        <select className="rounded-xl border p-3">
          <option>Property Type</option>
        </select>

        <select className="rounded-xl border p-3">
          <option>Bedrooms</option>
        </select>

        <select className="rounded-xl border p-3">
          <option>Price Range</option>
        </select>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 p-3 font-semibold text-white hover:bg-amber-600">
          <Search size={18} />

          Search
        </button>

      </div>
    </section>
  );
}