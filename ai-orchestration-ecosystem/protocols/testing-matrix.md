# Protocol: Testing Matrix

## Niveis

### T0 - Smoke

Para mudancas pequenas ou documentacao.

- Abrir ou executar fluxo principal.
- Confirmar ausencia de erro obvio.

### T1 - Standard

Para feature, bugfix ou alteracao de UI/API.

- Build ou typecheck.
- Testes existentes relevantes.
- Teste de fluxo feliz.
- Teste de erro ou borda.

### T2 - Rigorous

Para arquitetura, auth, dados, pagamentos, migracoes ou refatoracao ampla.

- Suite completa.
- Testes de regressao.
- Casos extremos.
- Validacao de performance basica.
- Revisao de seguranca.
- Plano de rollback quando aplicavel.

### T3 - Exhaustive

Para entregas criticas.

- Tudo de T2.
- Matriz de compatibilidade.
- Testes repetidos apos refatoracao.
- Analise de falhas possiveis.
- Checklist manual independente.

## Saida Obrigatoria

```md
Testing level:
Commands run:
Manual checks:
Failures:
Fixes:
Residual risk:
Verdict:
```
