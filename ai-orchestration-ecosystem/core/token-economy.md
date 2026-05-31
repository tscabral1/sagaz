# Token Economy

## Objetivo

Reduzir tokens sem reduzir confiabilidade.

## Regras

- Carregar indices antes de arquivos detalhados.
- Usar squads pequenos.
- Resumir handoffs em ate 12 linhas.
- Evitar repetir contexto ja registrado em templates.
- Produzir especificacoes extensas em arquivos, nao no chat.
- Separar instrucao operacional curta de padroes detalhados.

## Handoff Compacto

Formato maximo:

```md
## Handoff
Objetivo:
Arquivos tocados:
Decisoes:
Riscos:
Testes feitos:
Testes faltantes:
Proximo passo:
```

## Context Budget

- Baixo: ate 3 arquivos carregados.
- Medio: quickstart + squad + 2 protocolos + templates.
- Alto: especificacao completa + agentes + protocolos + historico.

Use alto apenas para criacao de produto, auditoria critica ou refatoracao ampla.
