# Claims to verify

The working checklist is `next_steps.md`. This file holds the background.

Every fact, asset, or claim on this site that could not be verified from the
scraped legacy content or corroborating press. Nothing here ships as a settled
claim. Each item is either marked with a `<PlaceholderNote>` on the page,
guarded by the CI content check, or deliberately left unrendered.

## Leadership

- **Drago Gvozdanovic's title.** About page says CTO; 2021 press (*The
  Australian*, CRN) quotes him as "chief executive"; the MySec.TV post says
  "Director". Site uses **CTO** per the About page. Confirm the current title.
  → `src/content/site.ts`, `/about`
- **Robert's surname** is not published anywhere. Site uses first name only.
  → `src/content/site.ts`, `/about`
- **Paul Heaton** is a verified co-founder (Tracxn; quoted as chief executive
  in CRN, 2021) but is **not** on the legacy leadership page. He appears in the
  founding story and the IP Australia insight only, not on the leadership
  grid. Confirm whether he should be listed as current leadership.
- **Leadership photos**: legacy site had empty image sources. No photos exist.

## Services

- **Secure Azure Gateway**: footer-only on the legacy site, no detail page.
  Use-case copy is derived from the shared architecture; service lists
  unconfirmed. Status set to `in-assessment` pending confirmation of iRAP
  scope. → `/platform/secure-azure-gateway`
- **Secure Google Gateway**: same as Azure. → `/platform/secure-google-gateway`
- **GovLink Gateway**: existed only as an orphaned overlay page (Mar 2021);
  possibly unlaunched or deprecated. Route built, **excluded from primary
  nav**. Confirm product status before featuring it. → `/platform/govlink-gateway`
- **iRAP assessment scope**: the site marks SIG, AWS, API, and O365 gateways
  `assessed` based on the legacy site's blanket claims. Confirm exactly which
  services the assessment report covers, and its date/version.

## Retention model

The legacy site stated retention three contradictory ways:

| Statement | Where it appeared |
|---|---|
| Seven years of data available on demand | Technology page |
| 30 days detailed activity, more on request | SIG page |
| Searchable for the duration of the contract | AWS / API / O365 pages |

The new site presents these as three labelled tiers (hot window /
contract-term searchability / long-term retention). **That structure is our
reading and must be confirmed by Cynterra.** → `/platform` retention section,
`src/content/company.ts`

## Partners

Legacy About page showed logos: AWS, IP Australia, AustCyber, Vocus, NTT,
KBI.Media, DTA and Microsoft. Only **NTT** (IP Australia contract) and **DTA**
are corroborated by press. `<PartnerGrid>` is built but **commented out**.
Confirm the current partner list and logo usage rights before rendering.
→ `src/components/partner-grid.tsx`, `/about`

## AI capabilities (all four)

Shadow AI Visibility, AI-Enabled Attack Defence, Intelligence Copilot, and the
Threat Intelligence Network are **new services**. All are typed
`in-assessment` and the CI check (`scripts/verify-content.ts`) fails the build
if any is ever marked `assessed` without a verified assessment. Additionally:

- **Data sovereignty answers** on `/assurance` (inference location, data never
  leaving Australian-controlled infrastructure) state the intended
  architecture. Confirm before launch.
- **Anonymisation methodology** on `/intelligence` (k-anonymity thresholds,
  independent review) states the intended governance. Confirm the mechanism
  and the reviewer before launch.

## Assets

- **`/downloads/Cynterra-Services-Overview.pdf`**: the legacy PDF is linked
  from every service page and likely from external procurement documents. The
  redirect from the old `/wp-content/uploads/...` path is in place, but the
  actual PDF must be copied into `public/downloads/` before launch (a
  placeholder README sits there now).
- **Architecture diagrams** (Environ overview, per-gateway single/multi-site)
  are worth redrawing to the new palette. They are the only real product visuals that
  exist. Source file URLs are on the legacy cynterra.net site.
- **Hero video** `Sml_Cynterra-Hero-Clouds.mp4`: not carried forward.

## Tagline

The homepage carries the working tagline **"Government-grade gateways.
AI-grade vigilance."** from the rebrand plan. The plan calls for
message-testing the tagline options with 2–3 existing clients before locking
one. Treat the current line as provisional. → `src/app/page.tsx`

## Other claims from the legacy site

- **"Patented technology"**: the legacy Solutions page claims patents.
  Patent numbers were never published. Not repeated on the new site until
  numbers are provided.
- **Domain migration operations**: email forwarding from @cynterra.net,
  TLS/SPF/DKIM continuity, and the 6–12 month redirect window are stated in
  the briefing page; confirm the cutover plan with
  whoever operates DNS and mail.
