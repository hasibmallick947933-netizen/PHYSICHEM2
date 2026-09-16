import { useEffect, useState } from 'react'
import api from '../../lib/api'

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([])

  const load = () => api.get('/enquiries').then(({ data }) => setEnquiries(data)).catch(() => {})
  useEffect(() => { load() }, [])

  const updateStatus = async (id, status) => {
    await api.patch(`/enquiries/${id}`, { status })
    load()
  }

  return (
    <div>
      <h1 className="font-heading font-bold text-2xl mb-8">Enquiries</h1>
      <div className="rounded-2xl border border-white/5 bg-bg-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink-secondary border-b border-white/5">
              <th className="p-4">Student</th>
              <th className="p-4">Parent</th>
              <th className="p-4">Class</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e._id} className="border-b border-white/5 last:border-0">
                <td className="p-4">{e.studentName}</td>
                <td className="p-4 text-ink-secondary">{e.parentName || '—'}</td>
                <td className="p-4 text-ink-secondary">{e.grade || '—'}</td>
                <td className="p-4 text-ink-secondary">{e.subject || '—'}</td>
                <td className="p-4 text-ink-secondary">{e.phone}</td>
                <td className="p-4">
                  <select
                    value={e.status}
                    onChange={(ev) => updateStatus(e._id, ev.target.value)}
                    className="rounded-full px-3 py-1 text-xs bg-transparent border border-white/10"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
                <td className="p-4 text-ink-secondary">{new Date(e.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {enquiries.length === 0 && (
              <tr><td colSpan={7} className="p-8 text-center text-ink-secondary">No enquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
