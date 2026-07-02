import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-white">
            NATAKA
          </h1>

          <p className="text-xs uppercase tracking-[4px] text-amber-400">
            Property Group
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-white lg:flex">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">Holiday Stays</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600">
            Get in Touch
          </button>
        </div>

        {/* Mobile */}
        <button className="text-white lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}