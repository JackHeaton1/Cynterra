import type { Metadata } from "next";
import { PlaceholderNote } from "@/components/placeholder-note";
import { Section, Eyebrow, SectionHeading } from "@/components/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cynterra's privacy policy.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <Section ariaLabelledby="privacy-heading" className="max-w-3xl">
      <Eyebrow>Legal</Eyebrow>
      <SectionHeading id="privacy-heading">Privacy Policy</SectionHeading>
      <div className="mt-8 space-y-6">
        <PlaceholderNote>
          Migrate the current privacy policy text from cynterra.net/privacy-policy, updated for
          the cynterra.ai domain and reviewed by legal. The route exists now so inbound links
          survive the migration.
        </PlaceholderNote>
        <div className="space-y-4 leading-relaxed text-muted">
          <p>
            Cynterra collects personal information only where necessary to respond to enquiries
            and deliver services, and handles it in accordance with the Australian Privacy Act
            and the Australian Privacy Principles.
          </p>
          <p>
            Information submitted through the briefing form is stored so that we can respond to
            your enquiry, and is not used for any other purpose.
          </p>
          <p>
            For privacy questions, contact{" "}
            <a href={`mailto:${site.emails.info}`} className="text-accent underline-offset-4 hover:underline">
              {site.emails.info}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
