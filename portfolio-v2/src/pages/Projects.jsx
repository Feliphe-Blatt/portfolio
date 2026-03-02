import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import FocusTrap from 'focus-trap-react';
import { categories, getProjectsByCategory } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const { formatMessage } = useIntl();
  const t = (id) => formatMessage({ id });
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = getProjectsByCategory(activeTab);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Gerenciar overflow do body quando modal abre/fecha
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup ao desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  // Escape key handler para fechar modal (WCAG 2.1)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1 className="page-title" data-aos="fade-up">
          {t('projects.title')}
        </h1>

        {/* Tabs */}
        <div className="projects-tabs" data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab-button ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label['pt-BR']}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <picture>
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={project.images.mobile} 
                  />
                  <source 
                    media="(min-width: 769px)" 
                    srcSet={project.images.desktop} 
                  />
                  <img 
                    src={project.images.desktop} 
                    alt={project.title}
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </picture>
                <div className="project-overlay">
                  <span className="view-more">Ver Detalhes</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description-short">
                  {project.description.slice(0, 80)}...
                </p>
                <div className="project-tags">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - WCAG 2.1 Compliant */}
      {selectedProject && (
        <FocusTrap>
          <div 
            className="modal-overlay" 
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="Fechar modal"
              >
                ×
              </button>
              
              <div className="modal-body">
                <div className="modal-image">
                  <picture>
                    <source 
                      media="(max-width: 768px)" 
                      srcSet={selectedProject.images.mobile} 
                    />
                    <source 
                      media="(min-width: 769px)" 
                      srcSet={selectedProject.images.desktop} 
                    />
                    <img 
                      src={selectedProject.images.desktop} 
                      alt={selectedProject.title}
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </picture>
                </div>
                
                <h2 id="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-section">
                  <h3>{t('projects.description')}</h3>
                  <p id="modal-description">{selectedProject.description}</p>
                </div>

                <div className="modal-section">
                  <h3>{t('projects.technologies')}</h3>
                  <div className="modal-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a 
                    href={selectedProject.urls.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-modal btn-primary"
                  >
                    {t('projects.viewLive')}
                  </a>
                  <a 
                    href={selectedProject.urls.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-modal btn-secondary"
                  >
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </div>
  );
};

export default Projects;
