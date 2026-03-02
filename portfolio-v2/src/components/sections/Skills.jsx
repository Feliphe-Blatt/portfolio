import { useIntl } from 'react-intl';
import './Skills.css';

const Skills = () => {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });

  const languages = [
    { name: 'Java', icon: '☕' },
    { name: 'C/C++', icon: '⚡' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML + CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '💛' }
  ];

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Figma', icon: '🎯' },
    { name: 'APIs', icon: '🔌' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title" data-aos="fade-up">
          Habilidades
        </h2>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <div className="category-header">
              <h3>{t('skills.languages')}</h3>
            </div>
            <ul className="skill-list">
              {languages.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <div className="category-header">
              <h3>{t('skills.tools')}</h3>
            </div>
            <ul className="skill-list">
              {tools.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
