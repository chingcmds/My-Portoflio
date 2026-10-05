import { personal } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container reveal" ref={ref}>
        <h2 id="contact-title" className="section-title">
          <span>{'//'}</span> contact
        </h2>
        <div className="contact__grid">
          <div className="editor-card contact__card">
            <div className="editor-card__bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="editor-card__body">
              <p className="contact__lead">
                Open to full-time and remote opportunities. Say hello — I&apos;d love to connect!
              </p>
              <ul className="contact__list">
                <li>
                  <span aria-hidden="true">✉️</span>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </li>
                <li>
                  <span aria-hidden="true">📱</span>
                  <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                </li>
                <li>
                  <span aria-hidden="true">📍</span>
                  <span>{personal.location}</span>
                </li>
              </ul>
              <div className="contact__actions">
                <a className="btn btn-primary" href={`mailto:${personal.email}`}>
                  Send email
                </a>
                {personal.socials.github !== 'https://github.com/' && (
                  <a
                    className="btn btn-outline"
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {personal.socials.linkedin !== 'https://linkedin.com/' && (
                  <a
                    className="btn btn-outline"
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="contact__terminal editor-card" aria-hidden="true">
            <div className="editor-card__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="editor-card__body contact__terminal-body">
              <p>
                <span className="contact__prompt">$</span> npm run hire-me
              </p>
              <p className="contact__output">✓ Portfolio loaded</p>
              <p className="contact__output">✓ Skills verified</p>
              <p className="contact__output contact__output--blink">
                → Awaiting your message...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
