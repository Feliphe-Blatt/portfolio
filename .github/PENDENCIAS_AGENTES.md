# Pendências de Agentes - Beevent

Lista de decisões técnicas que precisam ser alinhadas com a equipe de desenvolvimento real antes de padronizar os agentes.

**Status**: 🔵 Coletando pendências (atualizado em 13 de fevereiro de 2026)
## Resumo

**Total de Pendências**: 48+

- Backend: 3
- Frontend: 11
- Database Scripts: 9
- Testes & QA: 6
- Code Review: 4 (anteriormente coletadas)
- Segurança: 3
- Performance: 4
- Designer: 5
- Acessibilidade: 2
- Documentação: 1

**Próxima Ação**: Alinhar com equipe dev e resolver pendências por prioridade (crítico → importante → sugestão).

---

## Backend: 3 pendências

### 1️⃣ Padrão de Logging
**Descrição**: Qual é o padrão atual de logging no Beevent?

**Contexto**: 
- Quando criar um log, o agente Backend vai perguntar: "Quais informações exibir e como estruturar?"
- Precisa alinhar com padrão existente do projeto

**Decisão Pendente**:
- [ ] Estrutura atual (MDC, formato, prefixos)
- [ ] Informações sempre incluídas (usuário, trace ID, timestamp)
- [ ] Regras para dados sensíveis (o que nunca logar)
- [ ] Se usa logging estruturado (JSON) ou texto simples

**Exemplos a Confirmar**:
- `log.info("[INSCRICAO_CRIADA] eventoId={}, usuarioId={}", eventoId, usuarioId);`
- Logging assíncrono? Centralizado (ELK, Datadog)?

---

### 2️⃣ Uso de @Transactional
**Descrição**: Como usar `@Transactional` no projeto?

**Contexto**:
- Não está documentado nos agentes ainda
- Precisa entender padrões do Beevent

**Decisão Pendente**:
- [ ] Quando usar (class-level vs method-level)?
- [ ] Configuração padrão (readOnly, propagation, rollbackFor)?
- [ ] Exceções que triggerem rollback automático?
- [ ] Uso com Repository methods?

**Exemplos a Confirmar**:
- Service methods sempre @Transactional?
- Métodos read-only com `readOnly=true`?
- Custom exceptions que triggerem rollback?

---

### 3️⃣ Tratamento de Exceções
**Descrição**: Padrão de exceções customizadas do projeto

**Contexto**:
- Backend delega validação avançada/segurança para Segurança
- Mas precisa saber como estruturar exceções de negócio

**Decisão Pendente**:
- [ ] Exceptions customizadas existentes (padrão de nomes)?
- [ ] Como tratar em @ControllerAdvice?
- [ ] HTTP status codes para cada tipo?
- [ ] Format de resposta de erro

**Exemplos a Confirmar**:
- Já existe `EntidadeNaoEncontradaException`?
- Como retornar erro em JSON (structure, campos)?

---

## Frontend: 11 pendências

### 1️⃣ Integração com Backend (HTTP Client)
**Descrição**: Como integrar com APIs do backend (fetch, axios, library)?

**Contexto**:
- Frontend precisa chamar APIs REST do backend
- Precisa definir padrão para: cliente HTTP, estrutura de chamadas, tipos de resposta

**Decisão Pendente**:
- [ ] Usar fetch nativo ou biblioteca (axios, react-query, SWR)?
- [ ] Como estruturar DTOs/tipos de resposta?
- [ ] Padrão para endpoints (base URL, prefixo, versionamento)?
- [ ] Como lidar com autenticação/tokens (Bearer, Cookie, etc)?
- [ ] Tratamento de erros de API (retry, timeout, etc)?

**Exemplos a Confirmar**:
- Endpoints têm prefixo `/api/v1/`?
- Como passar tokens (header Authorization)?
- Biblioteca centralizada para requisições?

---

### 2️⃣ Padrões de Página e Layout (App Router)
**Descrição**: Estrutura padrão de páginas Next.js (page.tsx, layout.tsx, etc)

