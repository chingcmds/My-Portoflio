import { personal } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container reveal" ref={ref}>
        <h2 id="about-title" className="section-title">
          <span>{'//'}</span> about
        </h2>
        <div className="editor-card about__card">
          <div className="editor-card__bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p className="about__filename">about.js</p>
          </div>
          <div className="editor-card__body about__body">
            <pre className="about__code" aria-hidden="true">
              <code>{`const developer = {
  name: "${personal.name}",
  focus: "Full Stack Web Development",
  openToWork: true,
};`}</code>
            </pre>
            <p className="about__summary">{personal.summary}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
