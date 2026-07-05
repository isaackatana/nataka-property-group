import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PropertyGrid from "../components/property/PropertyGrid";
import PropertyHero from "../components/property/PropertyHero";
import PropertyFilters from "../components/property/PropertyFilters";

export default function Properties() {
  return (
    <>
      <Navbar />

      <PropertyHero />

      <PropertyFilters />

      <PropertyGrid />

      <Footer />
    </>
  );
}