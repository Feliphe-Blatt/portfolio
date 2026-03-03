# Instrucoes do Projeto Portfolio

Este arquivo e a fonte unica para regras operacionais transversais. Aplica-se automaticamente a todos os chats deste workspace.

---

## Precedencia e Fonte Unica

1. Este arquivo (`.github/copilot-instructions.md`) e a fonte unica para regras operacionais transversais (fluxo de task, evidencias, status de sprint).
2. Skills devem conter apenas instrucoes especializadas de dominio (frontend, QA, etc).
3. Nao duplicar regras operacionais iguais em varios arquivos de skill; preferir referencia a este arquivo.
4. Em conflito entre skill e este arquivo, prevalece este arquivo.

---

## Regras Operacionais Obrigatorias

Antes de qualquer implementacao tecnica de codigo, seguir esta ordem para toda nova task:

1. Criar arquivo da task em `sprints/current/tasks/`.
2. Criar resumo inicial em `sprints/current/relatorios-clickup/`.
3. Criar instrucao/checklist em `sprints/current/evidencias/instructions/`.
4. Adicionar e organizar evidencias visuais em `sprints/current/evidencias/prints/`.
5. Atualizar `sprints/current/sprint-info.md` com status e contagem.
6. Mapear cenarios de teste para cada Criterio de Aceite (CA) da task — gate bloqueante.
   - Estrutura minima por cenario: `dado que / quando / entao` (given/when/then)
   - Cobrir: caminho feliz, erros esperados e edge cases criticos
   - Para features/fixes relevantes: escrever stubs de teste (esqueletos compilaveis, ainda falhando) antes de codar
7. Somente apos os itens 1-6 iniciar implementacao tecnica.

A task so pode ser considerada "iniciada" quando os artefatos dos itens 1-5 estiverem criados, os cenarios do item 6 estiverem mapeados e referenciados na task.

---

## Modo Copiloto Obrigatorio

1. Antes de qualquer acao (edicao, comando, geracao de arquivo), apresentar:
   - objetivo
   - opcoes viaveis
   - motivos e trade-offs de cada opcao
   - impacto esperado (arquivos/areas afetadas)

2. Nao executar nada sem revisao e decisao explicita do usuario.

3. Em mudancas grandes, usar checkpoints de decisao:
   - plano proposto → confirmacao do usuario → execucao por etapa → confirmacao para a etapa seguinte.

4. Agir como copiloto: evitar execucao autonoma sem alinhamento previo.

---

## Regra de Sugestoes Mid-Sprint

Quando o usuario fizer uma sugestao de melhoria, nova feature ou ajuste durante uma sprint ativa:

1. **Criar imediatamente** o arquivo da nova task em `sprints/current/tasks/` com status `backlog`.
2. **Registrar** a sugestao com contexto suficiente para retomar depois (o que, por que, referencia a task atual).
3. **NAO interromper** a task atual em andamento.
4. **Informar** ao usuario que a sugestao foi registrada como task `TASK-XX` e que sera atacada apos a task corrente.
5. **Ao concluir** a task atual, revisar o backlog antes de iniciar a proxima.

Sem nenhuma task iniciada no momento da sugestao:
- Criar a task normalmente seguindo o fluxo completo (Fases 0 → PRE → …)
- Tratar como nova task e iniciar imediatamente se aprovado pelo usuario.

---

## Plano Tecnico Obrigatorio Antes da Execucao

1. Antes de implementar, detalhar explicitamente:
   - **Frontend**: componentes/tela, regras de estado e bloqueio, feedback visual (modal/toast/spinner), impacto de UX.
   - **Mock API** (json-server): contrato de endpoint, formato de dados em `data/db.json`, rotas necessarias.

2. Para cada area afetada, informar:
   - arquivos que serao alterados
   - opcoes de implementacao com trade-offs
   - riscos de regressao
   - estrategia de validacao (manual e/ou automatizada)

3. Verificar reutilizacao e centralizacao antes de propor nova implementacao:
   - Ja existe logica similar no codebase? (buscar antes de criar)
   - Se a logica mudar amanha, quantos arquivos serao afetados? (se mais de 1, centralizar)
   - Rule of Three: na 3a ocorrencia de logica duplicada, abstrair obrigatoriamente

