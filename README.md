# Cynterra (cynterra.ai)

Marketing site for Cynterra, an Australian cybersecurity company providing
cloud-native secure gateways (GWaaS) to government, defence and critical
infrastructure. This is a full rebuild of the 2021 WordPress site at
cynterra.net, repositioned around an AI capability layer built on the existing
gateway fleet.

**Stack:** Next.js 15 (App Router), TypeScript (strict,
`noUncheckedIndexedAccess`), Tailwind CSS v4 (CSS-first `@theme`), Framer
Motion, next-themes (dark and light), react-hook-form + zod, MDX
(next-mdx-remote), self-hosted fonts via next/font. Deploys to Vercel `syd1`.

```bash
npm install
npm run dev     # local dev on http://localhost:3000
npm run build   # production build
npm test        # content credibility checks (see below), run in CI
```

## Before launch

**Read `next_steps.md` first.** It is the launch checklist: every fact to
verify, asset to supply, legal page to write and integration to wire up, each
marked with who owns it. `CLAIMS-TO-VERIFY.md` has the background on why each
claim is uncertain.

The biggest open items:

- The briefing form (`src/app/api/briefing/route.ts`) accepts submissions but
  does not deliver them anywhere yet.
- `public/downloads/Cynterra-Services-Overview.pdf` is missing, so the legacy
  PDF link currently 404s.
- The Privacy and Security Policy pages are placeholders.
- The exact scope of the iRAP assessment needs confirming.

## Credibility rules (do not undo these)

The buyer is government, defence and critical-infrastructure procurement and
security. They forgive a plain website; they do not forgive an overstated
compliance claim. Three rules are load-bearing and enforced in code.

### 1. Assessment status is per service, never one global badge

Every service and capability object in `src/content/` carries an
`AssuranceStatus` (`'assessed' | 'in-assessment' | 'not-in-scope'`, defined in
`src/content/types.ts`). Compliance claims render **only** through
`<AssuranceBadge status={...} />`. There is deliberately no freeform-text
badge, so a compliance claim cannot be displayed without an attached status.
Do not add one.

### 2. The AI capabilities are not iRAP assessed

The existing iRAP assessment covers the existing gateway services only. The
four AI capabilities (`src/content/capabilities.ts`) are **new services** and
must stay `'in-assessment'` until a verified, completed assessment covers
them. `scripts/verify-content.ts` (run by `npm test`) **fails CI** if any
capability is ever marked `'assessed'`. That failure is the system working,
not a bug to route around.

### 3. iRAP is an assessment, not a certification

There is no such thing as "iRAP certified". The legacy site got this wrong,
and using the wrong term tells an informed buyer you don't understand the
scheme. Write **"iRAP assessed"** and **"PROTECTED-capable"** throughout. The
same logic applies to the CTA: it is **"Request a briefing"**, never "Schedule
a demo", "Get started free" or "Book a call".

## Content

All copy lives in typed objects under `src/content/` (services, capabilities,
company, insights metadata) and MDX files in `src/content/insights/`. Anything
unverified is wrapped in `<PlaceholderNote>` (greppable and visually obvious)
and logged in `next_steps.md`.

Illustrative data (the example finding on `/ai-defence`, the Copilot demo, the
homepage gateway panels) is always labelled as an illustration, and needs
Cynterra sign-off before launch.

### Writing style

- No em dashes. Use a comma, colon, full stop or brackets.
- No `·` dot separators. Write lists as sentences (`formatList()` in
  `src/lib/utils.ts` does "a, b and c").
- Australian English ("organisation", "defence", "licence").
- Sentence case for labels and headings. No ALL-CAPS labels.

## Domain migration: cynterra.net to cynterra.ai

This is a security-operations event, not just DNS: agencies allow-list vendor
domains in their own gateways and mail filters. `next.config.ts` carries the
complete 301 map for every legacy path (including the footer's typo'd
`/secure-api-gateway` link and the services-overview PDF).

There is no on-site migration banner. Tell agency network teams directly to
allow-list cynterra.ai (web and mail) before cutover. Keep cynterra.net live
and redirecting for 6 to 12 months, with TLS, SPF, DKIM and DMARC maintained.

## Design

The site should read as a serious, plain-spoken security vendor, not a
template. Avoid the patterns that make a site look generated: spotlight glows,
grid backgrounds, typewriter headlines, mono ALL-CAPS eyebrows, numbered
"01 / 02" labels, zero-padded stats, status dots and pill buttons.

- **Fonts:** Archivo (headings), IBM Plex Sans (body), IBM Plex Mono (only
  for real machine data such as log fields and queries). Loaded in
  `src/app/layout.tsx`.
- **Colour:** single accent `#abd037`, taken from the logo and used
  sparingly (CTAs, active nav, focus rings, section labels). Deep neutral dark
  base, with a complete light theme (accent darkened to `#5f7a10` there for
  WCAG AA body contrast).
- **Assurance status** uses a **separate** colour ramp, so compliance state is
  never confused with brand decoration.
- **Components:** squared buttons (`rounded-md`), flat bordered cards
  (`rounded-lg`, no shadow), tables and dividers in preference to more cards.
- All tokens live in `src/app/globals.css` under `@theme`. No hardcoded hex in
  components.

## Project layout

```
src/app/           routes (one folder per page), API route, OG image, sitemap
src/components/    layout, section primitives, assurance badge/strip, UI pieces
src/content/       all site copy as typed data + MDX insights
scripts/           verify-content.ts (credibility check run by npm test)
public/            brand SVGs, downloads/
next_steps.md      launch checklist
CLAIMS-TO-VERIFY.md  background on every unverified claim
```
