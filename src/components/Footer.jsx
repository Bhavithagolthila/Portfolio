function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© 2026 Bhavitha G.</p>
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/Bhavithagolthila"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhavitha-g-693681262/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
