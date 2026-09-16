import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ScrollScienceVisual from './ScrollScienceVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10 overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-secondary/40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-block text-sm font-medium text-accent-cyan mb-6"
          >
            Physics + Chemistry &nbsp;|&nbsp; Classes 9-12
          </motion.span>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Understand the Concept.
            <br />
            <span className="text-gradient">Master the Science.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-ink-secondary text-lg max-w-xl leading-relaxed"
          >
            Build strong scientific foundations with concept-focused Physics and Chemistry
            coaching designed for Classes 9-12.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-10 flex flex-wrap gap-4">
            <Button to="/courses" variant="primary">Explore Courses</Button>
            <Button to="/teachers" variant="secondary">Meet Our Teachers</Button>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-10 flex flex-wrap items-center gap-3 text-sm text-ink-secondary"
          >
            <span>Concept clarity</span>
            <span className="w-1 h-1 rounded-full bg-accent-blue" />
            <span>Problem solving</span>
            <span className="w-1 h-1 rounded-full bg-accent-blue" />
            <span>Academic confidence</span>
          </motion.div>
        </div>

        <ScrollScienceVisual />
      </div>
    </section>
  )
}
