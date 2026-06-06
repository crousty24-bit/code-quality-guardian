# Code Quality Guardian

<p align="center">
  <img
    src="public/logo.png"
    alt="Code Quality Guardian owl holding a code shield"
    width="240"
  />
</p>

<p align="center">
  A static landing page for the Code Quality Guardian Agent Skill.
</p>

<p align="center">
  <a href="https://github.com/crousty24-bit/code-quality-guardian-skill">Skill repository</a>
  ·
  <a href="https://skills.sh/crousty24-bit/code-quality-guardian-skill">skills.sh</a>
</p>

## Overview

This repository contains the public-facing landing page for
[Code Quality Guardian](https://github.com/crousty24-bit/code-quality-guardian-skill),
an Agent Skill that disciplines how coding agents intervene in existing codebases.

The page explains the skill's central promise:

> Make coding agents change less, but better.

It presents the problem, intervention workflow, risk classification, verified
installation command, and current experimental status without becoming a full
documentation site.

## Status

The landing page is in its first implementation pass.

The skill version presented by the site is `0.1.0-beta.1`, an experimental MVP
that has been field-tested primarily with Codex. It is not presented as a stable
release.

## Technology

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4
- Geist Variable
- JetBrains Mono Variable

The application is a static single page. It has no backend, routing layer,
authentication, database, analytics, CMS, or runtime configuration.

## Getting Started

Requirements:

- Node.js `^20.19.0` or `>=22.12.0`
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Type-check and create the production build
npm run preview  # Preview the production build locally
```

The production output is written to `dist/`.

## Project Structure

```text
.
├── public/
│   └── logo.png
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── content.ts
│   ├── main.tsx
│   └── styles.css
├── AGENTS.md
├── DESIGN.md
├── index.html
├── package.json
└── vite.config.ts
```

Key files:

- `src/App.tsx` defines page composition and section order.
- `src/content.ts` centralizes verified public copy, links, and installation data.
- `src/components/` contains focused page sections.
- `src/styles.css` contains design tokens, responsive rules, and interaction states.
- `DESIGN.md` documents the design system extracted and adapted from Google Stitch.
- `AGENTS.md` defines implementation and verification rules for coding agents.

## Design Direction

The interface adapts the Google Stitch project `10272527133559533186`.

The page uses:

- a restrained dark-tech visual language;
- an asymmetric hero with the official logo as the primary visual;
- Geist typography with JetBrains Mono for technical content;
- a single blue interface accent;
- tonal surfaces and structural lines instead of heavy shadows;
- responsive single-column layouts below 768px;
- limited motion with a reduced-motion fallback.

Stitch is a visual reference only. Product facts and claims come from the skill
audit and repository README.

See [DESIGN.md](DESIGN.md) for the complete design system.

## Content Integrity

The landing page intentionally avoids unsupported claims.

When updating copy:

- verify facts against the skill repository;
- keep the installation command accurate;
- preserve the experimental beta positioning;
- do not claim guaranteed behavior preservation;
- do not claim universal agent compatibility;
- do not present unexecuted checks as successful.

## Quality Checks

Before submitting changes:

```bash
npm run lint
npm run build
```

For layout changes, inspect the page at:

- 375px
- 768px
- 1280px
- 1440px

Also verify keyboard focus, contrast, horizontal overflow, reduced-motion behavior,
external links, and installation-command copy feedback.

There is currently no automated frontend test suite.

## Deployment

The project can be deployed to Vercel as a standard Vite application.

Expected settings:

```text
Build command: npm run build
Output directory: dist
Install command: npm install
```

No environment variables are required.

## Related Project

The Agent Skill itself is maintained separately:

- Repository: https://github.com/crousty24-bit/code-quality-guardian-skill
- skills.sh: https://skills.sh/crousty24-bit/code-quality-guardian-skill

## License

The Code Quality Guardian skill is released under the MIT License. This landing
page repository does not currently include its own license file.
