import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container reveal" ref={ref}>
        <h2 id="projects-title" className="section-title">
          <span>{'//'}</span> projects
        </h2>
        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="editor-card project-card">
                <div className="editor-card__bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="editor-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <ul className="project-card__tech" aria-label="Technologies used">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className="project-card__links">
                    <a
                      href={project.demoUrl}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
