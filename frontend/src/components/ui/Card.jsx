export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-bg-card border border-white/5 rounded-2xl p-8 ${
        hover ? 'transition-all duration-300 hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
