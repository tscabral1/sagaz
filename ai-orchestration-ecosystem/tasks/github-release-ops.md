# Task: GitHub Release Ops

Owner: GitHub Ops

## Inputs

- Mudancas verificadas.
- Relatorio de QA.
- Riscos.

## Outputs

- Commit/branch/PR/release quando autorizado.
- Checks consultados.
- Relatorio GitHub Ops.

## Acceptance Criteria

- Usuario confirmou acoes que alteram estado.
- Apenas arquivos relacionados incluidos.
- Riscos e checks documentados.

## Verification

- `git status`, diff, checks e auth quando aplicavel.

## Stop Condition

Parar se houver segredo, mudanca nao relacionada ou token/auth invalido.
