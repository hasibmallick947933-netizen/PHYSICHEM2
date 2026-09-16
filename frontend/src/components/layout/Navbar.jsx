import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Atom } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/teachers', label: 'Teachers' },
  { to: '/courses', label: 'Courses' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative w-9 h-9 flex items-center justify-center rounded-full border border-accent-blue/40">
            <Atom className="w-5 h-5 text-accent-blue group-hover:rotate-90 transition-transform duration-500" />
          </span>
          <span className="font-heading font-bold text-lg tracking-wide">
            Physi<span className="text-gradient">Chem</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-ink-secondary hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative pb-1">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent-blue text-bg font-semibold text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-between items-center px-6 h-20">
              <span className="font-heading font-bold text-lg">Physi<span className="text-gradient">Chem</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="w-7 h-7" />
              </button>
            </div>
            <motion.div
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col gap-1 px-6 mt-6"
            >
              {links.map((l) => (
                <motion.div key={l.to} variants={{ closed: { opacity: 0, y: 12 }, open: { opacity: 1, y: 0 } }}>
                  <NavLink to={l.to} onClick={() => setOpen(false)} className="block py-4 text-2xl font-heading border-b border-white/5">
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 text-center px-5 py-4 rounded-full bg-accent-blue text-bg font-semibold"
              >
                Enquire Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
