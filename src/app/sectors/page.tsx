import type { Metadata } from "next";
import Link from "next/link";
import { AssuranceStrip } from "@/components/assurance-strip";
import { CtaSection } from "@/components/cta-section";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { personas } from "@/content/company";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Government, defence, and critical infrastructure: sector proof points and the four buyer perspectives Cynterra serves.",
  alternates: { canonical: `${site.url}/sectors` },
};

const SECTORS = [
  {
    name: "Government",
    proof: [
      "Selected by the Digital Transformation Agency for a new-generation Secure Internet Gateway, configuring secure environments in under a day.",
      "Protecting IP Australia's trademark and patent systems, a $250,000-per-year engagement in partnership with NTT Ltd, with a reported 150% speed increase on the agency's online applications.",
      "Compliant with the Australian Government ISM, PSPF, and Privacy Act.",
    ],
    link: { href: "/insights/dta-secure-internet-gateway", label: "Read the DTA announcement" },
  },
  {
    name: "Defence",
    proof: [
      "The gateway portfolio is built to process data up to and including PROTECTED classification, assessed under iRAP against ASD requirements.",
      "Single-tenanted architecture with security segmentation and segregation. If one environment is compromised, the others continue operating independently.",
      "Trialled with government departments to protect classified communications up to OFFICIAL: Sensitive and PROTECTED.",
    ],
    link: { href: "/assurance", label: "See the assurance detail" },
  },
  {
    name: "Critical Infrastructure",
    proof: [
      "Cloud-native gateways stand up and tear down per use case. No big-iron hardware lifecycle, no end-of-life, continual upgrades.",
      "Near-real-time monitoring and comprehensive logging of cloud and network traffic, with alerting on the organisation's secure portal.",
      "A modular approach that secures internal and connecting systems for a genuinely secure cloud ecosystem.",
    ],
    link: { href: "/platform", label: "Explore the platform" },
  },
];

export default function SectorsPage() {
  return (
    <>
      <Section ariaLabelledby="sectors-heading" className="pb-10">
        <Eyebrow>Sectors</Eyebrow>
        <SectionHeading id="sectors-heading">
          Built for the buyers who can&apos;t afford hype
        </SectionHeading>
        <Lede>
          Cynterra serves Australian government, defence, and critical infrastructure: audiences
          that forgive a plain website and do not forgive an overstated compliance claim.
        </Lede>
      </Section>

      <AssuranceStrip />

      <Section ariaLabelledby="sector-list-heading">
        <h2 id="sector-list-heading" className="sr-only">
          Sector proof points
        </h2>
        <div className="space-y-6">
          {SECTORS.map((sector) => (
            <article
              key={sector.name}
              className="rounded-lg border border-border-subtle bg-surface p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {sector.name}
              </h3>
              <ul className="mt-4 max-w-3xl divide-y divide-border-subtle">
                {sector.proof.map((p) => (
                  <li key={p.slice(0, 40)} className="py-3 text-sm leading-relaxed text-muted first:pt-0">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href={sector.link.href}
                  className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {sector.link.label}
                </Link>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="personas-heading" className="border-t border-border-subtle">
        <Eyebrow>Who we help</Eyebrow>
        <SectionHeading id="personas-heading" className="text-2xl sm:text-3xl">
          Four seats at the table
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {personas.map((p) => (
            <div key={p.title} className="rounded-lg border border-border-subtle bg-surface p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
