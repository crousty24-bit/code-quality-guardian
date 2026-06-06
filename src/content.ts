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

export const facts = [
  { value: '0.1.0-beta.1', label: 'Published version' },
  { value: 'MIT', label: 'Open-source license' },
  { value: '26', label: 'Automated tests' },
  { value: 'skills.sh', label: 'Publicly indexed' },
] as const

export const problems = [
  {
    title: 'Scope creep',
    description:
      'A focused request becomes a broad rewrite that changes more than the outcome requires.',
  },
  {
    title: 'Premature structure',
    description:
      'New files, layers, and abstractions appear before the codebase proves they are needed.',
  },
  {
    title: 'Foreign architecture',
    description:
      'The agent imports patterns that conflict with the project already in front of it.',
  },
  {
    title: 'Unverified confidence',
    description:
      'A plausible answer is reported as complete without the checks needed to support it.',
  },
] as const

export const workflow = [
  {
    verb: 'Observe',
    description: 'Read the repository, contracts, conventions, and available checks.',
  },
  {
    verb: 'Diagnose',
    description: 'Separate verified facts, evidence, inference, and unknowns.',
  },
  {
    verb: 'Propose',
    description: 'Define the smallest justified change and a clear stop condition.',
  },
  {
    verb: 'Change',
    description: 'Preserve unrelated behavior and keep the implementation bounded.',
  },
  {
    verb: 'Verify',
    description: 'Run relevant checks and report their actual results.',
  },
  {
    verb: 'Summarize',
    description: 'State what changed, what did not, and what remains uncertain.',
  },
] as const

export const riskLevels = [
  {
    level: 'Level 1',
    name: 'Local',
    decision: 'Stay local',
    description:
      'One layer, stable contracts, and a targeted verification path.',
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
      'Security, migration, concurrency, public API, or material performance risk is involved.',
  },
] as const

export const isList = [
  'A lightweight intervention discipline',
  'A guardrail against agent overproduction',
  'An evidence-based diagnostic method',
  'A framework for honest verification',
  'A scope owner when specialist skills are needed',
] as const

export const isNotList = [
  'A complete clean-code handbook',
  'A static analyzer or automatic fixer',
  'An architecture framework',
  'A replacement for TDD or code review',
  'A security, migration, or performance expert',
] as const

export const limitations = [
  'Comparative improvement over the same agent without the skill is not yet proven.',
  'Heuristic scanners can produce false positives.',
  'Compatibility outside the documented ecosystems is best effort.',
  'Specialist orchestration still needs broader comparative testing.',
] as const

