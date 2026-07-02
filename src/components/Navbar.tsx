import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Properties", href: "#" },
  { label: "Holiday Stays", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1
            className={`text-2xl font-bold transition ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            NATAKA
          </h1>

          <p className="text-xs uppercase tracking-[4px] text-amber-500">
            Property Group
          </p>
        </div>

        {/* Desktop */}
        <nav className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium transition hover:text-amber-500 ${
                scrolled ? "text-slate-800" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-full bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600 lg:block">
          WhatsApp Us
        </button>

        <button
          className={`lg:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}