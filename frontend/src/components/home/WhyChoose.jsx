import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
  'Concept-first learning',
  'Dedicated Physics and Chemistry teachers',
  'Classes 9-12',
  'Step-by-step explanations',
  'Numerical and reaction practice',
  'Focused academic guidance',
]

export default function WhyChoose() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-bg-secondary/40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight"
        >
          Science Is Easier <span className="text-gradient">When You Understand It.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 w-6 h-6 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-accent-blue" />
              </span>
              <span className="text-ink-secondary">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
