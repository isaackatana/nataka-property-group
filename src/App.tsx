import { Routes, Route } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import AdminLayout from '@/layouts/AdminLayout'

import Home from '@/pages/Home'
import Properties from '@/pages/Properties'
import PropertyDetails from '@/pages/PropertyDetails'
import PropertyManagement from '@/pages/PropertyManagement'
import SellYourProperty from '@/pages/SellYourProperty'
import AreasWeServe from '@/pages/AreasWeServe'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Favorites from '@/pages/Favorites'
import MyEnquiries from '@/pages/MyEnquiries'
import MyViewingRequests from '@/pages/MyViewingRequests'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'

import AdminDashboard from '@/pages/admin/Dashboard'

export default function App() {
  return (
    <Routes>
      {/* Public site — shares Navbar/Footer via MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        {/* SEO-friendly slug route, e.g. /properties/luxury-beach-villa-diani — built in Phase 7 */}
        <Route path="/properties/:slug" element={<PropertyDetails />} />
        <Route path="/property-management" element={<PropertyManagement />} />
        <Route path="/sell" element={<SellYourProperty />} />
        <Route path="/areas" element={<AreasWeServe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected in Phase 4 once auth exists — placeholder routes for now */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-enquiries" element={<MyEnquiries />} />
        <Route path="/my-viewings" element={<MyViewingRequests />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin dashboard — role-guarded in Phase 12, separate layout (no public navbar/footer) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}
