import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import api from '../lib/api'

const initialForm = {
  studentName: '', parentName: '', phone: '', email: '', grade: '', subject: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await api.post('/enquiries', form)
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="pt-40 pb-24 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block text-sm font-medium text-accent-cyan mb-6">Contact</span>
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
          Let's Start Your <span className="text-gradient">Learning Journey.</span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-white/5 bg-bg-card p-8">
            <h3 className="font-heading font-bold text-xl mb-6">PHYSICHEM</h3>
            <ul className="space-y-5 text-sm text-ink-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" /> [Coaching Centre Address]
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-blue mt-0.5 shrink-0" />
                <span>Physics Teacher: [Phone Number]<br />Chemistry Teacher: [Phone Number]</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-blue shrink-0" /> [Email Address]
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent-blue shrink-0" /> [WhatsApp Number]
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5 text-sm text-ink-secondary">
              <span className="block text-ink-secondary/60 mb-1">Class Timings</span>
              [Timings Placeholder]
            </div>
            <a
              href="https://wa.me/000000000000"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-semibold text-sm hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/5 h-56 bg-bg-card flex items-center justify-center text-ink-secondary text-sm text-center px-4">
            [Google Maps Embed Placeholder — replace with an iframe pointing to your centre's location]
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 rounded-3xl border border-white/5 bg-bg-card p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Student Name" name="studentName" value={form.studentName} onChange={handleChange} required />
            <Field label="Parent Name" name="parentName" value={form.parentName} onChange={handleChange} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Select label="Class" name="grade" value={form.grade} onChange={handleChange} options={['Class 9', 'Class 10', 'Class 11', 'Class 12']} />
            <Select label="Subject" name="subject" value={form.subject} onChange={handleChange} options={['Physics', 'Chemistry', 'Both']} />
          </div>
          <div>
            <label className="block text-sm text-ink-secondary mb-2">Message</label>
            <textarea
              name="message" rows={4} value={form.message} onChange={handleChange}
              className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3.5 rounded-full bg-accent-blue text-bg font-semibold text-sm hover:shadow-glow transition-all disabled:opacity-60"
          >
            {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
          </button>
          {status === 'success' && (
            <p className="text-accent-cyan text-sm text-center">Thank you! We'll get back to you shortly.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm text-ink-secondary mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-blue transition-colors"
      />
    </div>
  )
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-sm text-ink-secondary mb-2">{label}</label>
      <select
        {...props}
        className="w-full rounded-xl bg-bg border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent-blue transition-colors"
      >
        <option value="">Select</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
