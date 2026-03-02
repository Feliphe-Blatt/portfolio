# Configurações do GitHub Copilot - Beevent

Este diretório contém as instruções e configurações para o GitHub Copilot trabalhar de forma otimizada no projeto Beevent.

## 📁 Estrutura

```
.github/
├── copilot-instructions.md    # Instruções principais do Copilot
├── COPILOT-QUICKSTART.md      # Guia rápido (3 minutos) ⭐
├── PENDENCIAS_AGENTES.md      # Decisões técnicas pendentes (48+)
├── agents/                     # Agentes especializados (12)
│   ├── README.md              # Guia de uso dos agentes
│   ├── acessibilidade.md
│   ├── analise-planejamento.md
│   ├── backend.md
│   ├── code-review.md
│   ├── database-scripts.md
│   ├── designer.md
│   ├── documentation.md
│   ├── frontend.md
│   ├── performance.md
│   ├── scrum-master.md
│   ├── seguranca.md
│   └── testes.md
└── sprints/                    # Gestão de sprints
    ├── README.md              # Guia de sprints
    ├── sprint-review-template.md
    ├── current/               # Sprint atual
    │   ├── sprint-info.md
    │   └── tasks/             # Tasks da sprint
    └── archive/               # Sprints finalizadas
```

## 🎯 Sistema de Agentes

O projeto utiliza um sistema de **agentes especializados** que atuam como experts em diferentes áreas:

### Tipos de Agentes

#### 🔧 Desenvolvimento
- **Backend**: Spring Boot, APIs REST, Services
- **Frontend**: Next.js, React, TypeScript
- **Database Scripts**: Flyway, SQL, queries

#### 🎯 Qualidade
- **Testes & QA**: Unitários, integração, E2E
- **Code Review**: Padrões, refatoração
- **Segurança**: Vulnerabilidades, auth
- **Performance**: Otimizações, benchmarks
- **Acessibilidade**: WCAG 2.1, navegação assistiva

#### 📋 Planejamento
- **Análise & Planejamento**: Arquitetura, design
- **Designer**: UX/UI, wireframes
- **Documentação**: README, Javadoc
- **Scrum Master**: Orquestração, sprints

### Como Usar

#### Invocação Direta
```
@workspace Como Backend, crie um service para gestão de ingressos
```

#### Orquestração Complexa
```
@workspace Implementar feature completa de ordenação drag & drop
```

O **Scrum Master** irá automaticamente:
1. Analisar o requisito
2. Criar breakdown de tarefas
3. Delegar para agentes especializados
4. Monitorar progresso
5. Consolidar resultados

## 📋 Gestão de Sprints

### Sprints Quinzenais

O projeto trabalha com sprints de 2 semanas:

- **Pasta atual**: `sprints/current/`
- **Tasks**: `sprints/current/tasks/TASK-XXX-nome.md`
- **Arquivo de sprints**: `sprints/archive/sprint-XX/`

### Estrutura de Task

Cada task segue o formato:

```markdown
# TASK-XXX: Nome da Task

## 1. Descrição Detalhada
...

## 2. Objetivo Principal
...

## 3. Requisitos Funcionais (RF)
- RF-001: ...

## 4. Regras de Negócio (RN)
- RN-001: ...

## 5. Requisitos Não Funcionais (RNF)
- RNF-001: ...

## 6. Critérios de Aceite (CA)
- [ ] CA-001: ...
```

### Workflow de Sprint

```
Início da Sprint
  ↓
[Sprint Planning] → criar sprint-info.md
  ↓
[Desenvolvimento] → tasks individuais
  ↓
[Daily] → atualizar status das tasks
  ↓
[Sprint Review] → retrospectiva
  ↓
[Arquivamento] → mover para archive/
```

## 🚀 Quick Start

### 1. Configurar Ambiente

O GitHub Copilot lerá automaticamente:
- ✅ `copilot-instructions.md` (instruções gerais com ZERO AUTOMATION rule)
- ✅ `COPILOT-QUICKSTART.md` (guia 3 min)
- ✅ Arquivos de agentes quando necessário
- ✅ Tasks da sprint atual

