import { motion } from 'framer-motion'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

const classes = [
  { grade: '9', desc: 'Build your foundation in science.' },
  { grade: '10', desc: 'Strengthen concepts and prepare for school and board examinations.' },
  { grade: '11', desc: 'Develop strong higher-secondary fundamentals.' },
  { grade: '12', desc: 'Master concepts and prepare for examinations.' },
]

export default function ClassesSection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Programs" title="Built for Every Stage of Learning." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((c, i) => (
            <motion.div
              key={c.grade}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="flex flex-col h-full">
                <span className="font-heading font-bold text-4xl text-gradient mb-2">Class {c.grade}</span>
                <span className="text-xs uppercase tracking-widest text-accent-cyan mb-4">Physics + Chemistry</span>
                <p className="text-ink-secondary leading-relaxed mb-8 flex-1">{c.desc}</p>
                <div className="flex flex-col gap-3">
                  <Button to="/courses" variant="secondary" className="w-full">Learn More</Button>
                  <Button to="/contact" variant="ghost">Enquire Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
