import { motion } from 'framer-motion'
import { Zap, FlaskConical } from 'lucide-react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const subjects = [
  {
    icon: Zap,
    title: 'Physics',
    subtitle: 'Understand how the universe works.',
    desc: 'Explore motion, forces, energy, electricity, magnetism, optics, and the laws that shape the world around us.',
    accent: 'from-accent-blue/20',
  },
  {
    icon: FlaskConical,
    title: 'Chemistry',
    subtitle: 'Discover the science of matter.',
    desc: 'Learn atoms, molecules, reactions, bonding, organic chemistry, inorganic chemistry, and physical chemistry through clear explanations.',
    accent: 'from-accent-violet/20',
  },
]

export default function SubjectsSection() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Curriculum" title="Two Subjects. One Strong Foundation." />
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative rounded-3xl border border-white/5 bg-bg-card p-10 overflow-hidden group hover:border-accent-blue/30 transition-colors duration-300"
            >
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${s.accent} to-transparent blur-3xl`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                  <s.icon className="w-7 h-7 text-accent-blue" />
                </div>
                <Badge className="mb-4">Classes 9-12</Badge>
                <h3 className="font-heading font-bold text-3xl mb-2">{s.title}</h3>
                <p className="text-accent-cyan text-sm mb-4">{s.subtitle}</p>
                <p className="text-ink-secondary leading-relaxed mb-8">{s.desc}</p>
                <Button to="/courses" variant="ghost">Explore {s.title}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
