# Sagaz Installation

## Requirements

- Codex Desktop.
- Node.js 18+ if installing with `npx`.
- Git installed.
- GitHub CLI (`gh`) installed and authenticated if you want GitHub Ops.
- Access to the local Codex skills folder.

## Platform Support

Sagaz can be used on Windows and macOS through Codex Desktop. The npm installer uses the current user's home directory and installs the skill into the standard Codex skills folder:

- Windows: `C:\Users\YOUR_USER\.codex\skills\sagaz`
- macOS: `~/.codex/skills/sagaz`

If your Codex Desktop installation uses a custom home folder, pass `--codex-home <path>`.

## Recommended: Install With npx

### Windows PowerShell

```powershell
npx sagaz-ai install
```

Optional ecosystem copy:

```powershell
npx sagaz-ai install --ecosystem C:\Users\YOUR_USER\Documents\Sagaz\ai-orchestration-ecosystem
```

### macOS Terminal

```bash
npx sagaz-ai install
```

Optional ecosystem copy:

```bash
npx sagaz-ai install --ecosystem ~/Documents/Sagaz/ai-orchestration-ecosystem
```

Then open a new Codex Desktop thread and test:

```text
Sagaz: explain the available workflows.
```

## Optional Commands

### Windows PowerShell

```powershell
npx sagaz-ai status
npx sagaz-ai doctor
npx sagaz-ai install --force
```

### macOS Terminal

```bash
npx sagaz-ai status
npx sagaz-ai doctor
npx sagaz-ai install --force
```

## Manual Install

Copy the Sagaz skill folder from the repository.

Windows source folder:

```text
codex-skill\sagaz
```

macOS source folder:

```text
codex-skill/sagaz
```

into the platform-specific Codex skill folder.

Windows:

```text
C:\Users\YOUR_USER\.codex\skills\sagaz
```

macOS:

```text
~/.codex/skills/sagaz
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

### Windows PowerShell

Authenticate GitHub CLI:

```powershell
gh auth login -h github.com
```

Verify:

```powershell
gh auth status
git --version
```

### macOS Terminal

Install Git and GitHub CLI if needed:

```bash
xcode-select --install
brew install gh
```

Authenticate GitHub CLI:

```bash
gh auth login -h github.com
```

Verify:

```bash
gh auth status
git --version
```
