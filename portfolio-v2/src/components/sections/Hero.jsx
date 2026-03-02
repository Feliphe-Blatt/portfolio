import { useIntl } from 'react-intl';
import './Hero.css';

const Hero = () => {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/projects';
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">
            <span className="accent">{t('hero.name')}</span>
          </h1>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          
          <div className="hero-cta">
            <button 
              className="btn-primary" 
              onClick={scrollToProjects}
            >
              {t('hero.cta')}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