4. Nao iniciar alteracoes sem aprovacao explicita do usuario sobre a abordagem tecnica.

---

## Fluxo de Fases por Task (Esquema Canonico)

```
Fase 0   — Abertura e Analise
           Artefatos da task (tasks/ + relatorios-clickup/ + evidencias/)
           Mapa de impacto, abordagem tecnica aprovada

Fase PRE — Test-First [gate bloqueante]
           Cenarios por CA (dado/quando/entao)
           Stubs de teste compilaveis, intencionalmente falhando

Fase 1   — Mock API [se houver mudanca de dados]
           Atualizar data/db.json com novos endpoints/registros

Fase 2   — Frontend
           Componentes, hooks, integracao com mock API, feedback visual

Fase 3   — Qualidade [obrigatoria]
           Stubs convertidos em testes reais e verdes
           Code review aprovado

Fase 4   — Performance e Acessibilidade [quando aplicavel]
           Ativar se a task envolver volumes de dados ou interacoes criticas de UX
           Verificar Lighthouse, WCAG 2.1 Level AA

Fase 5   — Documentacao e Fechamento [obrigatoria]
           Documentacao atualizada, metricas da task, sprint-info atualizado
```

Regras:
- Nao pular fases: cada fase e gate de entrada da proxima.
- Fases 1 e 2 podem ser parcialmente paralelas quando sem dependencia direta.
- Fase PRE sempre antes de Fases 1-2.
- Fase 4 e opcional mas, quando ativada, bloqueia a Fase 5.

---

## Tipos de Task

### Build to Earn (B2E) — padrao
Features, fixes e melhorias que entregam valor direto ao usuario.
Usar template: `sprints/templates/task-template-fp.md`

### Build to Learn (B2L) — Spike
Exploracao pura para responder uma pergunta tecnica ou validar uma hipotese antes de codar.
- **Obrigatoriamente timeboxed** (definir limite de horas na abertura)
- Nao entrega codigo de producao — entrega decisao documentada
- Resultado: go / no-go / pivot + tasks B2E derivadas
- Usar template: `sprints/templates/task-template-spike.md`

Quando criar uma Spike:
- Incerteza tecnica alta que pode invalidar a abordagem escolhida
- Integracao com sistema externo nao explorado
- Duvida sobre viabilidade de performance ou escalabilidade
- Avaliacao de biblioteca ou padrao arquitetural novo

---

## Guardrails Anti-Overengineering

1. Evitar rituais obrigatorios sem impacto direto na entrega.
2. Evitar delegacao artificial entre agentes quando a execucao direta for mais simples.
3. Nao inventar comandos/processos que nao existam no repositorio ou no ambiente.
4. Nao impor metas rigidas universais como bloqueio absoluto.
5. Confirmar stack e padroes reais no codigo antes de aplicar receituario generico de skill.

---

## Codificacao UTF-8 Obrigatoria

1. Todo arquivo criado ou editado deve ser salvo em UTF-8.
2. Evitar mistura de codificacoes no repositorio.
3. Se houver caractere quebrado, corrigir o texto e regravar em UTF-8 antes de concluir a task.

---

## Metricas Obrigatorias de Tasks e Sprints

### Ao concluir uma task

1. Criar relatorio em `sprints/current/evidencias/metricas/tasks/TASK-XXX-metricas.md`.
2. O relatorio deve conter:
   - identificacao da task (ID, sprint, responsavel, datas de inicio/fim)
   - consumo de tokens (entrada, saida, total, custo estimado quando disponivel)
   - tempo de execucao (inicio/fim, duracao total, tempo ativo estimado)
   - esforco funcional (Sprint Points e FP planejado/realizado)
   - throughput de entrega (arquivos alterados, PRs/commits, testes executados)
   - analise de produtividade (planejado x realizado, gargalos, retrabalho, acoes de melhoria)
3. Referenciar o relatorio dentro do arquivo da task em `sprints/current/tasks/`.
4. Atualizar `sprints/current/sprint-info.md`.
5. Task so pode ser marcada como concluida quando o relatorio de metricas estiver criado e referenciado.

