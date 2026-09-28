import type { Persona, Pillar, RetentionTier, TrackRecordItem } from "./types";

export const personas: Persona[] = [
  {
    title: "CISOs & CIOs",
    body: "Hardware gateways cost potentially millions, with long lead times, and keeping pace with evolving threats has historically been high-cost and high-risk. Cloud-based cost is fractional, implementation is far faster, and there is no end-of-life: the platform is continually upgraded.",
  },
  {
    title: "Security Specialists",
    body: "The platform talks to your SIEM. Proprietary aggregators and Kibana consolidate security and risk data into digestible visuals, and custom pattern-matching searches surface threats. It is as much an insight product as a security product.",
  },
  {
    title: "Cloud Architects",
    body: "Cloud is designed to be open, which is exactly what makes securing it hard. Cynterra's modular approach secures internal and connecting systems, for a genuinely secure ecosystem within the cloud.",
  },
  {
    title: "Network Architects",
    body: "Stand up and tear down cost-effective cloud gateways for any use case, retaining full control and visibility through an intuitive dashboard while maximising security performance for your organisation.",
  },
];

export const pillars: Pillar[] = [
  {
    name: "Security",
    body: "Best-of-breed technologies combined with internally developed proprietary architecture. The latest threat intelligence is collated and ingested continuously, so the customer holds a current security posture, with near-real-time monitoring and comprehensive logging of cloud and network traffic.",
  },
  {
    name: "Advanced Threat Protection",
    body: "Threat intelligence, malware analysis, prioritised analysis, and remediation, delivered by combining network and application security, security segmentation and segregation, application whitelisting, and encryption at rest and in flight.",
  },
  {
    name: "Compliance Management",
    body: "Built to ASD PROTECTED requirements and compliant with the Australian Government ISM, PSPF, and Privacy Act. A security-event-driven system automates compliance against best-practice guidelines and corporate security policy.",
  },
  {
    name: "Learning through Visibility",
    body: "Log data, network alerts, and threat information are collected, collated, and enriched inside a secure analytical platform. Alerting and reporting surface on the customer's secure portal in near real time, with change and problem management tracked in the portal for full service transparency.",
  },
];

/**
 * The legacy site stated retention three different ways without saying they
 * are different things. Presented here as a structured model, each tier
 * labelled with its source. TODO: verify with Cynterra; see CLAIMS-TO-VERIFY.md.
 */
export const retentionTiers: RetentionTier[] = [
  {
    label: "Hot searchable window",
    statement:
      "Detailed activity searchable in the dashboard for the previous 30 days, with additional days available on request.",
    source: "Stated on the Secure Internet Gateway service page.",
    verified: false,
  },
  {
    label: "Contract-term searchability",
    statement:
      "Log data searchable across the organisational dataset for the duration of the contract.",
    source: "Stated on the AWS, API, and Office 365 gateway pages.",
    verified: false,
  },
  {
    label: "Long-term retention",
    statement: "Seven years of data available on demand.",
    source: "Stated on the Technology page.",
    verified: false,
  },
];

export const trackRecord: TrackRecordItem[] = [
  {
    year: "2017",
    date: "2017",
    title: "Cynterra founded",
    body: "Founded by Drago Gvozdanovic and Paul Heaton to change how government and enterprise stay secure, replacing big-iron hardware gateways with a flexible, cloud-native security fabric.",
  },
  {
    year: "2021",
    date: "21 April 2021",
    title: "IP Australia contract, with NTT",
    body: "A $250,000-per-year deal providing cloud-based web gateways for IP Australia's trademark and patent systems, in partnership with NTT Ltd providing 24/7 SOC monitoring. Cynterra reported a 150% speed increase on IP Australia's online applications versus non-cloud solutions.",
    href: "/insights/ip-australia-gateway",
  },
  {
    year: "2021",
    date: "26 April 2021",
    title: "Digital Transformation Agency contract",
    body: "Selected by the DTA for a new-generation Secure Internet Gateway, the product of years of R&D, letting the agency configure secure environments in under a day.",
    href: "/insights/dta-secure-internet-gateway",
  },
  {
    year: "2021",
    date: "10 October 2021",
    title: "InnovationAus 2021 Awards finalist",
    body: "Finalist in the Cybersecurity category of the InnovationAus 2021 Awards for Excellence, recognised for security compliance, data protection, visibility, and threat protection for government and private organisations.",
    href: "/insights/innovationaus-2021-finalist",
  },
  {
    year: "Now",
    date: "2026",
    title: "The AI platform",
    body: "The gateway fleet becomes a sensor network: AI-era detection, a plain-language analyst interface, and consent-based shared threat intelligence, built on the infrastructure agencies already run.",
    href: "/ai-defence",
  },
];
