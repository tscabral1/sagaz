# Workflow: Brownfield Refactor Safe

## Uso

Refatorar projeto existente preservando comportamento.

## Sequencia

1. Audit Team: mapear estado atual.
2. Refactor Steward: invariantes e contratos.
3. QA Team: testes antes da mudanca.
4. Implementation Team: refatoracao incremental.
5. Verification Team: testes depois da mudanca.
6. GitHub Ops Team: commit/PR quando aprovado.

## Gates

- Comportamento atual entendido.
- Invariantes registrados.
- Testes ou smoke test antes/depois.
- Handoff antes de cada fase critica.
