# Squad: GitHub Ops

## Uso

Operacoes com Git e GitHub: commits, branches, pull requests, reviews, issues, releases, tags, push, checks, merges e historico.

Este squad deve operar em modo guiado e proativo quando o usuario nao quiser gerenciar Git/GitHub manualmente. O Sagaz deve sugerir acoes Git/GitHub no momento certo mesmo quando o usuario nao pedir.

## Agentes

- Orchestrator
- Implementation Engineer quando houver mudancas de codigo.
- QA Verifier antes de commit/PR.
- Security Governance para revisar segredos, permissoes e risco de push.
- Refactor Steward quando as mudancas forem estruturais.

## Fluxo Commit

1. Verificar ferramentas disponiveis: `git` e, se necessario, `gh`.
2. Inspecionar estado: `git status --short`.
3. Revisar diff das mudancas relacionadas.
4. Verificar que nao ha segredos ou arquivos indevidos.
5. Rodar testes/build relevantes.
6. Explicar por que commit e recomendado agora.
7. Pedir confirmacao.
8. Stage apenas dos arquivos da tarefa.
9. Criar commit com mensagem clara.
10. Relatar hash, arquivos, testes e riscos.

## Proatividade

Avaliar e sugerir:

- `git init` quando o projeto ainda nao tem historico e ja possui arquivos importantes.
- branch quando a mudanca nao deveria ir direto para a principal.
- commit quando uma unidade de trabalho foi concluida e verificada.
- push quando ha remote e o trabalho deve ser salvo no GitHub.
- PR quando uma branch precisa de revisao ou integracao.
- issue quando ha bug, pendencia ou melhoria futura rastreavel.
- release/tag quando ha versao estavel ou entrega publica.

## Fluxo Pull Request

1. Confirmar branch atual e remote.
2. Criar branch `codex/[descricao-curta]` quando apropriado.
3. Commitar mudancas relacionadas.
4. Push para remote.
5. Criar PR via `gh pr create` quando autenticado.
6. Incluir resumo, testes, riscos e notas de deploy.
7. Consultar checks quando possivel.

## Fluxo Issue

1. Confirmar repositorio alvo.
2. Criar titulo objetivo.
3. Criar corpo com contexto, criterios de aceite e escopo.
4. Aplicar labels/assignees/milestone somente quando solicitado ou evidente.

## Fluxo Release

1. Confirmar versao.
2. Validar changelog.
3. Rodar testes relevantes.
4. Criar tag/release.
5. Verificar resultado publicado.

## Bloqueadores

Bloquear ou pedir confirmacao antes de:

- inicializar Git;
- criar repositorio GitHub;
- criar branch;
- stage;
- commit;
- push;
- pull com mudancas locais;
- abrir PR;
- criar issue;
- criar tag/release;
- disparar workflow;
- merge;
- `git reset --hard`
- `git clean`
- force push
- apagar branch remota
- rebase em branch compartilhada
- merge com conflitos nao triviais
- incluir segredos ou dados sensiveis
- commitar mudancas nao relacionadas do usuario

## Saida Obrigatoria

```md
## GitHub Ops Report

Operation:
Why it was needed:
Repository:
Branch:
Status before:
Files staged:
Commit:
PR/Issue/Release:
Checks:
Security review:
Residual risks:
Next:
User confirmations:
```
