# Protocol: Installed Skill Sync

## Objective

Keep the installed Codex Desktop Sagaz skill synchronized with the repository and packaged skill whenever Sagaz changes.

Use this protocol after changing `codex-skill/sagaz/SKILL.md`, installation instructions, package contents, release gates, workflow discovery, or any rule that should affect how Codex activates Sagaz.

## Required Practice

- Treat `codex-skill/sagaz/SKILL.md` as the source skill for the repository and npm package.
- Treat the installed local skill as a copy that may become stale.
- On Windows, the default installed path is `C:\Users\YOUR_USER\.codex\skills\sagaz`.
- On macOS, the default installed path is `~/.codex/skills/sagaz`.
- Use `npx sagaz-ai install --force` or `npx sagaz-ai sync` to refresh the installed skill.
- Use `npx sagaz-ai doctor` to compare the installed skill with the source skill when running from a local repository or package.
- Open a new Codex Desktop thread after syncing so the updated skill can be discovered.
- Do not claim the installed local skill is current unless `doctor` reports it as synchronized or the user has explicitly said they are not using the local installed skill on this machine.

## Required Checks

- Source skill exists at `codex-skill/sagaz/SKILL.md`.
- Installed skill exists or the user is told how to install it.
- Installed `SKILL.md` content matches the source `SKILL.md` when present.
- If the skill is stale, recommend `npx sagaz-ai sync` or `npx sagaz-ai install --force`.
- Installation and sync instructions include Windows and macOS paths.
- Package release checklist records whether the installed local skill was updated.

## Output

```md
Installed skill sync:
Source skill:
Installed skill:
Installed:
Synchronized:
Windows path:
macOS path:
Action needed:
Verification:
```

