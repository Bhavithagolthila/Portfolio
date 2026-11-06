import SectionTitle from '../components/SectionTitle'
import skills from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-panel/50">
      <div className="section-shell">
        <SectionTitle title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="font-mono text-xs tracking-wide text-accent-dark uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md bg-panel text-ink/80 border border-line"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
