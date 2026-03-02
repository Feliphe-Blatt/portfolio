# Portfolio V2 - React + Vite

Portfólio moderno e responsivo de Feliphe Blatt, desenvolvido com React, Vite e design minimalista.

## ✨ Features

- 🎨 **Dark/Light Mode** - Toggle entre temas com paleta customizada
- 🌍 **Multi-idioma** - PT-BR e EN com detecção automática
- ⚡ **Performance** - Built com Vite para máxima velocidade
- 📱 **100% Responsivo** - Mobile-first design
- ✨ **Animações** - Scroll animations com AOS
- 🎯 **Acessível** - Seguindo boas práticas WCAG
- 🚀 **Single Page App** - Navegação suave com React Router

## 🎨 Paleta de Cores

### Dark Mode (Padrão)
- Background: `#11172a` (deep-dark blue)
- Text: `#dfe5ec` (light gray)
- Accent: `#599692` (pastel green)
- Secondary Text: `#626c7d` (medium gray)

### Light Mode
- Background: `#f8f9fc` (off-white azulado)
- Text: `#2d3748` (cinza escuro)
- Accent: `#4a8884` (verde água saturado)
- Secondary Text: `#626c7d`

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool
- **React Router DOM 7.2.0** - Navegação
- **React Bootstrap 2.10.6** - UI components
- **React Intl** - i18n (internacionalização)
- **AOS** - Scroll animations
- **Axios 1.13.2** - HTTP client

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Feliphe-Blatt/portfolio.git

# Entre na pasta do projeto
cd portfolio/portfolio-v2

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎯 Estrutura do Projeto

```
portfolio-v2/
├── public/
│   └── assets/
│       ├── img/          # Imagens e ícones
│       └── downloads/    # CV e documentos
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer, Toggles
│   │   └── sections/     # Hero, About, Skills
│   ├── pages/            # Home, Projects
│   ├── context/          # Theme e i18n contexts
│   ├── styles/           # CSS global (theme.css)
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🚀 Como Usar

### Acesse o site
Abra seu navegador em: **http://localhost:5173/**

### Navegação
- **Início** - Hero + Sobre + Habilidades
- **Projetos** - Lista completa com filtros
- **Contato** - Links sociais no rodapé

### Trocar Tema
Clique no ícone de sol/lua no canto superior direito.

### Trocar Idioma
Clique em "PT" ou "EN" no menu.

## 📝 Customização

### Adicionar Novo Projeto
Edite `src/pages/Projects.jsx`, adicione no array `projects`:
```js
{
  id: 8,
  title: 'Novo Projeto',
  category: 'frontend', // ou 'fullstack'
  description: 'Descrição do projeto...',
  technologies: ['React', 'Node.js'],
  image: '/assets/img/projeto.png',
  liveUrl: 'https://...',
  codeUrl: 'https://github.com/...'
}
```

### Alterar Cores
Edite `src/styles/theme.css`:
```css
:root {
  --accent-primary: #SUA_COR;
  /* ... */
}
```

## 📄 Licença

MIT © Feliphe Blatt

---

**Desenvolvido com ❤️ usando React + Vite ⚡**
