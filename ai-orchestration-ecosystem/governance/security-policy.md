# Security Policy

## Principios

- Nunca expor segredos.
- Minimizar dados coletados.
- Validar entradas externas.
- Registrar riscos de dependencias.
- Usar permissoes minimas.

## Checklist

- Ha chaves, tokens ou credenciais?
- Ha dados pessoais?
- Ha chamadas de rede?
- Ha arquivos gerados com conteudo sensivel?
- Ha dependencia nova?
- Ha comando destrutivo?

## Resposta A Risco

- Baixo: registrar.
- Medio: mitigar antes da entrega.
- Alto: bloquear ate confirmacao ou correcao.
