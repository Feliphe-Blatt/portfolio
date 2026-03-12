# TASK-07 — Projetos: Modal Mobile/Desktop + i18n + A11y + Performance

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `em-andamento`  
**Prioridade**: 🔥 Alta  
**Sprint Points**: 3 SP  
**Responsavel**: GitHub Copilot  
**Data de Abertura**: 12/03/2026  
**Data de Conclusao**: —

---

## Objetivo

Evoluir a secao de projetos com modal responsivo (frames desktop/mobile), internacionalizacao completa dos textos relacionados, links reais de repositorio, melhorias de acessibilidade e ajustes de performance visual.

---

## Contexto

Solicitacao direta do usuario durante Sprint 02 para elevar qualidade da vitrine de projetos, com foco em UX, i18n, navegacao acessivel e consistencia do modal.

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Modal exibe preview desktop e mobile em molduras com aspect-ratio apropriado | Manual |
| CA-02 | Acao "Ver Codigo" abre o repositorio correspondente de cada projeto | Manual |
| CA-03 | Conteudos de modal/"Sobre"/rodape mudam corretamente entre PT-BR e EN-US | Manual |
| CA-04 | Cards e modal com melhorias de acessibilidade (teclado, foco, labels) | Manual |
| CA-05 | Imagens com melhorias de performance visual (lazy/srcset/sizes/decoding) | Build + Manual |

---

## Cenarios de Teste (Test-First Gate)

### CA-01

**Cenario 1 — Caminho feliz:**
- Dado que um projeto e aberto no modal
- Quando o conteudo visual e renderizado
- Entao devem existir um frame desktop e um frame mobile com proporcoes distintas

**Cenario 2 — Edge case responsivo:**
- Dado que o usuario esta em viewport mobile
- Quando abre o modal
- Entao os previews devem manter legibilidade e sem overflow horizontal

### CA-02

**Cenario 1 — Repositorio valido:**
- Dado que um projeto possui URL de repositorio
- Quando o usuario clica em "Ver Codigo"
- Entao o navegador deve abrir o repositorio correspondente em nova aba

### CA-03

**Cenario 1 — Troca para ingles:**
- Dado que a pagina esta em PT-BR
- Quando o usuario muda para EN-US
- Entao textos da descricao do modal, "Nao vivo sem musica..." e nota do rodape devem ficar em ingles

### CA-04

**Cenario 1 — Card por teclado:**
- Dado foco em um card de projeto
- Quando usuario pressiona Enter ou Espaco
- Entao o modal correspondente deve abrir

**Cenario 2 — Fechamento com foco restaurado:**
- Dado modal aberto por um card
- Quando modal e fechado
- Entao foco retorna ao elemento que abriu o modal

### CA-05

**Cenario 1 — Renderizacao otimizada:**
- Dado carregamento da grade e modal
- Quando as imagens sao renderizadas
- Entao devem usar `loading`, `decoding`, `srcSet` e `sizes` adequados

---

## Todo List (Checklist de Implementacao)

### Fase 0 — Abertura
- [x] Criar arquivo da task
- [x] Criar resumo no relatorios-clickup/
- [x] Criar instrucao em evidencias/instructions/
- [x] Organizar evidencias visuais em evidencias/prints/
- [x] Atualizar sprint-info.md

### Fase PRE — Test-First
- [x] Mapear cenarios por CA
- [ ] Escrever stubs de teste (nao aplicavel nesta iteracao curta)

### Fase 2 — Implementacao
- [x] Ajustar dados e links de repositorio dos projetos
- [x] Refatorar modal com frames desktop/mobile + narrativa de estudo
- [x] Internacionalizar textos faltantes (modal/sobre/rodape/projetos)
- [x] Aplicar melhorias de acessibilidade
- [x] Aplicar melhorias de performance visual em imagens

### Fase 3 — Qualidade
- [x] Build sem erros
- [ ] Lint sem warnings criticos

### Fase 5 — Fechamento
- [ ] Atualizar sprint-info.md
- [ ] Criar relatorio de metricas em evidencias/metricas/tasks/
- [ ] Referenciar metricas neste arquivo

---

## Plano Tecnico

### Arquivos afetados
- `portfolio-v2/src/data/projects.ts` — i18n por projeto + links github corretos
- `portfolio-v2/src/pages/Projects.tsx` — modal novo, a11y, i18n, performance de imagens
- `portfolio-v2/src/pages/Projects.css` — frames desktop/mobile, layout e acessibilidade visual
- `portfolio-v2/src/context/i18nContext.tsx` — novas chaves de traducao
- `portfolio-v2/src/components/sections/About.tsx` — remover texto hardcoded
- `portfolio-v2/src/components/layout/Footer.tsx` — i18n da nota do rodape

### Opcoes de implementacao

**Opcao A**: i18n dentro de `projects.ts` (titulo/descricao por locale)  
- Pros: centraliza conteudo dos projetos; evita hardcode no componente  
- Cons: aumenta tamanho do arquivo de dados

**Opcao B**: manter dados fixos e traduzir por `id` no i18nContext  
- Pros: separacao total entre conteudo e codigo  
- Cons: duplicacao de chaves e manutencao mais extensa

**Opcao escolhida**: Opcao A para descricoes de projeto + i18nContext para labels globais.

### Riscos de regressao
- Possivel quebra de layout no modal em resolucoes pequenas
- Possivel link quebrado caso repositorio tenha nome diferente do esperado

### Estrategia de validacao
- Manual: abrir cada projeto, testar troca de idioma, teclado e links
- Automatizada: `npm run build` na pasta `portfolio-v2`
