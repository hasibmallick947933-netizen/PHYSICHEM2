import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-scrubbed hero visual: as the page scrolls, the orbit rings rotate,
// the nucleus drifts, and floating equation/molecule tags parallax at
// different speeds. Everything is driven by scroll position, not time.
export default function ScrollScienceVisual() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -140])
  const floatY = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const tagY1 = useTransform(scrollYProgress, [0, 1], [10, -30])
  const tagY2 = useTransform(scrollYProgress, [0, 1], [15, -15])
  const tagY3 = useTransform(scrollYProgress, [0, 1], [-10, 20])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.8, 0.35])

  return (
    <div ref={ref} className="relative flex items-center justify-center h-[420px] lg:h-[520px]">
      <motion.div style={{ opacity: glow }} className="absolute w-64 h-64 rounded-full bg-accent-blue/20 blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-sm"
      />

      <motion.svg style={{ rotate: rotate1 }} viewBox="0 0 200 200" className="absolute w-72 h-72 lg:w-96 lg:h-96">
        <ellipse cx="100" cy="100" rx="90" ry="34" fill="none" stroke="#38BDF8" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="190" cy="100" r="4" fill="#38BDF8" />
      </motion.svg>

      <motion.svg style={{ rotate: rotate2 }} viewBox="0 0 200 200" className="absolute w-72 h-72 lg:w-96 lg:h-96">
        <ellipse cx="100" cy="100" rx="34" ry="90" fill="none" stroke="#22D3EE" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="100" cy="10" r="4" fill="#22D3EE" />
      </motion.svg>

      <motion.div style={{ y: floatY }} className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan shadow-glow" />

      <motion.div
        style={{ y: tagY1 }}
        className="absolute top-6 left-2 lg:left-6 px-3 py-1.5 rounded-lg bg-bg-card/80 border border-white/10 text-xs font-mono text-accent-blue"
      >
        F = ma
      </motion.div>
      <motion.div
        style={{ y: tagY2 }}
        className="absolute bottom-10 right-0 lg:right-4 px-3 py-1.5 rounded-lg bg-bg-card/80 border border-white/10 text-xs font-mono text-accent-cyan"
      >
        H₂O
      </motion.div>
      <motion.div
        style={{ y: tagY3 }}
        className="absolute bottom-2 left-0 lg:left-10 px-3 py-1.5 rounded-lg bg-bg-card/80 border border-white/10 text-xs font-mono text-accent-violet"
      >
        E = mc²
      </motion.div>
    </div>
  )
}
