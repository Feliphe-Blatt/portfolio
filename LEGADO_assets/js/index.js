
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Lista de projetos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const projetos = [
  {
    titulo: 'Galeria de fotos',
    descricao: 'Galeria de fotos artísticas e paisagens. Enquanto faço estudos no desenvolvimento web, decidi criar uma galeria de arte para compartilhar minhas fotos como exemplo.',
    tecnologias: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Splide'],
    imagens: {
      desktop: 'url("assets/img/galeria-desktop.webp")',
      mobile: 'url("assets/img/galeria-mobile.webp")'
    },
    link: 'https://feliphe-blatt.github.io/galeria/'
  },
  {
    titulo: 'Telas de Login e Cadastro',
    descricao: 'Telas de login e cadastro responsivas. Com validação de campos e feedback visual para o usuário.',
    tecnologias: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
    imagens: {
      desktop: 'url("assets/img/login-cadastro-desktop.webp")',
      mobile: 'url("assets/img/login-cadastro-mobile.webp")'
    },
    link: 'https://feliphe-blatt.github.io/login-cadastro/'
  },
  {
    titulo: 'Turma Connect (Em desenvolvimento)',
    descricao: 'Plataforma para conectar alunos, monitoria e professores. Permite a criação de turmas, atividades individuais ou em grupo, compartilhamento de materiais e comunicação entre os membros.',
    tecnologias: ['Em breve...'],
    imagens: {
      desktop: 'url("assets/img/turma-desktop.webp")',
      mobile: 'url("assets/img/turma-mobile.webp")'
    },
    link: 'https://github.com/Feliphe-Blatt/turmaconnect'
  },
  {
    titulo: 'Primeiros Socorros',
    descricao: 'Aplicativo para fornecer instruções de primeiros socorros em situações de emergência. Inclui tutoriais em ilustrações e texto.',
    tecnologias: ['HTML/CSS', 'BootStrap'],
    imagens: {
      desktop: 'url("assets/img/socorros-desktop.webp")',
      mobile: 'url("assets/img/socorros-mobile.webp")'
    },
    link: 'https://feliphe-blatt.github.io/primeiros-socorros/'
  },
  {
    titulo: 'C.R.U.D.: Tarefas',
    descricao: 'Aplicação CRUD simples utilizando JavaScript puro. Permite criar, ler, atualizar e deletar registros. Estes são armazenados no LocalStorage do navegador.',
    tecnologias: ['HTML/CSS', 'JavaScript', 'LocalStorage'],
    imagens: {
      desktop: 'url("assets/img/task-desktop.webp")',
      mobile: 'url("assets/img/task-mobile.webp")'
    },
    link: 'https://feliphe-blatt.github.io/tarefas/'
  },
  {
    titulo: 'C.R.U.D.: Flask + BootStrap',
    descricao: 'Aplicação CRUD utilizando Flask e Bootstrap. Permite criar, ler, atualizar e deletar registros com uma interface amigável e responsiva. Também é uma SPA (Single Page Application), mudando somente as rotas e o conteúdo atual.',
    tecnologias: ['HTML/CSS', 'Python', 'Flask', 'Bootstrap'],
    imagens: {
      desktop: 'url("assets/img/flask-desktop.webp")',
      mobile: 'url("assets/img/flask-mobile.webp")'
    },
    link: 'https://github.com/Feliphe-Blatt/crud-flask'
  },
  {
    titulo: 'Link-Tree',
    descricao: 'Página de links personalizada para centralizar todos os seus links e redes importantes em um só lugar. Ideal para redes sociais, portfólio, contatos e podendo também redirecionar para inscrições de eventos, cursos, etc.',
    tecnologias: ['HTML/CSS'],
    imagens: {
      desktop: 'url("assets/img/link-desktop.webp")',
      mobile: 'url("assets/img/link-mobile.webp")'
    },
    link: 'https://feliphe-blatt.github.io/links/'
  }
];

// Índice do projeto atual
let projetoAtual = 0;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Muda foco para a sessão de projetos
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function scrollToSites() {
  document.querySelector('#sites').scrollIntoView({ behavior: 'smooth' });
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Função genérica para atualizar o projeto
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function atualizarProjeto(projeto) {
  const titulo = document.querySelector('#sites-main h2');
  const descricao = document.querySelector('#descricao-projeto p');
  const tecnologias = document.querySelector('#tecnologias-projeto');
  const desktopImg = document.querySelector('#desk');
  const mobileImg = document.querySelector('#mob');

  // Adicionar classes de animação para fade out
  titulo.classList.add('fade-out');
  descricao.classList.add('fade-out');
  tecnologias.classList.add('fade-out');
  desktopImg.classList.add('fade-out');
  mobileImg.classList.add('fade-out');

  // Esperar a animação terminar antes de atualizar o conteúdo
  setTimeout(() => {
    // Atualizar conteúdo
    titulo.innerHTML = projeto.titulo;
    descricao.innerHTML = projeto.descricao;
    tecnologias.innerHTML = projeto.tecnologias.map(tec => `<li class="list-group-item limpo">${tec}</li>`).join('');
    desktopImg.style.backgroundImage = projeto.imagens.desktop;
    mobileImg.style.backgroundImage = projeto.imagens.mobile;
    document.querySelector('#desk a').href = projeto.link;
    document.querySelector('#mob a').href = projeto.link;

    // Remover classes de animação para fade out
    titulo.classList.remove('fade-out');
    descricao.classList.remove('fade-out');
    tecnologias.classList.remove('fade-out');
    desktopImg.classList.remove('fade-out');
    mobileImg.classList.remove('fade-out');

    // Adicionar classes de animação para fade in
    titulo.classList.add('fade-in');
    descricao.classList.add('fade-in');
    tecnologias.classList.add('fade-in');
    desktopImg.classList.add('fade-in');
    mobileImg.classList.add('fade-in');

    // Remover classes de animação após a animação terminar
    setTimeout(() => {
      titulo.classList.remove('fade-in');
      descricao.classList.remove('fade-in');
      tecnologias.classList.remove('fade-in');
      desktopImg.classList.remove('fade-in');
      mobileImg.classList.remove('fade-in');
    }, 300); // Duração da animação em milissegundos
  }, 300); // Duração da animação fade out em milissegundos
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Função para mostrar o projeto com base no índice
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function showProject(index) {
  scrollToSites();
  projetoAtual = index;
  atualizarProjeto(projetos[projetoAtual]);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Função para mostrar o próximo projeto
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function showNextProject() {
  projetoAtual = (projetoAtual + 1) % projetos.length;
  showProject(projetoAtual);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Função para mostrar o projeto anterior
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function showPreviousProject() {
  projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
  showProject(projetoAtual);
}
