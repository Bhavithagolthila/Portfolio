import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle title="About" />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <p className="text-lg leading-relaxed text-ink/85 max-w-2xl">
            Computer Science and Design Engineering graduate (2026) with hands-on experience
            building full-stack web applications using React.js, Node.js, Express.js, and MongoDB,
            including a four-month full-stack internship (Feb–May 2026). Also worked with Python and Flask on a
            machine learning project. Comfortable picking up new tools and building working
            applications end to end.
          </p>

          <div className="grid grid-cols-2 gap-4 content-start">
            <div className="rounded-lg border border-line p-4">
              <p className="font-display text-2xl font-semibold text-ink">2026</p>
              <p className="text-xs font-mono text-muted mt-1">Graduating Year</p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="font-display text-2xl font-semibold text-ink">4 mo.</p>
              <p className="text-xs font-mono text-muted mt-1">Full-Stack Internship</p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="font-display text-2xl font-semibold text-ink">5</p>
              <p className="text-xs font-mono text-muted mt-1">Projects Built</p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <p className="font-display text-2xl font-semibold text-ink">8.08</p>
              <p className="text-xs font-mono text-muted mt-1">CGPA / 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
