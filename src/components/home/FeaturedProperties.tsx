import { Link } from "react-router-dom";
import { properties } from "../../data/properties";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import PropertyCard from "../property/PropertyCard";

export default function FeaturedProperties() {
  // Show only featured properties
  const featuredProperties = properties.filter(
    (property) => property.featured
  );

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          subtitle="Featured Properties"
          title="Find Your Dream Property"
          description="Browse our handpicked collection of premium homes, beachfront villas, apartments, and investment opportunities along Kenya's beautiful coast."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/properties"
            className="rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-500"
          >
            View All Properties
          </Link>
        </div>
      </Container>
    </section>
  );
}