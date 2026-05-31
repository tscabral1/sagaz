# Workflow: Web Production Release

## Uso

Preparar projeto web existente para producao, deploy, PR ou release.

## Sequencia

1. Audit Team: estado atual, riscos, dependencias.
2. QA Team: testes existentes e lacunas.
3. Security Team: dados, segredos, auth, dependencias.
4. DevOps Team: CI/CD, env vars, deploy e rollback.
5. GitHub Ops Team: commit, push, PR, checks, release.
6. Delivery Team: production readiness report.

## Gates

- Build reproduzivel.
- Testes relevantes.
- Smoke test.
- Configuracao documentada.
- Rollback/mitigacao.
- Checks GitHub quando houver CI.
