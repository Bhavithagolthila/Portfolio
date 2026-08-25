function ProjectCard({ project }) {
  const { title, subtitle, category, label, description, technologies, github, demo, featured } = project

  return (
    <article
      className={`group relative flex flex-col h-full rounded-xl border bg-white/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-15px_rgba(20,22,26,0.25)] ${
        featured ? 'border-accent/40 ring-1 ring-accent/10' : 'border-line'
      }`}
    >
      {label && (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-mono tracking-wide ${
            featured ? 'bg-accent text-white' : 'bg-panel text-ink/70 border border-line'
          }`}
        >
          {label}
        </span>
      )}

      <p className="eyebrow mb-2">{category}</p>
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="text-sm text-accent-dark font-medium mt-1">{subtitle}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted flex-1">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-panel text-ink/70 border border-line"
          >
            {tech}
          </span>
        ))}
      </div>

      {(github || demo) && (
        <div className="mt-6 flex gap-3 pt-5 border-t border-line">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-1.5"
              aria-label={`View ${title} source code on GitHub`}
            >
              GitHub ↗
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink hover:text-accent transition-colors inline-flex items-center gap-1.5"
              aria-label={`View live demo of ${title}`}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
