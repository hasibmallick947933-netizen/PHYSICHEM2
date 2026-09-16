import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import FinalCTA from '../components/home/FinalCTA'

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 lg:px-10 text-center bg-grid-pattern">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block text-sm font-medium text-accent-cyan mb-6"
        >
          About PHYSICHEM
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="font-heading font-bold text-4xl md:text-6xl max-w-4xl mx-auto leading-tight"
        >
          Built on <span className="text-gradient">Strong Concepts.</span>
        </motion.h1>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center text-ink-secondary text-lg leading-relaxed">
          <p>
            PHYSICHEM is a dedicated Physics and Chemistry coaching centre for students of
            Classes 9 to 12. [Coaching centre description placeholder — add your centre's
            story, founding year, and background here.]
          </p>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-10 bg-bg-secondary/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <Card hover={false}>
            <h3 className="font-heading font-bold text-2xl mb-4 text-gradient">Our Mission</h3>
            <p className="text-ink-secondary leading-relaxed">
              To help every student build genuine understanding of Physics and Chemistry —
              not memorized shortcuts — so they can approach any question with confidence.
            </p>
          </Card>
          <Card hover={false}>
            <h3 className="font-heading font-bold text-2xl mb-4 text-gradient">Our Vision</h3>
            <p className="text-ink-secondary leading-relaxed">
              To be the most trusted name for Physics and Chemistry coaching, known for
              conceptual clarity, strong fundamentals, and academic results.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10">
        <SectionHeading
          eyebrow="Philosophy"
          title="Why Conceptual Learning Matters"
          description="Memorization fades. Understanding stays. Every topic at PHYSICHEM is taught from first principles, so students can apply their knowledge to any problem, not just the ones they've seen before."
        />
      </section>

      <FinalCTA />
    </>
  )
}
