import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChoose from "./components/home/WhyChoose";
import Services from "./components/home/Services";
import FeaturedStays from "./components/home/FeaturedStays";
import DiscoverDiani from "./components/home/DiscoverDiani";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <WhyChoose/>
      <Services/>
      <FeaturedStays/>
      <DiscoverDiani/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}