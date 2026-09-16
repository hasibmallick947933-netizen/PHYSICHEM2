import { Navigate, Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import { useAdminAuth } from '../../context/AdminAuthContext'

export default function AdminLayout() {
  const { admin } = useAdminAuth()
  if (!admin) return <Navigate to="/admin/login" replace />

  return (
    <div className="flex bg-bg min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 lg:p-10">
        <Outlet />
      </main>
    </div>
  )
}
