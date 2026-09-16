import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="relative py-28 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-cyan/10 blur-[140px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6">
          Your Stronger Science Foundation Starts Here.
        </h2>
        <p className="text-ink-secondary text-lg mb-10">
          Take the next step towards better understanding, stronger concepts, and greater academic confidence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="primary">Enquire Now</Button>
          <Button to="/teachers" variant="secondary">Contact Our Teachers</Button>
        </div>
      </motion.div>
    </section>
  )
}
