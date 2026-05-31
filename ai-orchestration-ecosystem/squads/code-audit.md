# Squad: Code Audit

## Uso

Revisao de codigo, projeto existente, PR, regressao ou bug hunt.

## Agentes

- Orchestrator
- Software Architect
- QA Verifier
- Security Governance se houver risco de dados ou rede

## Fluxo

1. Inventariar estrutura.
2. Identificar pontos criticos.
3. Ler codigo antes de opinar.
4. Executar testes existentes.
5. Procurar falhas por severidade.
6. Relatar achados com arquivo e linha.

## Saida

Findings primeiro, ordenados por severidade.

Cada finding deve conter:

- Severidade.
- Arquivo e linha.
- Problema.
- Impacto.
- Correcao recomendada.
- Teste sugerido.