**Contexto**:
- Next.js 14 usa App Router
- Precisa definir padrão para: página, layout, metadata, SEO

**Decisão Pendente**:
- [ ] Sempre Server Component em page.tsx?
- [ ] Padrão para layout.tsx (compartilhado vs por rota)?
- [ ] Quando usar loading.tsx vs Suspense?
- [ ] Como gerar/estruturar metadata (SEO)?
- [ ] Padrão para error.tsx e not-found.tsx?

**Exemplos a Confirmar**:
- Exemplo de estrutura de páginas
- Metadata padrão (título, descrição, OG tags)

---

### 3️⃣ Gerenciamento de Estado Global
**Descrição**: Estratégia para estado compartilhado entre componentes

**Contexto**:
- Frontend usa Context API atualmente
- Precisa definir: quando usar Context vs outras soluções

**Decisão Pendente**:
- [ ] Context API é suficiente ou precisa Redux/Zustand/Jotai?
- [ ] Padrão para estruturar Context (auth, tema, etc)?
- [ ] Quando usar useState vs Context vs custom hooks?
- [ ] Performance: como evitar re-renders desnecessários?

**Exemplos a Confirmar**:
- Estado de autenticação (usuário logado)?
- Estado de tema (light/dark)?
- Padrão existente no Beevent?

---

### 4️⃣ Tratamento de Erros
**Descrição**: Como tratar erros de API e exceções

**Contexto**:
- Frontend precisa comunicar erros ao usuário
- Precisa definir UX para erros (toast, modal, página)

**Decisão Pendente**:
- [ ] Usar toast notifications, modais ou página de erro?
- [ ] Como estruturar mensagens de erro?
- [ ] Error boundary para erros não tratados?
- [ ] Recovery strategy (retry, fallback, etc)?

**Exemplos a Confirmar**:
- Erro 404: mostrar página ou toast?
- Erro 401 (Unauthorized): redirecionar para login?
- Erro genérico 500: mensagem padrão ou específica?

---

### 5️⃣ Formulários e Validação
**Descrição**: Padrão para formulários (React Hook Form + Zod?)

**Contexto**:
- Frontend usa Zod para validação
- Precisa definir: integração com formulários, estrutura de erros

**Decisão Pendente**:
- [ ] Usar React Hook Form + Zod ou apenas Zod?
- [ ] Como estruturar erros de validação no UI?
- [ ] Validação em tempo real ou ao submeter?
- [ ] Submissão otimista (mostrar resultado antes de resposta)?
- [ ] Padrão para handling de validações do backend?

**Exemplos a Confirmar**:
- Formulário de inscrição (campos, validações)
- Como exibir erros do backend no formulário?

---

### 6️⃣ Estilo (TailwindCSS)
**Descrição**: Padrão para estilização com TailwindCSS

**Contexto**:
- Frontend usa TailwindCSS
- Precisa definir: prefixos, componentes customizados, temas

**Decisão Pendente**:
- [ ] Prefixos de classe (apenas TailwindCSS ou custom)?
- [ ] Componentes reutilizáveis (Button, Input, etc)?
- [ ] Uso de @apply ou composição CSS?
- [ ] Dark mode ativado?
- [ ] Breakpoints (sm, md, lg) customizados?

**Exemplos a Confirmar**:
- Padrão de cores (primary, secondary, danger, etc)?
- Componentes base já existentes?
- Exemplo de componente customizado?

---

### 7️⃣ Routing e Navegação
**Descrição**: Padrão para rotas e navegação

**Contexto**:
- Next.js 14 usa App Router
- Precisa definir: estrutura de rotas, redirects, protected routes

**Decisão Pendente**:
- [ ] Estrutura de rotas (flat vs nested)?
- [ ] Como implementar protected routes (autenticação)?
- [ ] Redirects (login → dashboard, etc)?
- [ ] Breadcrumbs ou navegação estruturada?
- [ ] Como gerar sitemap/robots.txt?

**Exemplos a Confirmar**:
- Rotas públicas vs privadas
- Padrão de URL (kebab-case, camelCase)?

---

