# Sagaz AI Orchestration Ecosystem

Ecossistema local de orquestracao de IA para criar equipes autonomas, consistentes e orientadas a resultados dentro do Codex.

Inspiracoes principais:

- AIOX: hierarquia de delegacao, execucao e validacao.
- AutoGen: comunicacao estruturada entre papeis.
- CrewAI: squads com responsabilidades claras.
- LangChain: modularidade por ferramentas, memoria e cadeias.
- OpenRouter / TogetherAI / Groq: governanca de modelos e criterios de roteamento.
- Nexos AI / Kong: politicas, auditoria, seguranca e controle.

Este repositorio usa Markdown como fonte da verdade. Ele foi desenhado para consumir poucos tokens no dia a dia: carregue primeiro o `quickstart.md`; depois carregue somente o squad, agente, protocolo ou template necessario.

## Como Usar No Codex

1. Abra `quickstart.md`.
2. Escolha um modo de operacao: `solo`, `squad`, `factory`, `audit` ou `refactor`.
3. Selecione o squad em `squads/`.
4. Use o contrato de tarefa em `templates/task-brief.md`.
5. Exija que o resultado passe pelos gates em `protocols/quality-gates.md`.

Comando natural para iniciar:

```text
Use o Sagaz AI Orchestration Ecosystem em modo squad. Leia quickstart.md, carregue o squad adequado e execute a tarefa abaixo seguindo os quality gates.
```

## Estrutura

- `quickstart.md`: instrucao curta para operacao diaria.
- `core/`: principios, arquitetura, ciclo operacional e economia de tokens.
- `agents/`: papeis reutilizaveis.
- `squads/`: equipes prontas por tipo de trabalho.
- `protocols/`: comunicacao, delegacao, validacao, memoria e testes.
- `templates/`: briefs, especificacoes, planos, handoffs e relatorios.
- `skills/`: habilidades operacionais em Markdown.
- `governance/`: seguranca, qualidade, versionamento e manutencao.

## Regra De Ouro

Nenhuma entrega e considerada pronta ate existir evidencia de verificacao proporcional ao risco: testes, revisao, analise estatica, validacao visual, smoke test, ou justificativa explicita quando algum teste nao puder ser executado.
