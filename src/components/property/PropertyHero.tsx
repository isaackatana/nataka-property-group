export default function PropertyHero() {
  return (
    <section className="relative h-[50vh]">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
        className="h-full w-full object-cover"
        alt="Properties"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">

          <h1 className="text-6xl font-bold">
            Our Properties
          </h1>

          <p className="mt-5 text-xl text-slate-200">
            Discover exceptional homes across Kenya's coast.
          </p>

        </div>
      </div>
    </section>
  );
}