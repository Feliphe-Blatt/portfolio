# TASK-03 — Lighthouse Baseline + Validacao Visual

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `backlog`  
**Prioridade**: 🟡 Media  
**Sprint Points**: 2 SP  
**Dependencias**: Nenhuma (pode executar em paralelo)  
**Responsavel**: GitHub Copilot + PO (validacao manual)  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: —  

---

## Objetivo

Medir metricas reais de performance com Lighthouse, validar visualmente as funcionalidades entregues na Sprint 01 e documentar evidencias com screenshots.

---

## Contexto

Sprint 01 entregou apenas estimativas ("-75% em imagens", "-43% FCP"). A retrospectiva identificou a ausencia de metricas reais como risco. Esta task gera o baseline oficial para comparativo com sprints futuras.

Referencia: `SPRINT-01-RETROSPECTIVE.md` — Acoes #1, #2 e #3.

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Lighthouse audit executado em `npm run preview` (build de producao) | `METRICS-BASELINE.md` |
| CA-02 | Metricas documentadas: FCP, LCP, TTI, CLS, Score Performance, Score A11y | `METRICS-BASELINE.md` |
| CA-03 | Skip navigation testado e screenshot salvo | `evidencias/prints/` |
| CA-04 | Focus trap no modal testado e screenshot salvo | `evidencias/prints/` |
| CA-05 | Imagens WebP verificadas no Network tab (screenshots) | `evidencias/prints/` |
| CA-06 | Lazy loading verificado no Network tab | `evidencias/prints/` |

---

## Todo List

### Fase 2 — Execucao

- [ ] `npm run build` → `npm run preview`
- [ ] Rodar Lighthouse no Chrome DevTools (localhost:4173)
- [ ] Capturar: Performance Score, Accessibility Score, FCP, LCP, TTI, CLS
- [ ] Criar `sprints/current/evidencias/metricas/METRICS-BASELINE.md`
- [ ] Testar skip navigation: Tab → Enter → screenshot
- [ ] Testar modal + focus trap: Tab dentro do modal → screenshot
- [ ] Abrir Network tab, filtrar imagens → screenshot (ver WebP)
- [ ] Scroll rapido → ver lazy loading no Network tab → screenshot
- [ ] Salvar screenshots em `sprints/current/evidencias/prints/`

### Fase 5 — Fechamento
- [ ] Atualizar `sprint-info.md`
- [ ] Criar relatorio de metricas

---

## Plano Tecnico

### Arquivos criados
- `sprints/current/evidencias/metricas/METRICS-BASELINE.md`
- `sprints/current/evidencias/prints/` — screenshots

### Observacao
Esta task e majoritariamente manual (PO executa). O Copilot cria estrutura e templates; PO preenche com dados reais.
