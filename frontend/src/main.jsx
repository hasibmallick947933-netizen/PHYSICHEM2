import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, X, Play, Plus } from 'lucide-react'
import './styles.css'

const programs = [
  { no: '01', title: 'FOUNDATION', grades: 'Classes 9 & 10', copy: 'Build the kind of conceptual clarity that makes every advanced topic feel familiar.', tag: 'CORE CONCEPTS', tone: 'lime' },
  { no: '02', title: 'SENIOR SECONDARY', grades: 'Classes 11 & 12', copy: 'Board syllabus depth, competitive exam strategy, and a plan that keeps you moving.', tag: 'TARGET DRIVEN', tone: 'orange' },
  { no: '03', title: 'TEST SERIES', grades: 'Practice & mentorship', copy: 'Regular testing, personal feedback, and one-on-one doubt solving that compounds.', tag: 'MEASURE PROGRESS', tone: 'blue' },
]

function RevealHeading({ children, className = '' }) {
  const lines = children.split('|')
  return <>{lines.map((line, lineIndex) => <span className={`reveal-line ${className}`} key={`${line}-${lineIndex}`}>{line.split(' ').map((word, wordIndex) => <span className="reveal-word" data-story-word key={`${word}-${wordIndex}`}>{word}&nbsp;</span>)}</span>)}</>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('HOME')
  const [section, setSection] = useState(1)
  const cursorRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  const videoScale = useTransform(scrollY, [0, 1800], [1.15, 1.02])
  const videoY = useTransform(scrollY, [0, 2600], ['0%', '14%'])
  const contentY = useTransform(scrollY, [0, 900], [0, -90])

  useEffect(() => {
    const ids = ['home', 'mission', 'programs', 'method', 'contact']
    const panels = ids.map((id) => document.getElementById(id)).filter(Boolean)
    let activePanel = 0
    let revealStep = 0
    let touchStart = 0
    let locked = false

    const syncVideo = (progress) => {
      const video = videoRef.current
      if (video && Number.isFinite(video.duration) && video.duration > 0) video.currentTime = progress * video.duration
    }

    const setPanel = (next) => {
      activePanel = Math.max(0, Math.min(panels.length - 1, next))
      panels.forEach((panel, index) => panel.classList.toggle('is-active', index === activePanel))
      revealStep = 0
      panels[activePanel].querySelectorAll('[data-story-word]').forEach((word) => word.classList.remove('is-visible'))
      setSection(activePanel + 1)
      setActive(['HOME', 'ABOUT', 'COURSES', 'METHOD', 'CONTACT'][activePanel])
      syncVideo(activePanel / Math.max(1, panels.length - 1))
      window.scrollTo(0, 0)
      if (activePanel === 0) window.setTimeout(() => revealNextWord(1), 260)
    }

    const revealNextWord = (direction) => {
      const words = [...panels[activePanel].querySelectorAll('[data-story-word]')]
      if (direction < 0 && revealStep === 0) { setPanel(activePanel - 1); return }
      if (direction > 0 && revealStep < words.length) {
        words[revealStep]?.classList.add('is-visible')
        revealStep += 1
        syncVideo((activePanel + revealStep / Math.max(1, words.length) * 0.82) / Math.max(1, panels.length - 1))
        return
      }
      if (direction > 0) setPanel(activePanel + 1)
    }

    const onWheel = (event) => {
      event.preventDefault()
      if (locked || Math.abs(event.deltaY) < 8) return
      locked = true
      revealNextWord(event.deltaY > 0 ? 1 : -1)
      window.setTimeout(() => { locked = false }, 105)
    }
    const onTouchStart = (event) => { touchStart = event.touches[0].clientY }
    const onTouchMove = (event) => { event.preventDefault() }
    const onTouchEnd = (event) => {
      const distance = touchStart - event.changedTouches[0].clientY
      if (Math.abs(distance) > 24 && !locked) {
        locked = true
        revealNextWord(distance > 0 ? 1 : -1)
        window.setTimeout(() => { locked = false }, 150)
      }
    }

    const onHashChange = () => {
      const index = ids.indexOf(window.location.hash.slice(1))
      if (index >= 0) setPanel(index)
    }
    setPanel(Math.max(0, ids.indexOf(window.location.hash.slice(1))))
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  useEffect(() => {
    const moveCursor = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }
    }
    const setHover = (event) => {
      const target = event.target.closest('a, button, .program-card, .principle')
      cursorRef.current?.classList.toggle('is-hovering', Boolean(target))
    }
    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('pointerover', setHover)
    return () => {
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('pointerover', setHover)
    }
  }, [])

  const close = () => setMenuOpen(false)
  return <div className="site-shell"><div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span /></div>
    <header className="nav"><a className="wordmark" href="#home" onClick={close}>PHYSI<span>•</span>CHEM</a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{['HOME','ABOUT','COURSES','METHOD','CONTACT'].map((item, i) => <a key={item} className={active === item ? 'active' : ''} href={'#' + ['home','mission','programs','method','contact'][i]} onClick={close}>{item}</a>)}</nav><button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button><a className="nav-cta" href="#contact">JOIN THE CLASS <ArrowUpRight size={15}/></a></header>

    <div className="global-video" aria-hidden="true"><video ref={videoRef} className="hero-video" muted playsInline preload="metadata"><source src="/15923153_1280_720_24fps.mp4" type="video/mp4" /></video><div className="video-shade" /></div>
    <main>
      <section id="home" className="hero section-frame">
        <motion.div className="hero-content" style={{ y: contentY }}><p className="eyebrow light"><span className="eyebrow-dot"/> SCIENCE, MADE CLEAR.</p><h1><RevealHeading>Understand|everything.</RevealHeading></h1><div className="hero-bottom"><p>Physics and Chemistry coaching<br/>for the curious mind.</p><a className="circle-arrow" href="#programs"><ArrowUpRight size={22}/></a></div></motion.div>
        <div className="hero-label">PHYSICHEM <span>/ EST. 2018</span></div><div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ChevronDown size={16}/></div>
      </section>

      <section id="mission" className="mission section-frame light-section"><div className="section-kicker"><span>002</span><span>OUR APPROACH</span></div><div className="mission-grid"><div><p className="eyebrow"><span className="eyebrow-dot"/> THE PHYSICHEM METHOD</p><h2><RevealHeading>We turn|confusion|into clarity.</RevealHeading></h2></div><div className="mission-copy"><p>We are a result-oriented science academy built around one simple belief: when you understand the why, the how becomes effortless.</p><p>Every lesson is designed to connect the dots between classroom fundamentals, competitive exams, and the world outside the textbook.</p><a className="text-link" href="#method">READ OUR STORY <ArrowUpRight size={15}/></a></div></div><div className="mission-stamp">P<span>·</span>C</div></section>

      <section id="programs" className="programs section-frame dark-section"><div className="section-kicker light"><span>003</span><span>WHAT WE TEACH</span></div><div className="program-head"><div><p className="eyebrow light"><span className="eyebrow-dot"/> CHOOSE YOUR PATH</p><h2><RevealHeading>Built for|your next|breakthrough.</RevealHeading></h2></div><p className="program-intro">Focused programs. Personal attention.<br/>Results that speak for themselves.</p></div><div className="program-grid">{programs.map((p, i) => <motion.article key={p.no} className={'program-card ' + p.tone} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .12, duration: .65 }}><div className="card-top"><span>{p.no}</span><Plus size={18}/></div><div className="card-shape"/><div className="card-content"><p>{p.grades}</p><h3>{p.title}</h3><span className="card-tag">{p.tag}</span><p className="card-copy">{p.copy}</p></div></motion.article>)}</div></section>

      <section id="method" className="method section-frame light-section"><div className="section-kicker"><span>004</span><span>WHY PHYSICHEM</span></div><div className="method-layout"><div><p className="eyebrow"><span className="eyebrow-dot"/> MORE THAN A CLASSROOM</p><h2><RevealHeading>The edge is|understanding.</RevealHeading></h2></div><div className="principles">{['Concept-first teaching', 'Mentors who notice the details', 'A system built around progress'].map((x, i) => <div className="principle" key={x}><span>0{i + 1}</span><strong>{x}</strong><ArrowUpRight size={16}/></div>)}</div></div><div className="quote"><Play size={14} fill="currentColor"/> “The best students aren&apos;t the ones who memorize more.<br/> They&apos;re the ones who finally see the pattern.”</div></section>

      <section id="contact" className="contact section-frame dark-section"><div className="section-kicker light"><span>005</span><span>START HERE</span></div><p className="eyebrow light"><span className="eyebrow-dot"/> READY WHEN YOU ARE</p><h2><RevealHeading>Make science|make sense.</RevealHeading></h2><a className="contact-cta" href="mailto:hello@physichem.in">TALK TO US <ArrowUpRight size={19}/></a><footer><span>© 2024 PHYSICHEM</span><div><a href="#home">INSTAGRAM</a><a href="#home">YOUTUBE</a></div><span>CLASSES 09—12</span><small>MADE AND DESIGNED BY HASIB MALLICK</small></footer></section>
    </main>
    <aside className="progress"><span>0{section}</span><i/><span>05</span></aside><div className="side-share">SHARE <ArrowUpRight size={13}/></div>
  </div>
}
export default App

createRoot(document.getElementById('root')).render(<App />)
