# Next steps before launch

Everything that still needs to be **verified**, **supplied**, **written**, or
**wired up** before cynterra.ai goes live. Tick items off as they are done.

`CLAIMS-TO-VERIFY.md` explains the background for many of these items. This
file is the working checklist.

Owner key: **C** = needs Cynterra (facts, assets, sign-off), **L** = needs
legal review, **D** = development work.

---

## 1. Illustrative / sample data shown on the site

These are made-up examples that show how the product works. Each one needs
Cynterra to either approve it as a clearly labelled illustration, or replace
it with real (sanitised) output from the product.

- [ ] **C**: **AI Defence: "Example finding" card** (`src/app/ai-defence/page.tsx`, `SAMPLE_FINDING`)
  - 2026-07-14 09:41:07, egress, finance-vlan to api.openai.com
  - Classification: unsanctioned AI endpoint. Policy: flag and log
  - Payload: 2.1 MB upload. Matched: document-content signature
  - Labelled "Illustration, not live data". Confirm that the field names match
    what the real product records, that "document-content signature" is a real
    detection type, and that naming OpenAI is acceptable.
- [ ] **C**: **Copilot interactive mock** (`src/app/copilot/copilot-mock.tsx`)
  - 5 canned questions, generated queries, result rows and summaries (e.g.
    "112 blocked, 3.1× the daily median", "87% machine-generated").
  - Confirm that the query syntax matches the real analytics engine
    (Kibana/Lucene-style is assumed), and that the scenario numbers are
    plausible. Also confirm that naming ChatGPT, Gemini and copilots is
    acceptable.
- [ ] **C**: **Homepage "What each gateway sees" panels** (`src/app/page.tsx`, `SensorPanel` rows)
  - For example: SIG "Encrypted sessions: inspected and fingerprinted", API
    Gateway "Transaction rates: profiled for machine pacing", O365
    "Attachments: detonated and scanned".
  - These describe capabilities. Confirm that each one is real today, or
    reword it as planned.
- [ ] **C**: **The four threat descriptions on /ai-defence** (`THREATS`): prompt-injection
  screening, model-assisted reconnaissance, agentic API pacing. Confirm that
  each one is detectable today or clearly in development.

## 2. Legal pages (placeholders now)

- [ ] **L**: **Privacy Policy** (`/privacy`): currently 3 generic sentences plus a TODO note.
  Migrate the full text from cynterra.net/privacy-policy, update it for the
  cynterra.ai domain, and have legal review it. It must cover the briefing form
  (what is collected, where it is stored, and how long it is kept), APP
  compliance, overseas disclosure (if any), and complaints/OAIC contact.
- [ ] **L**: **Security Policy** (`/security`): same as above. Migrate the text from
  cynterra.net/security-policy. Add a responsible-disclosure process.
- [ ] **D**: Add **`/.well-known/security.txt`** (contact, policy URL, expiry). Security buyers check for this.
- [ ] **L/C**: Decide whether you need **Terms of Use** and an **Accessibility statement** (common for government suppliers).
- [ ] **C**: Add the **ABN** (and ACN if applicable) to the footer and legal pages. It is not shown anywhere yet.
- [x] **Cookie notice**: kept as is by decision. It says "only essential cookies", but the site
  actually uses `localStorage` (theme choice, dismissed notice), not cookies. Optional: mention
  this in the privacy policy.

## 3. Facts and claims to verify

### Company and people
- [ ] **C**: Drago Gvozdanovic's current title (the site says CTO; 2021 press says chief executive or Director).
- [ ] **C**: Robert's surname, and whether he should be listed at all.
- [ ] **C**: Should Paul Heaton appear on the leadership grid? He is a verified co-founder but currently only appears in the founding story.
- [ ] **C**: Leadership photos (none exist).
- [ ] **C**: Office address (Level 4, Plaza Offices East, 35 Terminal Ave), phone (+61 2 6160 1363): are these still current?
- [ ] **C**: "Nine years…" heading on /about is hard-coded. Confirm it, or change it to a phrase that won't go out of date.
- [ ] **C**: Vision / mission / values copy (carried over from the old site): is it still wanted?

### Compliance and assurance (highest risk)
- [ ] **C**: **Exact iRAP assessment scope**: which services it covers, the report date, and the assessor. The site currently marks SIG, AWS, API and O365 gateways as "iRAP assessed".
- [ ] **C**: Azure and Google gateways: are they in scope? They are marked "in assessment pipeline" for now.
- [ ] **C**: GovLink Gateway: is it live, deprecated or unlaunched? It is currently hidden from nav.
- [ ] **C**: "Compliant with ISM, PSPF and Privacy Act": is there evidence to back this up, if asked?
- [ ] **C**: "Trialled … up to OFFICIAL: Sensitive and PROTECTED" (/sectors, Defence).
- [ ] **C**: **Data sovereignty answers** on /assurance (log location, where AI inference runs, that no data goes to overseas AI). These describe the *intended* architecture, so confirm them.
- [ ] **C**: **Anonymisation method** on /intelligence (k-anonymity thresholds, "independent review"). Who is the reviewer? What is the threshold?
- [ ] **C**: "Patented technology" claim from the old site: supply the patent numbers, or leave the claim out.

