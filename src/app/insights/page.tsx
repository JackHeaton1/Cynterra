import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, SectionHeading, Lede } from "@/components/section";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "News and announcements from Cynterra: contract wins, media appearances, and recognition.",
  alternates: { canonical: `${site.url}/insights` },
};

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <Section ariaLabelledby="insights-heading">
      <Eyebrow>Insights</Eyebrow>
      <SectionHeading id="insights-heading">News &amp; announcements</SectionHeading>
      <Lede>Contract wins, media appearances, and recognition, with sources.</Lede>
      <ul className="mt-12 space-y-4">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/insights/${post.slug}`}
              className="block rounded-lg border border-border-subtle bg-surface p-6 transition-colors hover:border-border-strong"
            >
              <p className="text-sm text-faint">
                {formatDate(post.date)}
                {post.source ? `, ${post.source}` : ""}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
