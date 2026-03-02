# Sprints - Beevent

## Estrutura de Pastas

```
.github/sprints/
├── README.md (este arquivo)
├── current/
│   ├── sprint-info.md
│   └── tasks/
│       ├── TASK-001-ordenacao-drag-drop.md
│       └── TASK-002-...
├── 2026-02-01_2026-02-15/
│   ├── sprint-review.md
│   └── tasks/
└── 2026-02-16_2026-02-29/
    ├── sprint-review.md
    └── tasks/
```

## Convenções

### Nomenclatura de Sprints
- **Formato**: `YYYY-MM-DD_YYYY-MM-DD` (data início_data fim)
- **Duração**: 2 semanas (quinzenal)

### Nomenclatura de Tasks
- **Formato**: `TASK-XXX-nome-descritivo.md`
- **XXX**: Número sequencial (001, 002, 003...)
- **nome-descritivo**: kebab-case, resumo da task

### Status de Tasks
- 📝 **Backlog**: Não iniciada
- 🔄 **In Progress**: Em desenvolvimento
- ✅ **Done**: Concluída
- 🚫 **Blocked**: Bloqueada
- ❌ **Cancelled**: Cancelada

## Sprint Atual

Ver [current/sprint-info.md](current/sprint-info.md)

## Sprint Review

Ao final de cada sprint (quinzenal), criar arquivo `sprint-review.md` com:
- Tasks completadas
- Tasks não completadas (motivo)
- Métricas (velocity, bugs, etc)
- Retrospectiva
- Planejamento próxima sprint
