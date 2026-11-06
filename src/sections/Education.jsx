import SectionTitle from '../components/SectionTitle'
import education from '../data/education'

function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle title="Education" />

        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.institution}
              className="rounded-xl border border-line p-6 sm:p-7 flex flex-wrap items-start justify-between gap-4"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{item.institution}</h3>
                <p className="text-muted mt-1">{item.degree}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm text-accent-dark">{item.duration}</p>
                <p className="font-mono text-sm text-muted mt-1">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
