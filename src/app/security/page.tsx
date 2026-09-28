import type { Metadata } from "next";
import { PlaceholderNote } from "@/components/placeholder-note";
import { Section, Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "Cynterra's security policy.",
  alternates: { canonical: `${site.url}/security` },
};

export default function SecurityPage() {
  return (
    <Section ariaLabelledby="security-heading" className="max-w-3xl">
      <Eyebrow>Legal</Eyebrow>
      <SectionHeading id="security-heading">Security Policy</SectionHeading>
      <div className="mt-8 space-y-6">
        <PlaceholderNote>
          Migrate the current security policy text from cynterra.net/security-policy, updated for
          the cynterra.ai domain and reviewed by the security team. The route exists now so
          inbound links survive the migration.
        </PlaceholderNote>
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            Cynterra&apos;s services are built to meet the Australian Signals Directorate&apos;s
            security requirements for PROTECTED-level data and are operated in compliance with
            the Australian Government ISM and PSPF.
          </p>
          <p>
            To report a security concern, contact{" "}
            <a href={`mailto:${site.emails.support}`} className="text-accent underline-offset-4 hover:underline">
              {site.emails.support}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
