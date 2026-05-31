# Squad: Production Critical

## Uso

Codigo, websites, apps, APIs, automacoes ou sistemas que irao para producao e precisam de alta confiabilidade, estabilidade e verificacao rigorosa.

## Agentes

- Orchestrator
- Product Strategist quando houver produto ou usuario final.
- Specification Writer
- Technology Strategist
- Software Architect
- Implementation Engineer
- QA Verifier
- Security Governance
- Refactor Steward quando houver alteracao em sistema existente.

## Fluxo

1. Definir objetivo e impacto de producao.
2. Criar especificacao funcional e nao funcional.
3. Mapear riscos de seguranca, dados, disponibilidade, performance, regressao e deploy.
4. Recomendar stack adequada para producao com custos, tradeoffs e caminho de evolucao.
5. Definir arquitetura proporcional e contratos.
6. Implementar em incrementos pequenos.
7. Executar testes automatizados relevantes.
8. Executar smoke test do fluxo principal.
9. Validar build, configuracao e variaveis de ambiente.
10. Preparar deploy e rollback.
11. Emitir veredito: approved, approved with risks ou blocked.

Cada transicao entre especificacao, arquitetura, implementacao, verificacao, production readiness, deploy e GitHub Ops exige handoff explicado e permissao do usuario.

## Gates Obrigatorios

- Requisitos funcionais.
- Requisitos nao funcionais.
- Plano de testes.
- Revisao de seguranca.
- Revisao de dados e privacidade.
- Build reproduzivel.
- Testes automatizados ou justificativa formal quando impossivel.
- Smoke test manual.
- Configuracao documentada.
- Deploy documentado.
- Rollback ou mitigacao.
- Handoffs aprovados entre fases criticas.

## Politica De Bloqueio

Bloquear entrega se:

- Fluxo principal falha.
- Build falha.
- Testes essenciais falham.
- Segredo e exposto.
- Dados sensiveis sao tratados sem controle claro.
- Variaveis de ambiente obrigatorias nao estao documentadas.
- Nao ha evidencia de verificacao.
- Ha risco alto sem aceite explicito do usuario.

## Saida Obrigatoria

```md
## Production Readiness Report

Verdict:
Scope:
Primary flow:
Functional requirements covered:
Non-functional requirements covered:
Security evidence:
Data/privacy evidence:
Test evidence:
Build evidence:
Deploy plan:
Rollback/mitigation:
Residual risks:
Blocked items:
```