### 2. Primeira Utilização

Abra o [COPILOT-QUICKSTART.md](./COPILOT-QUICKSTART.md) e siga os 3 passos em **3 minutos**:
1. Entender o sistema de agentes
2. Fazer primeira invocação
3. Completar primeira task

### 3. Criar Nova Task

```bash
# Criar task manualmente
code .github/sprints/current/tasks/TASK-002-nova-feature.md
```

Ou pedir ao Scrum Master:
```
@workspace /sprint criar task para implementar autenticação OAuth
```

### 4. Trabalhar na Task

```
@workspace trabalhar na TASK-002

> Scrum Master irá:
- Ler a task
- Analisar requisitos
- Delegar para agentes
- Implementar solução
- Validar critérios de aceite
```

### 5. Finalizar Sprint

```
@workspace /sprint finalizar sprint

> Scrum Master irá:
- Gerar sprint review
- Criar retrospectiva
- Arquivar sprint atual
- Preparar próxima sprint
```

## 📚 Documentação Adicional

- **[Guia Rápido](./COPILOT-QUICKSTART.md)** ⭐ Comece em 3 minutos!
- **[Instruções Completas](./copilot-instructions.md)** - Guia completo com ZERO AUTOMATION rule
- **[Agentes](./agents/README.md)** - Detalhes dos 12 agentes especializados (100% refinados)
- **[Sprints](./sprints/README.md)** - Gestão de sprints quinzenais e tasks
- **[Pendências](./PENDENCIAS_AGENTES.md)** - 48+ decisões técnicas para alinhar com a equipe

## 🔄 Padrões do Projeto

### Nomenclatura
- Classes: `PascalCase`
- Métodos: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- SQL: `snake_case`

### Backend (Spring Boot)
```java
@Slf4j
@Service
@RequiredArgsConstructor
public class EventoService {
    private final EventoRepository repository;
}
```

### Frontend (Next.js)
```tsx
interface Props {
  titulo: string;
}

export function Componente({ titulo }: Props) {
  return <div>{titulo}</div>;
}
```

### Database (Flyway)
```sql
-- V2_40__add_nova_coluna.sql
ALTER TABLE eventos ADD COLUMN nova_coluna VARCHAR(255);
```

## 💡 Dicas de Uso

### Contexto Automático
O Copilot tem acesso a:
- ✅ Estrutura do projeto
- ✅ Padrões de código
- ✅ Agentes especializados
- ✅ Tasks da sprint atual

### Melhor Performance
- Use `@workspace` para contexto completo
- Seja específico nas solicitações
- Referencie tasks quando apropriado
- Deixe o Scrum Master orquestrar trabalho complexo

### Trabalho em Equipe
- Cada agente tem expertise específica
- Agentes podem se comunicar entre si
- Scrum Master coordena múltiplos agentes
- Todos seguem os mesmos padrões

## 🎯 Exemplos Práticos

### Implementar Feature Completa
```
@workspace Implementar feature de ordenação drag & drop nos ingressos (TASK-001)
```

### Corrigir Bug
```
@workspace Como Code Review, analisar e corrigir bug no fluxo de pagamento
```

### Criar Migration
```
@workspace Como Database Scripts, criar migration para adicionar campo ordem em bilhetes
```

### Revisar Código
```
@workspace Como Code Review, analisar o arquivo BilheteService.java
```

### Criar Testes
```
@workspace Como Testes, criar testes unitários para EventoService
```

## 🔧 Manutenção

### Atualizar Instruções
As instruções podem ser atualizadas conforme o projeto evolui:
- Editar `copilot-instructions.md`
- Refinar agentes em `agents/`
- Adicionar novos padrões descobertos

### Melhorias Contínuas
Todos os agentes podem sugerir melhorias:
```
@workspace Como [Agente], sugiro melhorar [aspecto] porque [razão]
```

## 📞 Suporte

Para dúvidas sobre:
- **Instruções gerais**: Ver `copilot-instructions.md`
- **Agentes específicos**: Ver `agents/README.md`
- **Sprints**: Ver `sprints/README.md`
- **Padrões de código**: Ver documentação nos módulos
