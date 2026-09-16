import { Link } from 'react-router-dom'
import { Atom, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/5 pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full border border-accent-blue/40">
              <Atom className="w-5 h-5 text-accent-blue" />
            </span>
            <span className="font-heading font-bold text-lg">Physi<span className="text-gradient">Chem</span></span>
          </div>
          <p className="text-ink-secondary text-sm leading-relaxed">Understand the Concept. Master the Science.</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-ink-secondary">
            <li><Link to="/" className="hover:text-accent-blue transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent-blue transition-colors">About</Link></li>
            <li><Link to="/teachers" className="hover:text-accent-blue transition-colors">Teachers</Link></li>
            <li><Link to="/courses" className="hover:text-accent-blue transition-colors">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-accent-blue transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Subjects</h4>
          <ul className="space-y-3 text-sm text-ink-secondary">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Classes 9-12</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-ink-secondary">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent-blue shrink-0" /> [Coaching Centre Address]</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent-blue shrink-0" /> [Phone Number]</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent-blue shrink-0" /> [Email Address]</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-accent-blue hover:text-accent-blue transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/5 text-center text-xs text-ink-secondary">
        © 2026 PHYSICHEM. All rights reserved.
      </div>
    </footer>
  )
}
