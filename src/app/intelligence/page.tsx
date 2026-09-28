import type { Metadata } from "next";
import { AssuranceBadge } from "@/components/assurance-badge";
import { AssuranceStrip } from "@/components/assurance-strip";
import { CtaSection } from "@/components/cta-section";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { getCapability } from "@/content/capabilities";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Threat Intelligence Network",
  description:
    "Anonymised, aggregated pattern analysis across the gateway fleet. Opt-in per client, with the anonymisation methodology stated up front.",
  alternates: { canonical: `${site.url}/intelligence` },
};

const METHODOLOGY = [
  {
    name: "K-anonymity thresholds",
    body: "No pattern enters the shared pool until it has been observed across enough independent sources that no contribution can be traced back to a single participant.",
  },
  {
    name: "No client-identifying metadata",
    body: "Contributed patterns carry no agency names, network identifiers, IP ranges, tenancy details, or timing data precise enough to fingerprint a source.",
  },
  {
    name: "Opt-in per agency",
    body: "Participation is a deliberate, per-client decision, never a default. An agency that does not opt in contributes nothing and its data never touches the pool.",
  },
  {
    name: "Independent review",
    body: "The anonymisation pipeline is subject to independent review, so the methodology is verifiable rather than taken on trust.",
  },
];

export default function IntelligencePage() {
  const cap = getCapability("threat-intelligence-network");
  if (!cap) return null;

  return (
    <>
      <Section ariaLabelledby="intel-heading" className="pb-10">
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow className="mb-0">{cap.tag}</Eyebrow>
          <AssuranceBadge status={cap.assurance} />
        </div>
        <SectionHeading id="intel-heading" className="mt-4">
          {cap.name}
        </SectionHeading>
        <Lede>{cap.summary}</Lede>
      </Section>

      <AssuranceStrip />

      {/* Anonymisation methodology comes FIRST, never buried. */}
      <Section ariaLabelledby="methodology-heading">
        <Eyebrow>Governance first</Eyebrow>
        <SectionHeading id="methodology-heading" className="text-2xl sm:text-3xl">
          The anonymisation methodology, up front
        </SectionHeading>
        <Lede>
          For a classified-data client, the word &ldquo;anonymised&rdquo; alone is insufficient.
          This is the mechanism.
        </Lede>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {METHODOLOGY.map((m) => (
            <div key={m.name} className="rounded-lg border border-border-subtle bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="consent-heading" className="border-t border-border-subtle">
        <Eyebrow>Consent model</Eyebrow>
        <SectionHeading id="consent-heading" className="text-2xl sm:text-3xl">
          What you contribute, what you receive
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Contributed (if you opt in)
            </h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm text-muted marker:text-border-strong">
              <li>Anonymised attack signatures and traffic patterns that clear the k-anonymity threshold</li>
              <li>Aggregate detection statistics, stripped of all identifying metadata</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Received (by every participant)
            </h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm text-muted marker:text-border-strong">
              <li>Defensive signatures derived from patterns observed across the participating fleet</li>
              <li>Early warning when an attack seen elsewhere matches activity approaching your gateways</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted">
          An attack signature seen at one agency informs defences at another: intelligence no
          single agency could build alone. Cynterra&apos;s platform has described leveraging group
          intelligence over all deployments since 2021; the Threat Intelligence Network is that
          stated capability made explicit, governed, and consent-based.
        </p>
      </Section>

      <CtaSection heading="Review the governance model with your compliance team" />
    </>
  );
}
