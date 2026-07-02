import StayCard from "./StayCard";
import { stays } from "../../data/stays";

export default function FeaturedStays() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[5px] text-amber-500">
            Holiday Stays
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Escape to the Coast
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Discover handpicked villas, apartments and beachfront homes for
            your next holiday in Diani.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>

      </div>
    </section>
  );
}