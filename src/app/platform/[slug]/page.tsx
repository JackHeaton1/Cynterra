import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Plus } from "lucide-react";
import { AssuranceBadge } from "@/components/assurance-badge";
import { CtaSection } from "@/components/cta-section";
import { PlaceholderNote } from "@/components/placeholder-note";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.useCase,
    alternates: { canonical: `${site.url}/platform/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Platform", item: `${site.url}/platform` },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: `${site.url}/platform/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Section ariaLabelledby="service-heading" className="pb-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-faint">
          <Link href="/platform" className="hover:text-foreground">
            Platform
          </Link>{" "}
          / <span className="text-muted">{service.shortName}</span>
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <Eyebrow className="mb-0">Gateway service</Eyebrow>
          <AssuranceBadge status={service.assurance} />
        </div>
        <SectionHeading id="service-heading" className="mt-4">
          {service.name}
        </SectionHeading>
        <Lede>{service.useCase}</Lede>
        {!service.verified && service.verifyNote && (
          <div className="mt-6">
            <PlaceholderNote>{service.verifyNote}</PlaceholderNote>
          </div>
        )}
        <div className="mt-8 max-w-2xl space-y-4">
          {service.description.map((para) => (
            <p key={para.slice(0, 40)} className="leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </div>
      </Section>

      <Section ariaLabelledby="services-lists-heading" className="border-t border-border-subtle">
        <SectionHeading id="services-lists-heading" className="text-2xl sm:text-3xl">
          What&apos;s included
        </SectionHeading>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">
              Core services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {service.coreServices.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-status-assessed" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface p-6">
            <h3 className="text-sm font-semibold text-accent">
              Optional services
            </h3>
            {service.optionalServices.length > 0 ? (
              <ul className="mt-4 space-y-2.5">
                {service.optionalServices.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <Plus className="mt-0.5 size-4 shrink-0 text-faint" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-faint">
                No optional services are listed for this gateway.
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border-subtle bg-surface-raised p-6">
          <h3 className="text-sm font-semibold text-foreground">Deployment</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {service.deploymentNote}
          </p>
          <p className="mt-4 text-sm">
            <a
              href="/downloads/Cynterra-Services-Overview.pdf"
              className="text-sm text-muted underline-offset-4 hover:underline"
            >
              Download services overview (PDF)
            </a>
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="other-gateways-heading" className="border-t border-border-subtle">
        <SectionHeading id="other-gateways-heading" className="text-2xl sm:text-3xl">
          Other gateways
        </SectionHeading>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
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

      <CtaSection />
    </>
  );
}
