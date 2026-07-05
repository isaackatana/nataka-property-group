import { useParams, Link } from "react-router-dom";
import {
  Bath,
  BedDouble,
  MapPin,
  Ruler,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Property Not Found
            </h1>

            <Link
              to="/properties"
              className="mt-6 inline-block rounded-full bg-amber-500 px-6 py-3 text-white"
            >
              Back to Properties
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Image */}
      <section className="pt-24">
        <img
          src={property.thumbnail}
          alt={property.title}
          className="h-[60vh] w-full object-cover"
        />
      </section>

      {/* Details */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          <Link
            to="/properties"
            className="mb-8 inline-flex items-center gap-2 text-amber-500 hover:text-amber-600"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>

          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left */}
            <div className="lg:col-span-2">

              <span className="rounded-full bg-amber-500 px-4 py-2 text-sm text-white">
                {property.status}
              </span>

              <h1 className="mt-6 text-5xl font-bold">
                {property.title}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-slate-500">
                <MapPin size={18} />
                {property.location}
              </p>

              <div className="mt-10 flex flex-wrap gap-8">

                <div className="flex items-center gap-2">
                  <BedDouble />
                  {property.beds} Bedrooms
                </div>

                <div className="flex items-center gap-2">
                  <Bath />
                  {property.baths} Bathrooms
                </div>

                <div className="flex items-center gap-2">
                  <Ruler />
                  {property.area}
                </div>

              </div>

              <h2 className="mt-12 text-3xl font-bold">
                Description
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                This beautiful property offers spacious living,
                modern finishes, excellent investment potential,
                and a prime location along Kenya's coast.
                Replace this text with the real description
                stored in your property data.
              </p>

              <h2 className="mt-12 text-3xl font-bold">
                Features
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">

                <div>✔ Swimming Pool</div>

                <div>✔ Garden</div>

                <div>✔ Ocean View</div>

                <div>✔ Parking</div>

                <div>✔ Air Conditioning</div>

                <div>✔ Security</div>

              </div>

            </div>

            {/* Sidebar */}
            <div>

              <div className="sticky top-28 rounded-3xl bg-slate-50 p-8 shadow-lg">

                <h2 className="text-4xl font-bold text-amber-500">
                  {property.price}
                </h2>

                <button className="mt-8 w-full rounded-xl bg-amber-500 py-4 font-semibold text-white hover:bg-amber-600">
                  Contact Agent
                </button>

                <button className="mt-4 w-full rounded-xl border py-4 font-semibold hover:bg-slate-100">
                  WhatsApp
                </button>

                <button className="mt-4 w-full rounded-xl border py-4 font-semibold hover:bg-slate-100">
                  Share Property
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}