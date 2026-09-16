import { motion } from 'framer-motion'
import { User, GraduationCap, BookOpen } from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import FinalCTA from '../components/home/FinalCTA'

const teachers = [
  {
    name: '[Physics Teacher Name]',
    subject: 'Physics',
    classes: 'Classes 9-12',
    qualification: '[Qualification Placeholder]',
    experience: '[Experience Placeholder]',
    philosophy: 'Helping students build conceptual clarity and confidence through clear explanations and numerical problem-solving.',
    approach: 'Concepts are introduced through real-world examples, followed by structured numerical practice and doubt-clearing sessions.',
    theme: 'blue',
  },
  {
    name: '[Chemistry Teacher Name]',
    subject: 'Chemistry',
    classes: 'Classes 9-12',
    qualification: '[Qualification Placeholder]',
    experience: '[Experience Placeholder]',
    philosophy: 'Making Chemistry easier to understand through strong fundamentals, reactions, and structured learning.',
    approach: 'Topics move from fundamentals to reactions and mechanisms, reinforced with structured revision and practice sheets.',
    theme: 'violet',
  },
]

export default function Teachers() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10 text-center bg-grid-pattern">
        <span className="inline-block text-sm font-medium text-accent-cyan mb-6">Our Faculty</span>
        <h1 className="font-heading font-bold text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Meet the Minds <span className="text-gradient">Behind PHYSICHEM.</span>
        </h1>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div
                className={`order-1 h-80 md:h-96 rounded-3xl border flex items-center justify-center bg-bg-card ${
                  i % 2 === 1 ? 'md:order-2' : ''
                } ${t.theme === 'blue' ? 'border-accent-blue/20' : 'border-accent-violet/20'}`}
              >
                <User className="w-24 h-24 text-ink-secondary/30" />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <Badge className="mb-4">{t.subject} · {t.classes}</Badge>
                <h2 className="font-heading font-bold text-3xl mb-4">{t.name}</h2>
                <p className="text-ink-secondary leading-relaxed mb-6">{t.philosophy}</p>
                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-ink-secondary">
                    <GraduationCap className="w-4 h-4 text-accent-blue" /> {t.qualification}
                  </div>
                  <div className="flex items-center gap-2 text-ink-secondary">
                    <BookOpen className="w-4 h-4 text-accent-blue" /> {t.experience}
                  </div>
                </div>
                <p className="text-ink-secondary leading-relaxed mb-8 text-sm border-l-2 border-accent-blue/30 pl-4">
                  {t.approach}
                </p>
                <Button to="/contact" variant="primary">Enquire About {t.subject}</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
