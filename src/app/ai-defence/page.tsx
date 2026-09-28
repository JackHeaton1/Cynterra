import type { Metadata } from "next";
import { AssuranceBadge } from "@/components/assurance-badge";
import { AssuranceStrip } from "@/components/assurance-strip";
import { BuildsOn } from "@/components/builds-on";
import { CtaSection } from "@/components/cta-section";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Defence",
  description:
    "Shadow AI Visibility and AI-Enabled Attack Defence: concrete, named AI-era threats detected at the gateways your agency already runs.",
  alternates: { canonical: `${site.url}/ai-defence` },
};

/* Illustrative only, not a real event. See next_steps.md before launch. */
const SAMPLE_FINDING: [label: string, value: string][] = [
  ["Time", "2026-07-14 09:41:07"],
  ["Direction", "Egress"],
  ["Source", "finance-vlan"],
  ["Destination", "api.openai.com"],
  ["Classification", "Unsanctioned AI endpoint"],
  ["Policy action", "Flag and log"],
  ["Payload", "2.1 MB upload"],
  ["Matched", "Document-content signature"],
];

const MONO_FIELDS = new Set(["Time", "Source", "Destination"]);

const THREATS = [
  {
    name: "AI-generated phishing and social engineering",
    body: "Fluent, personalised lures produced at volume, without the linguistic tells that email filters historically caught. Detected at the Office 365 gateway, where mail flow is already screened.",
  },
  {
    name: "Prompt-injection payloads",
    body: "Crafted inputs aimed at LLMs your agency has deployed, hidden in documents, emails, and web content that crosses the gateway before it ever reaches the model.",
  },
  {
    name: "Model-assisted reconnaissance",
    body: "Probing whose breadth, pacing, and systematic coverage indicate automated target research rather than a human operator. Visible in gateway traffic baselines.",
  },
  {
    name: "Anomalous API call patterns",
    body: "Interaction sequences consistent with agentic attack tooling: faster, more systematic, and differently shaped than human-driven activity. Surfaced at the API and cloud gateways.",
  },
];

export default function AiDefencePage() {
  const detection = capabilities.find((c) => c.slug === "shadow-ai-visibility");
  const defence = capabilities.find((c) => c.slug === "ai-enabled-attack-defence");

  return (
    <>
      <Section ariaLabelledby="ai-defence-heading" className="pb-10">
        <Eyebrow>AI Defence</Eyebrow>
        <SectionHeading id="ai-defence-heading">
          Concrete threats, detected where the traffic already flows
        </SectionHeading>
        <Lede>
          No vague claims about &ldquo;AI attacks.&rdquo; Four named, observable threat patterns,
          each detected at the gateway, the vantage point that sees the traffic regardless of
          which endpoint it targets.
        </Lede>
      </Section>

      <AssuranceStrip />

      {detection && (
        <Section ariaLabelledby="shadow-ai-heading">
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow className="mb-0">{detection.tag}</Eyebrow>
            <AssuranceBadge status={detection.assurance} />
          </div>
          <SectionHeading id="shadow-ai-heading" className="mt-4 text-2xl sm:text-3xl">
            {detection.name}
          </SectionHeading>
          <div className="mt-6 max-w-2xl space-y-4">
            {detection.detail.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <figure className="mt-10 max-w-2xl rounded-lg border border-border-subtle bg-surface">
            <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border-subtle px-5 py-3">
              <span className="text-sm font-semibold text-foreground">Example finding</span>
              <span className="text-xs text-faint">Illustration, not live data</span>
            </figcaption>
            <dl className="grid grid-cols-[8.5rem_1fr] gap-x-4 gap-y-2.5 px-5 py-4 text-sm">
              {SAMPLE_FINDING.map(([label, value]) => (
                <div key={label} className="contents">
                  <dt className="text-faint">{label}</dt>
                  <dd
                    className={
                      MONO_FIELDS.has(label)
                        ? "break-all font-mono text-[13px] text-foreground"
                        : "text-foreground"
                    }
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
          <BuildsOn services={detection.buildsOn} className="mt-6" />
        </Section>
      )}

      {defence && (
        <Section ariaLabelledby="attack-defence-heading" className="border-t border-border-subtle">
          <div className="flex flex-wrap items-center gap-4">
            <Eyebrow className="mb-0">{defence.tag}</Eyebrow>
            <AssuranceBadge status={defence.assurance} />
          </div>
          <SectionHeading id="attack-defence-heading" className="mt-4 text-2xl sm:text-3xl">
            {defence.name}
          </SectionHeading>
          <div className="mt-6 max-w-2xl space-y-4">
            <p className="leading-relaxed text-muted">{defence.detail[0]}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {THREATS.map((t) => (
              <div key={t.name} className="rounded-lg border border-border-subtle bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
          <BuildsOn services={defence.buildsOn} className="mt-8" />
        </Section>
      )}

      <CtaSection heading="Walk through the detection models with your security team" />
    </>
  );
}