### 8️⃣ Environment Variables
**Descrição**: Padrão para variáveis de ambiente

**Contexto**:
- Frontend precisa de variáveis (API URL, keys, etc)
- Precisa definir: estrutura de .env, prefixos, validação

**Decisão Pendente**:
- [ ] Como estruturar .env.local vs .env.production?
- [ ] Prefixos obrigatórios (NEXT_PUBLIC_)?
- [ ] Validação de variáveis obrigatórias at build time?
- [ ] Exemplo de .env.example?

**Exemplos a Confirmar**:
- API URL (desenvolvimento vs produção)
- Chaves (Stripe, Google Analytics, Recaptcha, etc)

---

### 9️⃣ Testes (com QA)
**Descrição**: Padrão de testes de componentes e integração

**Contexto**:
- QA será responsável por testes
- Frontend só implementa código testável

**Decisão Pendente**:
- [ ] Framework de testes (Vitest, Jest)?
- [ ] Biblioteca de testes (Testing Library, Cypress)?
- [ ] Cobertura mínima esperada?
- [ ] Testes unitários vs integração?
- [ ] Mocks de API (MSW, etc)?

**Exemplos a Confirmar**:
- Exemplo de teste de componente
- Padrão de nomenclatura de testes

---

### 🔟 Bundle e Performance
**Descrição**: Padrão para otimização de bundle e performance

**Contexto**:
- Frontend precisa de build otimizado
- Precisa definir: análise de bundle, limite de tamanho

**Decisão Pendente**:
- [ ] Usar bundle analyzer (next/bundle-analyzer)?
- [ ] Limite de tamanho de bundle (gzipped)?
- [ ] Prefetch/preload strategy?
- [ ] SWC vs Babel?
- [ ] Image optimization padrão (Next.js Image)?

**Exemplos a Confirmar**:
- Análise do bundle atual
- Bibliotecas pesadas que precisam lazy loading?

---

### 1️⃣1️⃣ Padrões de Server vs Client Components
**Descrição**: Quando usar Server Components vs Client Components

**Contexto**:
- Next.js 14 favorece Server Components
- Frontend precisa definir: padrão, exceções

**Decisão Pendente**:
- [ ] Server Component é padrão em page.tsx?
- [ ] Quando forçar 'use client' (interatividade, hooks)?
- [ ] Performance considerations (fetch no servidor)?
- [ ] Exemplo de quando quebrar componente?

**Exemplos a Confirmar**:
- Página de listagem (Server ou Client)?
- Filtro interativo (Server ou Client)?

---

## Database Scripts: 9 pendências

### 1️⃣ Versionamento de Migrations
**Descrição**: Como versionar migrations Flyway no Beevent?

**Contexto**:
- Flyway usa padrão V{versao}__{descricao}.sql
- Precisa definir: qual formato de versão usar

**Decisão Pendente**:
- [ ] Sequencial (V1, V2, V3, V4...)?
- [ ] Com data (V2024_02_13_001, V2024_02_13_002...)?
- [ ] Semântico (V1_0_0, V1_1_0...)?
- [ ] Hibridizado (V2_40, V2_41...)? ← Atual usado no projeto?

**Exemplos a Confirmar**:
- `V2_40__add_coluna_tipo_template_email.sql`
- Qual é o padrão atual do Beevent?

---

### 2️⃣ Nomenclatura de Constraints (FK, UK, etc)
**Descrição**: Padrão para nomear foreign keys, unique constraints, etc

**Contexto**:
- Constraints precisam de nomes descritivos
- Precisa definir: padrão de nomenclatura

**Decisão Pendente**:
- [ ] Foreign Keys: `fk_{tabela_origem}_{tabela_destino}` ou outro?
- [ ] Unique Constraints: `uk_{tabela}_{coluna(s)}` ou `uq_`?
- [ ] Check Constraints: `ck_{tabela}_{descricao}`?
- [ ] Primary Keys: nomes customizados ou automáticos?

**Exemplos a Confirmar**:
- Foreign key de evento_ancora para usuario?
- Unique constraint em email de usuario?

