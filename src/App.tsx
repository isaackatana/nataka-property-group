import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChoose from "./components/home/WhyChoose";
import Services from "./components/home/Services";
import FeaturedStays from "./components/home/FeaturedStays";
import DiscoverDiani from "./components/home/DiscoverDiani";

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
    </>
  );
}