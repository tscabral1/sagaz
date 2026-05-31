# Squad: Refactor Lab

## Uso

Refatoracoes, modernizacao, reducao de divida tecnica e reorganizacao sem mudar comportamento.

## Agentes

- Orchestrator
- Refactor Steward
- Software Architect
- Implementation Engineer
- QA Verifier

## Fluxo

1. Mapear comportamento atual.
2. Definir invariantes.
3. Criar testes ou smoke tests.
4. Refatorar em pequenos passos.
5. Rodar testes a cada etapa relevante.
6. Documentar mudancas internas.

## Gate Especial

Se nao houver teste automatizado, criar pelo menos um smoke test reproduzivel ou registrar exatamente por que nao foi possivel.
