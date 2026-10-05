import { education } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Education.css'

export default function Education() {
  const ref = useReveal()

  return (
    <section className="section" id="education" aria-labelledby="edu-title">
      <div className="container reveal" ref={ref}>
        <h2 id="edu-title" className="section-title">
          <span>{'//'}</span> education
        </h2>
        <div className="editor-card education__card">
          <div className="editor-card__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="editor-card__body education__body">
            <div className="education__icon" aria-hidden="true">
              🎓
            </div>
            <div>
              <h3 className="education__degree">{education.degree}</h3>
              <p className="education__school">{education.school}</p>
              <p className="education__year">Graduated {education.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
