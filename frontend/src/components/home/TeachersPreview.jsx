import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const teachers = [
  {
    name: '[Physics Teacher Name]',
    subject: 'Physics',
    bio: 'Helping students build conceptual clarity and confidence through clear explanations and numerical problem-solving.',
  },
  {
    name: '[Chemistry Teacher Name]',
    subject: 'Chemistry',
    bio: 'Making Chemistry easier to understand through strong fundamentals, reactions, and structured learning.',
  },
]

export default function TeachersPreview() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Learn From Dedicated Subject Experts."
          description="Two teachers. Two subjects. One commitment to better learning."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-3xl border border-white/5 bg-bg-card overflow-hidden hover:border-accent-blue/30 transition-colors duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-bg-secondary to-bg flex items-center justify-center border-b border-white/5">
                <User className="w-20 h-20 text-ink-secondary/30" />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-accent-cyan">{t.subject} · Classes 9-12</span>
                <h3 className="font-heading font-bold text-2xl mt-2 mb-3">{t.name}</h3>
                <p className="text-ink-secondary leading-relaxed mb-6">{t.bio}</p>
                <Button to="/teachers" variant="secondary">View Profile</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
