import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  { n: '01', title: 'Understand', desc: 'Start with clear concepts and strong fundamentals.' },
  { n: '02', title: 'Visualize', desc: 'Use diagrams, examples, and scientific illustrations to understand difficult topics.' },
  { n: '03', title: 'Practice', desc: 'Solve numerical problems, reactions, and subject-based questions.' },
  { n: '04', title: 'Master', desc: 'Revise, improve accuracy, and develop academic confidence.' },
]

export default function MethodologySteps() {
  return (
    <section className="py-24 px-6 lg:px-10 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Our Method" title="Learning That Builds Understanding." />
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent hidden sm:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex gap-6 sm:pl-2"
              >
                <span className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-bg-card border border-accent-blue/40 flex items-center justify-center font-heading font-bold text-accent-blue">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-ink-secondary leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
