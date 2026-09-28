import type { Metadata } from "next";
import { AssuranceBadge } from "@/components/assurance-badge";
import { AssuranceStrip } from "@/components/assurance-strip";
import { BuildsOn } from "@/components/builds-on";
import { CtaSection } from "@/components/cta-section";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { getCapability } from "@/content/capabilities";
import { site } from "@/content/site";
import { CopilotMock } from "./copilot-mock";

export const metadata: Metadata = {
  title: "Intelligence Copilot",
  description:
    "Ask your own log data plain-language questions. A copilot for the analyst already using the dashboard, not a replacement for them.",
  alternates: { canonical: `${site.url}/copilot` },
};

export default function CopilotPage() {
  const cap = getCapability("intelligence-copilot");
  if (!cap) return null;

  return (
    <>
      <Section ariaLabelledby="copilot-heading" className="pb-10">
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow className="mb-0">{cap.tag}</Eyebrow>
          <AssuranceBadge status={cap.assurance} />
        </div>
        <SectionHeading id="copilot-heading" className="mt-4">
          {cap.name}
        </SectionHeading>
        <Lede>{cap.summary}</Lede>
      </Section>

      <AssuranceStrip />

      <Section ariaLabelledby="copilot-demo-heading">
        <SectionHeading id="copilot-demo-heading" className="text-2xl sm:text-3xl">
          How a question becomes a query
        </SectionHeading>
        <Lede>
          The interface below is an interactive illustration with sample data. It shows the
          shape of the workflow, not a live system.
        </Lede>
        <div className="mt-8">
          <CopilotMock />
        </div>
      </Section>

      <Section ariaLabelledby="copilot-detail-heading" className="border-t border-border-subtle">
        <SectionHeading id="copilot-detail-heading" className="text-2xl sm:text-3xl">
          A copilot, not an autopilot
        </SectionHeading>
        <div className="mt-6 max-w-2xl space-y-4">
          {cap.detail.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        <BuildsOn services={cap.buildsOn} className="mt-8" />
      </Section>

      <CtaSection heading="See the copilot against your own dashboards" />
    </>
  );
}
