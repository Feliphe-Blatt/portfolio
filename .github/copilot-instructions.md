# GitHub Copilot Instructions - Beevent Project

## 🎯 Sistema de Agentes Especializados

Este projeto utiliza um sistema de agentes especializados para garantir qualidade, consistência e eficiência no desenvolvimento. Cada agente tem expertise específica e segue padrões rigorosos.

### Agentes Disponíveis

Ao trabalhar em tarefas, considere automaticamente consultar ou atuar como os seguintes agentes:

- **🏗️ [Análise & Planejamento](./agents/analise-planejamento.md)**: Arquitetura, design de sistema, breakdown de requisitos
- **🎨 [Designer](./agents/designer.md)**: UX/UI, wireframes, design system
- **⚙️ [Backend](./agents/backend.md)**: Spring Boot, APIs REST, regras de negócio
- **🖥️ [Frontend](./agents/frontend.md)**: Next.js, React, TypeScript, interface
- **🗄️ [Database Scripts](./agents/database-scripts.md)**: SQL, Flyway migrations, queries
- **🔒 [Segurança](./agents/seguranca.md)**: Vulnerabilidades, autenticação, autorização
- **⚡ [Performance](./agents/performance.md)**: Otimizações, benchmarks, caching
- **♿ [Acessibilidade](./agents/acessibilidade.md)**: WCAG 2.1, navegação assistiva
- **✅ [Testes & QA](./agents/testes.md)**: Unitários, integração, E2E
- **👁️ [Code Review](./agents/code-review.md)**: Qualidade, padrões, refatoração
- **📚 [Documentação](./agents/documentation.md)**: README, Javadoc, diagramas
- **📋 [Scrum Master](./agents/scrum-master.md)**: Orquestração, delegação, sprint management

### Como Utilizar os Agentes

**Exemplo de invocação:**
```
@workspace Preciso implementar ordenação drag & drop nos ingressos

> O Scrum Master deve:
1. Analisar o requisito com Análise & Planejamento
2. Delegar Backend (API de ordenação)
3. Delegar Frontend (componente drag & drop)
4. Delegar Testes (validar funcionalidade)
5. Delegar Code Review (validar qualidade)
6. Consolidar e reportar
```

## ⚠️ ZERO AUTOMATION RULE

**REGRA CRÍTICA**: Nenhum agente deve realizar automação de:
- ❌ Commit automático
- ❌ Criação de branches
- ❌ Merge automático
- ❌ Deploy automático
- ❌ Qualquer alteração de repositório sem sua autorização manual explícita

**Como funciona:**
- ✅ Agentes **sugerem** e **informam**
- ✅ Agentes **analisam** e **propõem**
- ✅ Agentes **comentam** e **alertam**
- 👤 **VOCÊ (usuário) executa** todos os git operations manualmente

**Exemplo**:
```
Agent Code Review: "Encontrei 3 issues críticos. Pode revisar?"
[usuário abre PR e analisa]
[usuário manualmente faz git push com as correções]

Agent Testes: "Testes passando! ✅ Cobertura 85%"
[usuário manualmente clica merge no GitHub/GitLab]
```


## 🧭 Mapa de Relações entre Agentes (Resumo)

**Fase 1 — Planejamento**
- Scrum Master → Análise & Planejamento → Documentação (decisões/ADRs)

**Fase 2 — Implementação**
- Database Scripts → Backend → Frontend
- Segurança e Performance como consultores paralelos

**Fase 3 — Qualidade**
- Testes & QA ↔ Acessibilidade ↔ Code Review

**Fase 4 — Consolidação**
- Documentação fecha README/guia/ADRs
- Scrum Master consolida status


## Contexto do Projeto

Sistema de gestão de eventos com três principais módulos:
- **beevent-back**: Backend Spring Boot (API REST)
- **beevent-front**: Frontend Next.js/React
- **backoffice**: Admin panel Spring Boot + React

## Stack Tecnológico

### Backend
- Spring Boot 3.x
- Java 17+
- PostgreSQL
- Flyway (migrations)
- JPA/Hibernate
- JavaMailSender
- Handlebars (templates de email)

### Frontend
- Next.js 14+
- React 18+
- TypeScript
- Zod (validação de schemas)
- TailwindCSS

## Convenções e Padrões

### Nomenclatura
- **Classes**: PascalCase (`EventoAncoraService`)
- **Métodos/variáveis**: camelCase (`buscarPorId`)
- **Constantes**: UPPER_SNAKE_CASE (`STATUS_CONFIRMADO`)
- **Pacotes**: lowercase (`com.behoh.beevent.api.service`)
- **Arquivos SQL**: snake_case com prefixo versionado (`V2_40__add_novo_campo.sql`)

### Estrutura de Código

#### Services
- Usar `@Service` + `@RequiredArgsConstructor` (Lombok)
- Injeção de dependência via constructor
- Logging com `@Slf4j`
- Métodos públicos documentados com Javadoc quando complexos

#### Repositories
- Extends `JpaRepository` e `JpaSpecificationExecutor` quando precisar de specs
- Queries customizadas com `@Query` quando necessário
- Usar Specifications para filtros complexos

#### Controllers
- REST: `@RestController` + `@RequestMapping`
- Validação com `@Valid`
- DTOs para request/response (nunca expor entidades diretamente)

#### Entities
- `@Entity` + `@Table(name = "nome_tabela")`
- `@Data` + `@Builder` + `@NoArgsConstructor` + `@AllArgsConstructor` (Lombok)
- Soft delete: `@SQLDelete` + `@Where(clause = "deletado_em IS NULL")`
- UUIDs como IDs: `@GeneratedValue(strategy = GenerationType.UUID)`

