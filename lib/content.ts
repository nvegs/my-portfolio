export const roles = [
  {
    company: "Northline Health",
    metric: "42% faster checkout after a React migration",
    description:
      "Led frontend for patient scheduling and billing. Shipped a component library, tightened Core Web Vitals, and paired with design on a calmer clinical UI.",
    href: "/work#northline-health",
    linkLabel: "My work at Northline",
  },
  {
    company: "Atlas Commerce",
    metric: "Sub-200ms LCP on 2M+ monthly sessions",
    description:
      "Owned storefront performance and experimentation. Built edge-friendly cart flows, A/B infrastructure, and mentored a team of four frontend engineers.",
    href: "/work#atlas-commerce",
    linkLabel: "My work at Atlas",
  },
  {
    company: "Studio Forma",
    metric: "Design system adopted across 6 product squads",
    description:
      "Embedded with product and brand to ship tokens, documentation, and React primitives that cut UI delivery time without sacrificing craft.",
    href: "/work#studio-forma",
    linkLabel: "My work at Forma",
  },
] as const;

export const caseStudyStats = [
  {
    label: "Northline patient portal",
    value: "180k",
    suffix: "monthly active users",
    href: "/work#northline-health",
  },
  {
    label: "Atlas storefront",
    value: "38%",
    suffix: "conversion lift on mobile",
    href: "/work#atlas-commerce",
  },
  {
    label: "Forma design system",
    value: "120+",
    suffix: "documented components",
    href: "/work#studio-forma",
  },
] as const;

export const rotationCards = [
  {
    tag: "Stack",
    title: "Current toolchain",
    body: "Next.js App Router, React 19, TypeScript strict, Tailwind v4, Playwright, and Storybook for the boring parts done well.",
    href: "/lab",
    linkLabel: "See experiments",
  },
  {
    tag: "Reading",
    title: "The Design of Everyday Things",
    body: "Re-reading for affordances and error prevention — still the best lens for why a button feels trustworthy.",
    href: "/writing",
    linkLabel: "Notes on craft",
  },
  {
    tag: "Exploring",
    title: "View Transitions API",
    body: "Prototyping shared-element motion without shipping a second animation runtime. Performance budget: 0 KB added.",
    href: "/lab#view-transitions",
    linkLabel: "Lab notes",
  },
] as const;

export const labProjects = [
  {
    title: "Motion budget",
    slug: "motion-budget",
    description:
      "A tiny CLI that scores UI animations against a frame budget and flags layout thrashing in CI.",
    tags: ["Tooling", "Performance"],
  },
  {
    title: "Accessible command palette",
    slug: "command-palette",
    description:
      "Cmd+K pattern with roving tabindex, typeahead, and screen-reader announcements — no Radix required.",
    tags: ["A11y", "React"],
  },
  {
    title: "LLM-assisted design tokens",
    slug: "token-lab",
    description:
      "Experiments syncing Figma variables to CSS custom properties with human-in-the-loop review.",
    tags: ["Design systems", "AI"],
  },
  {
    title: "Partial hydration demos",
    slug: "islands",
    description:
      "Side-by-side comparisons of server components, islands, and progressive enhancement for marketing pages.",
    tags: ["Architecture", "Next.js"],
  },
] as const;

export const writingPosts = [
  {
    slug: "css-that-respects-users",
    title: "CSS that respects users (and your future self)",
    excerpt:
      "Layered resets, logical properties, and when to reach for container queries instead of another breakpoint.",
    date: "2026-03-12",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "shipping-without-regret",
    title: "Shipping frontend without regret",
    excerpt:
      "Feature flags, visual regression, and the checklist I use before merging anything customer-facing.",
    date: "2026-01-28",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "design-systems-that-breathe",
    title: "Design systems that breathe",
    excerpt:
      "Why documentation is a product surface — and how to keep tokens from becoming a graveyard of unused swatches.",
    date: "2025-11-04",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "animation-with-a-budget",
    title: "Animation with a budget",
    excerpt:
      "Prefer transform and opacity, respect reduced motion, and know when motion is decoration versus feedback.",
    date: "2025-09-19",
    readTime: "5 min read",
    featured: false,
  },
] as const;

export const lifeStories = [
  {
    slug: "slow-mornings",
    title: "Slow mornings before standup",
    excerpt:
      "Pour-over, a paper notebook, and twenty minutes without Slack — the ritual that keeps my commits intentional.",
    date: "2026-02-02",
  },
  {
    slug: "walking-the-city",
    title: "Walking the city for color",
    excerpt:
      "How street photography trained my eye for contrast, hierarchy, and negative space in UI work.",
    date: "2025-12-14",
  },
] as const;

export const workCaseStudies = [
  {
    id: "northline-health",
    company: "Northline Health",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    summary:
      "Modernized the patient portal stack and established frontend quality gates across three squads.",
    highlights: [
      "Migrated legacy Angular views to React with zero downtime using incremental routing.",
      "Cut LCP from 4.1s to 1.9s on 3G through image prioritization and route-level code splitting.",
      "Introduced visual regression and axe checks in CI, catching 90+ a11y issues pre-release.",
    ],
    metrics: [
      { label: "Monthly active users", value: "180k" },
      { label: "Checkout completion", value: "+42%" },
      { label: "Support tickets (UI)", value: "-31%" },
    ],
  },
  {
    id: "atlas-commerce",
    company: "Atlas Commerce",
    role: "Frontend Engineer → Lead",
    period: "2019 — 2022",
    summary:
      "Scaled a global storefront and experimentation platform while keeping the UI fast on mid-range phones.",
    highlights: [
      "Built a edge-cached product shell with stale-while-revalidate for catalog pages.",
      "Shipped a typed analytics layer so experiment owners could trust conversion readouts.",
      "Partnered with SEO to fix CLS regressions during a major rebrand launch.",
    ],
    metrics: [
      { label: "Monthly sessions", value: "2M+" },
      { label: "Mobile LCP", value: "<200ms" },
      { label: "Experiment velocity", value: "3×" },
    ],
  },
  {
    id: "studio-forma",
    company: "Studio Forma",
    role: "Design Systems Engineer",
    period: "2017 — 2019",
    summary:
      "Created the shared React library and documentation site that became the default for new products.",
    highlights: [
      "Defined semantic color tokens and motion guidelines adopted by brand and product design.",
      "Authored contribution guides that cut PR review cycles for UI changes.",
      "Ran office hours for designers learning React constraints without killing creativity.",
    ],
    metrics: [
      { label: "Squads onboarded", value: "6" },
      { label: "Components", value: "120+" },
      { label: "Time-to-ship UI", value: "-35%" },
    ],
  },
] as const;
