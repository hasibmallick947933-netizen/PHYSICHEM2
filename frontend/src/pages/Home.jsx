import Hero from '../components/home/Hero'
import TrustSection from '../components/home/TrustSection'
import SubjectsSection from '../components/home/SubjectsSection'
import TeachersPreview from '../components/home/TeachersPreview'
import MethodologySteps from '../components/home/MethodologySteps'
import ClassesSection from '../components/home/ClassesSection'
import WhyChoose from '../components/home/WhyChoose'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <SubjectsSection />
      <TeachersPreview />
      <MethodologySteps />
      <ClassesSection />
      <WhyChoose />
      <FinalCTA />
    </>
  )
}
