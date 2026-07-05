import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[5px] text-amber-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            Building lasting relationships through trust, professionalism,
            and exceptional service.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}