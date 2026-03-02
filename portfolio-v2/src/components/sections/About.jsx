import { useIntl } from 'react-intl';
import './About.css';

const About = () => {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title" data-aos="fade-up">
          {t('about.title')}
        </h2>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img 
                  src="/assets/img/profile-pic.webp" 
                  alt="Feliphe Blatt - Desenvolvedor Full-Stack" 
                  className="pin-icon"
                  width="180"
                  height="180"
                />
              </div>
            </div>

            <p className="about-description">
              Olá! Meu nome é <strong className="accent">Feliphe Blatt</strong> e sou Dev full-stack com
              paixão por sistemas embarcados e energias renováveis. Tenho uma sólida experiência em várias
              linguagens de programação e ferramentas de desenvolvimento.
            </p>

            <p className="about-enjoy">
              <strong className="accent">Não vivo sem música 🎵 e café ☕</strong>
            </p>

            <p className="about-work">
              {t('about.workTogether')}<br />
              Os links estão no menu e rodapé da página!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