### Ao encerrar a sprint

Executar nesta ordem:

1. Criar `sprints/current/sprint-review.md` usando `sprints/templates/sprint-review-template.md`.
   - Registrar todas as tasks entregues, metricas de velocity/capacity e planejamento da proxima sprint.
2. Criar `sprints/current/sprint-retrospective.md` usando `sprints/templates/sprint-retrospective-template.md`.
   - Registrar o que funcionou, o que falhou, acoes de melhoria e sentiment check.
   - Verificar se alguma melhoria deve ser incorporada neste arquivo ou em um arquivo de skill.
3. Criar relatorio de metricas em `sprints/current/evidencias/metricas/sprint-atual/sprint-XXX-metricas.md`.
4. Criar comparativo em `sprints/current/evidencias/metricas/sprint-atual/comparativo-tasks-sprintXXX.md`.
5. Atualizar consolidado historico em `sprints/metricas/comparativo-entre-sprints.md`.
6. Renomear `sprints/current/` para `sprints/sprint-XXX/` (numero sequencial da sprint encerrada).
7. Recriar `sprints/current/` com novo `sprint-info.md` para o proximo ciclo.

Sprint so pode ser encerrada quando os 7 passos acima estiverem concluidos e os artefatos dos passos 1-5 referenciados entre si. Sem dados reais, preencher como `Nao coletado` com justificativa.

### Registro em 3 checkpoints: `inicio`, `andamento`, `fechamento`

Campos obrigatorios por checkpoint: timestamp, responsavel, tokens (entrada/saida/total), custo estimado, tempo acumulado (horas), SP planejado/realizado, FP planejado/realizado.

---

## Centralizacao de Templates

Todo template operacional fica em `sprints/templates/`. Nunca criar templates em `sprints/current/`.

Templates disponíveis:
- `sprints/templates/task-template-clickup.md` — resumo executivo para ClickUp
- `sprints/templates/task-template-fp.md` — task B2E com analise de pontos de funcao
- `sprints/templates/task-template-spike.md` — task B2L de exploracao/validacao tecnica (Spike)
- `sprints/templates/sprint-review-template.md` — cerimonia de review ao encerrar sprint
- `sprints/templates/sprint-retrospective-template.md` — cerimonia de retro ao encerrar sprint
- `sprints/templates/TEMPLATE-relatorio-metricas-task.md` — metricas por task
- `sprints/templates/TEMPLATE-relatorio-metricas-sprint.md` — metricas consolidadas da sprint
- `sprints/templates/TEMPLATE-comparativo-tasks-sprint.md` — comparativo entre tasks
- `sprints/templates/TEMPLATE-comparativo-entre-sprints.md` — comparativo historico entre sprints
- `sprints/templates/TEMPLATE-metricas-task.json` — schema JSON de metricas por task
- `sprints/templates/TEMPLATE-metricas-sprint.json` — schema JSON de metricas sprint
- `sprints/templates/TEMPLATE-comparativo-tasks-sprint.json` — schema JSON comparativo tasks
- `sprints/templates/TEMPLATE-comparativo-entre-sprints.json` — schema JSON comparativo sprints

---

## Stack do Projeto

- **Frontend**: React 19+, Vite 7+, **TypeScript (TSX/TS)**, react-router-dom v7, Bootstrap 5, react-bootstrap
- **Tipagem**: TypeScript 5.9+ strict mode, `tsconfig.json` com `strict: true`, `moduleResolution: "bundler"`
- **Internacionalizacao**: react-intl (pt-BR / en-US)
- **HTTP / Mock API**: axios + json-server (`data/db.json`)
- **Animacoes**: AOS (Animate on Scroll)
- **Testes**: Vitest + Testing Library (quando aplicavel)
- **CI**: GitHub Actions (build + lint)
- **Todo codigo novo em `.ts` / `.tsx`**: sem arquivos `.js` / `.jsx` em `src/`
- **Sem TailwindCSS**: estilizacao via Bootstrap 5 + CSS Modules ou arquivos `.css` por componente
- **Sem backend real**: dados via json-server local ou arquivos estaticos
- **Comunicacao**: Portugues brasileiro em todos os artefatos
