# Instalacao Do Sagaz

## Requisitos

- Codex Desktop.
- Git instalado.
- GitHub CLI (`gh`) instalado e autenticado, se quiser usar GitHub Ops.
- Acesso a pasta local de skills do Codex.

## Instalar Skill Local

Copie a pasta:

```text
codex-skill\sagaz
```

para:

```text
C:\Users\SEU_USUARIO\.codex\skills\sagaz
```

Depois abra uma nova thread do Codex e teste:

```text
Sagaz: explique quais workflows estao disponiveis.
```

## Usar Em Um Projeto

Coloque ou clone este repositorio em uma pasta acessivel pelo Codex. Em seguida, no projeto em que voce quer trabalhar:

```text
Sagaz: use o workflow adequado para este projeto. Mantenha run-state, handoffs e validacoes.
```

## GitHub Ops

Autentique o GitHub CLI:

```powershell
gh auth login -h github.com
```

Verifique:

```powershell
gh auth status
git --version
```
