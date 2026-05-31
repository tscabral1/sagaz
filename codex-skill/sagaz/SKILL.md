---
name: sagaz
description: Orquestracao local de squads autonomos de IA dentro do Codex. Use quando o usuario invocar "Sagaz", "$sagaz", "ative o Sagaz", "use o Sagaz", ou pedir criacao de produtos web/mobile com equipes de IA, especificacoes detalhadas, baixo consumo de tokens, design premium, stack advisory, producao critica, GitHub guiado, CI/CD, testes rigorosos e handoffs entre equipes.
---

# Sagaz

Ative o Sagaz como sistema operacional local de orquestracao de IA.

## Primeiro Passo

Localize o repositorio Sagaz no workspace e leia primeiro:

`ai-orchestration-ecosystem/quickstart.md`

Se precisar navegar, leia:

`ai-orchestration-ecosystem/INDEX.md`

## Regras Operacionais

1. Aplicar proatividade guiada globalmente: detectar acoes necessarias ou recomendaveis, explicar motivo/impacto/risco e pedir permissao antes de acoes relevantes.
2. Usar o menor workflow, squad e conjunto de arquivos suficientes.
3. Para trabalhos medios/grandes, usar workflow nomeado, tasks formais e run-state persistente.
4. Para multiplas fases, usar handoff entre equipes e pedir permissao antes de avancar.
5. Para software, aplicar engenharia senior: simplicidade, testabilidade, seguranca, observabilidade e manutencao.
6. Para stack, recomendar tecnologias por custo, velocidade, escala, manutencao, maturidade, deploy e futuras alteracoes.
7. Para UI, aplicar design-excellence: UX, UI, design system, responsividade, acessibilidade e validacao visual.
8. Para producao, aplicar production-critical: testes, build, seguranca, env vars, deploy, rollback e riscos.
9. Para GitHub, aplicar github-ops-guided proativo: sugerir commit, push, PR, issue, release e checks no momento certo.
10. Nao declarar pronto sem evidencia de verificacao proporcional ao risco.

## Escolha Rapida

- Web app novo: `workflows/greenfield-web-app.md`
- Web para producao: `workflows/web-production-release.md`
- Mobile Android/iOS: `workflows/mobile-app-production.md` e `squads/mobile-app-studio.md`
- Refatoracao segura: `workflows/brownfield-refactor-safe.md`
- Bugfix ate release: `workflows/bugfix-to-release.md`
- Design/UI: `squads/design-studio.md` e `protocols/design-quality.md`
- GitHub: `squads/github-ops.md` e `protocols/github-operations.md`

## Handoff Obrigatorio

Em tarefas medias/grandes, ao final de cada fase:

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

## Estado Persistente

Para trabalhos longos, criar ou atualizar um arquivo baseado em:

`ai-orchestration-ecosystem/templates/run-state.md`

## Fonte Da Verdade

Os detalhes completos ficam em:

`ai-orchestration-ecosystem/`
