# Operational Memory Prompts

## Purpose

Provide prompts for creating, reviewing, applying, and updating Sagaz operational memory.

## Use When

- The team wants to preserve recurring preferences.
- A project needs durable Sagaz context.
- A preference should apply across future runs.
- Existing memory needs review or cleanup.

## Prompt: Propose Memory

```text
Sagaz: propose operational memory for this project.

Include:
- stable team preferences
- stack preferences
- design expectations
- testing expectations
- GitHub and release preferences
- stop conditions

Do not write files yet. Propose the memory content, scope, source, risk, review date, and ask for approval.
```

## Prompt: Apply Memory

```text
Sagaz: inspect existing operational memory and tell me which preferences are relevant to this task.

Task:
-

Do not apply stale, risky, or conflicting preferences without asking.
```

## Prompt: Review Memory

```text
Sagaz: review this project's operational memory.

Check:
- stale preferences
- unclear sources
- missing review dates
- risky assumptions
- conflicts with the current repository
- anything that should be deprecated

Do not update the file until I approve.
```

## Verification

A good memory response should include scope, source, confidence, permission impact, review date, and whether the preference is advisory or blocking.
