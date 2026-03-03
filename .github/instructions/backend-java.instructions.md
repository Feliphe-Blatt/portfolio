---
name: Backend Java — Beevent
description: Padroes e convencoes para codigo backend Spring Boot do Beevent.
applyTo: '**/*.java'
---

# Padroes Backend (Spring Boot / Java 17+)

## Stack obrigatoria

- Spring Boot 3.x, Java 17+, JPA/Hibernate, PostgreSQL, Flyway, Lombok

## Services

```java
@Slf4j
@Service
@RequiredArgsConstructor
public class NomeService {
    private final NomeRepository repository;

    public Entidade metodo(UUID id) {
        log.info("[NOME-SERVICE] - Descricao da operacao: {}", id);
        // logica
    }
}
```

- Sempre `@Slf4j` + `@RequiredArgsConstructor`
- Logs em pontos estrategicos com formato `[NOME-SERVICE] - descricao: {param}`
- Nenhuma logica de negocio fora do Service

## Controllers

```java
@RestController
@RequestMapping("/api/v1/recurso")
@RequiredArgsConstructor
public class NomeController {

    @GetMapping("/{id}")
    public ResponseEntity<NomeDTO> buscar(@PathVariable UUID id) {
        // delegar ao service — sem logica aqui
    }
}
```

- Sempre usar DTOs (nunca expor entidades diretamente)
- DTOs separados para request e response quando necessario
- Validacoes com `@Valid`, `@NotBlank`, `@Email`, etc.

## Entities

- UUID como ID
- Soft delete quando apropriado (`ativo`, `deletedAt`)
- Lombok: `@Data`, `@Builder`, `@NoArgsConstructor`, `@AllArgsConstructor`
- Enums com `@Enumerated(EnumType.STRING)`

## Repositories

- Estender `JpaRepository<Entidade, UUID>`
- `JpaSpecificationExecutor` para filtros complexos
- `@Query` para queries customizadas
- Nunca retornar List sem paginacao em endpoints publicos

## Evitar

- Logica de negocio em Controllers
- Entidades expostas diretamente em responses
- Magic numbers (usar constantes nomeadas)
- `findAll()` sem paginacao em tabelas grandes
- N+1 queries (usar `JOIN FETCH` ou `@EntityGraph`)

## Design Patterns e Centralizacao

### Regra de Ouro
Se um comportamento precisar mudar, quantos arquivos serao alterados? Se mais de 1, a logica nao esta centralizada.

### Quando usar cada padrao

**Service unico por entidade**
- Toda logica de negocio de uma entidade fica em um unico Service
- Nao criar servicos auxiliares para a mesma entidade sem motivo claro
- Services podem chamar outros Services, nunca Repositories de outras entidades diretamente

**Classe utilitaria / helper**
- Criar quando a mesma logica aparece em 2+ Services distintos
- Nao duplicar: centralizar em `utils/` ou `helpers/` com metodos estaticos
- Exemplos: formatacao de valores, calculo de datas, validacoes de negocio reutilizaveis

**Constantes nomeadas**
- Todo valor literal que tem significado de negocio deve ser constante
- Centralizar em classe de constantes do modulo (ex: `EventoConstants`)
- Nunca repetir a mesma string/numero magico em 2+ lugares

**Strategy (comportamento variavel)**
- Usar quando o mesmo fluxo tem implementacoes diferentes por tipo/situacao
- Evitar `if/else` ou `switch` crescente sobre tipo de entidade
- Extrair interface + implementacoes especificas

**Facade (simplificar subsistema complexo)**
- Criar quando um Controller precisa orquestrar 3+ Services para uma operacao
- O Facade vira o unico ponto de entrada, os Services permanecem coesos

**Guard Clause (fail fast)**
- Validar e lancar excecao no inicio do metodo, sem aninhar ifs
- Torna o caminho feliz legivel e o codigo plano

### Rule of Three
- 1a ocorrencia: implementar inline
- 2a ocorrencia: avaliar se vale abstrair (depende do contexto)
- 3a ocorrencia: abstrair obrigatoriamente — sem excecao