---

### 3️⃣ Nomenclatura de Colunas (snake_case, prefixos, etc)
**Descrição**: Padrão para nomes de colunas

**Contexto**:
- Colunas devem ser nomeadas consistentemente
- Precisa definir: case, prefixos opcionais, convenções

**Decisão Pendente**:
- [ ] Sempre snake_case (id_evento_ancora) vs camelCase?
- [ ] Prefixos por tipo (id_, is_, dt_, fk_, etc)?
- [ ] Timestamps padrão (criado_em, atualizado_em, deletado_em)?
- [ ] Booleanos (ativo, deleted, is_confirmed)?

**Exemplos a Confirmar**:
- Coluna de ID: `id` ou `{tabela}_id`?
- Data de criação: `created_at`, `criado_em`, `criacao`?
- Flag booleano: `is_ativo`, `ativo`, `ativado`?

---

### 4️⃣ Soft Delete Padrão
**Descrição**: Padrão para soft delete (exclusão lógica)

**Contexto**:
- Algumas entidades usam soft delete
- Precisa definir: coluna padrão, índices, convenção

**Decisão Pendente**:
- [ ] Coluna `deletado_em` (timestamp) ou `ativo` (booleano)?
- [ ] Índices devem ter WHERE deletado_em IS NULL?
- [ ] Qual padrão usar em migrations para soft delete?
- [ ] Exemplo de migration com soft delete?

**Exemplos a Confirmar**:
- Template email tem soft delete?
- Bilhete usa soft delete ou delete real?

---

### 5️⃣ Índices para Soft Delete
**Descrição**: Como indexar colunas em tabelas com soft delete

**Contexto**:
- Se usar soft delete, queries geralmente filtram por deletado_em IS NULL
- Índices devem refletir isso para performance

**Decisão Pendente**:
- [ ] Índices sempre incluem WHERE deletado_em IS NULL?
- [ ] Nomenclatura diferente para soft deleted indexes?
- [ ] Índices regulares sem soft delete também?

**Exemplos a Confirmar**:
- `CREATE INDEX idx_bilhete_evento ON bilhete(evento_id) WHERE deletado_em IS NULL;`

---

### 6️⃣ Foreign Key Actions (CASCADE, RESTRICT, etc)
**Descrição**: Padrão para comportamento de foreign keys ao deletar

**Contexto**:
- FK pode ter diferentes ações: CASCADE, RESTRICT, SET NULL, etc
- Precisa definir: qual usar para cada caso

**Decisão Pendente**:
- [ ] Padrão global (sempre CASCADE, RESTRICT, etc)?
- [ ] Por caso (alguns CASCADE, outros RESTRICT)?
- [ ] Soft delete afeta escolha?

**Exemplos a Confirmar**:
- Ao deletar evento, deletar bilhetes (CASCADE ou não)?
- Ao deletar usuario, setNull em registros ou RESTRICT?

---

### 7️⃣ Particionamento de Tabelas
**Descrição**: Quando e como particionar tabelas grandes

**Contexto**:
- Tabelas com muitos registros precisam de particionamento
- Precisa definir: critério, estratégia

**Decisão Pendente**:
- [ ] Threshold para particionar (10M registros? 100M)?
- [ ] Por data (RANGE on criado_em)?
- [ ] Por hash (HASH on id)?
- [ ] Índices em partições?

**Exemplos a Confirmar**:
- Tabela de bilhetes será particionada?
- Tabela de logs será particionada?

---

### 8️⃣ Scripts de Teste e Validação
**Descrição**: Onde e como documentar scripts de teste de migrations

**Contexto**:
- Database Scripts faz scripts de validação
- Precisa definir: onde salvar, versionamento, padrão

**Decisão Pendente**:
- [ ] Pasta separada para scripts? (db/scripts/, db/validation/, etc)
- [ ] Versionados junto com migrations ou separados?
- [ ] Padrão de nomenclatura (V2_40_validation.sql, test_V2_40.sql)?
- [ ] Devem ser documentados em README da DB?

