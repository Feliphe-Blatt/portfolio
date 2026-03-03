# TASK-01 — Migracao para TypeScript

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `concluida` ✅  
**Prioridade**: 🔥 Alta  
**Sprint Points**: 5 SP  
**Responsavel**: GitHub Copilot  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: 03/03/2026  

---

## Objetivo

Migrar toda a codebase do portfolio de JavaScript/JSX para TypeScript/TSX, adicionando tipagem estatica, melhorando a seguranca e preparando o projeto para escala.

---

## Contexto

Identificado como proximo passo evolutivo na Sprint 01 Review. A stack atual usa `.jsx` + `.js` sem verificacao de tipos. TypeScript melhora a experiencia de desenvolvimento, detecta bugs em tempo de compilacao e e sinal de maturidade tecnica — relevante para um portfolio de desenvolvedor.

Referencia: `SPRINT-01-REVIEW.md` — Secao "Debito Tecnico": "TypeScript nao migrado — pode ser sprint futura".

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Todos os arquivos `.jsx`/`.js` em `src/` convertidos para `.tsx`/`.ts` | Build |
| CA-02 | `tsconfig.json` configurado com `strict: true` | Build |
| CA-03 | Props de todos os componentes tipadas com `interface` | Build |
| CA-04 | `src/data/projects.ts` com interfaces `Project`, `ProjectCategory` | Build |
| CA-05 | Contextos (`ThemeContext`, `i18nContext`) tipados | Build |
| CA-06 | Build (`npm run build`) passa sem erros TypeScript | Build |
| CA-07 | ESLint configurado para TypeScript (`@typescript-eslint`) | Lint |
| CA-08 | `vite.config.ts` (configuracao migrada) | Build |
| CA-09 | `stack` no `copilot-instructions.md` atualizado para TypeScript | Manual |

---

## Cenarios de Teste (Test-First Gate)

> Esta task e de migracao estrutural — nao ha comportamento novo. Os cenarios validam que nada regrediu.

### CA-06 — Build sem erros

**Cenario 1 — Build bem-sucedido:**
- Dado que todos os arquivos foram convertidos para TypeScript
- Quando executo `npm run build`
- Entao o build conclui sem erros de tipo

**Cenario 2 — Erro de tipo detectado:**
- Dado que um componente recebe uma prop do tipo errado
- Quando executo `npm run build` ou o editor analisa o arquivo
- Entao o TypeScript exibe um erro descritivo com o tipo esperado vs recebido

### CA-03 — Props tipadas

**Cenario 3 — Prop obrigatoria ausente:**
- Dado que um componente tem uma prop obrigatoria tipada
- Quando o componente e usado sem essa prop
- Entao o TypeScript reporta erro em tempo de compilacao (nao em runtime)

### CA-07 — ESLint TypeScript

**Cenario 4 — Lint limpo:**
- Dado que todos os arquivos `.tsx`/`.ts` estao convertidos
- Quando executo `npm run lint`
- Entao zero erros ou warnings criticos sao reportados

---

## Todo List (Checklist de Implementacao)

### Fase 0 — Abertura
- [x] Criar arquivo da task (este documento)
- [ ] Criar resumo em `sprints/current/relatorios-clickup/TASK-01-clickup.md`
- [ ] Criar instrucao em `sprints/current/evidencias/instructions/TASK-01-instructions.md`
- [ ] Atualizar `sprints/current/sprint-info.md` → status `em-andamento`

### Fase PRE — Test-First
- [x] Cenarios mapeados (acima)
- [ ] Stubs N/A para task de migracao — validacao via build

### Fase 2 — Implementacao

