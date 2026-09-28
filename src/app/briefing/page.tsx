import type { Metadata } from "next";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { site } from "@/content/site";
import { BriefingForm } from "./briefing-form";

export const metadata: Metadata = {
  title: "Request a briefing",
  description:
    "Arrange a briefing for your security, architecture, or procurement team: platform, assessment status, and deployment for your agency.",
  alternates: { canonical: `${site.url}/briefing` },
};

export default function BriefingPage() {
  return (
    <Section ariaLabelledby="briefing-heading">
      <Eyebrow>Briefing</Eyebrow>
      <SectionHeading id="briefing-heading">Request a briefing</SectionHeading>
      <Lede>
        A briefing walks your security and architecture teams through the gateway platform, the
        AI capabilities and their assessment status, and what deployment looks like for your
        organisation. No trials, no sign-ups. Just a conversation with the people who run the
        platform.
      </Lede>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <BriefingForm />

        <aside aria-label="Contact details" className="space-y-6">
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h2 className="text-sm font-semibold text-foreground">
              Direct contact
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-muted">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="hover:text-foreground">
                  {site.phone}
                </a>
              </p>
            </address>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h2 className="text-sm font-semibold text-foreground">Email</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${site.emails.sales}`} className="hover:text-foreground">
                  {site.emails.sales}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.emails.info}`} className="hover:text-foreground">
                  {site.emails.info}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.emails.support}`} className="hover:text-foreground">
                  {site.emails.support}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-faint">
              During the domain transition, {site.legacyEmails.info} continues to work and
              forwards to the new addresses.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
