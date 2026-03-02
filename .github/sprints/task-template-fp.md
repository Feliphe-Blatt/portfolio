# TASK-XXX: [Nome da Task]

**Status**: ⚪ Not Started / 🔄 In Progress / ✅ Done  
**Criada em**: YYYY-MM-DD  
**Sprint**: YYYY-MM-DD a YYYY-MM-DD  
**Estimativa**: X dias  
**Real**: - (em progresso)

## 1. Descrição Detalhada
[Descrição clara e completa da task, incluindo contexto e motivação]

## 2. Objetivo Principal
[Resumo do que precisa ser entregue - em 1-2 linhas]

## 3. Requisitos Funcionais (RF)
- [ ] **RF-001**: [Descrição do requisito funcional 1]
- [ ] **RF-002**: [Descrição do requisito funcional 2]
- [ ] **RF-003**: [Descrição do requisito funcional 3]

## 4. Regras de Negócio (RN)
- [ ] **RN-001**: [Descrição da regra de negócio 1]
- [ ] **RN-002**: [Descrição da regra de negócio 2]

## 5. Requisitos Não Funcionais (RNF)
- [ ] **RNF-001**: [Performance, segurança, escalabilidade, etc]
- [ ] **RNF-002**: [Bibliotecas, padrões, constraints técnicos]

## 6. 📐 Análise de Pontos de Função

### Componentes Funcionais

**EI (External Inputs):**
- [ ] [Nome da entrada]
  - Endpoint: [POST/PUT /api/...]
  - Campos: [lista de campos]
  - Complexidade: Simples / Média / Complexa
  - Peso: **X FP**

**EO (External Outputs):**
- [ ] [Nome da saída/relatório]
  - Endpoint: [GET /api/.../relatorio]
  - Campos: [campos retornados]
  - Complexidade: Simples / Média / Complexa
  - Peso: **X FP**

**EQ (External Queries):**
- [ ] [Nome da consulta]
  - Endpoint: [GET /api/...]
  - Campos retornados: [quantidade e descrição]
  - Complexidade: Simples / Média / Complexa
  - Peso: **X FP**

**ILF (Internal Logical Files):**
- [ ] [Entidade/arquivo lógico]
  - Campos novos: [quantidade]
  - Relacionamentos: [quantidade]
  - Complexidade: Simples / Média / Complexa
  - Peso: **X FP**

**EIF (External Interface Files):**
- [ ] [API externa integrada]
  - Tipo: [REST API, webhook, OAuth, etc]
  - Complexidade: Simples / Média / Complexa
  - Peso: **X FP**

### Cálculo Total
```
FP Total = [Soma de todos os componentes]

Fator de Ajuste: 1.0 (neutro)
FP Ajustado: [FP Total × Fator]

Equivalência:
- Story Points: [FP / 3] SP (razão padrão 1 SP = 3 FP)
- Horas estimadas: [FP × produtividade]h
- Dias estimados: [Horas / 8]
```

### Breakdown por Agente
- **Database Scripts**: X FP (migrations) → Y dias
- **Backend**: X FP (API + services) → Y dias
- **Frontend**: X FP (UI + integração) → Y dias
- **Testes**: X FP (cobertura) → Y dias

### Produtividade Esperada
- [Tipo de dev]: ~X FP/dia
- Total: [FP Total] / [Produtividade] = [Dias estimados]

## 7. Critérios de Aceite (CA)
- [ ] **CA-001**: [Critério específico, mensurável, testável]
- [ ] **CA-002**: [Critério específico, mensurável, testável]
- [ ] **CA-003**: [Critério específico, mensurável, testável]
- [ ] **CA-004**: [Critério específico, mensurável, testável]
- [ ] **CA-005**: [Critério específico, mensurável, testável]

## 8. Progresso por Fase

### ⚪ Fase 1 - Database
- [ ] Migration criada
- [ ] Scripts de validação
- [ ] Dados existentes migrados (se necessário)

### ⚪ Fase 2 - Backend
- [ ] Entities atualizadas
- [ ] Services implementados
- [ ] Controllers/endpoints criados
- [ ] Validações implementadas

### ⚪ Fase 3 - Frontend
- [ ] Componentes criados
- [ ] Integração com API
- [ ] Validações client-side
- [ ] Feedback visual ao usuário

### ⚪ Fase 4 - Qualidade
- [ ] Testes unitários (Backend)
- [ ] Testes unitários (Frontend)
- [ ] Testes de integração
- [ ] Code review
- [ ] Documentação atualizada

## 9. Blockers
[Liste aqui qualquer bloqueio ativo. Se nenhum, escrever "Nenhum blocker no momento."]

## 10. Notas
[Observações importantes, decisões tomadas, alternativas consideradas, etc]

## 11. Arquivos Modificados/Criados
- `[caminho/arquivo1]` ([tipo de mudança])
- `[caminho/arquivo2]` ([tipo de mudança])
- (adicionar conforme progresso)

## 12. Links Relevantes
- [Documentação relacionada](#)
- [ADR-XXX](link-para-adr) (se houver decisão arquitetural)
- [Issue/PR relacionado](#)

---

## 📊 Metadados (para tracking)

- **Story Points**: X SP
- **Pontos de Função**: X FP
- **Produtividade Base**: X FP/dia
- **Agentes Envolvidos**: [Backend, Frontend, Database Scripts, Testes & QA]
- **Complexidade**: Pequena / Média / Grande
- **Prioridade**: Baixa / Média / Alta / Crítica
