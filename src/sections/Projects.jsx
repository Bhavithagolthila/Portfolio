import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-panel/50">
      <div className="section-shell">
        <SectionTitle
          title="Projects"
          description="A selection of full-stack, machine learning, and data analytics work built end to end."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
