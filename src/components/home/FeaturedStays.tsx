import { Link } from "react-router-dom";
import { stays } from "../../data/stays";
import StayCard from "../stay/StayCard";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";

export default function FeaturedStays() {
  const featuredStays = stays.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          subtitle="Holiday Stays"
          title="Experience Diani in Comfort"
          description="Discover handpicked beachfront villas, luxury apartments, and holiday homes perfect for your next coastal getaway."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredStays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/holiday-stays"
            className="rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-500"
          >
            View All Holiday Stays
          </Link>
        </div>
      </Container>
    </section>
  );
}