function Button({ href, children, variant = 'primary', external = false, className = '' }) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none'

  const variants = {
    primary: 'bg-ink text-paper hover:bg-accent hover:-translate-y-0.5',
    outline: 'border border-ink/20 text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5',
    accent: 'bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5',
  }

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export default Button
