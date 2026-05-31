# Protocol: Design Quality

## Objetivo

Garantir que interfaces criadas pelo Sagaz tenham alto padrao de UX, UI e design system.

## Design System Checklist

- Cores primarias, secundarias, neutras e semanticas.
- Tipografia: familias, pesos, tamanhos, line-height.
- Espacamento: escala e aplicacao.
- Grid, containers e breakpoints.
- Raios, bordas e sombras.
- Iconografia.
- Motion e transicoes.
- Estados: hover, focus, active, disabled, loading, empty, error, success.
- Componentes base.
- Regras de responsividade.

## UX Checklist

- Usuario e objetivo claros.
- Jornada principal definida.
- Navegacao previsivel.
- Acao primaria evidente.
- Conteudo escaneavel.
- Formularios ergonomicos.
- Estados vazios e erros orientam acao.
- Fluxos de retorno e cancelamento claros.

## UI Checklist

- Hierarquia visual forte.
- Alinhamento consistente.
- Ritmo espacial.
- Contraste suficiente.
- Tipografia legivel.
- Paleta intencional.
- Componentes coesos.
- Nenhuma sobreposicao.
- Layout resiliente a conteudo real.

## Validacao Visual

Obrigatoria para mudancas relevantes de UI:

- Desktop comum.
- Mobile comum.
- Estado principal.
- Pelo menos um estado alternativo relevante.
- Conferencia de overflow/sobreposicao.
- Conferencia de foco/teclado quando aplicavel.

## Veredito

- `approved`: visual consistente e verificado.
- `approved with risks`: problemas menores documentados.
- `blocked`: problema visual, UX ou acessibilidade prejudica uso.
