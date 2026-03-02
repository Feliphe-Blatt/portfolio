# TASK-001: Sistema de Ordenação Drag & Drop

**Status**: 🔄 In Progress  
**Criada em**: 2026-02-13  
**Sprint**: 2026-02-01 a 2026-02-15  
**Estimativa**: 5.5 dias  
**Real**: - (em progresso)

## Descrição
Implementar interface de "Arrastar e Soltar" (Drag & Drop) no Backoffice para ordenação de Eventos, Ingressos e Preços.

## Objetivo Principal
- Eventos: Criar coluna no banco e interface de ordenação
- Ingressos: Implementar interface de ordenação (agrupados por evento)
- Preços: Implementar interface de ordenação (dentro de collapses de ingressos)
- Backend: Garantir lógica de reindexação para evitar duplicidade

## Requisitos Funcionais
- [x] **RF-DB-001**: Adicionar coluna `ordem_display` na tabela evento
- [ ] **RF-BE-002**: Criar endpoint de reordenação (batch update)
- [ ] **RF-BE-003**: Auto-incrementar ordem ao criar novo item
- [ ] **RF-FE-004**: Lista ordenável de eventos
- [ ] **RF-FE-005**: Agrupamento de ingressos por evento
- [ ] **RF-FE-006**: Drag & drop de ingressos
- [ ] **RF-FE-007**: Interface accordion para preços
- [ ] **RF-FE-008**: Ordenação aninhada de preços
- [ ] **RF-FE-009**: Feedback visual durante drag

## Regras de Negócio
- [x] **RN-01**: Unicidade de ordem (sem duplicatas)
- [ ] **RN-02**: Novos itens vão para o final

## Requisitos Não Funcionais
- [ ] **RNF-01**: Usar biblioteca consolidada (dnd-kit)
- [ ] **RNF-02**: Update otimista no frontend

## 📐 Análise de Pontos de Função

### Componentes Funcionais

**EI (External Inputs):**
- [x] Atualizar ordem de itens (eventos/ingressos/preços)
  - Endpoint: POST /api/{recurso}/reordenar
  - Campos: lista de [item_id, nova_ordem]
  - Complexidade: Média (6 campos, 2 arquivos)
  - Peso: **4 FP**

**EO (External Outputs):**
- Nenhum (apenas confirmação de sucesso)

**EQ (External Queries):**
- [x] Listar itens ordenados
  - Endpoint: GET /api/{recurso}?ordenar=ordem_display
  - Campos retornados: 10+ campos por recurso
  - Complexidade: Média
  - Peso: **4 FP**

**ILF (Internal Logical Files):**
- [x] Adicionar coluna 'ordem_display' em 3 entidades
  - Entidades: Evento, Ingresso, Preco
  - Campos novos: 3 (1 por entidade)
  - Relacionamentos: existentes
  - Complexidade: Simples (campos únicos)
  - Peso: **7 FP** (7 FP base para estrutura)

**EIF (External Interface Files):**
- Nenhum

### Cálculo Total
```
FP Total = 4 (EI) + 4 (EQ) + 7 (ILF) = 15 FP

Fator de Ajuste: 1.0 (neutro)
FP Ajustado: 15 FP

Equivalência:
- Story Points: 5 SP (razão 1 SP = 3 FP)
- Horas estimadas: 44h (produtividade: ~3 FP/dia para fullstack)
- Dias estimados: 5.5 dias
```

### Breakdown por Agente
- **Database Scripts**: 2 FP (migrations para 3 entidades) → 0.5 dia
- **Backend**: 6 FP (endpoints + services + reindexação) → 1.5 dia
- **Frontend**: 5 FP (componente drag & drop + integração) → 2.5 dias
- **Testes**: 2 FP (unitários + integração) → 1 dia

### Produtividade Esperada
- Fullstack dev: ~3 FP/dia (considerando complexidade do drag & drop UI)
- Total: 15 FP / 3 = 5 dias (arredondado para 5.5 com buffer)

## Critérios de Aceite
- [ ] **CA-01**: Novo preço aparece automaticamente no final
- [ ] **CA-02**: Drag & drop persiste após reload
- [ ] **CA-03**: Sem duplicatas de ordem no banco
- [ ] **CA-04**: Funcionalidade disponível para eventos
- [ ] **CA-05**: Accordions abertos por padrão

## Progresso por Fase

### ✅ Fase 1 - Database
- [x] Migration criada: `V2_XX__add_ordem_display.sql`
- [x] Script de inicialização para registros existentes

### 🔄 Fase 2 - Backend (60%)
- [x] Entity EventoAncora atualizada
- [ ] Service: métodos reordenar() e reindexar()
- [ ] Controller: endpoint POST /reordenar
- [ ] Lógica MAX+1 ao criar

### ⚪ Fase 3 - Frontend
- [ ] Instalar dnd-kit
- [ ] Componente DraggableEventosList
- [ ] Lógica otimista
- [ ] Feedback visual

### ⚪ Fase 4 - Qualidade
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Validação de performance
- [ ] Code review

## Blockers
Nenhum blocker no momento.

## Notas
- Biblioteca escolhida: dnd-kit (mais moderna que react-beautiful-dnd)
- Update otimista melhora percepção de performance

## Arquivos Modificados/Criados
- `backend/src/.../EventoAncora.java` (entity)
- `backend/db/migration/V2_XX__add_ordem_display.sql` (migration)
- (mais arquivos serão adicionados conforme progresso)

## Links Relevantes
- [Documentação original](../../backoffice/instructions/instructions.md)
- [ADR-XXX](#) (se houver decisão arquitetural)
