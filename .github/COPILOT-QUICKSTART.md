# 🤖 GitHub Copilot - Guia Rápido

## 🎯 O que é este sistema?

Este projeto utiliza um **sistema de agentes especializados** que trabalham como experts em diferentes áreas do desenvolvimento. Cada agente tem conhecimento profundo em sua especialidade e segue padrões rigorosos.

## ⚡ Quick Start (3 minutos)

### 1️⃣ Como Pedir Ajuda ao Copilot

```
@workspace Como Backend, crie um service para gestão de eventos
```

### 2️⃣ Como Trabalhar em uma Task

```
@workspace trabalhar na TASK-001
```

### 3️⃣ Como Criar Feature Completa

```
@workspace implementar ordenação drag & drop nos ingressos
```

O **Scrum Master** irá automaticamente:
- ✅ Analisar requisitos
- ✅ Criar breakdown
- ✅ Delegar para agentes especializados
- ✅ Implementar solução completa
- ✅ Validar qualidade

## 🎭 Agentes Disponíveis

### 🔧 Desenvolvimento
| Agente | Quando Usar | Exemplo |
|--------|-------------|---------|
| **Backend** | APIs, Services, Business Logic | `Como Backend, criar API de eventos` |
| **Frontend** | Componentes React, UI | `Como Frontend, criar formulário de inscrição` |
| **Database** | Migrations, SQL | `Como Database Scripts, criar migration para...` |

### 🎯 Qualidade
| Agente | Quando Usar | Exemplo |
|--------|-------------|---------|
| **Testes** | Unitários, Integração, E2E | `Como Testes, criar testes para EventoService` |
| **Code Review** | Revisar código, refatorações | `Como Code Review, analisar BilheteService` |
| **Segurança** | Vulnerabilidades, auth | `Como Segurança, verificar validações de input` |
| **Performance** | Otimizações | `Como Performance, otimizar query de eventos` |
| **Acessibilidade** | WCAG, a11y | `Como Acessibilidade, validar formulário` |

### 📋 Planejamento
| Agente | Quando Usar | Exemplo |
|--------|-------------|---------|
| **Análise** | Arquitetura, design | `Como Análise, planejar módulo de pagamentos` |
| **Designer** | UX/UI | `Como Designer, criar wireframe do checkout` |
| **Documentação** | README, Javadoc | `Como Documentação, documentar API` |
| **Scrum Master** | Coordenação | `@workspace implementar feature X completa` |

## 📋 Trabalhando com Sprints

### Sprint Atual
Tasks estão em: [.github/sprints/current/tasks/](.github/sprints/current/tasks/)

### Criar Nova Task
```
@workspace /sprint criar task para [descrição]
```

### Trabalhar em Task
```
@workspace trabalhar na TASK-XXX
```

### Finalizar Sprint
```
@workspace /sprint finalizar sprint
```

## 💡 Exemplos Práticos

### Implementar Feature Completa
```
@workspace Implementar sistema de cupons de desconto

> Scrum Master irá:
1. Análise & Planejamento → definir arquitetura
2. Database Scripts → criar tabelas
3. Backend → criar API
4. Frontend → criar interface
5. Testes → validar funcionalidade
6. Code Review → revisar qualidade
7. Documentação → atualizar docs
```

### Corrigir Bug
```
@workspace Corrigir bug no cálculo de valores do checkout

> Code Review irá:
1. Analisar código
2. Identificar problema
3. Implementar correção
4. Criar testes
5. Validar solução
```

### Criar Migration
```
@workspace Como Database Scripts, adicionar campo "desconto" em bilhetes

> Database Scripts irá:
1. Criar arquivo Flyway versionado
2. Adicionar coluna com tipo apropriado
3. Criar índices se necessário
4. Documentar mudança
```

### Revisar Código
```
@workspace Como Code Review, revisar EventoService.java

> Code Review irá:
1. Verificar padrões
2. Identificar code smells
3. Sugerir refatorações
4. Validar SOLID principles
5. Checar performance/segurança
```

## 🎯 Padrões Rápidos

### Backend (Spring Boot)
```java
@Slf4j
@Service
@RequiredArgsConstructor
public class NomeService {
    private final NomeRepository repository;
    
    public Entidade buscar(UUID id) {
        log.info("[NOME-SERVICE] - Buscando por ID: {}", id);
        return repository.findById(id)
            .orElseThrow(() -> new NotFoundException("Não encontrado"));
    }
}
```

### Frontend (Next.js)
```tsx
interface Props {
  titulo: string;
  descricao?: string;
}

export function Componente({ titulo, descricao }: Props) {
  return (
    <div className="container">
      <h1>{titulo}</h1>
      {descricao && <p>{descricao}</p>}
    </div>
  );
}
```

### Migration (Flyway)
```sql
-- V2_40__add_campo_desconto.sql
ALTER TABLE bilhete 
ADD COLUMN desconto DECIMAL(10,2) DEFAULT 0.00;

COMMENT ON COLUMN bilhete.desconto IS 'Valor do desconto aplicado';
```

## 🚀 Dicas Pro

### Contexto Automático
O Copilot já sabe sobre:
- ✅ Estrutura do projeto
- ✅ Padrões de código
- ✅ Tecnologias usadas
- ✅ Agentes disponíveis
- ✅ Tasks da sprint

### Seja Específico
❌ Ruim: `criar service`  
✅ Bom: `Como Backend, criar service para gestão de ingressos com ordenação`

### Deixe o Scrum Master Orquestrar
Para trabalho complexo, não precisa especificar agentes:
```
@workspace implementar feature de pagamento com PIX
```

O Scrum Master automaticamente vai delegar para Backend, Frontend, Database, etc.

### Pergunte Antes de Implementar
```
@workspace Como seria a arquitetura para implementar notificações push?
```

## 📚 Documentação Completa

- **[Instruções Gerais](./.github/copilot-instructions.md)** - Guia completo
- **[Agentes](./.github/agents/README.md)** - Detalhes dos agentes
- **[Sprints](./.github/sprints/README.md)** - Gestão de sprints

## 🔧 Configuração Atual

### Arquivos Principais
- `.github/copilot-instructions.md` - Instruções principais
- `.github/agents/*.md` - Configuração de cada agente
- `.github/sprints/current/` - Sprint atual
- `.vscode/settings.json` - Configurações do VS Code

### Extensões Recomendadas
Ao abrir o projeto, o VS Code sugerirá instalar:
- GitHub Copilot
- GitHub Copilot Chat
- Extensões Java, TypeScript, etc.

## 🎓 Melhorias Contínuas

Os agentes podem sugerir melhorias:
```
@workspace Como Backend, sugiro adicionar cache em EventoService porque...
```

Todos os agentes podem e devem contribuir para melhorar suas próprias configurações!

## 🆘 Troubleshooting

### Copilot não responde como esperado
1. Verificar se está usando `@workspace`
2. Ser mais específico na solicitação
3. Referenciar o agente desejado

### Agente não segue padrões
1. Verificar configuração em `.github/agents/[nome].md`
2. Atualizar instruções se necessário
3. Reportar ao Scrum Master

### Task não foi encontrada
1. Verificar se está em `.github/sprints/current/tasks/`
2. Usar número correto (TASK-XXX)
3. Pedir ao Scrum Master para listar tasks

---

**🚀 Pronto para começar? Experimente:**
```
@workspace Como Backend, me explique a estrutura atual do EventoService
```
