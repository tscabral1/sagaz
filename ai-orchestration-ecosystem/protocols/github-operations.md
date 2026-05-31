# Protocol: GitHub Operations

## Objetivo

Permitir que o Sagaz e o Codex executem interacoes completas com GitHub de forma segura, rastreavel e consistente.

O usuario nao precisa lembrar quando usar Git/GitHub. O Sagaz deve detectar proativamente a necessidade ou boa oportunidade, explicar o motivo e pedir confirmacao antes de executar acoes que alterem estado.

## Ferramentas

- `git`: status, diff, branch, add, commit, log, push, pull, merge, tag.
- `gh`: auth, repo, issue, pr, run, release, api.

## Antes De Qualquer Operacao

- Verificar diretorio atual.
- Verificar se e repositorio Git.
- Verificar `git status --short`.
- Identificar branch atual.
- Identificar remote.
- Separar mudancas do usuario de mudancas do Sagaz.

## Modo Guiado

Antes de acoes que alteram estado, apresentar:

```md
Acao recomendada:
Motivo:
O que muda:
Risco:
Comando/operacao:
Pedido de confirmacao:
```

Executar somente apos confirmacao clara do usuario.

## Proatividade Obrigatoria

O Sagaz deve avaliar Git/GitHub mesmo quando o usuario nao pedir explicitamente.

Momentos de avaliacao:

- Inicio de projeto: verificar se existe repositorio.
- Antes de mudanca grande: recomendar branch.
- Apos implementacao verificada: recomendar commit.
- Apos commit: recomendar push quando houver remote.
- Apos push em branch: recomendar PR.
- Antes de deploy: recomendar confirmar estado remoto, checks e historico.
- Apos marco estavel: recomendar tag/release quando apropriado.

Recomendacoes devem ser curtas, explicadas em linguagem simples e sempre aguardando permissao.

## Acoes Com Confirmacao Obrigatoria

- `git init`
- criar repositorio no GitHub
- criar branch
- `git add`
- `git commit`
- `git push`
- abrir PR
- criar/editar issue
- criar tag/release
- disparar workflow
- merge
- pull com mudancas locais
- reset, clean, rebase, force push, apagar branch

## Diagnostico Sem Confirmacao

Pode executar sem confirmacao:

- `git status`
- `git diff`
- `git branch --show-current`
- `git remote -v`
- `git log`
- `gh auth status`
- consultas de PR, issue, check e release que nao alterem estado

## Politica De Commits

- Commit deve representar uma unidade logica.
- Nao misturar tarefas independentes.
- Nao commitar arquivos gerados desnecessarios.
- Mensagem deve explicar o que mudou.
- Testes relevantes devem ser executados antes do commit quando possivel.

## Politica De PR

PR deve conter:

- Resumo.
- Lista de mudancas.
- Testes executados.
- Riscos.
- Notas de deploy quando aplicavel.

## Politica De Push

- Push normal permitido quando solicitado.
- Force push exige confirmacao explicita.
- Push de codigo de producao deve passar por production readiness quando aplicavel.

## Politica De Segredos

Antes de stage/commit/push:

- Procurar arquivos `.env`, tokens, chaves privadas, dumps e credenciais.
- Nao commitar segredos.
- Se segredo aparecer, parar e avisar.

## Relatorio Final

```md
Operation:
Why:
Commands:
Branch:
Commit:
Remote:
PR/Issue/Release:
Checks:
Risks:
User confirmations:
```
