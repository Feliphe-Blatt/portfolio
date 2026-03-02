# Agentes Especializados - Beevent

Este diretório contém as definições de **12 agentes especializados** para o desenvolvimento do projeto Beevent.

## 📈 Status dos Agentes

✅ **100% Completo** - Todos os 12 agentes foram analisados, refinados e documentados com:
- ✓ Seção "O Que Entrega" (FAZ vs NÃO FAZ)
- ✓ Seção "Quando Pedir Ajuda" (delegação clara)
- ✓ Seção "Red Flags" (Crítico/Importante/Sugestão)
- ✓ Padrões e checklists

**Pendências documentadas**: 48+ decisões técnicas em [PENDENCIAS_AGENTES.md](../PENDENCIAS_AGENTES.md)

## 📚 Índice de Agentes

### 🔧 Desenvolvimento
- **[Backend](./backend.md)** - Spring Boot, APIs REST, Services, Repositories
- **[Frontend](./frontend.md)** - Next.js, React, TypeScript, componentes
- **[Database Scripts](./database-scripts.md)** - Flyway migrations, SQL queries

### 🎯 Qualidade & Validação
- **[Testes & QA](./testes.md)** - Unitários, integração, E2E
- **[Code Review](./code-review.md)** - Padrões, refatoração, code smells
- **[Segurança](./seguranca.md)** - Vulnerabilidades, auth, autorizações
- **[Performance](./performance.md)** - Otimizações, benchmarks, caching
- **[Acessibilidade](./acessibilidade.md)** - WCAG 2.1, navegação assistiva

### 📋 Planejamento & Design
- **[Análise & Planejamento](./analise-planejamento.md)** - Arquitetura, breakdown de requisitos, **cálculo de Pontos de Função**
- **[Designer](./designer.md)** - UX/UI, wireframes, design system
- **[Documentação](./documentation.md)** - README, Javadoc, diagramas

### 🎪 Coordenação
- **[Scrum Master](./scrum-master.md)** - Orquestração, delegação, gestão de sprints, **métricas (FP + SP)**

## 🚀 Como Usar

### Invocação Direta
Para trabalhar com um agente específico:
```
@workspace Como Backend, crie um service para ordenação de ingressos
```

### Orquestração pelo Scrum Master
Para trabalho complexo envolvendo múltiplos agentes:
```
@workspace Preciso implementar feature X completa (backend + frontend + testes)
```

O Scrum Master irá:
1. Analisar o requisito
2. Criar breakdown de tarefas
3. Delegar para agentes especializados
4. Monitorar progresso e dependências
5. Consolidar resultados

### Nota Importante: ZERO AUTOMATION
**Nenhum agente executa automaticamente**:
- ❌ Commits
- ❌ Criação de branches
- ❌ Merge automático
- ❌ Deploy automático

Todos os agentes **sugerem e comentam**, mas você **aprova manualmente** todas as operações de git/deploy.

## 🎯 Responsabilidades por Agente

### Backend
- Services com `@Slf4j` + `@RequiredArgsConstructor`
- Repositories com JPA Specifications
- Controllers REST com DTOs
- Tratamento de exceções customizadas
- Validações de entrada

### Frontend
- Componentes React tipados
- Server Components por padrão
- Validação com Zod
- Integração com APIs
- Responsividade e acessibilidade

### Database Scripts
- Migrations Flyway versionadas
- Scripts de teste e diagnóstico
- Queries otimizadas
- Índices para performance
- Documentação de mudanças

### Testes & QA
- Unitários (JUnit 5, Vitest)
- Integração (Spring Boot Test)
- E2E (Cypress, Playwright)
- Validação de edge cases
- Cobertura de código

### Code Review
- Conformidade com padrões
- SOLID principles
- Refatorações sugeridas
- Performance e segurança
- Legibilidade e manutenibilidade

### Segurança
- Análise de vulnerabilidades
- Validação de inputs
- Autenticação e autorização
- OWASP Top 10
- Proteção de dados sensíveis

