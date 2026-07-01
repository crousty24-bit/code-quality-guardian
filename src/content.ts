export const links = {
  github: 'https://github.com/crousty24-bit/code-quality-guardian-skill',
  skills: 'https://skills.sh/crousty24-bit/code-quality-guardian-skill',
  readme:
    'https://github.com/crousty24-bit/code-quality-guardian-skill#readme',
} as const

export const installCommand = `npx skills add crousty24-bit/code-quality-guardian-skill \\
  --skill code-quality-guardian \\
  --agent codex \\
  --yes`

export const quickInstallCommand =
  'npx skills add crousty24-bit/code-quality-guardian-skill'

export const facts = [
  { value: '0.2.0-beta.1', label: 'Current beta' },
  { value: '31', label: 'Automated tests' },
  { value: '5', label: 'Read-only evidence scripts' },
  { value: 'MIT', label: 'Open-source license' },
] as const

export const problems = [
  {
    title: 'Agent overproduction',
    description:
      'A focused request becomes extra files, broad refactors, or abstractions the codebase did not ask for.',
  },
  {
    title: 'Hidden execution risk',
    description:
      'A local outcome can still touch persistence, authorization, migrations, contracts, or concurrency.',
  },
  {
    title: 'Foreign architecture',
    description:
      'The agent imports patterns, dependencies, or conventions that conflict with the project in front of it.',
  },
  {
    title: 'Unverified confidence',
    description:
      'The work is reported as complete without separating checks that ran from evidence still missing.',
  },
] as const

export const workflow = [
  {
    verb: 'Observe',
    description: 'Read the repository, contracts, conventions, and candidate checks before editing.',
  },
  {
    verb: 'Diagnose',
    description: 'Separate facts, evidence, inference, and unknowns before deciding risk.',
  },
  {
    verb: 'Propose',
    description: 'Set the intervention class, stop condition, and smallest justified action.',
  },
  {
    verb: 'Change',
    description: 'Keep the business outcome bounded while adding only necessary discipline.',
  },
  {
    verb: 'Verify',
    description: 'Run relevant checks and report exactly what passed, failed, or stayed untested.',
  },
  {
    verb: 'Summarize',
    description: 'State what changed, what stayed untouched, and what remains uncertain.',
  },
] as const

export const riskLevels = [
  {
    level: 'Level 1',
    name: 'Local',
    decision: 'Stay local',
    description:
      'One layer, stable contracts, no migration, and a targeted verification path.',
  },
  {
    level: 'Level 2',
    name: 'Coordinated',
    decision: 'Coordinate',
    description:
      'One bounded outcome crosses files, layers, transports, or test suites.',
  },
  {
    level: 'Level 3',
    name: 'Specialized',
    decision: 'Delegate execution',
    description:
      'Security, authorization, migration, concurrency, public API, or performance risk is material.',
  },
] as const

export const isList = [
  'An intervention governor for coding agents',
  'A risk-classification layer before editing',
  'A scope owner across local, coordinated, and specialized work',
  'A read-only evidence-gathering discipline',
  'A verification reporting standard',
] as const

export const isNotList = [
  'A Clean Code, SOLID, or refactoring checklist',
  'A static analyzer or automatic fixer',
  'A guarantee that every diff is smaller',
  'A replacement for TDD, code review, or specialist skills',
  'A universal framework detector or stable product',
] as const

export const limitations = [
  'Comparative improvement over the same agent without the skill is not yet proven.',
  'Heuristic function scanning can produce false positives.',
  'Framework detection is targeted, not universal.',
  'Specialist orchestration still needs broader comparative testing.',
  'Compatibility outside documented ecosystems is best effort.',
] as const
