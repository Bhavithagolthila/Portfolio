import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievement' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16" aria-label="Primary">
        <a href="#home" className="font-display font-semibold text-ink text-lg tracking-tight">
          Bhavitha G
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-md text-ink/70 hover:text-accent hover:bg-accent-soft transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center items-center w-10 h-10 rounded-md border border-line"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${open ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <span className={`block w-5 h-0.5 bg-ink my-1 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block w-5 h-0.5 bg-ink transition-transform duration-200 ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden text-sm bg-paper border-b border-line px-6 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick}
                className="block py-2.5 text-ink/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
