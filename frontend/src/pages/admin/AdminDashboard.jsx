import { useEffect, useState } from 'react'
import { Inbox, Users, BookOpen, Bell } from 'lucide-react'
import api from '../../lib/api'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalEnquiries: 0, newEnquiries: 0, totalTeachers: 0, totalCourses: 0 })

  useEffect(() => {
    api.get('/admin/stats').then(({ data }) => setStats(data)).catch(() => {})
  }, [])

  const cards = [
    { label: 'Total Enquiries', value: stats.totalEnquiries, icon: Inbox },
    { label: 'New Enquiries', value: stats.newEnquiries, icon: Bell },
    { label: 'Total Teachers', value: stats.totalTeachers, icon: Users },
    { label: 'Total Courses', value: stats.totalCourses, icon: BookOpen },
  ]

  return (
    <div>
      <h1 className="font-heading font-bold text-2xl mb-8">Dashboard Overview</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-white/5 bg-bg-card p-6">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-accent-blue" />
            </div>
            <p className="text-3xl font-heading font-bold">{value}</p>
            <p className="text-ink-secondary text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
