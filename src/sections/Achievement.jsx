import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

function Achievement() {
  return (
    <section id="achievement" className="py-20 sm:py-28 bg-panel/50">
      <div className="section-shell">
        <SectionTitle title="Achievement" />

        <div className="rounded-xl border border-line bg-white p-7 sm:p-9 max-w-3xl">
          <p className="eyebrow mb-2">International Conference IC-AISIS 2026</p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink leading-snug">
            "Adaptive Feature based Explainable Ensemble Model for Dysarthria Speech Detection
            using OpenSMILE Acoustic Features and Multi-Level Feature Selection"
          </h3>
          <p className="mt-3 text-sm font-mono text-accent-dark">Co-author</p>
          <p className="mt-4 text-muted">
            Published in the Grenze International Journal of Engineering &amp; Technology.
          </p>

          <div className="mt-6">
            <Button href="https://thegrenze.com/abstract/journal/7582" variant="accent" external>
              View Publication
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievement
