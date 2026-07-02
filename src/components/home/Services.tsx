import {
  Home,
  Building2,
  Plane,
  KeyRound,
  Camera,
  MapPinned,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description:
      "Buy premium homes, villas, apartments and land across Diani and the Kenyan coast.",
  },
  {
    icon: Building2,
    title: "Property Rentals",
    description:
      "Discover long-term and short-term rental properties that fit your lifestyle.",
  },
  {
    icon: KeyRound,
    title: "Holiday Stays",
    description:
      "Book luxury villas, beachfront apartments and holiday homes with ease.",
  },
  {
    icon: Plane,
    title: "Travel Services",
    description:
      "Airport transfers, local travel assistance and curated coastal experiences.",
  },
  {
    icon: Camera,
    title: "Property Marketing",
    description:
      "Professional photography, video tours and digital marketing for property owners.",
  },
  {
    icon: MapPinned,
    title: "Investment Advisory",
    description:
      "Expert guidance for investors looking to grow their portfolio on Kenya's coast.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[5px] text-amber-500">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Everything You Need
            <br />
            Under One Roof
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Whether you're buying, selling, renting or planning your next
            coastal escape, Nataka Property Group is here to help.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-500">
                  <Icon
                    size={30}
                    className="text-amber-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}