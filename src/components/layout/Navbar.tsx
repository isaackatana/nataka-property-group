import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Properties", href: "#" },
  { name: "Holiday Stays", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <h1
            className={`text-2xl font-bold transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            NATAKA
          </h1>

          <span className="text-xs uppercase tracking-[5px] text-amber-500">
            Property Group
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-amber-500 ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/254700000000"
            className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-screen shadow-xl" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-slate-100 py-4 text-lg text-slate-700 transition hover:text-amber-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://wa.me/254700000000"
            className="mt-6 rounded-full bg-amber-500 py-4 text-center font-semibold text-white transition hover:bg-amber-600"
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}