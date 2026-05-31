# Sagaz

Sagaz e um ecossistema local de orquestracao de IA para o Codex, criado para transformar pedidos em produtos digitais completos com planejamento, equipes especializadas, handoffs, especificacoes, implementacao, testes, design de alto padrao, GitHub guiado e criterios de producao.

Ele foi inspirado por ideias de AIOX, CrewAI, AutoGen, LangChain e plataformas corporativas de governanca, mas foi adaptado para um objetivo especifico: ser simples de usar dentro do Codex, consumir poucos tokens e ainda manter rigor tecnico.

## O Que O Sagaz Faz

O Sagaz organiza o trabalho em equipes de IA, cada uma com uma responsabilidade clara:

- Produto e requisitos.
- Recomendacao de stack.
- Arquitetura de software.
- UX, UI e design system.
- Implementacao.
- QA e testes.
- Seguranca e producao.
- GitHub, commits, PRs e releases.
- Mobile Android/iOS.
- CI/CD e monitoramento pos-entrega.

Ele tambem guia o usuario durante o processo. Ao final de cada fase, o Sagaz explica o que foi feito, qual equipe entra em seguida, por que isso e necessario e pede permissao antes de continuar.

## Por Que Usar

- **Facilidade de uso:** invoque com `Sagaz:` e descreva o objetivo.
- **Poucos tokens:** carrega apenas os arquivos necessarios para a fase atual.
- **Processo guiado:** handoffs entre equipes, com aprovacao do usuario.
- **Qualidade de producao:** gates para testes, seguranca, build, deploy e rollback.
- **Design premium:** UX/UI, design system, responsividade, acessibilidade e validacao visual.
- **Stack recomendada:** explica tecnologia por custo, velocidade, escala, manutencao e deploy.
- **GitHub sem complicacao:** sugere commit, push, PR, issue e release no momento certo.
- **Web e mobile:** workflows para apps de navegador, websites, dashboards e Android/iOS.
- **Estado persistente:** usa Markdown para registrar decisoes, aprovacoes, handoffs, riscos e testes.

## Como Funciona

O Sagaz usa arquivos Markdown como fonte da verdade. A estrutura principal fica em:

```text
ai-orchestration-ecosystem/
```

Os principais blocos sao:

- `workflows/`: sequencias prontas para web, mobile, producao, bugfix e refatoracao.
- `squads/`: equipes especializadas.
- `agents/`: papeis individuais.
- `tasks/`: tarefas formais com inputs, outputs e criterios de aceite.
- `protocols/`: regras de qualidade, handoff, GitHub, producao, design, CI/CD e monitoramento.
- `templates/`: modelos para especificacoes, QA, handoff, run state e releases.
- `engineering/`: boas praticas profundas de engenharia de software.
- `governance/`: seguranca, qualidade, versionamento e manutencao.

## Workflows Incluidos

- `greenfield-web-app`: criar website/app web do zero.
- `web-production-release`: preparar app web para producao.
- `mobile-app-production`: criar/preparar app Android/iOS.
- `brownfield-refactor-safe`: refatorar projeto existente com seguranca.
- `bugfix-to-release`: corrigir bug ate release.

## Instalacao No Codex

### 1. Clone Ou Baixe O Repositorio

```powershell
git clone https://github.com/tscabral1/sagaz.git
```

Ou baixe o ZIP pelo GitHub.

### 2. Copie A Skill Para O Codex

No Windows, a pasta local de skills costuma ser:

```text
C:\Users\SEU_USUARIO\.codex\skills
```

Copie a pasta:

```text
codex-skill\sagaz
```

para:

```text
C:\Users\SEU_USUARIO\.codex\skills\sagaz
```

Nesta instalacao local de desenvolvimento, a skill do Sagaz tambem existe em:

```text
C:\Users\YOUR_USER\.codex\skills\sagaz
```

### 3. Mantenha O Ecossistema No Workspace

O diretorio `ai-orchestration-ecosystem/` deve ficar acessivel ao Codex no workspace do projeto ou em uma pasta conhecida.

### 4. Abra Uma Nova Thread Do Codex

Depois de copiar a skill, abra uma nova conversa/thread para garantir que o Codex carregue a skill atualizada.

## Como Usar

Use uma chamada simples:

```text
Sagaz: crie um website completo para minha empresa, do planejamento ao deploy.
```

Ou:

```text
Sagaz: crie um app Android/iOS para controle financeiro pessoal, com design premium, testes e preparo para producao.
```

O Sagaz deve:

1. Escolher o workflow adequado.
2. Criar ou atualizar o estado persistente da execucao.
3. Recomendar stack e explicar tradeoffs.
4. Planejar produto e requisitos.
5. Criar UX/UI e design system.
6. Implementar.
7. Testar e validar.
8. Preparar producao, CI/CD e deploy.
9. Sugerir GitHub Ops quando fizer sentido.
10. Fazer handoff final com evidencias e riscos.

## Exemplo De Uso Para Web

```text
Sagaz: quero criar um SaaS web para gerenciar agendamentos.

Requisitos:
- login de usuarios
- calendario
- painel administrativo
- design premium
- pronto para producao
- deploy na Vercel
```

## Exemplo De Uso Para Mobile

```text
Sagaz: quero criar um app Android/iOS para acompanhar habitos diarios.

Preciso que voce recomende a stack, explique custos, crie UX mobile, implemente, teste e prepare o checklist de publicacao.
```

## Regras Importantes

O Sagaz deve pedir permissao antes de:

- mudar de fase/equipe em trabalhos grandes;
- instalar dependencias;
- criar ou editar arquivos quando ainda nao houver autorizacao clara;
- fazer deploy;
- criar repositorio;
- fazer commit, push, PR, issue, tag ou release;
- aceitar risco alto;
- executar acoes destrutivas.

Ele pode executar diretamente diagnosticos de baixo risco, como ler arquivos, inspecionar estrutura, buscar texto, verificar status e propor planos.

## Para Quem E

Sagaz foi desenhado para usuarios que querem criar software serio com ajuda do Codex, mesmo sem dominar todos os detalhes tecnicos de engenharia, design, GitHub, deploy e producao.

## Status

Projeto em evolucao local. A fonte da verdade sao os arquivos Markdown deste repositorio.
