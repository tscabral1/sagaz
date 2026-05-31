# Protocol: Stack Selection

## Objetivo

Garantir que o Sagaz recomende tecnologias adequadas para cada aplicacao, explicando motivos e tradeoffs de forma acessivel.

## Quando Usar

- Projeto novo.
- Mudanca de arquitetura.
- Escolha de framework.
- Escolha de banco.
- Escolha de hospedagem/deploy.
- Adicao de auth, pagamentos, IA, CMS, filas, storage ou analytics.
- Preparacao para producao.

## Criterios

Avaliar:

- Custo inicial e custo em escala.
- Velocidade de implementacao.
- Escalabilidade.
- Manutencao.
- Facilidade de futuras alteracoes.
- Maturidade e comunidade.
- Segurança.
- Observabilidade.
- Testabilidade.
- Deploy e rollback.
- Compatibilidade com equipe/usuario.
- Compatibilidade com o ambiente do Codex.

## Formato Curto

```md
Stack recomendada:
Por que:
Custo:
Velocidade:
Escalabilidade:
Manutencao:
Futuras alteracoes:
Deploy:
Tradeoffs:
Alternativas:
Confirmacao:
```

## Matriz Comparativa

Use quando houver decisao relevante:

| Opcao | Custo | Velocidade | Escala | Manutencao | Deploy | Risco | Indicada para |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Politica De Decisao

- Preferir tecnologia madura e bem suportada.
- Preferir stack simples para MVP e projetos pequenos.
- Preferir stack com caminho claro para producao quando o usuario pedir confiabilidade.
- Evitar dependencia nova sem beneficio real.
- Evitar lock-in forte sem avisar.
- Evitar stack que o Codex nao consiga testar/rodar localmente sem justificativa.

## Permissao

Pedir confirmacao antes de:

- Instalar dependencias.
- Criar projeto com framework especifico.
- Escolher servico com custo recorrente.
- Escolher stack com lock-in relevante.
- Adotar tecnologia experimental.
- Alterar stack de projeto existente.
