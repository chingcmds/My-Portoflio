import { useState } from 'react'
import { navLinks } from '../data/portfolio'
import './Navbar.css'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#" onClick={closeMenu}>
          <span className="navbar__logo-bracket">{'<'}</span>
          CE
          <span className="navbar__logo-bracket">{' />'}</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`navbar__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="navbar__theme"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  )
}
