# Design System: Code Quality Guardian

## 1. Source And Intent

This document is the design source of truth for the Code Quality Guardian landing page.
It adapts the Google Stitch project `10272527133559533186` while correcting its
unverified product copy.

### Available Stitch screens

- `Code Quality Guardian - Landing Page`: desktop concept, 2560 x 6380.
- `logo-1.png`: square brand asset, 1254 x 1254.

The Stitch landing provides the visual direction, not the editorial truth. Product
claims, commands, links, compatibility statements, and status language must come
from the audit and the skill repository README.

## 2. Visual Theme And Atmosphere

The page is a restrained dark-tech editorial landing for developers who use coding
agents. It should feel precise, sober, technically credible, and intentionally
understated.

- Design variance: 6. Use offset and asymmetric compositions without visual chaos.
- Motion intensity: 3. Use entrance, reveal, hover, and feedback states only.
- Visual density: 3. Keep sections airy and copy concise.
- Theme: dark only.
- Primary visual: the official owl and shield logo.
- Material: flat tonal layers, precise hairlines, controlled blue highlights.

The visual thesis is "a disciplined engineering instrument presented with the
clarity of an open-source technical product."

## 3. Layout Structure

The page uses a full-width canvas with a centered `1200px` content boundary.

1. Compact header with brand, anchor navigation, and GitHub link.
2. Full-viewport asymmetric hero with copy and quick-install action on the left,
   and the logo on the right.
3. Fact strip with four verified project facts.
4. Problem section using an asymmetric list, not equal feature cards.
5. Workflow section showing six intervention verbs in a clear sequence.
6. Risk section using three horizontal bands with distinct hierarchy.
7. Definition section contrasting what the skill is and is not.
8. Installation section with a real command and copy feedback.
9. Experimental status section and compact footer.

Every section has one job. Do not add pricing, testimonials, fake dashboards,
roadmaps, analytics, or decorative social proof.

## 4. Design Tokens

### Color palette

- Guardian Canvas `#05070B`: page background.
- Deep Surface `#0B0F16`: secondary sections and code surfaces.
- Raised Surface `#111722`: highlighted regions.
- Primary Ink `#F4F7FB`: headings and important text.
- Muted Steel `#9AA4B2`: body copy and metadata.
- Quiet Steel `#697586`: tertiary copy.
- Structural Line `#202938`: dividers and component boundaries.
- Active Line `#334155`: hover boundaries.
- Guardian Blue `#3B82F6`: the only interface accent for CTAs, links, focus, and active states.
- Positive Green `#4ADE80`: semantic validation only, never decorative.
- Caution Amber `#FBBF24`: experimental status only, never a competing CTA.

Yellow and cyan from the logo remain inside the image asset. They are not interface
accent colors.

### Typography

- Display and body: Geist Variable.
- Code and technical metadata: JetBrains Mono Variable.
- Display XL: `clamp(3rem, 7vw, 6.75rem)`, weight 650, line height 0.94.
- Heading L: `clamp(2rem, 4vw, 3.75rem)`, weight 620, line height 1.
- Heading M: `clamp(1.5rem, 2.5vw, 2.25rem)`, weight 600, line height 1.1.
- Body L: `clamp(1.05rem, 1.5vw, 1.25rem)`, line height 1.65.
- Body: `1rem`, line height 1.65.
- Small: `0.875rem`, line height 1.5.
- Mono label: `0.75rem`, line height 1.4, letter spacing 0.08em.

Body copy should not exceed 65 characters per line. Headings use tight tracking.
Avoid serif type, all-caps overuse, and oversized type that pushes actions below
the first viewport.

### Spacing

- Base grid: 4px.
- Page gutter: `clamp(1rem, 4vw, 2.5rem)`.
- Section spacing: `clamp(4.5rem, 10vw, 8rem)`.
- Component gap: 16px, 24px, or 32px.
- Hero content gap: 24px to 32px.
- Maximum content width: 1200px.

