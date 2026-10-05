import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="container reveal" ref={ref}>
        <h2 id="exp-title" className="section-title">
          <span>{'//'}</span> experience
        </h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.role}-${job.company}`} className="timeline__item editor-card">
              <div className="editor-card__bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="editor-card__body">
                <header className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <time className="timeline__period">{job.period}</time>
                </header>
                <ul className="timeline__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