### Product
- [ ] **C**: **Retention model**: 30-day hot window vs. search for the length of the contract vs. 7 years. The 3-tier structure on /platform is our reading of the old site.
- [ ] **C**: "7 gateway services" and "one management console" (homepage stats).
- [ ] **C**: Azure and Google gateway feature lists (written from the shared architecture; there was never a detail page).
- [ ] **C**: "Proprietary aggregators and Kibana" (Security Specialists persona): is that still the stack?

### Track record and press
- [ ] **C**: IP Australia: $250,000/yr, NTT partnership, "150% speed increase". These come from 2021 press. Can they still be quoted publicly?
- [ ] **C**: DTA: "configure secure environments in under a day".
- [ ] **C**: InnovationAus 2021 finalist, and the MySec.TV interview: check the source links still work.
- [ ] **C**: **Partner logos** (AWS, IP Australia, AustCyber, Vocus, NTT, KBI.Media, DTA, Microsoft). Only NTT and DTA are backed up by press. Confirm the list and logo usage rights, then turn on `<PartnerGrid>`.
- [ ] **C**: Get permission from DTA / IP Australia to be named as clients on the new site.

### Messaging
- [ ] **C**: Tagline "Government-grade gateways. AI-grade vigilance." is provisional. Test it with 2–3 clients.
- [ ] **C**: Headline "AI-era threats need an AI-era defender." Same as above.

## 4. Assets to supply

- [ ] **C**: `public/downloads/Cynterra-Services-Overview.pdf`. The old URL redirects here, but the file is missing, so the link 404s right now.
- [ ] **C/D**: Redraw the architecture diagrams (Environ overview, per-gateway) in the new palette. These are the only real product visuals.
- [ ] **C**: Real product screenshots (dashboard, portal), sanitised. These would replace or supplement the illustrations above.
- [ ] **D**: Check that the Open Graph share image (`src/app/opengraph-image.tsx`) and favicon (`src/app/icon.tsx`) look right when shared.

## 5. Development and launch

- [ ] **D**: **Briefing form doesn't send anywhere.** `src/app/api/briefing/route.ts` only logs to the server. Wire it to an Australian-hosted mail provider or the CRM, and add rate limiting.
- [ ] **C**: Confirm that the mailboxes `info@`, `sales@` and `support@cynterra.ai` exist and are monitored.
- [ ] **C/D**: **Domain migration**: DNS cutover plan, 301s from cynterra.net for 6–12 months, email forwarding from @cynterra.net, and TLS/SPF/DKIM/DMARC on both domains.
- [ ] **C**: Tell existing agency clients to allow-list cynterra.ai (web and mail) *before* cutover. The on-site banner was removed, so this has to be a direct email.
- [ ] **D**: Run `npm run build` and `npm test` in CI; deploy to Vercel `syd1`.
- [ ] **D**: Accessibility pass (keyboard, screen reader, contrast in both themes).
- [ ] **D**: Remove every `<PlaceholderNote>` and resolve every "TODO: verify with Cynterra" once the items above are done (`grep -rn "PlaceholderNote\|TODO" src`).
- [ ] **D**: Submit the sitemap to Google Search Console once the site is live.

## 6. Design (in progress)

Done so far, to make the site look less templated:
- Removed the dot separators ("a · b · c"), coloured status dots, typewriter headline, spotlight glow and grid background
- Replaced the mono ALL-CAPS section labels with plain sentence-case labels
- Removed the "01 / 02 / Threat 03" numbering and the zero-padded stats
- Changed pill buttons to squarer ones, with flatter cards
- Changed fonts to Archivo (headings), IBM Plex Sans (body) and IBM Plex Mono (data only)
- Rebuilt the sample finding and the gateway panels as proper labelled tables
- Removed every em dash from site copy
- Removed the cynterra.net to cynterra.ai migration banner

Still worth doing:
- [ ] Real imagery or diagrams. The site is all text and cards right now. Real diagrams or photography would do the most to make it feel less generic.
- [ ] Fewer bordered cards on inner pages (/about, /sectors, /intelligence). Use more plain text sections and rules.
- [ ] Review the homepage section order and length.