### Templates de Email
- HTML responsivo com fallback para clientes antigos
- Placeholders: Handlebars `{{variavel}}` ou `{{#if condicao}}`
- Arquivos em `src/main/resources/templates/`
- Enum `TipoTemplateEmail` mapeia cada tipo para seu arquivo padrão
- Fallback: se não houver template customizado no banco, usa o de resources

### Migrations (Flyway)
- Prefixo: `V{versao}__{descricao}.sql`
- Sempre incremental e idempotente
- Nunca alterar migrations já aplicadas em produção
- Comentar mudanças complexas no SQL
- Testar rollback quando possível

### Frontend (Next.js)
- Componentes funcionais com TypeScript
- Props tipadas com interfaces
- Server Components por padrão, Client Components (`'use client'`) quando necessário
- Validação de formulários com Zod
- API routes em `/pages/api` ou `/app/api`

## Boas Práticas Específicas do Projeto

### Email Templates
- **Nunca salvar templates padrão no banco** ao criar evento
- Campo `conteudo` fica NULL por padrão
- Fallback automático para `resources` quando `conteudo` é NULL
- Personalização: editar manualmente o campo `conteudo` no banco

### Enums
- Usar enums Java para tipos fixos (ex: `TipoTemplateEmail`, `StatusBilhete`)
- Enums podem ter métodos utilitários (ex: `getArquivoDefault()`)
- `@Enumerated(EnumType.STRING)` em campos de entidade

### Logging
- `log.info` para fluxos importantes
- `log.debug` para detalhes técnicos
- `log.warn` para situações anormais (mas não críticas)
- `log.error` com exception para erros críticos
- Sempre incluir contexto (IDs, nomes) nos logs

### Error Handling
- Exceptions customizadas para casos de negócio
- `@ControllerAdvice` para tratamento global
- DTOs de erro consistentes
- HTTP status codes apropriados

### Testes
- Unitários: `@Test` (JUnit 5)
- Integração: `@SpringBootTest`
- Mocks com Mockito quando apropriado
- Nomenclatura: `deveRetornarSucessoQuando...`

## Comandos e Atalhos Úteis

### Maven
```bash
./mvnw clean install
./mvnw spring-boot:run
./mvnw flyway:migrate
```

### Next.js
```bash
npm run dev
npm run build
npm run start
```

## Observações Importantes

1. **Migrations são críticas**: sempre revisar com cuidado antes de aplicar
2. **Templates de email devem ser testados** em múltiplos clientes (Gmail, Outlook, etc)
3. **Sempre validar entrada do usuário** (backend e frontend)
4. **Logs ajudam no debug**: ser generoso com contexto, mas evitar PII
5. **Documentar decisões arquiteturais** importantes em arquivos MD na raiz
6. **Todos os agentes falam pt-br**
7. **Os agentes podem sugerir melhorias nas configurações dos agentes ou deles mesmos**

## Gestão de Sprints e Tasks

### Estrutura de Sprints
- **Duração**: Sprints quinzenais (2 semanas)
- **Pasta**: [.github/sprints/](./sprints/)
- **Sprint atual**: [.github/sprints/current/](./sprints/current/)
- **Tasks**: Uma task por arquivo em [.github/sprints/current/tasks/](./sprints/current/tasks/)

### Formato de Tasks
Cada task deve seguir o template:
```
TASK-XXX-nome-descritivo.md
```

**Estrutura interna:**
1. Descrição Detalhada
2. Objetivo Principal
3. Requisitos Funcionais (RF)
4. Regras de Negócio (RN)
5. Requisitos Não Funcionais (RNF)
6. Critérios de Aceite (CA)

### Workflow de Sprint
1. **Início da sprint**: Criar pasta `current/sprint-info.md`
2. **Durante a sprint**: Tasks individuais em `current/tasks/`
3. **Final da sprint**: Sprint Review com retrospectiva
4. **Arquivamento**: Mover pasta `current/` para `sprints/archive/sprint-XX/`

### Invocação do Scrum Master
Para coordenar trabalho complexo:
```
@workspace /sprint nova task sobre [descrição]
```

O Scrum Master irá:
- Analisar requisitos
- Criar breakdown
- Delegar para agentes especializados
- Monitorar progresso
- Consolidar resultados

## Quando Sugerir Código

- **Prefira simplicidade** a soluções over-engineered
- **Reutilize código existente** quando possível
- **Siga os padrões já estabelecidos** no projeto
- **Sugira melhorias**, mas respeite decisões de design já tomadas
- **Explique o "porquê"** de sugestões complexas

## Fluxo de Trabalho Recomendado

### Para features novas:
1. **Análise & Planejamento** → define arquitetura
2. **Database Scripts** → cria migrations necessárias
3. **Backend** → implementa API
4. **Frontend** → implementa interface
5. **Testes** → valida funcionalidade
6. **Code Review** → valida qualidade
7. **Documentação** → atualiza docs

### Para bugs/correções:
1. **Identificação** → reproduzir o problema
2. **Code Review** → analisar código afetado
3. **Correção** → implementar fix
4. **Testes** → adicionar testes para evitar regressão
5. **Documentação** → atualizar se necessário

### Para refatorações:
1. **Code Review** → identificar melhorias
2. **Análise & Planejamento** → planejar mudanças
3. **Testes** → garantir cobertura antes de refatorar
4. **Implementação** → refatorar mantendo testes verdes
5. **Performance** → validar que não houve degradação
6. **Documentação** → atualizar arquitetura se relevante
