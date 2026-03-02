/**
 * PROJECTS DATA
 * Portfolio V2 - Feliphe Blatt
 * 
 * Estrutura de dados dos projetos do portfolio.
 * Separado do componente para facilitar manutenção e futuras integrações (CMS, i18n, etc).
 */

export const projects = [
  {
    id: 1,
    slug: 'galeria-fotos',
    title: 'Galeria de fotos',
    category: 'frontend',
    description: 'Galeria de fotos artísticas e paisagens. Enquanto faço estudos no desenvolvimento web, decidi criar uma galeria de arte para compartilhar minhas fotos como exemplo.',
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Splide'],
    images: {
      desktop: '/assets/img/galeria-desktop.webp',
      mobile: '/assets/img/galeria-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/galeria/',
      github: '#'
    },
    featured: true,
    order: 1
  },
  {
    id: 2,
    slug: 'login-cadastro',
    title: 'Login/Cadastro',
    category: 'frontend',
    description: 'Sistema de login e cadastro com validação de formulários.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/login-cadastro-desktop.webp',
      mobile: '/assets/img/login-cadastro-mobile.webp'
    },
    urls: {
      live: '#',
      github: '#'
    },
    featured: false,
    order: 2
  },
  {
    id: 3,
    slug: 'turma-connect',
    title: 'Turma Connect',
    category: 'fullstack',
    description: 'Plataforma de conexão para turmas escolares.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    images: {
      desktop: '/assets/img/turma-desktop.webp',
      mobile: '/assets/img/turma-mobile.webp'
    },
    urls: {
      live: '#',
      github: '#'
    },
    featured: false,
    order: 3
  },
  {
    id: 4,
    slug: 'primeiros-socorros',
    title: 'Primeiros Socorros',
    category: 'frontend',
    description: 'Guia interativo de primeiros socorros.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/socorros-desktop.webp',
      mobile: '/assets/img/socorros-mobile.webp'
    },
    urls: {
      live: '#',
      github: '#'
    },
    featured: false,
    order: 4
  },
  {
    id: 5,
    slug: 'crud-vanilla',
    title: 'CRUD: Vanilla JS',
    category: 'frontend',
    description: 'Gerencia tarefas que ficam salvas na memória do navegador.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/task-desktop.webp',
      mobile: '/assets/img/task-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/tarefas/',
      github: '#'
    },
    featured: true,
    order: 5
  },
  {
    id: 6,
    slug: 'crud-flask',
    title: 'CRUD: Flask + Bootstrap',
    category: 'fullstack',
    description: 'Sistema CRUD completo com backend Flask.',
    technologies: ['Python', 'Flask', 'Bootstrap', 'SQLite'],
    images: {
      desktop: '/assets/img/flask-desktop.webp',
      mobile: '/assets/img/flask-mobile.webp'
    },
    urls: {
      live: '#',
      github: '#'
    },
    featured: false,
    order: 6
  },
  {
    id: 7,
    slug: 'link-tree',
    title: 'Link-Tree',
    category: 'frontend',
    description: 'Redirecionador de Links personalizado.',
    technologies: ['HTML', 'CSS'],
    images: {
      desktop: '/assets/img/link-desktop.webp',
      mobile: '/assets/img/link-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/links/',
      github: '#'
    },
    featured: false,
    order: 7
  }
];

/**
 * Categorias de filtro
 */
export const categories = [
  { id: 'all', label: { 'pt-BR': 'Todos', 'en': 'All' } },
  { id: 'frontend', label: { 'pt-BR': 'Frontend', 'en': 'Frontend' } },
  { id: 'fullstack', label: { 'pt-BR': 'Full Stack', 'en': 'Full Stack' } }
];

/**
 * Utility: Obter projeto por slug
 */
export const getProjectBySlug = (slug) => {
  return projects.find(p => p.slug === slug);
};

/**
 * Utility: Obter projetos em destaque
 */
export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured);
};

/**
 * Utility: Obter projetos por categoria
 */
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
