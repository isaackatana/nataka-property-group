import { Link } from 'react-router-dom'
import { Heart, Menu, User } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Properties', to: '/properties' },
  { label: 'Property Management', to: '/property-management' },
  { label: 'Sell Your Property', to: '/sell' },
  { label: 'Areas We Serve', to: '/areas' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight text-teal-700">
          Nataka Property Group
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-charcoal-600 transition-colors hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/favorites" aria-label="Favorites" className="text-charcoal-600 hover:text-teal-700">
            <Heart size={20} />
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-1.5 rounded-full border border-teal-600 px-4 py-2 text-sm text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
          >
            <User size={16} />
            Login
          </Link>
        </div>

        <button
          className="text-charcoal-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sand-200 px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-charcoal-600 hover:bg-sand-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-2 text-sm font-medium text-teal-700 hover:bg-sand-100"
          >
            Login / Register
          </Link>
        </nav>
      )}
    </header>
  )
}
