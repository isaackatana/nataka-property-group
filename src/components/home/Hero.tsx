import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-4 uppercase tracking-[6px] text-amber-400">
          Welcome to Nataka Property Group
        </p>

        <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
          Find Your Place on Kenya's Coast
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
          Premium properties, holiday homes, and investment opportunities in
          Diani and across the Kenyan coast.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-amber-500 px-8 py-4 font-semibold transition hover:bg-amber-600">
            Browse Properties
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black">
            Explore Diani
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}