import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import FeaturedProperties from "../components/home/FeaturedProperties";
import WhyChoose from "../components/home/WhyChoose";
import Services from "../components/home/Services";
import FeaturedStays from "../components/home/FeaturedStays";
import DiscoverDiani from "../components/home/DiscoverDiani";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <FeaturedProperties />

      <WhyChoose />

      <Services />

      <FeaturedStays />

      <DiscoverDiani />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}