import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import api from '../../lib/api'

const empty = { grade: '9', subjects: 'Physics, Chemistry', description: '', timings: '', fees: '' }

export default function AdminCourses() {
  const [courses, setCourses] = useState([])
  const [form, setForm] = useState(empty)
  const [editingId, setEditingId] = useState(null)
  const [open, setOpen] = useState(false)

  const load = () => api.get('/courses').then(({ data }) => setCourses(data)).catch(() => {})
  useEffect(() => { load() }, [])

  const openNew = () => { setForm(empty); setEditingId(null); setOpen(true) }
  const openEdit = (c) => { setForm(c); setEditingId(c._id); setOpen(true) }

  const save = async (e) => {
    e.preventDefault()
    if (editingId) await api.put(`/courses/${editingId}`, form)
    else await api.post('/courses', form)
    setOpen(false)
    load()
  }

  const remove = async (id) => {
    if (!confirm('Delete this course?')) return
    await api.delete(`/courses/${id}`)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-2xl">Manage Courses</h1>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-blue text-bg font-semibold text-sm">
          <Plus className="w-4 h-4" /> Add Course
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div key={c._id} className="rounded-2xl border border-white/5 bg-bg-card p-6">
            <h3 className="font-heading font-bold text-xl mb-1">Class {c.grade}</h3>
            <p className="text-xs text-accent-cyan mb-3">{c.subjects}</p>
            <p className="text-ink-secondary text-sm mb-4 line-clamp-2">{c.description}</p>
            <div className="flex gap-2">
              <button onClick={() => openEdit(c)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-xs hover:border-accent-blue">
                <Pencil className="w-3.5 h-3.5" /> Edit
              </button>
              <button onClick={() => remove(c._id)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-xs hover:border-red-400 hover:text-red-400">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <form onSubmit={save} className="w-full max-w-lg rounded-3xl bg-bg-card border border-white/10 p-8 space-y-4">
            <h2 className="font-heading font-bold text-xl mb-2">{editingId ? 'Edit Course' : 'Add Course'}</h2>
            <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm">
              {['9', '10', '11', '12'].map((g) => <option key={g} value={g}>Class {g}</option>)}
            </select>
            <input placeholder="Subjects" value={form.subjects} onChange={(e) => setForm({ ...form, subjects: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <input placeholder="Timings" value={form.timings} onChange={(e) => setForm({ ...form, timings: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <input placeholder="Fees" value={form.fees} onChange={(e) => setForm({ ...form, fees: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setOpen(false)} className="flex-1 px-5 py-3 rounded-full border border-white/10 text-sm">Cancel</button>
              <button type="submit" className="flex-1 px-5 py-3 rounded-full bg-accent-blue text-bg font-semibold text-sm">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