#### Etapa A — Setup de Infraestrutura TypeScript
- [ ] Instalar dependencias: `typescript @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- [ ] Criar `tsconfig.json` com `strict: true`
- [ ] Atualizar `vite.config.js` → `vite.config.ts`
- [ ] Atualizar `eslint.config.js` para incluir regras TypeScript
- [ ] Validar: `npm run build` ainda passa (com arquivos .jsx)

#### Etapa B — Migrar Data Layer
- [ ] `src/data/projects.js` → `src/data/projects.ts`
- [ ] Definir interfaces: `ProjectImage`, `Project`, `ProjectCategory`
- [ ] Tipar funcoes utilitarias: `getProjectBySlug`, `getFeaturedProjects`

#### Etapa C — Migrar Contextos
- [ ] `src/context/ThemeContext.jsx` → `.tsx` com tipos do contexto
- [ ] `src/context/i18nContext.jsx` → `.tsx` com tipos do contexto

#### Etapa D — Migrar Entrypoint e App
- [ ] `src/main.jsx` → `src/main.tsx`
- [ ] `src/App.jsx` → `src/App.tsx`

#### Etapa E — Migrar Componentes (layout)
- [ ] `src/components/ErrorBoundary.jsx` → `.tsx`
- [ ] `src/components/layout/Navbar.jsx` → `.tsx`
- [ ] `src/components/layout/Footer.jsx` → `.tsx`
- [ ] `src/components/layout/LanguageToggle.jsx` → `.tsx`
- [ ] `src/components/layout/ThemeToggle.jsx` → `.tsx`

#### Etapa F — Migrar Sections
- [ ] `src/components/sections/Hero.jsx` → `.tsx`
- [ ] `src/components/sections/About.jsx` → `.tsx`
- [ ] `src/components/sections/Skills.jsx` → `.tsx`

#### Etapa G — Migrar Pages
- [ ] `src/pages/Home.jsx` → `.tsx`
- [ ] `src/pages/Projects.jsx` → `.tsx`

### Fase 3 — Qualidade
- [ ] `npm run build` — zero erros TypeScript
- [ ] `npm run lint` — zero warnings criticos
- [ ] Verificar `get_errors` no VS Code

### Fase 5 — Fechamento
- [ ] Atualizar stack em `copilot-instructions.md` (remover "Sem TypeScript")
- [ ] Atualizar `frontend-ts.instructions.md` para padroes TypeScript
- [ ] Atualizar `testes-frontend.instructions.md` para `.tsx`
- [ ] Atualizar `sprints/current/sprint-info.md` → TASK-01 `concluida`, +5 SP
- [ ] Criar `sprints/current/evidencias/metricas/tasks/TASK-01-metricas.md`

---

## Plano Tecnico

### Arquivos afetados

**Renomeados + convertidos (16 arquivos):**
- `src/main.jsx` → `src/main.tsx`
- `src/App.jsx` → `src/App.tsx`
- `src/data/projects.js` → `src/data/projects.ts`
- `src/context/ThemeContext.jsx` → `.tsx`
- `src/context/i18nContext.jsx` → `.tsx`
- `src/components/ErrorBoundary.jsx` → `.tsx`
- `src/components/layout/*.jsx` (4 arquivos) → `.tsx`
- `src/components/sections/*.jsx` (3 arquivos) → `.tsx`
- `src/pages/*.jsx` (2 arquivos) → `.tsx`

**Novos/modificados:**
- `tsconfig.json` — NOVO
- `vite.config.js` → `vite.config.ts`
- `eslint.config.js` — atualizado
- `package.json` — novas devDependencies
- `.github/copilot-instructions.md` — stack atualizado
- `.github/instructions/frontend-ts.instructions.md` — padroes TS

### Opcoes de implementacao

**Opcao A — Migrar arquivo por arquivo (incremental)**
- Pros: facil identificar erros por arquivo, rollback cirurgico
- Cons: periodo com mix de .jsx e .tsx (pode confundir)

**Opcao B — Converter tudo de uma vez**
- Pros: estado final consistente, mais rapido
- Cons: erros podem acumular, mais dificil debugar

**Opcao escolhida**: A (incremental) — sequencia: data → context → app → components → pages

### Riscos de regressao
- AOS (Animate on Scroll) pode nao ter tipos (`@types/aos` — verificar)
- `focus-trap-react` pode precisar de `@types/focus-trap-react`
- `react-intl` tem tipos proprios — verificar compatibilidade

---

## Metricas

> Preencher ao concluir.

**Relatorio completo**: `sprints/current/evidencias/metricas/tasks/TASK-01-metricas.md`

| Campo | Valor |
|-------|-------|
| Inicio | 03/03/2026 |
| Fim | 03/03/2026 |
| Duracao | Estimado 2-3h ativas |
| SP planejado | 5 |
| SP realizado | 5 |
| Arquivos alterados | 21 |
| Testes criados | 0 (N/A) |