**Exemplos a Confirmar**:
- Exemplo de script de validação para migration real?

---

### 9️⃣ Rollback e Reversibilidade
**Descrição**: Padrão para rollback de migrations

**Contexto**:
- Nem toda migration é facilmente reversível
- Precisa definir: quando/como fazer rollback

**Decisão Pendente**:
- [ ] Sempre criar migrations reversíveis (Flyway Undo)?
- [ ] Apenas quando possível/necessário?
- [ ] Documentar rollback strategy em cada migration complexa?
- [ ] Exemplo de migration irreversível aceitável?

**Exemplos a Confirmar**:
- Deletar coluna: fazer rollback? Como?
- Alterar tipo de dados: rollback é possível?

---

## Testes & QA: 6 pendências

### 1️⃣ Frameworks e Bibliotecas Padrão
**Descrição**: Quais são os frameworks/bibliotecas obrigatórios para testes?

**Contexto**:
- Agente mencionou: JUnit 5, Mockito, Vitest, Testing Library
- Precisa confirmar: Essas são obrigatórias ou há flexibilidade?

**Decisão Pendente**:
- [ ] JUnit 5 é obrigatório (vs JUnit 4, TestNG)?
- [ ] Mockito é obrigatório (vs PowerMock, EasyMock)?
- [ ] Vitest é obrigatório (vs Jest)?
- [ ] Há alternativas aceitáveis?
- [ ] Versões específicas ou latest?
- [ ] E2E: Playwright ou Cypress ou outra?
- [ ] Performance: JMH ou k6 ou outra?

**Exemplos a Confirmar**:
```bash
# Backend
./mvnw test
# Qual saída esperada?

# Frontend
npm run test
# Qual framework rodar por padrão?
```

---

### 2️⃣ Testes Flaky: Identificação e Mitigação
**Descrição**: Como lidar com testes que falham aleatoriamente

**Contexto**:
- Testes "flaky" são aqueles que passam/falham sem mudança de código
- Precisa definir: estratégia para identificar e estabilizar

**Decisão Pendente**:
- [ ] Como detectar testes flaky? (CI retry, logs, etc)
- [ ] Marcar com @Flaky ou skip?
- [ ] Investigar antes de merge?
- [ ] Limite de re-runs aceitável?

**Exemplos a Confirmar**:
- Qual é o timeout máximo aceitável?
- Quando usar `await()` vs `Thread.sleep()`?
- Como evitar race conditions em testes paralelos?

---

### 3️⃣ Git Flow com Gating Factors (mas SEM automação)
**Descrição**: Padrão de branches e merge com validações informativas

**Contexto**:
- Usar Git Flow (develop → main)
- Testes devem ser **informativos** (alertam, não bloqueiam)
- **NENHUMA automação** de commit/merge (sempre manual)
- Agente pode sugerir, mas usuário aprova tudo manualmente

**Decisão Pendente**:
- [ ] Testes obrigatórios em PR (informativo)?
- [ ] Cobertura é critério de aprovação (informativo)?
- [ ] Quantos reviewers humanos necessários?
- [ ] Padrão de nomes de branches?
- [ ] Padrão de nomes de commits?
- [ ] CI/CD status check (informativo ou bloqueador)?

**Exemplos a Confirmar**:
```
Git Flow Branches:
- main: produção (deploy manual)
- develop: staging (testes informativos)
- feature/xxx: desenvolvimento

Status Check (informativo, não bloqueia):
✅ Tests passed
✅ Coverage 85%
✅ No critical issues
✅ Review approved

Merge: MANUAL (usuário clica merge button)
```

---

### 4️⃣ Padrão de Fixtures e Test Data
**Descrição**: Como estruturar dados de teste (builders, factories)

**Contexto**:
- Testes precisam de dados iniciais
- Precisa definir: centralizado vs distribuído

**Decisão Pendente**:
- [ ] TestDataBuilder pattern vs Factory?
- [ ] Fixtures centralizadas em `src/test/resources/`?
- [ ] Faker library para dados realistas?
- [ ] Database seeding para integração?

