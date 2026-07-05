import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            NATAKA
          </h2>

          <p className="mb-6 text-sm uppercase tracking-[5px] text-amber-500">
            Property Group
          </p>

          <p className="leading-7">
            Connecting people with exceptional homes, holiday stays and
            investment opportunities across Kenya's coast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Holiday Stays</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3">
            <li>Property Sales</li>
            <li>Holiday Stays</li>
            <li>Property Marketing</li>
            <li>Travel Services</li>
            <li>Investment Advisory</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4">
            <p className="flex gap-3">
              <Phone size={18} />
              +254 XXX XXX XXX
            </p>

            <p className="flex gap-3">
              <Mail size={18} />
              info@natakapropertygroup.co.ke
            </p>

            <p className="flex gap-3">
              <MapPin size={18} />
              Diani Beach, Kenya
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Nataka Property Group.
        All rights reserved.
      </div>
    </footer>
  );
}