# Truckit frontend

Next.js App Router, React, TypeScript, Tailwind CSS and shadcn-compatible Radix primitives. Coordination and API authority: [Hub_Truckit](https://github.com/Ibikunleogunbanwo/Hub_Truckit). Backend application code belongs to ade.

## Run

Use Node 22.12+ and npm 11 (the lockfile was generated with npm 11).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000 for the foundation showcase. It demonstrates shared components and responsive shells with sample data. It does not create real moves, authenticate users, charge cards or call undocumented operations.

## API contract and mocks

`contract/openapi.yaml` is an exact snapshot of Hub's source, with revision and SHA-256 in `contract/source.json`. Do not edit it here. Refresh Hub first, then run:

```bash
npm run api:sync -- ../Hub_Truckit
npm run api:generate
npm run api:mock
```

Prism listens only on `127.0.0.1:4010`. `/health` is the sole current contract operation. Auth and move request mappings are plans, not defined endpoints yet; request their contracts in Hub before wiring them. `NEXT_PUBLIC_USE_MOCKS=true` chooses Prism through `NEXT_PUBLIC_MOCK_API_BASE_URL`; otherwise `NEXT_PUBLIC_API_BASE_URL` is used. Restart Next.js after changing public environment values.

Import `api` from `src/lib/api/client.ts` for typed access, e.g. `api.GET('/health')`. Handle returned `error` and transport failures in the consuming screen. No token persistence or auth strategy is introduced here.

Prism is development-only and must consume only the trusted Hub contract. Its upstream dependencies have audit advisories; review `npm audit` when updating it and `npm audit --omit=dev` for runtime dependencies. Never expose Prism as a production API.

## Components

- `src/components/ui`: actions, form fields, checkbox, dialog, tabs, card, table, badge and feedback.
- `src/components/layout`: brand, public shell and configurable customer/service center app shell. Pass real navigation items from future screens.
- `src/components/foundation`: showcase composition.
- `src/app/globals.css`: semantic tokens and local fonts.
- `components.json`: shadcn conventions and aliases; reuse these primitives for new screens.

See `docs/design-tokens.md` for Figma provenance and contrast adjustments. Native form controls retain browser keyboard support; Radix handles dialog focus and tab navigation.

## Verify

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests start Next.js and Prism automatically, exercise desktop/mobile interactions and run axe accessibility checks. CI regenerates API types and rejects drift. Hosting remains a Hub decision; no deployment is configured.
