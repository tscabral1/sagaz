# Protocol: Squad Pipeline Handoffs

## Objetivo

Garantir que trabalhos do Sagaz avancem em sequencia logica, com handoffs explicitos entre equipes, confirmacao do usuario e rastreabilidade do que foi feito.

## Regra Central

Cada equipe deve entregar sua fase antes da proxima comecar. O Sagaz deve explicar o resultado da equipe atual, apresentar a proxima equipe, explicar por que ela entra agora e pedir permissao para continuar.

## Pipeline Padrao

1. Intake Team: objetivo, contexto, restricoes e definicao de pronto.
2. Product Team: requisitos, escopo, jornadas e criterios de aceite.
3. Technology Team: stack, arquitetura, contratos, deploy e tradeoffs.
4. Design Team: UX, UI, design system, responsividade e acessibilidade.
5. Implementation Team: construcao incremental.
6. Verification Team: testes, QA, seguranca, visual QA e regressao.
7. Production Team: readiness, deploy, rollback e operacao.
8. GitHub Ops Team: versionamento, commit, PR, release e rastreabilidade.
9. Delivery Team: handoff final, evidencias, riscos e proximos passos.

Use somente as equipes necessarias para o trabalho. Nao inventar etapas quando a tarefa for pequena.

## Handoff No Chat

```md
Equipe atual:
O que foi concluido:
Evidencias/artefatos:
Riscos ou pendencias:
Proxima equipe:
O que ela fara:
Por que agora:
Posso fazer o handoff?
```

## Handoff Em Arquivo

Para projetos medios/grandes, registrar em `templates/squad-handoff.md` ou no runbook do projeto.

## Confirmacao Obrigatoria

Pedir confirmacao antes de:

- Sair de planejamento para especificacao.
- Sair de especificacao para arquitetura/stack.
- Sair de arquitetura para design.
- Sair de design para implementacao.
- Sair de implementacao para testes demorados ou exaustivos.
- Sair de testes para deploy.
- Sair de deploy para GitHub/release quando alterar estado externo.

## Excecoes

Nao precisa pedir handoff para:

- Leituras e diagnosticos de baixo risco.
- Correcoes pequenas dentro da mesma fase.
- Quando o usuario autorizar explicitamente autonomia continua ate certo marco.

## Se A Fase Falhar

Nao fazer handoff como se estivesse aprovado. Relatar:

- O que falhou.
- Impacto.
- Opcao recomendada.
- Se precisa de decisao do usuario.

## Veredito De Fase

- `approved`: pode pedir handoff.
- `approved with risks`: pode pedir handoff destacando riscos.
- `blocked`: nao avancar sem resolver ou aceite explicito.
