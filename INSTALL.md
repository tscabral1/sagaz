# Sagaz Installation

## Requirements

- Codex Desktop.
- Node.js 18+ if installing with `npx`.
- Git installed.
- GitHub CLI (`gh`) installed and authenticated if you want GitHub Ops.
- Access to the local Codex skills folder.

## Recommended: Install With npx

```powershell
npx sagaz-ai install
```

Then open a new Codex Desktop thread and test:

```text
Sagaz: explain the available workflows.
```

## Optional Commands

```powershell
npx sagaz-ai status
npx sagaz-ai doctor
npx sagaz-ai install --force
```

To also copy the ecosystem to a chosen folder:

```powershell
npx sagaz-ai install --ecosystem C:\Users\YOUR_USER\Documents\Sagaz\ai-orchestration-ecosystem
```

## Manual Install

Copy:

```text
codex-skill\sagaz
```

into:

```text
C:\Users\YOUR_USER\.codex\skills\sagaz
```

Then open a new Codex Desktop thread and test:

```text
Sagaz: explain the available workflows.
```

## Use In A Project

Keep this repository available to Codex. Then, inside the project you want to work on, ask:

```text
Sagaz: use the appropriate workflow for this project. Maintain run state, handoffs, and verification evidence.
```

## GitHub Ops

Authenticate GitHub CLI:

```powershell
gh auth login -h github.com
```

Verify:

```powershell
gh auth status
git --version
```
