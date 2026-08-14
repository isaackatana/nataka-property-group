import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand-200 bg-charcoal-900 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">Nataka Property Group</p>
          <p className="mt-2 text-sm text-charcoal-300">
            Property sales, rentals, and management on Diani Beach and the Kenyan Coast.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-300">
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/property-management">Property Management</Link></li>
            <li><Link to="/sell">Sell Your Property</Link></li>
            <li><Link to="/areas">Areas We Serve</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-300">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-300">
            <li>Diani Beach, Kenya</li>
            <li>WhatsApp / Phone (added in Phase 7)</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800 px-4 py-4 text-center text-xs text-charcoal-300">
        © {new Date().getFullYear()} Nataka Property Group. All rights reserved.
      </div>
    </footer>
  )
}
