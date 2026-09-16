import { useEffect, useState } from 'react'
import { Plus, Pencil, Trash2, User } from 'lucide-react'
import api from '../../lib/api'

const empty = { name: '', subject: 'Physics', classes: '9-12', qualification: '', experience: '', bio: '' }

export default function AdminTeachers() {
  const [teachers, setTeachers] = useState([])
  const [form, setForm] = useState(empty)
  const [editingId, setEditingId] = useState(null)
  const [open, setOpen] = useState(false)

  const load = () => api.get('/teachers').then(({ data }) => setTeachers(data)).catch(() => {})
  useEffect(() => { load() }, [])

  const openNew = () => { setForm(empty); setEditingId(null); setOpen(true) }
  const openEdit = (t) => { setForm(t); setEditingId(t._id); setOpen(true) }

  const save = async (e) => {
    e.preventDefault()
    if (editingId) await api.put(`/teachers/${editingId}`, form)
    else await api.post('/teachers', form)
    setOpen(false)
    load()
  }

  const remove = async (id) => {
    if (!confirm('Delete this teacher?')) return
    await api.delete(`/teachers/${id}`)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading font-bold text-2xl">Manage Teachers</h1>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-blue text-bg font-semibold text-sm">
          <Plus className="w-4 h-4" /> Add Teacher
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <div key={t._id} className="rounded-2xl border border-white/5 bg-bg-card p-6">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 overflow-hidden">
              {t.photoUrl ? <img src={t.photoUrl} alt={t.name} className="w-full h-full object-cover" /> : <User className="w-6 h-6 text-ink-secondary/40" />}
            </div>
            <h3 className="font-heading font-semibold">{t.name}</h3>
            <p className="text-xs text-accent-cyan mb-3">{t.subject} · Classes {t.classes}</p>
            <p className="text-ink-secondary text-sm mb-4 line-clamp-2">{t.bio}</p>
            <div className="flex gap-2">
              <button onClick={() => openEdit(t)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-xs hover:border-accent-blue">
                <Pencil className="w-3.5 h-3.5" /> Edit
              </button>
              <button onClick={() => remove(t._id)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-white/10 text-xs hover:border-red-400 hover:text-red-400">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <form onSubmit={save} className="w-full max-w-lg rounded-3xl bg-bg-card border border-white/10 p-8 space-y-4">
            <h2 className="font-heading font-bold text-xl mb-2">{editingId ? 'Edit Teacher' : 'Add Teacher'}</h2>
            <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm">
              <option>Physics</option>
              <option>Chemistry</option>
            </select>
            <input placeholder="Classes (e.g. 9-12)" value={form.classes} onChange={(e) => setForm({ ...form, classes: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <input placeholder="Qualification" value={form.qualification} onChange={(e) => setForm({ ...form, qualification: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <input placeholder="Experience" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm" />
            <textarea placeholder="Short bio" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={3}
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
