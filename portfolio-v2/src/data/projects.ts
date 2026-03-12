/**
 * PROJECTS DATA
 * Portfolio V2 - Feliphe Blatt
 *
 * Estrutura de dados dos projetos do portfolio.
 * Separado do componente para facilitar manutenção e futuras integrações (CMS, i18n, etc).
 */

export type ProjectCategory = 'frontend' | 'fullstack' | 'mobile' | 'devops'

export type ProjectLocale = 'pt-BR' | 'en-US'

export interface LocalizedText {
  'pt-BR': string
  'en-US': string
}

export interface ProjectImages {
  desktop: string
  mobile: string
}

export interface ProjectUrls {
  live: string
  github: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: ProjectCategory
  description: LocalizedText
  problem: LocalizedText
  solution: LocalizedText
  learnings: LocalizedText
  technologies: string[]
  images: ProjectImages
  urls: ProjectUrls
  featured: boolean
  order: number
}

export interface CategoryLabel {
  'pt-BR': string
  'en-US': string
}

export interface Category {
  id: 'all' | ProjectCategory
  label: CategoryLabel
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'galeria-fotos',
    title: 'Galeria de fotos',
    category: 'frontend',
    description: {
      'pt-BR': 'Galeria de fotos artisticas e paisagens criada como estudo pratico de layout responsivo e interacoes visuais.',
      'en-US': 'An artistic and landscape photo gallery built as a practical study of responsive layouts and visual interactions.'
    },
    problem: {
      'pt-BR': 'Queria transformar um estudo de HTML/CSS em algo visualmente atrativo e com boa experiencia em diferentes telas.',
      'en-US': 'I wanted to turn an HTML/CSS study into a visually appealing experience across different screen sizes.'
    },
    solution: {
      'pt-BR': 'Estruturei uma galeria com foco em composicao visual e navegacao fluida usando Bootstrap e Splide.',
      'en-US': 'I structured a gallery focused on visual composition and smooth navigation using Bootstrap and Splide.'
    },
    learnings: {
      'pt-BR': 'Aprofundei responsividade, hierarquia visual e organizacao de assets para projetos front-end.',
      'en-US': 'I improved responsive design, visual hierarchy, and front-end asset organization.'
    },
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Splide'],
    images: {
      desktop: '/assets/img/galeria-desktop.webp',
      mobile: '/assets/img/galeria-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/galeria/',
      github: 'https://github.com/Feliphe-Blatt/galeria'
    },
    featured: true,
    order: 1
  },
  {
    id: 2,
    slug: 'login-cadastro',
    title: 'Login/Cadastro',
    category: 'frontend',
    description: {
      'pt-BR': 'Fluxo de login e cadastro para praticar validacao de formularios e feedback de erro ao usuario.',
      'en-US': 'Login and signup flow built to practice form validation and user-facing error feedback.'
    },
    problem: {
      'pt-BR': 'Precisava consolidar boas praticas de validacao de campos e mensagens claras para o usuario.',
      'en-US': 'I needed to consolidate good practices for field validation and clear user messaging.'
    },
    solution: {
      'pt-BR': 'Implementei regras de validacao e estados de formulario para simular um fluxo real de autenticacao.',
      'en-US': 'I implemented validation rules and form states to simulate a real authentication flow.'
    },
    learnings: {
      'pt-BR': 'Ganhei repertorio de UX em formularios e estrutura de codigo para componentes de autenticacao.',
      'en-US': 'I gained UX experience in forms and cleaner component structure for authentication flows.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/login-cadastro-desktop.webp',
      mobile: '/assets/img/login-cadastro-mobile.webp'
    },
    urls: {
      live: '#',
      github: 'https://github.com/Feliphe-Blatt/login-cadastro'
    },
    featured: false,
    order: 2
  },
  {
    id: 3,
    slug: 'turma-connect',
    title: 'Turma Connect',
    category: 'fullstack',
    description: {
      'pt-BR': 'Plataforma de conexao para turmas escolares com foco em comunicacao e organizacao de conteudo.',
      'en-US': 'A school-class connection platform focused on communication and content organization.'
    },
    problem: {
      'pt-BR': 'Queria estudar integracao entre front-end e back-end em um contexto de colaboracao entre alunos.',
      'en-US': 'I wanted to study front-end and back-end integration in a student collaboration context.'
    },
    solution: {
      'pt-BR': 'Modelei uma aplicacao full stack com React, Node.js e MongoDB para representar fluxos reais de dados.',
      'en-US': 'I modeled a full-stack application with React, Node.js, and MongoDB to represent real data flows.'
    },
    learnings: {
      'pt-BR': 'Evolui em modelagem de dados, integracao API e separacao de responsabilidades entre camadas.',
      'en-US': 'I improved data modeling, API integration, and separation of concerns between layers.'
    },
    technologies: ['React', 'Node.js', 'MongoDB'],
    images: {
      desktop: '/assets/img/turma-desktop.webp',
      mobile: '/assets/img/turma-mobile.webp'
    },
    urls: {
      live: '#',
      github: 'https://github.com/Feliphe-Blatt/turma-connect'
    },
    featured: false,
    order: 3
  },
  {
    id: 4,
    slug: 'primeiros-socorros',
    title: 'Primeiros Socorros',
    category: 'frontend',
    description: {
      'pt-BR': 'Guia interativo de primeiros socorros para estudar organizacao de informacao critica e navegacao simples.',
      'en-US': 'An interactive first-aid guide to study critical information organization and simple navigation.'
    },
    problem: {
      'pt-BR': 'Era necessario apresentar conteudo util de forma direta e facil de consultar rapidamente.',
      'en-US': 'The challenge was to present useful content in a direct and quickly searchable way.'
    },
    solution: {
      'pt-BR': 'Organizei topicos por prioridade e desenhei um fluxo de leitura claro para reduzir friccao.',
      'en-US': 'I organized topics by priority and designed a clear reading flow to reduce friction.'
    },
    learnings: {
      'pt-BR': 'Aprimorei arquitetura de conteudo e padroes de usabilidade para interfaces educativas.',
      'en-US': 'I improved content architecture and usability patterns for educational interfaces.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/socorros-desktop.webp',
      mobile: '/assets/img/socorros-mobile.webp'
    },
    urls: {
      live: '#',
      github: 'https://github.com/Feliphe-Blatt/primeiros-socorros'
    },
    featured: false,
    order: 4
  },
  {
    id: 5,
    slug: 'crud-vanilla',
    title: 'CRUD: Vanilla JS',
    category: 'frontend',
    description: {
      'pt-BR': 'App de tarefas em JavaScript puro para praticar CRUD e persistencia local no navegador.',
      'en-US': 'A vanilla JavaScript tasks app built to practice CRUD and local browser persistence.'
    },
    problem: {
      'pt-BR': 'Precisava praticar operacoes CRUD sem framework para consolidar fundamentos de JavaScript.',
      'en-US': 'I needed to practice CRUD operations without a framework to solidify JavaScript fundamentals.'
    },
    solution: {
      'pt-BR': 'Implementei cadastro, edicao e remocao de tarefas com controle de estado no proprio cliente.',
      'en-US': 'I implemented task creation, editing, and deletion with client-side state control.'
    },
    learnings: {
      'pt-BR': 'Fortaleci logica de manipulacao de DOM, estados e organizacao de codigo sem abstrações externas.',
      'en-US': 'I strengthened DOM manipulation logic, state handling, and code organization without external abstractions.'
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    images: {
      desktop: '/assets/img/task-desktop.webp',
      mobile: '/assets/img/task-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/tarefas/',
      github: 'https://github.com/Feliphe-Blatt/tarefas'
    },
    featured: true,
    order: 5
  },
  {
    id: 6,
    slug: 'crud-flask',
    title: 'CRUD: Flask + Bootstrap',
    category: 'fullstack',
    description: {
      'pt-BR': 'Sistema CRUD completo com Flask para estudar fluxo de dados full stack e persistencia em SQLite.',
      'en-US': 'A full CRUD system with Flask to study full-stack data flow and SQLite persistence.'
    },
    problem: {
      'pt-BR': 'Queria evoluir de apps estaticos para uma arquitetura com backend, rotas e banco de dados.',
      'en-US': 'I wanted to evolve from static apps to an architecture with backend routes and database support.'
    },
    solution: {
      'pt-BR': 'Desenvolvi API e telas integradas em Flask + Bootstrap com operacoes completas de cadastro.',
      'en-US': 'I built API and UI flows in Flask + Bootstrap with complete create/read/update/delete operations.'
    },
    learnings: {
      'pt-BR': 'Ganhei experiencia em ciclo request/response, persistencia relacional e estrutura MVC simples.',
      'en-US': 'I gained experience in request/response cycles, relational persistence, and a simple MVC structure.'
    },
    technologies: ['Python', 'Flask', 'Bootstrap', 'SQLite'],
    images: {
      desktop: '/assets/img/flask-desktop.webp',
      mobile: '/assets/img/flask-mobile.webp'
    },
    urls: {
      live: '#',
      github: 'https://github.com/Feliphe-Blatt/crud-flask'
    },
    featured: false,
    order: 6
  },
  {
    id: 7,
    slug: 'link-tree',
    title: 'Link-Tree',
    category: 'frontend',
    description: {
      'pt-BR': 'Pagina de links personalizada para centralizar perfis e contatos em uma interface simples.',
      'en-US': 'A custom link page to centralize social profiles and contacts in a simple interface.'
    },
    problem: {
      'pt-BR': 'Precisava de uma pagina unica para divulgar links principais com visual consistente.',
      'en-US': 'I needed a single page to share main links with a consistent visual identity.'
    },
    solution: {
      'pt-BR': 'Criei um layout leve, responsivo e facil de atualizar para novos links e canais.',
      'en-US': 'I created a lightweight, responsive layout that is easy to update with new links and channels.'
    },
    learnings: {
      'pt-BR': 'Aprimorei composicao visual minimalista e boas praticas de hierarquia para paginas one-page.',
      'en-US': 'I improved minimalist visual composition and hierarchy best practices for one-page experiences.'
    },
    technologies: ['HTML', 'CSS'],
    images: {
      desktop: '/assets/img/link-desktop.webp',
      mobile: '/assets/img/link-mobile.webp'
    },
    urls: {
      live: 'https://feliphe-blatt.github.io/links/',
      github: 'https://github.com/Feliphe-Blatt/links'
    },
    featured: false,
    order: 7
  }
]

/**
 * Categorias de filtro
 */
export const categories: Category[] = [
  { id: 'all', label: { 'pt-BR': 'Todos', 'en-US': 'All' } },
  { id: 'frontend', label: { 'pt-BR': 'Frontend', 'en-US': 'Frontend' } },
  { id: 'fullstack', label: { 'pt-BR': 'Full Stack', 'en-US': 'Full Stack' } }
]

/**
 * Utility: Obter projeto por slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug)
}

/**
 * Utility: Obter projetos em destaque
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured)
}

/**
 * Utility: Obter projetos por categoria
 */
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}
