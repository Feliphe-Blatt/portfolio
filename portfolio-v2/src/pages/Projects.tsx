import { useState, useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import FocusTrap from 'focus-trap-react'
import { categories, getProjectsByCategory } from '../data/projects'
import type { Project, ProjectLocale } from '../data/projects'
import { useLanguage } from '../context/i18nContext'
import './Projects.css'

const Projects = () => {
  const { formatMessage } = useIntl()
  const { locale } = useLanguage()
  const t = (id: string, values?: Record<string, string | number>) => formatMessage({ id }, values)
  const currentLocale: ProjectLocale = locale

  const [activeTab, setActiveTab] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [ariaStatus, setAriaStatus] = useState<string>('')
  const lastTriggerRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const filteredProjects = getProjectsByCategory(activeTab)

  const openModal = (project: Project, triggerElement?: HTMLElement) => {
    if (triggerElement) {
      lastTriggerRef.current = triggerElement
    }

    setSelectedProject(project)
    setAriaStatus(t('projects.modalOpened', { project: project.title }))
  }

  const closeModal = () => {
    setSelectedProject(null)
    setAriaStatus(t('projects.modalClosed'))
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus()
    })
  }

  const isValidExternalUrl = (url: string): boolean => url.startsWith('http://') || url.startsWith('https://')

  // Gerenciar overflow do body quando modal abre/fecha
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  // Escape key handler para fechar modal (WCAG 2.1)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedProject])

  useEffect(() => {
    const categoryLabel = categories.find(cat => cat.id === activeTab)?.label[currentLocale] ?? t('projects.categoryAll')
    setAriaStatus(t('projects.filterStatus', { count: filteredProjects.length, category: categoryLabel }))
  }, [activeTab, filteredProjects.length, currentLocale, t])

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">
          {t('projects.title')}
        </h2>

        {/* Tabs */}
        <div className="projects-tabs" data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tab-button ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              aria-pressed={activeTab === cat.id}
            >
              {cat.label[currentLocale]}
            </button>
          ))}
        </div>

        <p className="visually-hidden" aria-live="polite" aria-atomic="true">
          {ariaStatus}
        </p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              role="button"
              tabIndex={0}
              onClick={(event: React.MouseEvent<HTMLDivElement>) => openModal(project, event.currentTarget)}
              onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openModal(project, event.currentTarget)
                }
              }}
              aria-label={t('projects.openDetailsAria', { project: project.title })}
            >
              <div className="project-image">
                <img
                  src={project.images.desktop}
                  srcSet={`${project.images.mobile} 480w, ${project.images.desktop} 1280w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width="400"
                  height="300"
                />
                <div className="project-overlay">
                  <span className="view-more">{t('projects.viewDetails')}</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-heading-row">
                  <h3>{project.title}</h3>
                  <span className="study-badge">{t('projects.studyCase')}</span>
                </div>
                <p className="project-description-short">
                  {project.description[currentLocale].slice(0, 110)}...
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

      {/* Modal - WCAG 2.1 */}
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
            <div
              className="modal-content"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label={t('projects.closeModal')}
                ref={closeButtonRef}
              >
                ×
              </button>

              <div className="modal-body">
                <div className="modal-previews" aria-label={t('projects.previewArea')}>
                  <figure className="device-preview desktop-preview">
                    <figcaption>{t('projects.desktopPreview')}</figcaption>
                    <div className="device-frame device-frame-desktop">
                      <img
                        src={selectedProject.images.desktop}
                        srcSet={`${selectedProject.images.desktop} 1200w`}
                        sizes="(max-width: 768px) 100vw, 70vw"
                        alt={`${selectedProject.title} ${t('projects.desktopPreview').toLowerCase()}`}
                        loading="eager"
                        decoding="async"
                        width="1200"
                        height="750"
                      />
                    </div>
                  </figure>

                  <figure className="device-preview mobile-preview">
                    <figcaption>{t('projects.mobilePreview')}</figcaption>
                    <div className="device-frame device-frame-mobile">
                      <img
                        src={selectedProject.images.mobile}
                        srcSet={`${selectedProject.images.mobile} 540w`}
                        sizes="(max-width: 768px) 60vw, 280px"
                        alt={`${selectedProject.title} ${t('projects.mobilePreview').toLowerCase()}`}
                        loading="eager"
                        decoding="async"
                        width="540"
                        height="1170"
                      />
                    </div>
                  </figure>
                </div>

                <h2 id="modal-title">{selectedProject.title}</h2>

                <div className="modal-section">
                  <h3>{t('projects.description')}</h3>
                  <p id="modal-description">{selectedProject.description[currentLocale]}</p>
                </div>

                <div className="modal-section">
                  <h3>{t('projects.problem')}</h3>
                  <p>{selectedProject.problem[currentLocale]}</p>
                </div>

                <div className="modal-section">
                  <h3>{t('projects.solution')}</h3>
                  <p>{selectedProject.solution[currentLocale]}</p>
                </div>

                <div className="modal-section">
                  <h3>{t('projects.learnings')}</h3>
                  <p>{selectedProject.learnings[currentLocale]}</p>
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
                  {isValidExternalUrl(selectedProject.urls.live) ? (
                    <a
                      href={selectedProject.urls.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modal btn-primary"
                    >
                      {t('projects.viewLive')}
                    </a>
                  ) : (
                    <span className="btn-modal btn-primary btn-disabled" aria-disabled="true">
                      {t('projects.liveUnavailable')}
                    </span>
                  )}

                  {isValidExternalUrl(selectedProject.urls.github) ? (
                    <a
                      href={selectedProject.urls.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-modal btn-secondary"
                    >
                      {t('projects.viewCode')}
                    </a>
                  ) : (
                    <span className="btn-modal btn-secondary btn-disabled" aria-disabled="true">
                      {t('projects.codeUnavailable')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </section>
  )
}

export default Projects
