import type { Metadata } from "next";
import Link from "next/link";
import { AssuranceBadge } from "@/components/assurance-badge";
import { CtaSection } from "@/components/cta-section";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { capabilities } from "@/content/capabilities";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Assurance",
  description:
    "Per-service iRAP assessment status, ASD/ISM/PSPF alignment, and a plain-language data sovereignty Q&A. Compliance as evidence, not decoration.",
  alternates: { canonical: `${site.url}/assurance` },
};

const SOVEREIGNTY_QA = [
  {
    q: "Where does log data live?",
    a: "Each customer's gateway logs to an organisation-specific repository. Log data does not leave Australian-controlled infrastructure.",
  },
  {
    q: "Where does AI inference happen?",
    a: "Inference for the AI capabilities runs within Australian-controlled infrastructure, against the customer's own repository. Customer log data is not sent to overseas AI services.",
  },
  {
    q: "Does my data enter the Threat Intelligence Network automatically?",
    a: "No. Participation is opt-in per client. Without an explicit opt-in, nothing derived from your deployment enters the shared pool, and what does enter is anonymised under the stated k-anonymity methodology.",
  },
  {
    q: "What does PROTECTED-capable actually mean?",
    a: "The platform is built to process data up to and including the Australian Government's PROTECTED classification, and the gateway services have been assessed under iRAP (the ASD/ACSC-run Information Security Registered Assessors Program) against those requirements. It is a statement about assessed capability, not a certification: iRAP produces an assessment report your agency's authorising officer uses to make their own risk decision.",
  },
];

export default function AssurancePage() {
  return (
    <>
      <Section ariaLabelledby="assurance-heading" className="pb-10">
        <Eyebrow>Assurance</Eyebrow>
        <SectionHeading id="assurance-heading">Compliance as evidence</SectionHeading>
        <Lede>
          Assessment status is stated per service, never as one global badge. A visible boundary
          between what is assessed today and what is in the assessment pipeline.
        </Lede>
      </Section>

      <Section ariaLabelledby="status-table-heading" className="pt-0">
        <SectionHeading id="status-table-heading" className="text-2xl sm:text-3xl">
          Per-service assessment status
        </SectionHeading>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border-strong">
                <th scope="col" className="py-3 pr-4 text-xs font-semibold text-faint">
                  Service
                </th>
                <th scope="col" className="py-3 pr-4 text-xs font-semibold text-faint">
                  Type
                </th>
                <th scope="col" className="py-3 text-xs font-semibold text-faint">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.slug} className="border-b border-border-subtle">
                  <th scope="row" className="py-3 pr-4 font-normal">
                    <Link href={`/platform/${s.slug}`} className="text-foreground hover:text-accent">
                      {s.name}
                    </Link>
                  </th>
                  <td className="py-3 pr-4 text-muted">Gateway service</td>
                  <td className="py-3">
                    <AssuranceBadge status={s.assurance} />
                  </td>
                </tr>
              ))}
              {capabilities.map((c) => (
                <tr key={c.slug} className="border-b border-border-subtle">
                  <th scope="row" className="py-3 pr-4 font-normal">
                    <Link href={c.href} className="text-foreground hover:text-accent">
                      {c.name}
                    </Link>
                  </th>
                  <td className="py-3 pr-4 text-muted">AI capability</td>
                  <td className="py-3">
                    <AssuranceBadge status={c.assurance} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          The existing iRAP assessment covers the existing gateway services. The four AI
          capabilities are new services and are in the assessment pipeline. This site will not
          describe them as assessed until a completed assessment says so.
        </p>
      </Section>

      <Section ariaLabelledby="alignment-heading" className="border-t border-border-subtle">
        <Eyebrow>Framework alignment</Eyebrow>
        <SectionHeading id="alignment-heading" className="text-2xl sm:text-3xl">
          ASD, ISM, PSPF, Privacy Act
        </SectionHeading>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Built to PROTECTED-level requirements
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The gateway portfolio is built to process data up to and including PROTECTED
              classification, meeting the Australian Signals Directorate&apos;s security
              requirements for that level. The platform is a security-event-driven system that
              automates compliance against best-practice guidelines and corporate security
              policy.
            </p>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Governance and legislative compliance
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Compliant with the Australian Government Information Security Manual (ISM), the
              Protective Security Policy Framework (PSPF), and the Privacy Act. Cynterra&apos;s
              work with government is supported by the Digital Transformation Agency.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          A note on language: iRAP is an assessment, not a certification. There is no such thing
          as &ldquo;iRAP certified.&rdquo; This site says &ldquo;iRAP assessed&rdquo; and
          &ldquo;PROTECTED-capable&rdquo; because those are the accurate terms.
        </p>
      </Section>

      <Section ariaLabelledby="sovereignty-heading" className="border-t border-border-subtle">
        <Eyebrow>Data sovereignty</Eyebrow>
        <SectionHeading id="sovereignty-heading" className="text-2xl sm:text-3xl">
          The questions a CISO asks first
        </SectionHeading>
        <dl className="mt-10 max-w-3xl space-y-8">
          {SOVEREIGNTY_QA.map((item) => (
            <div key={item.q} className="border-l-2 border-accent pl-5">
              <dt className="font-display text-lg font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section ariaLabelledby="architecture-heading" className="border-t border-border-subtle">
        <Eyebrow>Security architecture</Eyebrow>
        <SectionHeading id="architecture-heading" className="text-2xl sm:text-3xl">
          How the platform is put together
        </SectionHeading>
        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            Every gateway is single-tenanted: your deployment shares nothing with another
            customer&apos;s. Security is delivered by combining network and application security,
            security segmentation and segregation, application whitelisting, and encryption at
            rest and in flight.
          </p>
          <p>
            Architecture tailors security per application: if one environment is compromised, the
            others continue to operate independently, reducing organisational attack surface.
            Near-real-time monitoring and comprehensive logging of cloud and network traffic feed
            an organisation-specific repository, with alerting and reporting surfaced on the
            customer&apos;s secure portal.
          </p>
        </div>
      </Section>

      <CtaSection heading="Request the assessment documentation" />
    </>
  );
}
