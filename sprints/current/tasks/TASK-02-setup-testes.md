# TASK-02 — Setup de Testes (Vitest + React Testing Library)

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `backlog`  
**Prioridade**: 🔥 Alta  
**Sprint Points**: 3 SP  
**Dependencias**: TASK-01 (TypeScript) deve estar concluida  
**Responsavel**: GitHub Copilot  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: —  

---

## Objetivo

Configurar o ambiente de testes com Vitest + React Testing Library e escrever os primeiros testes unitarios para os componentes e utilitarios mais criticos do portfolio.

---

## Contexto

Sprint 01 entregou 0% de cobertura de testes, identificado como **risco principal** na retrospectiva. Com o portfolio a caminho de producao, testes automatizados sao essenciais para prevenir regressoes durante futuras evolucoes.

Referencia: `SPRINT-01-RETROSPECTIVE.md` — Acao #4: "Setup de Testes".

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | `npm test` executa e reporta resultados | Terminal |
| CA-02 | `npm test` passa (todos os testes verdes) | Terminal |
| CA-03 | Testes para `ErrorBoundary` (renderizacao + fallback) | `npm test` |
| CA-04 | Testes para `src/data/projects.ts` (utilitarios) | `npm test` |
| CA-05 | Helper `renderComContexto` criado em `src/test/helpers.tsx` | Build |
| CA-06 | GitHub Actions executa `npm test` no CI | `.github/workflows/` |
| CA-07 | Coverage report disponivel (`npm run test:coverage`) | Terminal |

---

## Cenarios de Teste

### CA-03 — ErrorBoundary

**Cenario 1 — Renderizacao normal:**
- Dado que nenhum erro e lancado pelo filho
- Quando renderizo `<ErrorBoundary><div>ok</div></ErrorBoundary>`
- Entao o conteudo filho e exibido normalmente

**Cenario 2 — Fallback ao capturar erro:**
- Dado que um componente filho lanca um erro
- Quando o ErrorBoundary captura o erro
- Entao a UI de fallback e exibida (nao a tela branca)

### CA-04 — projects.ts utilitarios

**Cenario 3 — getProjectBySlug com slug valido:**
- Dado que existe um projeto com slug `beevent`
- Quando chamo `getProjectBySlug('beevent')`
- Entao retorno o objeto do projeto correto

**Cenario 4 — getProjectBySlug com slug invalido:**
- Dado que nao existe projeto com slug `xyz`
- Quando chamo `getProjectBySlug('xyz')`
- Entao retorno `undefined`

**Cenario 5 — getFeaturedProjects:**
- Dado que existem projetos com `featured: true` e `featured: false`
- Quando chamo `getFeaturedProjects()`
- Entao retorno apenas os projetos com `featured: true`

---

## Todo List

### Fase 0 — Abertura
- [x] Criar arquivo da task
- [ ] Atualizar `sprint-info.md`

### Fase PRE
- [x] Cenarios mapeados acima
- [ ] Escrever stubs de teste (arquivos criados, testes falhando intencionalmente)

### Fase 2 — Implementacao

#### Etapa A — Instalacao e Configuracao
- [ ] Instalar: `vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom`
- [ ] Atualizar `vite.config.ts` com bloco `test: { globals: true, environment: 'jsdom', setupFiles: './src/test/setup.ts' }`
- [ ] Criar `src/test/setup.ts` com `import '@testing-library/jest-dom'`
- [ ] Adicionar scripts `"test": "vitest"` e `"test:coverage": "vitest run --coverage"` no `package.json`

#### Etapa B — Helpers
- [ ] Criar `src/test/helpers.tsx` com `renderComContexto` (ThemeProvider + LanguageProvider)

#### Etapa C — Stubs de Teste
- [ ] Criar `src/components/__tests__/ErrorBoundary.test.tsx` (stub falhando)
- [ ] Criar `src/data/__tests__/projects.test.ts` (stub falhando)

#### Etapa D — Implementar Testes
- [ ] Implementar testes de `ErrorBoundary` (cenarios 1 e 2)
- [ ] Implementar testes de `projects.ts` (cenarios 3, 4 e 5)
- [ ] Verificar `npm test` — todos verdes

#### Etapa E — CI
- [ ] Atualizar `.github/workflows/` para incluir `npm test` no pipeline

### Fase 3 — Qualidade
- [ ] `npm test` — todos verdes
- [ ] `npm run test:coverage` — coverage report gerado
- [ ] Zero erros de lint

### Fase 5 — Fechamento
- [ ] Atualizar `sprint-info.md`
- [ ] Criar relatorio de metricas

---

## Plano Tecnico

### Arquivos afetados/criados
- `vite.config.ts` — adicionar bloco `test`
- `package.json` — novas devDependencies + scripts
- `src/test/setup.ts` — NOVO
- `src/test/helpers.tsx` — NOVO
- `src/components/__tests__/ErrorBoundary.test.tsx` — NOVO
- `src/data/__tests__/projects.test.ts` — NOVO
- `.github/workflows/ci.yml` — atualizar com step de test

### Riscos
- ErrorBoundary usa Class Component — testar requer simular erro em filho
- Contextos (Theme, Language) precisam de wrappers nos testes de componentes
