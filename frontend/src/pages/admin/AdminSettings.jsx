import { useAdminAuth } from '../../context/AdminAuthContext'

export default function AdminSettings() {
  const { admin } = useAdminAuth()
  return (
    <div>
      <h1 className="font-heading font-bold text-2xl mb-8">Site Settings</h1>
      <div className="rounded-2xl border border-white/5 bg-bg-card p-8 max-w-lg">
        <p className="text-ink-secondary text-sm mb-2">Logged in as</p>
        <p className="font-semibold">{admin?.email}</p>
        <p className="text-ink-secondary text-sm mt-6">
          Site-wide settings (contact details, social links, WhatsApp number) can be
          extended here and wired to a future <code className="text-accent-cyan">/api/settings</code> endpoint.
        </p>
      </div>
    </div>
  )
}
