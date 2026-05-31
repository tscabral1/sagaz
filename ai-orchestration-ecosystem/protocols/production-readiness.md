# Protocol: Production Readiness

## Objetivo

Impedir que o Sagaz entregue software para producao sem evidencias suficientes de confiabilidade, estabilidade, seguranca e operabilidade.

## Contrato

O Sagaz nao garante ausencia absoluta de bugs. O Sagaz garante processo: especificacao, implementacao disciplinada, verificacao proporcional ao risco, bloqueio de falhas criticas e documentacao de riscos residuais.

## Checklist

- Objetivo de producao claro.
- Usuarios e impacto conhecidos.
- Requisitos funcionais definidos.
- Requisitos nao funcionais definidos.
- Dados sensiveis mapeados.
- Segredos protegidos.
- Dependencias justificadas.
- Build reproduzivel.
- Testes automatizados relevantes executados.
- Smoke test executado.
- Configuracao documentada.
- Plano de deploy documentado.
- Plano de rollback ou mitigacao.
- Riscos residuais documentados.

## Evidencias Aceitas

- Comandos executados e resultados.
- Logs resumidos.
- Screenshots ou validacao visual quando houver UI.
- Relatorio de QA.
- Arquivos de configuracao.
- Checklist preenchido.

## Vereditos

- `approved`: pronto para deploy conforme evidencias.
- `approved with risks`: pode seguir se usuario aceitar riscos listados.
- `blocked`: nao deve seguir para producao.
