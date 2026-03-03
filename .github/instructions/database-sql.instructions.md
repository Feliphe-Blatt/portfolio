---
name: Database Scripts — Beevent
description: Padroes para migrations Flyway e scripts SQL do Beevent.
applyTo: '**/migration/**'
---

# Padroes Database (PostgreSQL / Flyway)

## Nomenclatura de migrations

```
V{versao}__{descricao_snake_case}.sql
Exemplos:
  V2_40__add_coluna_tipo_template_email.sql
  V2_41__create_table_configuracao_evento.sql
```

- Nunca reutilizar numero de versao
- Descricao em snake_case, concisa e descritiva

## Estrutura padrao de migration

```sql
-- Descricao: o que esta migration faz
-- Autor: Nome
-- Data: YYYY-MM-DD

-- 1. DDL (estrutura)
ALTER TABLE template_email
    ADD COLUMN tipo VARCHAR(50);

-- 2. DML (dados existentes, quando necessario)
UPDATE template_email
SET tipo = 'INSCRICAO'
WHERE tipo IS NULL;

-- 3. Constraints/indices (sempre ao final)
ALTER TABLE template_email
    ALTER COLUMN tipo SET NOT NULL;

CREATE INDEX idx_tipo_template_email
    ON template_email (tipo);
```

## Regras criticas

- Nunca `DROP TABLE` ou `DROP COLUMN` sem confirmacao explicita
- Adicionar coluna sempre como nullable primeiro; adicionar constraint em migration separada se houver dados
- Incluir rollback comentado em operacoes destrutivas
- Indices com `CREATE INDEX CONCURRENTLY` em tabelas com dados em producao
- Scripts de diagnostico/analise nao devem modificar dados (somente `SELECT`)

## Convencoes de nomenclatura SQL

- Tabelas: `snake_case` no plural (`template_email`, `participantes`)
- Colunas: `snake_case` (`created_at`, `organizador_id`)
- Indices: `idx_{coluna(s)}_{tabela}` ou `idx_{tabela}_{coluna}`
- FKs: `fk_{tabela}_{referencia}`
- Constraints: `uq_{tabela}_{coluna}` para unique
