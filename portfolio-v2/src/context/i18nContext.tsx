import { createContext, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'

type Locale = 'pt-BR' | 'en-US'

type Messages = Record<string, string>
type MessagesMap = Record<Locale, Messages>

// Mensagens (serão extraídas para arquivos JSON depois)
const messages: MessagesMap = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá! Meu nome é',
    'hero.name': 'Feliphe Blatt',
    'hero.tagline': 'Dev full-stack que une programação e especialistas de outras áreas para resolver problemas reais',
    'hero.cta': 'Ver Projetos',
    'about.title': 'Sobre Mim',
    'about.description': 'Sou Feliphe Blatt, dev full-stack com raízes em sistemas embarcados e um interesse crescente por IA e acessibilidade. Acredito que o melhor software nasce da colaboração entre programadores e especialistas de outras áreas.',
    'about.enjoy': 'Nao vivo sem musica 🎵 e cafe ☕',
    'about.workTogether': 'Bora construir algo juntos?',
    'about.checkGithub': 'Confira também meus projetos no GitHub:',
    'skills.title': 'Habilidades',
    'skills.technologies': 'Tecnologias',
    'skills.stacks': 'Stacks & Ferramentas',
    'skills.softskills': 'Soft Skills',
    'skills.soft.interdisciplinary': 'Pensamento interdisciplinar',
    'skills.soft.fp': 'Análise de Pontos de Função (APF)',
    'skills.soft.scrum': 'Scrum / Sprints',
    'skills.soft.kanban': 'Kanban',
    'skills.soft.documentation': 'Documentação técnica',
    'skills.soft.attention': 'Atenção a detalhes',
    'skills.soft.communication': 'Comunicação técnica',
    'projects.title': 'Projetos',
    'projects.description': 'Descrição',
    'projects.technologies': 'Tecnologias',
    'projects.viewLive': 'Ver Projeto',
    'projects.viewCode': 'Ver Código',
    'projects.liveUnavailable': 'Demo indisponivel',
    'projects.codeUnavailable': 'Codigo indisponivel',
    'projects.viewDetails': 'Ver detalhes',
    'projects.studyCase': 'Case de estudo',
    'projects.problem': 'Problema',
    'projects.solution': 'Solucao',
    'projects.learnings': 'Aprendizados',
    'projects.closeModal': 'Fechar modal',
    'projects.previewArea': 'Previews do projeto',
    'projects.desktopPreview': 'Desktop',
    'projects.mobilePreview': 'Mobile',
    'projects.openDetailsAria': 'Abrir detalhes do projeto {project}',
    'projects.modalOpened': 'Modal do projeto {project} aberto',
    'projects.modalClosed': 'Modal fechado',
    'projects.categoryAll': 'Todos',
    'projects.filterStatus': '{count} projetos na categoria {category}',
    'contact.title': 'Contato',
    'footer.rights': 'Todos os direitos reservados',
    'footer.madeWithCopilotAgents': 'Feito com Agentes do Copilot 🕵️'
  },
  'en-US': {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello! My name is',
    'hero.name': 'Feliphe Blatt',
    'hero.tagline': 'Full-stack dev who bridges code and domain experts to solve real-world problems',
    'hero.cta': 'View Projects',
    'about.title': 'About Me',
    'about.description': "I'm Feliphe Blatt, a full-stack dev rooted in embedded systems with a growing interest in AI and accessibility. I believe the best software is born from collaboration between developers and specialists from other fields.",
    'about.enjoy': "I can't live without music 🎵 and coffee ☕",
    'about.workTogether': "Let's build something together!",
    'about.checkGithub': 'Also check out my projects on GitHub:',
    'skills.title': 'Skills',
    'skills.technologies': 'Technologies',
    'skills.stacks': 'Stacks & Tools',
    'skills.softskills': 'Soft Skills',
    'skills.soft.interdisciplinary': 'Interdisciplinary thinking',
    'skills.soft.fp': 'Function Points Analysis (FPA)',
    'skills.soft.scrum': 'Scrum / Sprints',
    'skills.soft.kanban': 'Kanban',
    'skills.soft.documentation': 'Technical documentation',
    'skills.soft.attention': 'Attention to detail',
    'skills.soft.communication': 'Technical communication',
    'projects.title': 'Projects',
    'projects.description': 'Description',
    'projects.technologies': 'Technologies',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'projects.liveUnavailable': 'Demo unavailable',
    'projects.codeUnavailable': 'Code unavailable',
    'projects.viewDetails': 'View details',
    'projects.studyCase': 'Study case',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.learnings': 'Learnings',
    'projects.closeModal': 'Close modal',
    'projects.previewArea': 'Project previews',
    'projects.desktopPreview': 'Desktop',
    'projects.mobilePreview': 'Mobile',
    'projects.openDetailsAria': 'Open details for project {project}',
    'projects.modalOpened': 'Project modal for {project} opened',
    'projects.modalClosed': 'Modal closed',
    'projects.categoryAll': 'All',
    'projects.filterStatus': '{count} projects in category {category}',
    'contact.title': 'Contact',
    'footer.rights': 'All rights reserved',
    'footer.madeWithCopilotAgents': 'Made with Copilot Agents 🕵️'
  }
}

interface LanguageContextType {
  locale: Locale
  switchLanguage: (newLocale: Locale) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem('portfolio-locale')
    if (savedLocale === 'pt-BR' || savedLocale === 'en-US') return savedLocale

    // Detecta idioma do navegador
    const browserLang = navigator.language
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en-US'
  })

  const switchLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('portfolio-locale', newLocale)
  }

  const toggleLanguage = () => {
    const newLocale: Locale = locale === 'pt-BR' ? 'en-US' : 'pt-BR'
    switchLanguage(newLocale)
  }

  const value: LanguageContextType = {
    locale,
    switchLanguage,
    toggleLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default LanguageContext
