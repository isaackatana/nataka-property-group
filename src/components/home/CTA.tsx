import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <p className="uppercase tracking-[6px] text-amber-400">
          Ready To Get Started?
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
          Find Your Dream Property
          <br />
          Along Kenya's Coast
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Whether you're buying, selling, investing or planning your next
          holiday, Nataka Property Group is here to guide you every step of the
          way.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
          <button className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600">
            Browse Properties
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-slate-900">
            Contact Us
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}