import SectionTitle from '../components/SectionTitle'

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle title="Let's Connect" />

        <p className="text-lg text-muted max-w-2xl -mt-6 mb-10">
          I'm currently looking for opportunities to begin my career in software development,
          full-stack development, machine learning, or data analytics.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          <a
            href="tel:+918904024245"
            className="rounded-xl border border-line p-6 hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <p className="font-mono text-xs text-muted mb-2">Phone</p>
            <p className="font-display text-lg font-semibold text-ink">8904024245</p>
          </a>

          <a
            href="https://www.linkedin.com/in/bhavitha-g-693681262/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-line p-6 hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <p className="font-mono text-xs text-muted mb-2">LinkedIn</p>
            <p className="font-display text-lg font-semibold text-ink">Bhavitha G.</p>
          </a>

          <a
            href="https://github.com/Bhavithagolthila"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-line p-6 hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <p className="font-mono text-xs text-muted mb-2">GitHub</p>
            <p className="font-display text-lg font-semibold text-ink">Bhavithagolthila</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
