import type { AiCapability } from "./types";

/**
 * The four AI-era capabilities.
 *
 * CREDIBILITY RULE (§5.2, enforced by scripts/verify-content.ts in CI):
 * these are NEW services. The existing iRAP assessment covers the existing
 * gateway services only. No capability here may ever carry the status
 * 'assessed' without a verified, completed assessment; the CI check fails
 * the build if one does.
 */

export const capabilities: AiCapability[] = [
  {
    slug: "shadow-ai-visibility",
    tag: "Detection",
    name: "Shadow AI Visibility",
    assurance: "in-assessment",
    summary:
      "See every AI tool your traffic already touches. Fingerprint flows to consumer AI services crossing your gateways, and flag unsanctioned data egress to public AI endpoints.",
    detail: [
      "Cynterra gateways already inspect the traffic your organisation sends to the internet. Shadow AI Visibility applies purpose-built fingerprinting to that same traffic to identify flows to consumer AI tools (ChatGPT, Claude, Gemini, and unsanctioned copilots) whether or not they are on an allow-list.",
      "When corporate data leaves for a public AI endpoint that policy does not sanction, the gateway flags it. Security teams get an inventory of actual AI usage across the organisation, not a survey of what staff say they use.",
      "This is not a new box on your network. It is a new lens on the Web Filtering and SSL Inspection services already deployed on every Cynterra gateway.",
    ],
    buildsOn: ["Web Filtering", "SSL Inspection", "Central Log Management"],
    href: "/ai-defence",
  },
  {
    slug: "ai-enabled-attack-defence",
    tag: "Defense",
    name: "AI-Enabled Attack Defence",
    assurance: "in-assessment",
    summary:
      "Detect the four attack patterns AI has changed: AI-generated phishing, prompt-injection payloads, model-assisted reconnaissance, and anomalous API activity consistent with agentic tooling.",
    detail: [
      "Attackers are using the same generation of AI tools as everyone else. The result is not a new category of magic attack. It is four concrete, observable changes in traffic that signature-based tools were never trained on.",
      "AI-generated phishing and social engineering: fluent, personalised lures at volume, without the linguistic tells filters historically caught. Prompt-injection payloads: crafted inputs aimed at LLMs your agency has deployed, hidden in documents, emails, and web content crossing the gateway. Model-assisted reconnaissance: probing patterns whose breadth and pacing indicate automated target research. Anomalous API call patterns: sequences consistent with agentic attack tooling driving interactions faster and more systematically than a human operator.",
      "Each is detected at the gateway, the vantage point that sees the traffic regardless of which endpoint or mailbox it targets.",
    ],
    buildsOn: [
      "Intrusion Protection System (IPS)",
      "Anti-Malware Protection",
      "Application Control Firewall",
    ],
    href: "/ai-defence",
  },
  {
    slug: "intelligence-copilot",
    tag: "Interface",
    name: "Intelligence Copilot",
    assurance: "in-assessment",
    summary:
      "Ask your own log data plain-language questions. A copilot for the analyst already using the dashboard, not a replacement for them.",
    detail: [
      "Cynterra dashboards already consolidate gateway telemetry through the Analytical Engine into Kibana, backed by Elasticsearch. The Intelligence Copilot adds a natural-language layer over that same data: an analyst types “show me unusual outbound traffic from Finance last week” instead of building the query by hand.",
      "The copilot translates the question into the underlying search, runs it against the organisation's own repository, and returns the results in the same dashboard the analyst already trusts, with the generated query visible, so the analyst can inspect, refine, and learn from it.",
      "It is a faster interface to existing capability, not an autonomous system. Every result is the analyst's own data, and every action remains theirs to take.",
    ],
    buildsOn: ["Analytical Engine with search", "Customised Reporting", "24×7 Portal"],
    href: "/copilot",
  },
  {
    slug: "threat-intelligence-network",
    tag: "Intelligence",
    name: "Threat Intelligence Network",
    assurance: "in-assessment",
    summary:
      "Anonymised, aggregated pattern analysis across the gateway fleet. An attack signature seen at one agency informs defences at another. Opt-in per client.",
    detail: [
      "Every Cynterra gateway is a vantage point. Aggregated across the fleet, the patterns they observe become threat intelligence no single agency could build alone: an attack signature seen against one deployment hardens every participating deployment.",
      "Participation is opt-in per client, and contribution is governed by a stated anonymisation methodology: k-anonymity thresholds before any pattern enters the shared pool, no client-identifying metadata, and independent review of the pipeline. What each participant contributes and what they receive back is documented plainly before they join.",
      "The current Cynterra platform already describes leveraging group intelligence over all deployments. The Threat Intelligence Network is that stated capability made explicit, governed, and consent-based. Not a new idea bolted on.",
    ],
    buildsOn: ["Central Log Management", "Alert Management", "Analytical Engine with search"],
    href: "/intelligence",
  },
];

export function getCapability(slug: string): AiCapability | undefined {
  return capabilities.find((c) => c.slug === slug);
}
