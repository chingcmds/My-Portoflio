import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {personal.name}. Made with <span aria-label="love">&lt;3</span> and React.
        </p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
