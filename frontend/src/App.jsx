import { Routes, Route } from 'react-router-dom'
import { AdminAuthProvider } from './context/AdminAuthContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Teachers from './pages/Teachers'
import Courses from './pages/Courses'
import Methodology from './pages/Methodology'
import Contact from './pages/Contact'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminTeachers from './pages/admin/AdminTeachers'
import AdminCourses from './pages/admin/AdminCourses'
import AdminEnquiries from './pages/admin/AdminEnquiries'
import AdminSettings from './pages/admin/AdminSettings'

function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="/" element={<SiteLayout><Home /></SiteLayout>} />
        <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
        <Route path="/teachers" element={<SiteLayout><Teachers /></SiteLayout>} />
        <Route path="/courses" element={<SiteLayout><Courses /></SiteLayout>} />
        <Route path="/methodology" element={<SiteLayout><Methodology /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="enquiries" element={<AdminEnquiries />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </AdminAuthProvider>
  )
}
