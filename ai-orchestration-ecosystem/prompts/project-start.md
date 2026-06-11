# Project Start Prompts

## Purpose

Provide prompts for starting new projects, auditing existing repositories, and selecting the right Sagaz workflow.

## Use When

- The user wants to begin a product or project.
- The user opens Sagaz inside an existing codebase.
- The team needs stack, workflow, risk, and next-step recommendations.

## Prompt: New Product

```text
Sagaz: start a new project using the smallest sufficient workflow.

Goal:
-

Users:
-

Constraints:
-

Definition of done:
-

Do not implement yet. Recommend workflow, squad, stack direction, risks, first artifacts, and permission needed for the next step.
```

## Prompt: Existing Project Audit

```text
Sagaz: audit this project and tell me what workflow, stack playbook, risks, tests, and next implementation step you recommend. Do not change files yet.
```

## Prompt: Stack Recommendation

```text
Sagaz: inspect the project goal and recommend a stack.

Compare options by:
- implementation speed
- cost
- maintainability
- deployment
- future changes
- team skill fit

Do not install dependencies or create files yet.
```

## Prompt: Resume A Project

```text
Sagaz: resume this project from existing repository context.

First:
- inspect current files
- identify run state or handoff artifacts
- summarize what appears complete
- identify the safest next step

Do not change files until I approve the plan.
```

## Verification

A good project-start response should include selected workflow, squad, assumptions, risks, permission level, and next artifact.
