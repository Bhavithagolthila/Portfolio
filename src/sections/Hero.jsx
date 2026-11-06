import Button from '../components/Button'

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* subtle geometric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent-soft blur-2xl" />
        <div className="absolute top-40 -left-20 w-56 h-56 rounded-full border border-line" />
      </div>

      <div className="section-shell text-center max-w-3xl mx-auto">
        <div className="fade-up">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.08]">
            Bhavitha G
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-display text-ink/80">
            Computer Science &amp; Design Engineering Graduate
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
            <Button href="https://github.com/Bhavithagolthila" variant="outline" external>
              GitHub
            </Button>
            <Button href="https://www.linkedin.com/in/bhavitha-g-693681262/" variant="outline" external>
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
