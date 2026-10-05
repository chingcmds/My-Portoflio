import { personal, typingRoles } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useTypingEffect'
import './Hero.css'

export default function Hero() {
  const typedRole = useTypingEffect(typingRoles)

  return (
    <section className="hero section" id="home" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__terminal" aria-hidden="true">
            <span className="hero__prompt">{'>'}</span> Hi, I&apos;m Charity
            <span className="hero__cursor">|</span>
          </p>
          <h1 id="hero-heading" className="hero__name gradient-text">
            {personal.name}
          </h1>
          <p className="hero__role">
            <span className="hero__role-label">const role = </span>
            <span className="hero__role-value">&quot;{typedRole}&quot;</span>
            <span className="hero__cursor hero__cursor--inline">|</span>
          </p>
          <p className="hero__tagline">
            Building reliable web apps with React, Node.js, and REST APIs — ready for remote teams.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#contact">
              Contact me
            </a>
            <a className="btn btn-outline" href={`mailto:${personal.email}`}>
              Email
            </a>
          </div>
          <p className="hero__location">📍 {personal.location}</p>
        </div>

        <div className="hero__visual">
          <div className="hero__blob">
            <img
              src={personal.profileImage}
              alt={`Portrait of ${personal.name}`}
              width={320}
              height={320}
            />
          </div>
          <div className="hero__float hero__float--code" aria-hidden="true">
            {'{ dev: true }'}
          </div>
          <div className="hero__float hero__float--heart" aria-hidden="true">
            &lt;3
          </div>
        </div>
      </div>
    </section>
  )
}
