import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative z-20 mx-auto -mt-20 max-w-7xl px-6">
      <div className="rounded-3xl bg-white p-6 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-5">
          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Location
            </label>

            <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500">
              <option>Diani Beach</option>
              <option>Ukunda</option>
              <option>Galu</option>
              <option>Tiwi</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Property
            </label>

            <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500">
              <option>Villa</option>
              <option>Apartment</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Bedrooms
            </label>

            <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Budget
            </label>

            <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-amber-500">
              <option>Any</option>
              <option>Under KSh 5M</option>
              <option>KSh 5M - 15M</option>
              <option>KSh 15M+</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex items-end">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}