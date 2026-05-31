# Protocol: Quality Gates

## Objetivo

Garantir resultados consistentes antes da entrega.

## Gate 0 - Contexto

- Objetivo claro.
- Restricoes conhecidas.
- Definicao de pronto.
- Riscos iniciais.

## Gate 1 - Especificacao

- Requisitos funcionais.
- Requisitos nao funcionais.
- Casos de uso principais.
- Criterios de aceite testaveis.
- Fora de escopo.

## Gate 2 - Implementacao

- Mudancas alinhadas ao padrao local.
- Escopo controlado.
- Sem segredos expostos.
- Sem refatoracao irrelevante.

## Gate 3 - Verificacao

Escolha todos os aplicaveis:

- Testes unitarios.
- Testes de integracao.
- Testes e2e.
- Smoke test manual.
- Validacao visual.
- Lint/typecheck/build.
- Teste de regressao.
- Revisao de seguranca.
- Revisao de design system e UX quando houver interface.

## Gate 4 - Entrega

- Evidencias resumidas.
- Riscos residuais.
- Arquivos alterados.
- Como usar.
- Proximos passos uteis.

## Gate 5 - Producao

Obrigatorio quando o software ira para producao:

- Production readiness preenchido.
- Build reproduzivel.
- Testes relevantes executados.
- Smoke test do fluxo principal.
- Configuracao e variaveis de ambiente documentadas.
- Seguranca e dados revisados.
- Deploy documentado.
- Rollback ou mitigacao documentado.
- Veredito final: approved | approved with risks | blocked.

## Gate UI - Design Excellence

Obrigatorio quando houver interface:

- Direcao visual definida.
- Design system minimo documentado.
- Componentes e estados relevantes implementados.
- Responsividade validada.
- Acessibilidade basica validada.
- Validacao visual executada.
- Problemas visuais bloqueadores corrigidos.

## Politica De Bloqueio

Bloqueie a entrega quando:

- Fluxo principal falha.
- Build falha sem justificativa.
- Dado sensivel fica exposto.
- Requisito essencial nao foi atendido.
- Nao existe nenhuma evidencia de verificacao.
- Codigo de producao nao passou pelo Gate 5.
