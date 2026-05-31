# Compatibility Update Audit

## Purpose

Detect whether Sagaz needs an update because the surrounding ecosystem changed. Use this protocol whenever the user asks if Sagaz needs updates, whether everything is current, whether a new Codex/model release affects Sagaz, or whether Sagaz is still safe to use.

## Mandatory Scope

Check every relevant variable before answering:

- Windows installation behavior
- macOS installation behavior
- Codex Desktop skill discovery and local skill folder behavior
- current AI model behavior, tool behavior, and instruction-following assumptions
- npm package version and `latest` tag
- Node.js supported versions and npm CLI behavior
- Git and GitHub CLI availability expectations
- GitHub repository state, workflows, permissions, and release process
- package contents included by `npm pack`
- installer behavior through `npx sagaz-ai@latest`
- Markdown ecosystem structure
- local installed skill versus repository skill
- documentation consistency across README, INSTALL, skill, and governance files
- CI/CD workflow compatibility
- browser, Playwright, deployment, mobile, and tool registry assumptions when relevant
- breaking changes in platforms Sagaz recommends, such as Vercel, Expo/EAS, Supabase, Firebase, Stripe, OpenAI, OpenRouter, TogetherAI, Groq, and GitHub Actions

## Information Sources

Use local checks first:

- repository files
- installed skill files
- `git status`
- `npm test`
- `npm pack --dry-run`
- `npm view sagaz-ai version`
- `node --version`
- `npm --version`
- `git --version`
- `gh --version`
- `gh auth status`

Use web or official documentation when the question depends on current external behavior, including Codex Desktop, OpenAI models, npm, Node.js, GitHub Actions, GitHub CLI, or platform APIs. Prefer official sources.

## Audit Output

Answer with:

```md
Current Sagaz version:
Local repository state:
npm latest:
Installed local skill:
Windows status:
macOS status:
Node/npm status:
Codex Desktop/model risk:
GitHub/GitHub CLI status:
External platform risks:
Documentation status:
Package status:
Conclusion:
Recommended Sagaz update:
Needs user permission:
```

## Update Decision

Recommend a Sagaz update when:

- a platform behavior changed and may break installation or usage
- documentation is wrong, incomplete, or ambiguous
- npm/package behavior changed
- Codex Desktop skill behavior changed
- model/tool behavior requires new operating rules
- a dependency or recommended platform introduced a breaking change
- local installed skill is behind repository or npm
- package contents do not match the repository expectations
- verification cannot be completed without a new check or script

Do not recommend a new release only because a dependency has a newer version. Recommend a release only when Sagaz behavior, safety, installation, documentation, or verification needs to change.

## Permission Rule

If an update is recommended, explain the reason, impact, risk, and proposed version bump. Ask the user for permission before editing files, committing, pushing, publishing, creating releases, changing secrets, or updating installed tools.
