import SectionTitle from '../components/SectionTitle'

const technologies = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Razorpay']

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle title="Experience" />

        <div className="rounded-xl border border-line p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">Home Cleaning Service Booking Platform</p>
              <h3 className="font-display text-2xl font-semibold text-ink">CleanNest</h3>
            </div>
            <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent text-white whitespace-nowrap">
              Feb – May 2026 · Internship
            </span>
          </div>

          <p className="mt-5 text-muted leading-relaxed max-w-3xl">
            Built a full-stack home cleaning service booking platform with service browsing,
            GPS-based address entry, and Cash/UPI/Card payments using Razorpay. Implemented JWT
            authentication, bcrypt password hashing, role-based access control, server-side price
            calculation, and Razorpay payment verification. Added an admin dashboard for managing
            bookings, users, and services, along with automatic refunds for eligible cancellations.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-line">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-panel text-ink/70 border border-line"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