### Performance
- Identificação de gargalos
- Otimizações de queries
- Caching estratégico
- Benchmarks
- Monitoramento

### Acessibilidade
- WCAG 2.1 Level AA
- Navegação por teclado
- Screen readers
- Contraste e legibilidade
- Testes assistivos

### Designer
- Design system consistency
- UX patterns
- Wireframes e mockups
- Responsividade
- Feedback visual

### Análise & Planejamento
- Arquitetura de solução
- Breakdown de requisitos
- Identificação de dependências
- Estimativas
- Diagramas (C4, sequência, etc)

### Documentação
- README atualizado
- Javadoc em código complexo
- Diagramas de arquitetura
- Guias de setup
- Changelog

### Scrum Master
- Coordenação de agentes
- Gestão de sprints
- Priorização de tasks
- Resolução de bloqueios
- Sprint reviews e retrospectivas

## 📝 Padrões Comuns

### Todos os Agentes
- ✅ Falar em pt-br
- ✅ Seguir convenções do projeto
- ✅ Documentar decisões importantes
- ✅ Sugerir melhorias nas próprias configurações
- ✅ Trabalhar de forma incremental
- ✅ Validar trabalho antes de entregar

### Comunicação Entre Agentes
- Backend → Database Scripts: esquema necessário
- Frontend → Backend: contrato da API
- Testes → Todos: cobertura e validação
- Code Review → Todos: feedback e melhorias
- Scrum Master → Todos: coordenação e priorização

## 🧭 Mapa de Relações entre Agentes

**Fase 1 — Planejamento**
- Scrum Master → Análise & Planejamento → Documentação (decisões/ADRs)
- Saída: escopo, riscos, dependências, ADR (se necessário)

**Fase 2 — Implementação**
- Database Scripts → Backend → Frontend
- Segurança e Performance como consultores paralelos
- Saída: schema, API, UI

**Fase 3 — Qualidade**
- Testes & QA ↔ Acessibilidade ↔ Code Review
- Saída: validações, critérios de aceite, feedbacks

**Fase 4 — Consolidação**
- Documentação fecha README/guia/ADRs
- Scrum Master consolida status

## 🔗 Relações por Agente
- **Backend** → Database Scripts, Segurança, Performance
- **Frontend** → Backend, Designer, Acessibilidade
- **Testes & QA** → Acessibilidade (obrigatório), Backend/Frontend
- **Code Review** → Segurança, Performance, Acessibilidade
- **Scrum Master** → todos (orquestração)

## 📦 Artefatos padrão por fase
- **Planejamento**: task + ADR (se necessário)
- **Implementação**: contrato API + migration + componentes
- **Qualidade**: checklist de testes + issues
- **Consolidação**: README atualizado + release notes

## 🔄 Workflow Típico

### Feature Nova
```
Scrum Master
  ↓
Análise & Planejamento (arquitetura)
  ↓
Database Scripts (migrations)
  ↓
Backend (API) ←→ Frontend (UI)
  ↓
Testes (validação)
  ↓
Code Review (qualidade)
  ↓
Documentação (atualização)
```

### Bug Fix
```
Identificação
  ↓
Code Review (análise)
  ↓
Backend/Frontend (correção)
  ↓
Testes (evitar regressão)
  ↓
Documentação (se necessário)
```

### Refatoração
```
Code Review (identificação)
  ↓
Análise & Planejamento
  ↓
Testes (garantir cobertura)
  ↓
Implementação
  ↓
Performance (validação)
  ↓
Documentação (arquitetura)
```

## 🎓 Melhorias Contínuas

Os agentes são configurações vivas e podem ser melhorados:
- Sugestões de novos padrões
- Refinamento de responsabilidades
- Adição de exemplos
- Atualização de tecnologias
- Otimização de workflows

**Todos os agentes podem e devem sugerir melhorias!**
