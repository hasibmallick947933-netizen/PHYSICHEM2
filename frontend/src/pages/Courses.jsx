import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import FinalCTA from '../components/home/FinalCTA'

const courses = [
  { grade: '9', desc: 'Build your foundation in science.', highlights: ['Basic mechanics & motion', 'Matter and its states', 'Foundational numericals'] },
  { grade: '10', desc: 'Strengthen concepts and prepare for school and board examinations.', highlights: ['Board-aligned syllabus coverage', 'Chemical reactions & equations', 'Light, electricity & magnetism'] },
  { grade: '11', desc: 'Develop strong higher-secondary fundamentals.', highlights: ['Mechanics & thermodynamics', 'Organic & inorganic basics', 'Conceptual problem-solving'] },
  { grade: '12', desc: 'Master concepts and prepare for examinations.', highlights: ['Advanced Physics & Chemistry', 'Board & competitive exam practice', 'Full syllabus revision'] },
]

export default function Courses() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center bg-grid-pattern">
        <span className="inline-block text-sm font-medium text-accent-cyan mb-6">Courses</span>
        <h1 className="font-heading font-bold text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Find Your Path to <span className="text-gradient">Better Understanding.</span>
        </h1>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <motion.div
              key={c.grade}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full flex flex-col">
                <span className="font-heading font-bold text-4xl text-gradient mb-1">Class {c.grade}</span>
                <span className="text-xs uppercase tracking-widest text-accent-cyan mb-4">Physics · Chemistry</span>
                <p className="text-ink-secondary leading-relaxed mb-6">{c.desc}</p>
                <ul className="space-y-2 mb-6 text-sm text-ink-secondary">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4 text-xs text-ink-secondary mb-8 border-t border-white/5 pt-4">
                  <div><span className="block text-ink-secondary/60 mb-1">Timings</span>[Timings Placeholder]</div>
                  <div><span className="block text-ink-secondary/60 mb-1">Fees</span>[Fees Placeholder]</div>
                </div>
                <div className="mt-auto">
                  <Button to="/contact" variant="primary" className="w-full">Enquire Now</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
