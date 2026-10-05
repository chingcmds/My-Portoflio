import { skillGroups } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container reveal" ref={ref}>
        <h2 id="skills-title" className="section-title">
          <span>{'//'}</span> skills
        </h2>
        <div className="skills__intro editor-card">
          <div className="editor-card__bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="editor-card__body">
            <p className="skills__const">
              <span className="skills__keyword">const</span> skills = [
            </p>
            <div className="skills__groups">
              {skillGroups.map((group) => (
                <div key={group.label} className="skills__group">
                  <h3 className="skills__label">{group.label}</h3>
                  <ul className="skills__pills">
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="skills__const">];</p>
          </div>
        </div>
      </div>
    </section>
  )
}
