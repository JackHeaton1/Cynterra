import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SensorTabs } from "@/components/sensor-tabs";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Timeline } from "@/components/ui/timeline";
import { AssuranceStrip } from "@/components/assurance-strip";
import { AssuranceBadge } from "@/components/assurance-badge";
import { BuildsOn } from "@/components/builds-on";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/motion";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { capabilities } from "@/content/capabilities";
import { trackRecord } from "@/content/company";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: site.url },
};

const THREE_IDEAS = [
  {
    title: "Detection",
    body: "AI models trained on gateway traffic spot shadow AI usage and AI-enabled attacks that signature-based tools miss.",
    href: "/ai-defence",
  },
  {
    title: "Interface",
    body: "Analysts query their own log data in plain language instead of writing SIEM queries.",
    href: "/copilot",
  },
  {
    title: "Intelligence",
    body: "Patterns anonymised and aggregated across the client base become threat intelligence no single agency could build alone.",
    href: "/intelligence",
  },
];

/** What one gateway observes, and what the platform does with it. */
function SensorPanel({ title, rows }: { title: string; rows: [signal: string, handling: string][] }) {
  return (
    <div className="rounded-lg border border-border-subtle bg-surface">
      <p className="max-w-none border-b border-border-subtle px-5 py-3 text-sm font-semibold text-foreground">
        {title}
      </p>
      <table className="w-full text-left text-sm">
        <thead className="sr-only">
          <tr>
            <th scope="col">Signal</th>
            <th scope="col">Handling</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {rows.map(([signal, handling]) => (
            <tr key={signal}>
              <th scope="row" className="w-1/2 px-5 py-3 font-normal text-muted">
                {signal}
              </th>
              <td className="px-5 py-3 text-foreground">{handling}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="max-w-none border-t border-border-subtle px-5 py-3 text-xs text-faint">
        All events log to the organisation&apos;s own repository for analysis.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: the reframe in one screen */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden">
        <BackgroundBeams />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 md:pb-24 md:pt-28">
          <p className="text-sm font-semibold text-accent">
            Secure gateways, built in Canberra since {site.founded}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            AI-era threats need an AI-era defender.
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-foreground">
            <EncryptedText
              text="Government-grade gateways. AI-grade vigilance."
              revealDelayMs={35}
              encryptedClassName="text-faint"
            />
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Delivered through the gateway infrastructure Australian government already trusts.
            Every Cynterra gateway is a vantage point. The AI layer sits on top of the
            iRAP-assessed footprint your agency already runs, not beside it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/briefing"
              className="rounded-md bg-cta px-6 py-3 text-sm font-medium text-cta-contrast transition-opacity hover:opacity-90"
            >
              {site.cta}
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted hover:text-foreground"
            >
              The gateway platform <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-16 grid divide-y divide-border-subtle border-y border-border-subtle sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {THREE_IDEAS.map((idea, i) => (
              <Reveal
                key={idea.title}
                delay={i * 0.08}
                className="sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <Link href={idea.href} className="group block h-full py-6">
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                    {idea.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{idea.body}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                    Learn more <ArrowRight className="size-3.5" aria-hidden />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              { value: "2017", label: "Founded in Canberra" },
              { value: "7", label: "Gateway services, managed from one console" },
              { value: "PROTECTED", label: "Capable, with iRAP-assessed gateways" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col last:col-span-2 sm:last:col-span-1">
                <dt className="order-last mt-1 text-sm text-faint">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <AssuranceStrip />

      {/* Gateways as sensor network */}
      <Section ariaLabelledby="sensor-heading">
        <Eyebrow>The platform is the sensor network</Eyebrow>
        <SectionHeading id="sensor-heading">
          The gateways you already run are the vantage points
        </SectionHeading>
        <Lede>
          Cynterra&apos;s current platform already states it: group intelligence is leveraged over
          all deployments, analysing data everywhere. The AI layer is the fulfilment of that
          promise: every gateway generating traffic and log data becomes a sensor for AI-era
          defence.
        </Lede>
        <div className="mt-14">
          <SensorTabs
            items={[
              {
                label: "Internet",
                title: "Secure Internet Gateway",
                description:
                  "Fully redundant internet connectivity for end users and application services. Web Filtering and SSL Inspection here become the substrate for Shadow AI Visibility. The same inspection, a new lens.",
                panel: (
                  <SensorPanel
                    title="What the Secure Internet Gateway sees"
                    rows={[
                      ["Outbound web requests", "Categorised by web filter"],
                      ["Encrypted sessions", "Inspected and fingerprinted"],
                      ["Traffic to AI services", "Checked against policy"],
                    ]}
                  />
                ),
              },
              {
                label: "Cloud",
                title: "Cloud gateways: AWS, Azure, Google",
                description:
                  "Policy enforced to the public cloud, within it, and between clouds. Anomalous API call patterns consistent with agentic tooling surface here first.",
                panel: (
                  <SensorPanel
                    title="What the cloud gateways see"
                    rows={[
                      ["Cloud API calls", "Baselined and sequence-modelled"],
                      ["Flows between clouds", "Checked against policy"],
                      ["Anomalous activity", "Scored and raised as alerts"],
                    ]}
                  />
                ),
              },
              {
                label: "API",
                title: "API Gateway",
                description:
                  "Optimised for high-speed transactional application data, and for spotting machine-driven interaction patterns that no human operator produces.",
                panel: (
                  <SensorPanel
                    title="What the API Gateway sees"
                    rows={[
                      ["Transaction rates", "Profiled for machine pacing"],
                      ["Reconnaissance probes", "Detected and prioritised"],
                      ["Request payloads", "Screened for injection"],
                    ]}
                  />
                ),
              },
              {
                label: "Office 365",
                title: "Office 365 Gateway",
                description:
                  "Corporate email filtered for malicious content. The first line against AI-generated phishing that reads like a colleague wrote it.",
                panel: (
                  <SensorPanel
                    title="What the Office 365 Gateway sees"
                    rows={[
                      ["Inbound mail", "Screened by phishing model"],
                      ["Attachments", "Detonated and scanned"],
                      ["Lure writing style", "Scored for analyst review"],
                    ]}
                  />
                ),
              },
            ]}
          />
        </div>
      </Section>

      {/* Four AI capabilities */}
      <Section ariaLabelledby="capabilities-heading" className="border-t border-border-subtle">
        <Eyebrow>Four capabilities, one footprint</Eyebrow>
        <SectionHeading id="capabilities-heading">The AI layer</SectionHeading>
        <Lede>
          Not a separate product line. Each capability is a new lens on infrastructure already
          deployed, and each carries its own assessment status, stated plainly.
        </Lede>
        <BentoGrid className="mt-12">
          {capabilities.map((cap) => (
            <BentoCard key={cap.slug}>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold text-accent">
                  {cap.tag}
                </p>
                <AssuranceBadge status={cap.assurance} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                <Link href={cap.href} className="hover:text-accent">
                  {cap.name}
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cap.summary}</p>
              <BuildsOn services={cap.buildsOn} className="mt-4" />
            </BentoCard>
          ))}
        </BentoGrid>
      </Section>

      {/* Portfolio strip */}
      <Section ariaLabelledby="portfolio-heading" className="border-t border-border-subtle">
        <Eyebrow>The gateway portfolio</Eyebrow>
        <SectionHeading id="portfolio-heading">Seven gateways, one console</SectionHeading>
        <Lede>
          Single-tenanted, highly available, multi-instance, and deployable to any geographic,
          throughput, network-separation, or architectural requirement, all reporting to one
          management console.
        </Lede>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/platform/${s.slug}`}
                className="flex h-full items-center justify-between gap-3 rounded-lg border border-border-subtle bg-surface shadow-xs px-4 py-3 transition-colors hover:border-border-strong"
              >
                <span className="text-sm text-foreground">{s.shortName}</span>
                <AssuranceBadge status={s.assurance} />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Track record */}
      <Section ariaLabelledby="track-heading" className="border-t border-border-subtle">
        <Eyebrow>Track record</Eyebrow>
        <SectionHeading id="track-heading">Trusted where it counts</SectionHeading>
        <TracingBeam className="mx-0 mt-12 max-w-2xl pl-8 md:pl-0">
          <Timeline items={trackRecord.slice()} />
        </TracingBeam>
      </Section>

      <CtaSection />
    </>
  );
}
