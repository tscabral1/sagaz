# Sagaz Installation

## Requirements

- Codex Desktop.
- Git installed.
- GitHub CLI (`gh`) installed and authenticated if you want GitHub Ops.
- Access to the local Codex skills folder.

## Install The Local Skill

Copy:

```text
codex-skill\sagaz
```

into:

```text
C:\Users\YOUR_USER\.codex\skills\sagaz
```

Then open a new Codex thread and test:

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
