import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const { pathname } = useLocation()
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (pathname !== '/') return

    const sectionIds = ['home', 'about', 'skills', 'projects']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [pathname])

  const isHome = pathname === '/'
  const isAtHome = isHome && (activeSection === 'home')
  const isProjectsActive = isHome && activeSection === 'projects'
  const isSkillsActive = isHome && activeSection === 'skills'
  const isAboutActive = isHome && activeSection === 'about'

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-name">Feliphe</span>
          <span className="brand-accent">Blatt</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <Link to="/" className={`nav-link ${isAtHome ? 'active' : ''}`}>{t('nav.home')}</Link>
          <Link to="/#projects" className={`nav-link ${isProjectsActive ? 'active' : ''}`}>{t('nav.projects')}</Link>
          <Link to="/#about" className={`nav-link ${isAboutActive ? 'active' : ''}`}>{t('nav.about')}</Link>
          <Link to="/#skills" className={`nav-link ${isSkillsActive ? 'active' : ''}`}>{t('nav.skills')}</Link>
        </nav>

        {/* Desktop Controls */}
        <div className="navbar-controls desktop-controls">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" className={`nav-link ${isAtHome ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.home')}
          </Link>
          <Link to="/#projects" className={`nav-link ${isProjectsActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.projects')}
          </Link>
          <Link to="/#about" className={`nav-link ${isAboutActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.about')}
          </Link>
          <Link to="/#skills" className={`nav-link ${isSkillsActive ? 'active' : ''}`} onClick={closeMenu}>
            {t('nav.skills')}
          </Link>

          <div className="mobile-controls">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  )
}

export default Navbar
