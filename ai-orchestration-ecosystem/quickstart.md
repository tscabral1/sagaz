# Quickstart

Use este arquivo como entrada minima para operar o ecossistema com baixo consumo de tokens.

## Modos

- `solo`: um agente principal executa, consulta protocolos apenas quando necessario.
- `squad`: orquestrador delega para agentes especializados e valida a integracao.
- `factory`: cria projeto novo com especificacao completa, arquitetura, testes e entrega.
- `audit`: revisa projeto existente com foco em bugs, riscos, regressao e testes faltantes.
- `refactor`: altera codigo existente preservando comportamento, contratos e cobertura.

## Fluxo Padrao

1. Clarificar objetivo, restricoes, definicao de pronto e riscos.
2. Escolher squad e agentes minimos.
3. Produzir especificacao antes da implementacao quando o escopo for medio ou alto.
4. Implementar em passos pequenos.
5. Testar ate nivel proporcional ao risco.
6. Registrar decisoes, evidencias, pendencias e proximos passos.

## Carregamento Economico

Carregue somente nesta ordem:

1. `quickstart.md`
2. Um arquivo de `squads/`
3. Agentes citados pelo squad, somente se a tarefa exigir
4. Protocolos especificos, somente quando acionados
5. Templates necessarios para gerar artefatos

## Prompt Base

```text
Use o Sagaz AI Orchestration Ecosystem.
Modo: [solo|squad|factory|audit|refactor]
Squad: [nome do squad]
Objetivo: [resultado final desejado]
Restricoes: [tecnicas, negocio, prazo, estilo, ferramentas]
Definicao de pronto: [criterios objetivos]
Prioridade: consistencia, testes exaustivos e baixo consumo de tokens.
```

## Politica De Perguntas

Faca uma pergunta por vez somente quando a resposta mudar significativamente arquitetura, escopo, risco, dados sensiveis ou definicao de pronto.

Quando a incerteza for pequena, assuma conservadoramente, registre a suposicao e siga.
