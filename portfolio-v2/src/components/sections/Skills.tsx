import { useIntl } from 'react-intl'
import './Skills.css'

interface Skill {
  name: string
  icon: string
}

const Skills = () => {
  const { formatMessage } = useIntl()
  const t = (id: string) => formatMessage({ id })

  const technologies: Skill[] = [
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C / C++', icon: '⚡' },
    { name: 'HTML + CSS', icon: '🎨' },
  ]

  const stacks: Skill[] = [
    { name: 'React + Vite', icon: '⚛️' },
    { name: 'Flask', icon: '🌶️' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Git / GitHub', icon: '🔧' },
    { name: 'Figma', icon: '🎯' },
  ]

  const softSkills: Skill[] = [
    { name: t('skills.soft.interdisciplinary'), icon: '🔗' },
    { name: t('skills.soft.fp'), icon: '📊' },
    { name: t('skills.soft.scrum'), icon: '🔄' },
    { name: t('skills.soft.kanban'), icon: '🗂️' },
    { name: t('skills.soft.documentation'), icon: '📝' },
    { name: t('skills.soft.attention'), icon: '🎯' },
    { name: t('skills.soft.communication'), icon: '💬' },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title" data-aos="fade-up">
          {t('skills.title')}
        </h2>

        <div className="skills-grid">
          {/* Tecnologias */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="100">
            <div className="category-header">
              <h3>{t('skills.technologies')}</h3>
            </div>
            <ul className="skill-list">
              {technologies.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stacks & Ferramentas */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="200">
            <div className="category-header">
              <h3>{t('skills.stacks')}</h3>
            </div>
            <ul className="skill-list">
              {stacks.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skill-category" data-aos="fade-up" data-aos-delay="300">
            <div className="category-header">
              <h3>{t('skills.softskills')}</h3>
            </div>
            <ul className="skill-list">
              {softSkills.map((skill, index) => (
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
  )
}

export default Skills