**Exemplos a Confirmar**:
- Exemplo de builder de usuário?
- Exemplo de fixture SQL?

---

### 5️⃣ Performance de Testes (por enquanto OK)
**Descrição**: Validar se testes executam em tempo aceitável

**Contexto**:
- Testes devem ser rápidos
- Por enquanto OK: manter como está
- Quando precisar validar performance real:

**Decisão Pendente**:
- [ ] Qual é o tempo máximo aceitável?
- [ ] Suite completa em < 5min, < 10min?
- [ ] Unitários paralelizáveis?
- [ ] Integração em container separado?

---

### 6️⃣ CI/CD e Relatórios
**Descrição**: Integração com pipeline (GitHub Actions, etc)

**Contexto**:
- Precisa reportar resultados de testes
- Precisa definir: ferramenta e formato

**Decisão Pendente**:
- [ ] GitHub Actions ou outra CI/CD?
- [ ] SonarQube para cobertura?
- [ ] Relatório de testes em PR?
- [ ] Badge de coverage?
- [ ] Publicar resultados em Artifacts?

**Exemplos a Confirmar**:
- Padrão de workflow no GitHub Actions?
- Como rodará: `npm test` e `./mvnw test`?

---

## Segurança: 3 pendências

### 1️⃣ Rate Limiting - Endpoints e Configuração
**Descrição**: Implementação de rate limiting em endpoints críticos

**Contexto**:
- Agente menciona rate limiting em endpoints críticos (login, pagamento, etc)
- Precisa definir: quais endpoints, limites, estratégia

**Decisão Pendente**:
- [ ] Qual biblioteca/framework usar (Spring Security, Spring Cloud Gateway, etc)?
- [ ] Limites específicos por endpoint (5/min em login? 10/min em API?)?
- [ ] Strategy: por IP, por usuário, por token?
- [ ] Resposta quando limite é atingido (429, erro customizado)?
- [ ] Whitelist de IPs/serviços internos?

**Exemplos a Confirmar**:
- `/login`: máximo 5 tentativas por minuto por IP?
- `/pagamento`: máximo 10 requisições por hora por usuário?
- Como implementar em Spring Boot (annotation, filter)?

---

### 2️⃣ CORS - Configuração Segura
**Descrição**: Configuração padrão de CORS no projeto

**Contexto**:
- CORS é crítico para segurança
- Precisa definir: domínios permitidos, métodos, headers

**Decisão Pendente**:
- [ ] Domínios permitidos (hardcoded vs configurável)?
- [ ] Métodos permitidos (GET, POST, PUT, DELETE, PATCH)?
- [ ] Headers permitidos (Authorization, Content-Type, etc)?
- [ ] Credentials permitidas (cookies, tokens)?
- [ ] Max-Age (quanto tempo cache CORS)?
- [ ] Preflight requests sempre necessários?

**Exemplos a Confirmar**:
- Frontend e backend mesmo domínio ou separados?
- Exemplo de configuração Spring Security atual?

---

### 3️⃣ Requisitos de Senha
**Descrição**: Padrão de requisitos de força de senha

**Contexto**:
- Senhas fracas é vulnerabilidade crítica
- Precisa definir: comprimento, complexidade, expiração

**Decisão Pendente**:
- [ ] Comprimento mínimo (8, 12, 16 caracteres)?
- [ ] Exigir maiúscula, minúscula, número, especial?
- [ ] Histórico (proibir últimas N senhas)?
- [ ] Expiração (forçar mudança a cada 90 dias)?
- [ ] Detectar senhas comuns (password, 123456, admin)?
- [ ] Exemplo de regex padrão do projeto?

**Exemplos a Confirmar**:
- Padrão atual do Beevent?
- Como validar força de senha no frontend e backend?

---

## Performance: 4 pendências

### 1️⃣ Thresholds de Métricas - Valores Específicos
**Descrição**: Validar se os thresholds de performance propostos alinham com projeto

**Contexto**:
- Agente propõe: Backend < 200ms ideal / < 500ms aceitável
- Agente propõe: LCP < 2.5s, FID < 100ms, CLS < 0.1, TTI < 3.5s
- Precisa validar: Esses números são realistas para Beevent?

