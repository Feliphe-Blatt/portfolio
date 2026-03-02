import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <a href="/#about" className="nav-link">{t('nav.about')}</a>
          <Link to="/projects" className="nav-link">{t('nav.projects')}</Link>
          <a href="/#contact" className="nav-link">{t('nav.contact')}</a>
        </nav>

        {/* Desktop Controls */}
        <div className="navbar-controls desktop-controls">
          <ThemeToggle />
          <LanguageToggle />
          <a 
            href="/assets/downloads/FelipheBlatt-2024.pdf" 
            download
            className="btn-resume"
            aria-label="Download CV"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <span>CV</span>
          </a>
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
          <Link to="/" className="nav-link" onClick={closeMenu}>
            {t('nav.home')}
          </Link>
          <a href="/#about" className="nav-link" onClick={closeMenu}>
            {t('nav.about')}
          </a>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>
            {t('nav.projects')}
          </Link>
          <a href="/#contact" className="nav-link" onClick={closeMenu}>
            {t('nav.contact')}
          </a>
          
          <div className="mobile-controls">
            <ThemeToggle />
            <LanguageToggle />
            <a 
              href="/assets/downloads/FelipheBlatt-2024.pdf" 
              download
              className="btn-resume"
              onClick={closeMenu}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
