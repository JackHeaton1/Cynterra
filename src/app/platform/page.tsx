import type { Metadata } from "next";
import { AssuranceBadge } from "@/components/assurance-badge";
import { AssuranceStrip } from "@/components/assurance-strip";
import { CtaSection } from "@/components/cta-section";
import { PlaceholderNote } from "@/components/placeholder-note";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { HoverEffect } from "@/components/ui/hover-effect";
import { pillars, retentionTiers } from "@/content/company";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "The Cynterra secure gateway portfolio: single-tenanted, highly available gateways built to PROTECTED-level requirements, all reporting to one management console.",
  alternates: { canonical: `${site.url}/platform` },
};

export default function PlatformPage() {
  return (
    <>
      <Section ariaLabelledby="platform-heading" className="pb-10">
        <Eyebrow>Platform</Eyebrow>
        <SectionHeading id="platform-heading">
          The gateway portfolio, and the sensor layer it has become
        </SectionHeading>
        <Lede>
          Every Cynterra gateway shares one architecture: single-tenanted, highly available,
          multi-instance, deployable to any geographic, throughput, network-separation, or
          architectural requirement. Built to process data up to and including PROTECTED
          classification.
        </Lede>
      </Section>

      <AssuranceStrip />

      <Section ariaLabelledby="portfolio-grid-heading">
        <SectionHeading id="portfolio-grid-heading" className="text-2xl sm:text-3xl">
          Seven gateways
        </SectionHeading>
        <HoverEffect
          className="mt-8"
          items={services.map((s) => ({
            href: `/platform/${s.slug}`,
            title: s.name,
            description: s.useCase,
            footer: <AssuranceBadge status={s.assurance} />,
          }))}
        />
      </Section>

      <Section ariaLabelledby="console-heading" className="border-t border-border-subtle">
        <Eyebrow>One console</Eyebrow>
        <SectionHeading id="console-heading" className="text-2xl sm:text-3xl">
          Oversight, control, and assurance in one place
        </SectionHeading>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-muted leading-relaxed">
            Every gateway logs to an organisation-specific repository, feeding centralised
            automated reporting. Analytical engines enrich the data for presentation on secure
            Kibana dashboards, backed by Elasticsearch. All gateways report to a single
            management console: oversight, control, and assurance across multiple gateways in
            multiple cloud environments.
          </p>
          <p className="text-muted leading-relaxed">
            The platform talks to your SIEM. Proprietary aggregators consolidate security and
            risk data into digestible visuals, with custom pattern-matching searches to surface
            threats. Change and problem management are built into the portal, with requests
            tracked and actions recorded for service transparency. Gateways can be bundled or
            deployed in a multi-gateway architectural model.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="pillars-heading" className="border-t border-border-subtle">
        <Eyebrow>Four pillars of protection</Eyebrow>
        <SectionHeading id="pillars-heading" className="text-2xl sm:text-3xl">
          What every deployment stands on
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.name} className="rounded-lg border border-border-subtle bg-surface p-6">
              <p className="text-sm font-semibold text-accent">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="retention-heading" className="border-t border-border-subtle">
        <Eyebrow>Data retention</Eyebrow>
        <SectionHeading id="retention-heading" className="text-2xl sm:text-3xl">
          The retention model
        </SectionHeading>
        <Lede>
          Retention operates at three distinct tiers. Each is stated below with its source.
        </Lede>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-strong">
                <th scope="col" className="py-3 pr-4 text-xs font-semibold text-faint">
                  Tier
                </th>
                <th scope="col" className="py-3 pr-4 text-xs font-semibold text-faint">
                  Statement
                </th>
                <th scope="col" className="py-3 text-xs font-semibold text-faint">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {retentionTiers.map((t) => (
                <tr key={t.label} className="border-b border-border-subtle align-top">
                  <th scope="row" className="py-3 pr-4 font-medium text-foreground">
                    {t.label}
                  </th>
                  <td className="py-3 pr-4 text-muted">{t.statement}</td>
                  <td className="py-3 text-xs text-faint">{t.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <PlaceholderNote>
            The legacy site stated these three retention figures on different pages without
            relating them. The tier labels above are our reading (hot window vs. contract-term
            searchability vs. long-term retention) and require confirmation by Cynterra.
          </PlaceholderNote>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
