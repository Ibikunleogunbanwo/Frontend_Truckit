# Foundation implementation plan

Approved by ade in chat on 2026-11-25. Tracks Hub_Truckit#5.

Goal: a reusable Next.js foundation derived from the indexed Truckit Figma frames, with no backend application changes.

1. Scaffold Next.js App Router, TypeScript, Tailwind and shadcn-compatible Radix primitives. Commit a lockfile, lint/typecheck/test/build scripts and CI.
2. Extract Montserrat typography, teal primary, white surfaces, 5px controls, 10px cards, 80px header and 250px sidebar. Keep semantic accessible text tokens distinct from decorative brand color.
3. Build buttons, labelled inputs/selects/textarea, checkbox, dialog, tabs, cards, table, badges and feedback states under src/components. Use Radix for focus management and keyboard interactions.
4. Compose public and application shells and a foundation-only showcase. Role previews and section links must work; no pretend auth or payment behavior.
5. Snapshot Hub's exact OpenAPI with source revision, generate schema.d.ts, configure openapi-fetch and Prism. Mock only defined operations; /health is currently the sole operation.
6. Verify keyboard/dialog/form behavior, API URL switching, production build, lint, typecheck, desktop/mobile layout and accessibility. Open frontend and Hub PRs. Update architecture, status, changelog and decision record.

Sources: Figma button 37:130, dashboard 141:24, request form 272:278, service center 356:496, move cards 189:411. Public shell will be checked against 232:43.

Boundaries: no product screens, session storage, auth middleware, Stripe wiring, admin design or invented contract endpoints in this foundation.
