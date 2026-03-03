import { useLanguage } from '../../context/i18nContext'
import './LanguageToggle.css'

const LanguageToggle = () => {
  const { locale, toggleLanguage } = useLanguage()
  const currentLang = locale === 'pt-BR' ? 'PT' : 'EN'
  const nextLang = locale === 'pt-BR' ? 'EN' : 'PT'

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${nextLang}`}
      title={`Switch to ${nextLang === 'EN' ? 'English' : 'Português'}`}
    >
      <span className="current-lang">{currentLang}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    </button>
  )
}

export default LanguageToggle
