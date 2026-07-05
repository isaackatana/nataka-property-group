import { Star } from "lucide-react";
import type { Testimonial } from "../../data/testimonials";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      <p className="mb-8 leading-8 text-slate-600">
        "{testimonial.comment}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>

          <p className="text-sm text-slate-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}