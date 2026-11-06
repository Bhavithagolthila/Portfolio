function SectionTitle({ title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </div>
  )
}

export default SectionTitle
