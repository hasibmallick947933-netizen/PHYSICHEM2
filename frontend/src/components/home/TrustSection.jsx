import { Atom, GraduationCap, Target } from 'lucide-react'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'

const items = [
  { icon: Atom, title: 'Strong Fundamentals', desc: 'Understand the basics before moving to advanced concepts.' },
  { icon: GraduationCap, title: 'Dedicated Teachers', desc: 'Learn with focused guidance from Physics and Chemistry experts.' },
  { icon: Target, title: 'Exam Confidence', desc: 'Develop the skills and understanding needed for academic success.' },
]

export default function TrustSection() {
  return (
    <section className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why PHYSICHEM"
          title="Where Concepts Become Confidence."
          description="At PHYSICHEM, we believe that strong fundamentals create confident learners. Our teaching approach focuses on understanding concepts, solving problems, and building a lasting foundation in science."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
              <p className="text-ink-secondary leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
