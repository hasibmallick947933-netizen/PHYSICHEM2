import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, BookOpen, Inbox, Settings, LogOut, Atom } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext'

const links = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/teachers', label: 'Teachers', icon: Users },
  { to: '/admin/courses', label: 'Courses', icon: BookOpen },
  { to: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminSidebar() {
  const { logout } = useAdminAuth()
  const navigate = useNavigate()

  return (
    <aside className="w-64 shrink-0 bg-bg-secondary border-r border-white/5 min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-10">
        <span className="w-9 h-9 flex items-center justify-center rounded-full border border-accent-blue/40">
          <Atom className="w-5 h-5 text-accent-blue" />
        </span>
        <span className="font-heading font-bold">Physi<span className="text-gradient">Chem</span></span>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-ink-secondary hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon className="w-4 h-4" /> {label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={() => { logout(); navigate('/admin/login') }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-ink-secondary hover:bg-white/5 hover:text-red-400 transition-colors"
      >
        <LogOut className="w-4 h-4" /> Log Out
      </button>
    </aside>
  )
}
