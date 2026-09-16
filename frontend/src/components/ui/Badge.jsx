export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-accent-blue/30 text-accent-blue bg-accent-blue/5 ${className}`}>
      {children}
    </span>
  )
}
