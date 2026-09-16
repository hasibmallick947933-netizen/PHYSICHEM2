import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-medium text-accent-cyan mb-4"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-ink-secondary text-lg leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
