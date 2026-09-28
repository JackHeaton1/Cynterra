import Link from "next/link";
import { ArcMotif } from "@/components/logo";
import { site } from "@/content/site";

export function CtaSection({
  heading = "See it against your own environment",
  body = "A briefing walks your security and architecture teams through the platform, the assessment status of each service, and what deployment looks like for your agency.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section aria-label="Request a briefing" className="border-t border-border-subtle bg-surface">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden px-5 py-20 sm:px-8">
        <ArcMotif className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-foreground opacity-[0.04]" />
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/briefing"
            className="rounded-md bg-cta px-6 py-3 text-sm font-medium text-cta-contrast transition-opacity hover:opacity-90"
          >
            {site.cta}
          </Link>
          <a href={site.phoneHref} className="text-sm text-muted hover:text-foreground">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
