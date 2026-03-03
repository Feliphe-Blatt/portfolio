# TASK-05 — Deploy Staging (Vercel)

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `backlog`  
**Prioridade**: 🟢 Baixa  
**Sprint Points**: 2 SP  
**Dependencias**: TASK-01 (TypeScript), TASK-04 (Git commit)  
**Responsavel**: PO + GitHub Copilot  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: —  

---

## Objetivo

Fazer o deploy do portfolio em ambiente de staging na Vercel, com preview automatico para cada commit/PR e URL publica para validacao e compartilhamento.

---

## Contexto

Portfolio ainda em desenvolvimento local. Para recrutar e demonstrar o trabalho, precisa de URL publica acessivel. Vercel oferece deploy gratuito com CI/CD automatico integrado ao GitHub.

Referencia: `SPRINT-01-RETROSPECTIVE.md` — Acao #7.

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Portfolio acessivel em URL publica (ex: `portfolio-v2.vercel.app`) | Browser |
| CA-02 | Deploy automatico em cada push para `main` | Vercel dashboard |
| CA-03 | Preview deploys em PRs (opcional, mas recomendado) | GitHub PR |
| CA-04 | Build de producao sem erros no Vercel | Vercel dashboard |

---

## Todo List

### Fase 2 — Execucao

- [ ] Criar conta na Vercel (se nao existir)
- [ ] Conectar repositorio GitHub ao Vercel
- [ ] Configurar projeto:
  - Framework: Vite
  - Build command: `npm run build`
  - Output directory: `dist`
  - Root directory: `portfolio-v2`
- [ ] Primeiro deploy
- [ ] Validar URL publica no browser
- [ ] Testar todas as funcionalidades da Sprint 01 na URL publica
- [ ] Adicionar URL no `README.md`

### Fase 5 — Fechamento
- [ ] Atualizar `sprint-info.md`
- [ ] Criar relatorio de metricas

---

## Observacoes

- Vercel detecta Vite automaticamente
- O projeto esta em subpasta `portfolio-v2/` — configurar root directory corretamente
- json-server nao funciona em producao — dados devem ser estaticos (nao impacta, pois o portfolio atual usa dados estaticos)