**Decisão Pendente**:
- [ ] Response time (backend): qual é o aceitável?
- [ ] LCP: < 2.5s é o alvo?
- [ ] FID: < 100ms é realista?
- [ ] Bundle size: < 200kb gzipped é aceitável?
- [ ] Database query time: < 100ms (simples) ou outro?
- [ ] Como monitorar essas métricas em produção?

**Exemplos a Confirmar**:
- Benchmark atual do projeto?
- Ferramentas de monitoramento (New Relic, DataDog)?
- SLA definido?

---

### 2️⃣ Cache Strategy - Quando e Como Cachear
**Descrição**: Estratégia de cache para dados estáticos e dinâmicos

**Contexto**:
- Agente menciona cache com @Cacheable, CACHEEVICT
- Precisa definir: tipos de dados, TTL, invalidação

**Decisão Pendente**:
- [ ] Qual backend de cache (Spring Cache, Redis, Memcached)?
- [ ] Dados estáticos: TTL? (1h, 1 dia, 7 dias?)
- [ ] Dados semi-dinâmicos (eventos, ingressos): TTL?
- [ ] Estratégia de invalidação (time-based, event-based)?
- [ ] Cache por usuário ou global?
- [ ] Limpar cache em deploy automático?

**Exemplos a Confirmar**:
- Qual tipo de dados deve ser cacheado (eventos, templates, etc)?
- Padrão de invalidação (deletar em changetime)?

---

### 3️⃣ Load Testing - Quando e Como Rodar
**Descrição**: Estratégia para teste de carga

**Contexto**:
- Precisa definir: quando rodar, ferramentas, padrão

**Decisão Pendente**:
- [ ] Ferramenta (Apache Bench, k6, JMeter, Gatling)?
- [ ] Quando rodar (antes de deploy, teste de regressão)?
- [ ] Cenários padrão (100 usuários? 1000 usuários?)?
- [ ] Onde rodar (homolog, staging)?
- [ ] Quais endpoints validar (listagem, pagamento, etc)?
- [ ] Relatório esperado (latência, throughput, erros)?

---

### 4️⃣ Escalabilidade - Volumes e Crescimento Esperado
**Descrição**: Planejar para crescimento de dados e usuários

**Contexto**:
- Beevent pode crescer
- Precisa definir: volumes esperados, taxa de crescimento

**Decisão Pendente**:
- [ ] Quantos eventos/ano?
- [ ] Quantos usuários/mês?
- [ ] Quantos bilhetes/evento?
- [ ] Crescimento esperado (2x/ano? 10x em 3 anos?)?
- [ ] Picos de uso (eventos populares)?
- [ ] Retenção de dados (quanto tempo guardar logs)?

**Exemplos a Confirmar**:
- Volume atual?
- Projeção para 1 ano, 3 anos, 5 anos?

---

## Designer: 5 pendências

### 1️⃣ Componentes Design System
**Descrição**: Quais componentes estão documentados ou já implementados?

**Contexto**:
- Agente lista 10 componentes base (Botões, Inputs, Cards, Modais, Tabs, Dropdowns, Badges, Avatars, Toast, Spinners)
- Precisa validar: Quais já existem? Qual é o padrão?

**Decisão Pendente**:
- [ ] Quais componentes já foram implementados?
- [ ] Onde está o Design System (Figma, código)?
- [ ] Exemplo de componente existente?
- [ ] Padrão de nomes (Button vs ButtonPrimary)?
- [ ] Como adicionar novos componentes?

---

### 2️⃣ Tipografia - Fontes e Tamanhos
**Descrição**: Validar padrão de tipografia

**Contexto**:
- Agente propõe: H1 32px/700, H2 24px/600, Body 14-16px/400
- Precisa confirmar: Essas são as fontes padrão?

