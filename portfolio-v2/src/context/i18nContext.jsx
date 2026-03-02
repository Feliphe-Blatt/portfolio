import { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

// Mensagens (serão extraídas para arquivos JSON depois)
const messages = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.greeting': 'Olá! Meu nome é',
    'hero.name': 'Feliphe Blatt',
    'hero.tagline': 'Dev full-stack com paixão por sistemas embarcados e energias renováveis',
    'hero.cta': 'Ver Projetos',
    'about.title': 'Sobre Mim',
    'about.description': 'Tenho experiência em várias linguagens de programação e ferramentas de desenvolvimento.',
    'about.enjoy': 'Não vivo sem música 🎵 e café ☕',
    'about.workTogether': 'Quem sabe podemos trabalhar juntos?',
    'skills.languages': 'Linguagens',
    'skills.tools': 'Ferramentas e Tecnologias',
    'projects.title': 'Projetos',
    'projects.description': 'Descrição',
    'projects.technologies': 'Tecnologias',
    'projects.viewLive': 'Ver Projeto',
    'projects.viewCode': 'Ver Código',
    'contact.title': 'Contato',
    'footer.rights': 'Todos os direitos reservados'
  },
  'en-US': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hello! My name is',
    'hero.name': 'Feliphe Blatt',
    'hero.tagline': 'Full-stack developer with passion for embedded systems and renewable energy',
    'hero.cta': 'View Projects',
    'about.title': 'About Me',
    'about.description': 'I have experience in several programming languages and development tools.',
    'about.enjoy': "Can't live without music 🎵 and coffee ☕",
    'about.workTogether': 'Maybe we can work together?',
    'skills.languages': 'Languages',
    'skills.tools': 'Tools and Technologies',
    'projects.title': 'Projects',
    'projects.description': 'Description',
    'projects.technologies': 'Technologies',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'contact.title': 'Contact',
    'footer.rights': 'All rights reserved'
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem('portfolio-locale');
    if (savedLocale) return savedLocale;
    
    // Detecta idioma do navegador
    const browserLang = navigator.language;
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en-US';
  });

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('portfolio-locale', newLocale);
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'pt-BR' ? 'en-US' : 'pt-BR';
    switchLanguage(newLocale);
  };

  const value = {
    locale,
    switchLanguage,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
