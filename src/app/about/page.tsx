import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PlaceholderNote } from "@/components/placeholder-note";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { Timeline } from "@/components/ui/timeline";
import { trackRecord } from "@/content/company";
import { leadership, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in Canberra in 2017, Cynterra builds cloud-native secure gateways for Australian government, defence, and critical infrastructure.",
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <Section ariaLabelledby="about-heading" className="pb-10">
        <Eyebrow>About</Eyebrow>
        <SectionHeading id="about-heading">
          Nine years securing the traffic that matters most
        </SectionHeading>
        <Lede>
          Cynterra was founded in {site.founded} by Drago Gvozdanovic and Paul Heaton, enterprise
          security professionals changing how modern organisations stay secure, with a flexible,
          adaptable, highly efficient network security fabric in place of big-iron hardware.
        </Lede>
      </Section>

      <Section ariaLabelledby="pivot-heading" className="pt-0">
        <SectionHeading id="pivot-heading" className="text-2xl sm:text-3xl">
          From gateways to sensor network
        </SectionHeading>
        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-muted">
          <p>
            The first chapter was replacing expensive hardware gateways with cloud-native ones:
            iRAP assessed, PROTECTED-capable, trusted by the Digital Transformation Agency and IP
            Australia. That infrastructure is still the foundation.
          </p>
          <p>
            The second chapter builds on a promise the platform has made since the beginning:
            leveraging group intelligence over all deployments, analysing data everywhere. Every
            gateway is a vantage point. The AI layer (detection, a plain-language analyst
            interface, and consent-based shared intelligence) sits on top of that existing
            footprint. It is not a separate product line, and this site never presents it as one.
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="values-heading" className="border-t border-border-subtle">
        <Eyebrow>What we hold to</Eyebrow>
        <SectionHeading id="values-heading" className="text-2xl sm:text-3xl">
          Vision, mission, values
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A world where flexibility, resources, and time are no longer the expected
              sacrifices of keeping an organisation secure.
            </p>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The highest level of security for corporate and government clients, delivered
              through frictionless, adaptable solutions.
            </p>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">Values</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Vigilance in pursuit of the highest grade of security, and continuous evolution of
              our solutions to keep that promise.
            </p>
          </div>
        </div>
      </Section>

      <Section ariaLabelledby="leadership-heading" className="border-t border-border-subtle">
        <Eyebrow>Leadership</Eyebrow>
        <SectionHeading id="leadership-heading" className="text-2xl sm:text-3xl">
          The team
        </SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {leadership.map((person) => (
            <div key={person.name} className="rounded-lg border border-border-subtle bg-surface p-6">
              <h3 className="font-display text-xl font-semibold text-foreground">{person.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {person.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <PlaceholderNote>
            Leadership photos were unavailable on the legacy site (empty image sources), and 2021
            press used different titles for Drago Gvozdanovic than the About page. Titles above
            follow the About page pending confirmation. See CLAIMS-TO-VERIFY.md.
          </PlaceholderNote>
        </div>
      </Section>

      {/*
        Partner grid intentionally not rendered.
        TODO: confirm current partner list and logo usage rights with Cynterra.
        the legacy page showed AWS · IP Australia · AustCyber · Vocus · NTT ·
        KBI.Media · DTA · Microsoft, but only NTT and DTA are corroborated.
        Component lives at src/components/partner-grid.tsx; see CLAIMS-TO-VERIFY.md.

        <PartnerGrid />
      */}

      <Section ariaLabelledby="history-heading" className="border-t border-border-subtle">
        <Eyebrow>Track record</Eyebrow>
        <SectionHeading id="history-heading" className="text-2xl sm:text-3xl">
          The story so far
        </SectionHeading>
        <div className="mt-12 max-w-2xl">
          <Timeline items={trackRecord.slice()} />
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
