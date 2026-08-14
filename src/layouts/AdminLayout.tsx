import { Link, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Building2,
  Mail,
  CalendarCheck,
  Users,
  UserSquare2,
  Star,
  Settings,
} from 'lucide-react'

const adminNav = [
  { label: 'Dashboard', to: '/admin', icon: LayoutDashboard },
  { label: 'Properties', to: '/admin/properties', icon: Building2 },
  { label: 'Enquiries', to: '/admin/enquiries', icon: Mail },
  { label: 'Viewing Requests', to: '/admin/viewings', icon: CalendarCheck },
  { label: 'Users', to: '/admin/users', icon: Users },
  { label: 'Property Owners', to: '/admin/owners', icon: UserSquare2 },
  { label: 'Agents', to: '/admin/agents', icon: UserSquare2 },
  { label: 'Testimonials', to: '/admin/testimonials', icon: Star },
  { label: 'Settings', to: '/admin/settings', icon: Settings },
]

/**
 * Layout for /admin/*. Real auth + role guarding (redirect non-admins)
 * is wired up in Phase 12 once the admin dashboard is built — this is
 * the visual shell only.
 */
export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-sand-50">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-sand-200 bg-charcoal-900 text-sand-100 md:flex">
        <div className="px-5 py-5 text-sm font-semibold tracking-wide text-white">
          NATAKA ADMIN
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {adminNav.map(({ label, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-charcoal-300 transition-colors hover:bg-charcoal-800 hover:text-white"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
