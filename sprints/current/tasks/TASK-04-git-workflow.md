# TASK-04 — Git Workflow + Commit Sprint 01

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `backlog`  
**Prioridade**: 🟡 Media  
**Sprint Points**: 1 SP  
**Dependencias**: Nenhuma  
**Responsavel**: PO (execucao manual)  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: —  

---

## Objetivo

Commitar o trabalho da Sprint 01 (ainda nao versionado), definir convencao de commits e setup de pre-commit hooks para garantir qualidade no historico Git.

---

## Contexto

Sprint 01 foi completamente desenvolvida mas nao commitada. Risco de perda de trabalho e historico nao rastreavel. Retrospectiva identificou como acao prioritaria.

Referencia: `SPRINT-01-RETROSPECTIVE.md` — Acao #6.

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Sprint 01 commitada com mensagem conventional commits | `git log` |
| CA-02 | Branch `main` atualizada no repositorio remoto | GitHub |
| CA-03 | Convencao de commits documentada em `CONTRIBUTING.md` | Manual |

---

## Todo List

### Fase 2 — Execucao

- [ ] `git status` — verificar arquivos pendentes
- [ ] `git add .`
- [ ] Commit Sprint 01:
  ```
  feat: Sprint 01 - Performance & Accessibility

  - Add WebP responsive images (desktop + mobile)
  - Implement skip navigation (WCAG 2.1 Level A)
  - Add Error Boundary protection
  - Implement modal focus trap (focus-trap-react)
  - Add strategic lazy loading
  - Separate data from code (projects.js)
  - Add sprint documentation (Review, Retro, Closure)
  ```
- [ ] `git push origin main`
- [ ] Criar `CONTRIBUTING.md` com convencao de commits

### Fase 5 — Fechamento
- [ ] Atualizar `sprint-info.md`

---

## Convencao de Commits (documentar no CONTRIBUTING.md)

```
<type>(<scope>): <descricao curta>

Types: feat | fix | docs | style | refactor | test | chore
Scope: opcional — ex: components, pages, data, ci

Exemplos:
feat(components): add ErrorBoundary with fallback UI
fix(a11y): correct focus trap leak in modal
docs(sprint): add Sprint 02 task breakdown
test(data): add unit tests for projects utilities
chore(deps): add TypeScript and @types packages
```
