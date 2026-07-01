# AGENTS.md

## Project Role

This repository contains the static landing page for the Code Quality Guardian
Agent Skill. It presents the skill, its intervention model, installation command,
experimental status, and public resources.

This repository does not contain the skill implementation. The skill source lives
in:

- https://github.com/crousty24-bit/code-quality-guardian-skill

## Current State

- Single-page React application.
- React 19, Vite 8, TypeScript, and Tailwind CSS 4.
- Dark theme only.
- No router, backend, database, authentication, analytics, or CMS.
- No component library or animation dependency.
- No automated frontend test suite yet.
- Intended for static deployment on Vercel.

## Source Of Truth

Use sources in this order:

1. The Code Quality Guardian audit and skill repository README for product facts.
2. `src/content.ts` for copy currently rendered by the landing page.
3. `DESIGN.md` for visual rules, responsive behavior, and Stitch adaptations.
4. The Stitch project `10272527133559533186` for visual reference only.

Never treat generated Stitch copy as factual. In particular, do not restore its
false package command, unsupported compatibility claims, legal links, or outdated
copyright text.

## Required Workflow

Before changing code:

1. Inspect the affected component, `src/content.ts`, and relevant styles.
2. State the exact outcome and behavior to preserve.
3. Choose the smallest justified edit.
4. Avoid unrelated cleanup or dependency additions.

After changing code:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Inspect responsive behavior when layout or styling changed.
4. Report checks actually executed and any remaining uncertainty.

## Architecture

- `src/App.tsx`: page composition and section order.
- `src/content.ts`: verified links, installation command, facts, and copy data.
- `src/components/`: focused page sections and small interaction components.
- `src/hooks/useCopyText.ts`: shared clipboard behavior for installation commands.
- `src/styles.css`: Tailwind import, semantic tokens, global styles, responsive
  rules, and motion preferences.
- `public/logo.png`: official Code Quality Guardian logo.
- `DESIGN.md`: design system and implementation constraints.

Keep page sections small and explicit. Shared abstractions are justified only when
they remove real duplication or enforce an existing invariant.

## Content Rules

- Visible copy is English.
- Keep claims supportable by the skill audit or repository README.
- Preserve the published version `0.2.0-beta.1` until the source project publishes
  a different release.
- Present the project as an experimental beta, not a stable product.
- Preserve the verified installation command in `src/content.ts`.
- Do not claim universal compatibility, guaranteed behavior preservation, or
  comparative improvement without evidence.
- Do not use em dashes or en dashes in visible copy.

## Design Rules

Follow `DESIGN.md`. Important constraints:

- Preserve the restrained dark-tech direction.
- Geist is the primary typeface; JetBrains Mono is for code and metadata.
- Use Guardian Blue `#3B82F6` as the sole interface accent.
- Yellow and cyan remain confined to the logo.
- Prefer spacing, tonal surfaces, and structural lines over generic cards.
- Do not introduce pure black, neon glow, gradient headings, glassmorphism, or
  equal three-card feature grids.
- Keep the hero asymmetric on desktop and copy-first on mobile.
- Keep all interactive targets at least 44px.
- Prevent horizontal overflow at every viewport.
- Respect `prefers-reduced-motion`.
- Animate only `transform` and `opacity`.

## Dependency Policy

Do not add a dependency unless the requested behavior cannot be implemented
reasonably with the existing stack.

Before adding one:

1. Confirm the capability is absent.
2. Explain why native React, CSS, or browser APIs are insufficient.
3. Prefer a focused, maintained package.
4. Re-run lint and build.

Do not add a router, state manager, icon library, motion library, component system,
or testing framework preemptively.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

The project currently requires no environment variables.

## Verification Expectations

For visual changes, inspect at least:

- 375px mobile
- 768px tablet
- 1280px desktop
- 1440px wide desktop

Check:

- hero content and primary action remain visible;
- no horizontal overflow;
- keyboard focus is visible;
- text and controls maintain sufficient contrast;
- copy feedback still reaches `Copied`;
- reduced-motion mode removes reveal movement;
- external links and the installation command remain correct.

Do not claim automated tests passed. There is no frontend test command at the
current project state.

## Git Rules

- The repository uses the `main` branch.
- Do not create commits unless explicitly requested.
- Do not revert user changes.
- Keep generated `dist/` and `node_modules/` out of Git.
- Keep changes focused on the requested outcome.
