import MethodologySteps from '../components/home/MethodologySteps'
import SectionHeading from '../components/ui/SectionHeading'
import FinalCTA from '../components/home/FinalCTA'

const extras = [
  { title: 'Concept-First Learning', desc: 'Every topic begins with the underlying idea, not the formula.' },
  { title: 'Visual Explanations', desc: 'Diagrams and illustrations turn abstract topics into intuitive ones.' },
  { title: 'Numerical Problem-Solving', desc: 'Regular numerical practice builds calculation speed and accuracy.' },
  { title: 'Chemical Reaction Understanding', desc: 'Reactions are taught with mechanism and logic, not rote memorization.' },
  { title: 'Practice & Revision', desc: 'Structured revision cycles reinforce long-term retention.' },
  { title: 'Doubt Support', desc: 'Dedicated time to resolve individual doubts and gaps.' },
  { title: 'Examination Preparation', desc: 'Targeted preparation for school, board, and competitive exams.' },
]

export default function Methodology() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center bg-grid-pattern">
        <span className="inline-block text-sm font-medium text-accent-cyan mb-6">Methodology</span>
        <h1 className="font-heading font-bold text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
          More Than Memorization.<br /><span className="text-gradient">Real Understanding.</span>
        </h1>
      </section>

      <MethodologySteps />

      <section className="py-24 px-6 lg:px-10 max-w-6xl mx-auto">
        <SectionHeading eyebrow="In Practice" title="Every Part of the Process, Designed With Purpose." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extras.map((e) => (
            <div key={e.title} className="p-6 rounded-2xl border border-white/5 bg-bg-card hover:border-accent-blue/30 transition-colors">
              <h3 className="font-heading font-semibold text-lg mb-2">{e.title}</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
