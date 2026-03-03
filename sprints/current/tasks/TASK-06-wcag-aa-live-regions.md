# TASK-06 — Live Regions + WCAG Level AA

**Sprint**: Sprint 02  
**Tipo**: Build to Earn (B2E)  
**Status**: `backlog`  
**Prioridade**: 🟢 Baixa  
**Sprint Points**: 2 SP  
**Dependencias**: TASK-01 (TypeScript)  
**Responsavel**: GitHub Copilot  
**Data de Abertura**: 03/03/2026  
**Data de Conclusao**: —  

---

## Objetivo

Implementar Live Regions (`aria-live`) para notificar screen readers sobre mudancas dinamicas na UI, elevando a conformidade de WCAG 2.1 Level A para Level AA.

---

## Contexto

Sprint 01 atingiu WCAG Level A (baseline). Level AA e o padrao de mercado e exigido por empresas serias. Live regions sao o principal gap entre Level A e Level AA para este portfolio.

Referencia: `SPRINT-01-REVIEW.md` — "Live regions nao implementadas — Level AA, nao A (nice-to-have)".

---

## Criterios de Aceite (CA)

| ID | Criterio | Verificavel por |
|----|----------|----------------|
| CA-01 | Filtro de projetos anuncia resultado para screen reader (`aria-live="polite"`) | Manual (NVDA/VoiceOver) |
| CA-02 | Abertura/fechamento do modal de projeto anunciado | Manual |
| CA-03 | Mudanca de idioma (PT/EN) anunciada | Manual |
| CA-04 | Mudanca de tema (dark/light) anunciada | Manual |
| CA-05 | Lighthouse Accessibility Score >= 95 | Lighthouse |

---

## Cenarios de Teste

### CA-01 — Filtro de projetos

**Cenario 1 — Filtro aplicado:**
- Dado que o usuario filtra projetos por categoria
- Quando a lista e atualizada
- Entao um screen reader anuncia "X projetos encontrados para categoria Y"

**Cenario 2 — Filtro limpo:**
- Dado que o usuario remove o filtro
- Quando a lista exibe todos os projetos
- Entao um screen reader anuncia "Mostrando todos os X projetos"

---

## Todo List

### Fase 2 — Implementacao

- [ ] Criar componente utilitario `<LiveRegion>` em `src/components/ui/LiveRegion.tsx`
- [ ] Adicionar live region ao filtro de `Projects.tsx` — anunciar contagem de resultados
- [ ] Adicionar live region ao `Projects.tsx` — anunciar abertura/fechamento de modal
- [ ] Adicionar live region ao `LanguageToggle.tsx` — anunciar idioma selecionado
- [ ] Adicionar live region ao `ThemeToggle.tsx` — anunciar tema selecionado
- [ ] Testar com screen reader (NVDA no Windows / VoiceOver no Mac)
- [ ] Rodar Lighthouse — verificar Score >= 95

### Fase 3 — Qualidade
- [ ] Build sem erros
- [ ] Lint sem warnings
- [ ] Screenshot do Lighthouse A11y Score

### Fase 5 — Fechamento
- [ ] Atualizar `sprint-info.md`
- [ ] Criar relatorio de metricas

---

## Plano Tecnico

### Arquivos afetados/criados
- `src/components/ui/LiveRegion.tsx` — NOVO
- `src/pages/Projects.tsx` — adicionar live region
- `src/components/layout/LanguageToggle.tsx` — adicionar live region
- `src/components/layout/ThemeToggle.tsx` — adicionar live region

### Implementacao do LiveRegion

```tsx
// src/components/ui/LiveRegion.tsx
interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive' | 'off';
}

export function LiveRegion({ message, politeness = 'polite' }: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="visually-hidden" // Bootstrap class
    >
      {message}
    </div>
  );
}
```