### Shape

- Controls: 4px radius.
- Content surfaces: 8px radius.
- Circular treatment is reserved for the logo mark or semantic status indicator.
- Avoid pill-shaped cards and mixed radius systems.

## 5. Reusable Components

### Header

Height is 64px to 72px. It remains one line on desktop. Use an opaque deep surface
when sticky. Links gain brighter text on hover. Keyboard focus uses a 2px Guardian
Blue outline with 3px offset.

### Buttons And Links

Primary actions use Guardian Blue with white text. Secondary actions use transparent
fill and a structural line. Hover changes color or border only. Active state moves
down by 1px. Labels never wrap.

### Fact Strip

Four compact factual items separated by structural lines. It collapses to two
columns and then one column. Facts must remain directly supportable by project
sources.

### Workflow

Six verbs form a directional sequence on desktop and a vertical sequence on mobile.
Use negative space and one connecting line rather than six boxed cards.

### Risk Bands

Three bands share structure but differ in emphasis. Level 1 is local, Level 2 is
coordinated, and Level 3 delegates specialized execution while retaining scope
control.

### Code Block

Use Deep Surface, JetBrains Mono, one structural border, and a visible copy button.
States are Copy, Copied, and Copy failed. Do not simulate terminal output.

### Quick Install Snippet

Place the short skills.sh installation command beside the primary hero action. Use
a compact code surface, a `$` prompt, single-line truncation, and a 44px copy
target. The full command remains accessible through the code title and copy action.

## 6. Responsive Behavior

- Breakpoint: 768px for major layout collapse.
- All multi-column sections become a single column below 768px.
- The hero copy appears before the logo on mobile.
- The hero uses `min-height: 100dvh`, never `100vh`.
- Headings scale with `clamp()`.
- Interactive targets are at least 44px.
- Header anchor links hide below 768px while the brand and GitHub action remain.
- No horizontal scrolling is permitted.
- Image dimensions and aspect ratio are reserved to prevent layout shift.

Stitch only provides a desktop screenshot, so mobile behavior is an explicit
adaptation based on the responsive classes in its generated HTML and the project
brief.

## 7. Motion And Interaction

- Hero copy and logo enter once using opacity and translate transforms.
- Content sections reveal once through IntersectionObserver.
- Buttons use color, border, transform, and opacity transitions.
- The copy action provides immediate textual feedback.
- `prefers-reduced-motion: reduce` disables transforms and reveal delays.
- No scroll hijacking, parallax, continuous loops, blur animation, or animation library.

## 8. Stitch Elements To Keep

- Dark developer-first atmosphere.
- Geist-led typography and mono code treatment.
- Strict grid and generous section rhythm.
- Thin dividers and tonal depth instead of heavy shadows.
- Blue action accent.
- Logo as the primary visual.
- Compact navigation and clear installation area.

## 9. Stitch Elements To Replace

- Replace the centered hero with an asymmetric split.
- Replace Material Symbols with typography and CSS structure.
- Replace the false npm package command with the verified skills CLI command.
- Remove unsupported GPT and Claude compatibility claims.
- Remove promises that behavior is guaranteed to remain intact.
- Remove Privacy, Terms, and outdated copyright placeholders.
- Add the missing workflow, risk classification, beta status, and source links.
- Avoid the generic three-equal-card feature row.

## 10. Anti-Patterns

- No pure black, neon glow, purple gradient, or gradient headline.
- No Inter, Material Icons, hand-drawn icons, or extra icon dependency.
- No equal three-card feature grid.
- No fake terminal output or fake product screenshot.
- No unsupported compatibility or performance claim.
- No decorative status dots, scroll cues, section numbering, or repeated eyebrows.
- No em dash or en dash in visible copy.
- No complex navigation, theme switcher, backend, analytics, or state framework.
- No dependency unless it directly supports the agreed stack.
