import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Atom } from 'lucide-react'
import { useAdminAuth } from '../../context/AdminAuthContext'

export default function AdminLogin() {
  const { login } = useAdminAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await login(form.email, form.password)
      navigate('/admin')
    } catch (err) {
      setError('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6 bg-grid-pattern">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-3xl border border-white/5 bg-bg-card p-8">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <span className="w-10 h-10 flex items-center justify-center rounded-full border border-accent-blue/40">
            <Atom className="w-5 h-5 text-accent-blue" />
          </span>
          <span className="font-heading font-bold text-lg">Physi<span className="text-gradient">Chem</span></span>
        </div>
        <h1 className="font-heading font-semibold text-xl text-center mb-6">Admin Login</h1>
        <div className="space-y-4">
          <input
            type="email" placeholder="Email" required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-blue"
          />
          <input
            type="password" placeholder="Password" required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-blue"
          />
        </div>
        {error && <p className="text-red-400 text-xs mt-4 text-center">{error}</p>}
        <button
          type="submit" disabled={loading}
          className="w-full mt-6 px-6 py-3 rounded-full bg-accent-blue text-bg font-semibold text-sm hover:shadow-glow transition-all disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
