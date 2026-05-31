# Protocol: CI/CD Readiness

## Objetivo

Garantir que projetos web/mobile tenham automacoes minimas para reduzir regressao e facilitar deploy.

## Avaliar

- Build automatizado.
- Testes automatizados.
- Lint/typecheck.
- Preview deploy.
- Secrets e environments.
- Checks obrigatorios antes de merge.
- Release workflow.
- Mobile build workflow quando aplicavel.

## GitHub Actions Minimo

```md
Trigger:
Install:
Lint:
Typecheck:
Test:
Build:
Artifacts:
Deploy/Preview:
```

## Bloqueadores

- Segredo hardcoded.
- Deploy sem build reproduzivel.
- CI quebrado sem justificativa.
- Workflow com permissao excessiva.