**Decisão Pendente**:
- [ ] Fontes principais (Arial, Inter, Roboto, Poppins)?
- [ ] Tamanhos de corpo padrão (14px, 16px)?
- [ ] Line-height padrão (1.5, 1.6)?
- [ ] Font-weights padrão (400, 500, 600, 700)?
- [ ] Tamanhos de heading (H1-H6)?

**Exemplos a Confirmar**:
- Qual é a fonte atual do projeto?
- Exemplo de tipografia em uso?

---

### 3️⃣ Paleta de Cores
**Descrição**: Validar paleta de cores padrão

**Contexto**:
- Agente propõe: Primary azul, Secondary roxo, Success verde, etc
- Precisa confirmar: Esses tons são corretos?

**Decisão Pendente**:
- [ ] Cores primary, secondary, success, warning, danger (valores hex)?
- [ ] Grayscale (11 tons de cinza)?
- [ ] Dark mode ativado?
- [ ] Como aplicar cores em componentes?
- [ ] Alternativas de cor por estado (hover, active, disabled)?

**Exemplos a Confirmar**:
- Cores atuais do Beevent?
- Exemplo de uso em componente?

---

### 4️⃣ Breakpoints e Responsividade
**Descrição**: Validar breakpoints propostos

**Contexto**:
- Agente propõe: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px
- Precisa confirmar: TailwindCSS usa esses valores? São customizados?

**Decisão Pendente**:
- [ ] Breakpoints são defaults TailwindCSS?
- [ ] São customizados em tailwind.config.js?
- [ ] Qual é o mobile-first target (< 640px)?
- [ ] Qual é o desktop target (> 1280px)?
- [ ] Há breakpoints adicionais específicos?

**Exemplos a Confirmar**:
- tailwind.config.js atual?
- Exemplo de componente responsivo?

---

### 5️⃣ Design System - Documentação e Uso
**Descrição**: Como manter Design System documentado e atualizado

**Contexto**:
- Design System precisa de documentação
- Precisa definir: ferramentas, processo

**Decisão Pendente**:
- [ ] Figma é usado? (design system em Figma?)
- [ ] Storybook é usado? (componentes documentados?)
- [ ] Documentação em Markdown?
- [ ] Como sincronizar Figma ↔ Código?
- [ ] Quem mantém (Designer, Frontend)?

**Exemplos a Confirmar**:
- Design System atual está em Figma?
- Existe Storybook rodando?
- Documentação centralizada?

---

## Acessibilidade: 2 pendências

### 1️⃣ WCAG Level - AA vs AAA
**Descrição**: Qual é o alvo de conformidade WCAG?

**Contexto**:
- WCAG 2.1 tem 3 níveis: A (mínimo), AA (recomendado), AAA (ideal)
- Agente propõe AA como mínimo
- Precisa validar: É viável AAA? Qual é o alvo do projeto?

**Decisão Pendente**:
- [ ] Nível mínimo obrigatório (A, AA)?
- [ ] Alguns componentes podem ser AAA?
- [ ] Trade-off entre custo/tempo vs acessibilidade?

---

### 2️⃣ WCAG Versão - 2.1 vs 2.2
**Descrição**: Qual versão do WCAG seguir?

**Contexto**:
- WCAG 2.1 é atual (2018)
- WCAG 2.2 é nova (2023+)
- Precisa definir: Qual padrão seguir?

**Decisão Pendente**:
- [ ] Usar WCAG 2.1 (consolidado) ou 2.2 (novo)?
- [ ] Se 2.2, quais critérios novos são críticos?

---

## Documentação: 1 pendência

### 1️⃣ Ferramentas de Documentação - Confirmação
**Descrição**: Validar quais ferramentas estão realmente em uso

**Contexto**:
- Agente propõe: Mermaid, Javadoc, JSDoc, OpenAPI/Swagger, Figma, Storybook
- Precisa confirmar: Qual dessas realmente é usada no Beevent?

**Decisão Pendente**:
- [ ] Mermaid é usado? (diagramas)
- [ ] OpenAPI/Swagger é usado? (documentação de API)
- [ ] Figma é usado? (design system)
- [ ] Storybook é usado? (componentes React)
- [ ] Outras ferramentas não mencionadas?
