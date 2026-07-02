import {
  ShieldCheck,
  MapPinned,
  Handshake,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every listing is carefully reviewed to ensure quality and authenticity.",
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description:
      "Deep knowledge of Diani and Kenya's coast to help you make informed decisions.",
  },
  {
    icon: Handshake,
    title: "Trusted Service",
    description:
      "Professional support from inquiry to closing with honesty and transparency.",
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description:
      "Reach us anytime via WhatsApp, phone or email for quick assistance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-amber-500">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Experience Coastal Real Estate
            <br />
            Done Right
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We combine local expertise, trusted partnerships and exceptional
            customer service to help you find the perfect property or holiday
            experience.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                  <Icon size={30} className="text-amber-600" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}