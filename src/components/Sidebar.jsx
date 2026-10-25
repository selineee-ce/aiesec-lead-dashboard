import { useState } from 'react'
import aiesecLogo from '../assets/aiesec-logo.png'

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__brand">
          <img src={aiesecLogo} alt="AIESEC" className="sidebar__logo" />
        </div>

        <button
          type="button"
          className="sidebar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="sidebar-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="sidebar-menu"
        className={`sidebar__menu ${isMenuOpen ? 'sidebar__menu--open' : ''}`}
      >
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <a href="#main-content" className="nav-link nav-link--active" aria-current="page">
                Lead Dashboard
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar__profile">
          <span className="sidebar__avatar" aria-hidden="true">TM</span>
          <div>
            <p className="sidebar__profile-name">Team Member</p>
            <p className="sidebar__profile-role">Viewer</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar