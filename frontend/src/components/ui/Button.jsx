import { Link } from 'react-router-dom'

export default function Button({ children, to, href, onClick, variant = 'primary', className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300'
  const variants = {
    primary: 'bg-accent-blue text-bg hover:shadow-glow hover:-translate-y-0.5',
    secondary: 'border border-white/20 text-white hover:border-accent-blue hover:text-accent-blue',
    ghost: 'text-accent-blue hover:text-accent-cyan px-0',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return (
    <button type={type} onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  )
}
