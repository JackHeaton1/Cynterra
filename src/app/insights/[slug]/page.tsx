import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section, Eyebrow } from "@/components/section";
import { getInsight, insights } from "@/content/insights";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";

const CONTENT_DIR = path.join(process.cwd(), "src/content/insights");

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `${site.url}/insights/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  let source: string;
  try {
    source = await fs.readFile(path.join(CONTENT_DIR, `${post.slug}.mdx`), "utf8");
  } catch {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.summary,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
  };

  return (
    <Section ariaLabelledby="post-heading" className="max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-faint">
        <Link href="/insights" className="hover:text-foreground">
          Insights
        </Link>{" "}
        / <span className="text-muted">{post.title}</span>
      </nav>
      <Eyebrow>
        {formatDate(post.date)}
        {post.source ? `, ${post.source}` : ""}
      </Eyebrow>
      <h1
        id="post-heading"
        className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {post.title}
      </h1>
      <article className="prose-cynterra mt-10 space-y-5 leading-relaxed text-muted [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:text-foreground">
        <MDXRemote source={source} />
      </article>
      {post.sourceUrl && (
        <p className="mt-10 text-sm text-faint">
          Original source:{" "}
          <a
            href={post.sourceUrl}
            rel="noopener noreferrer"
            className="text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            {post.sourceUrl}
          </a>
        </p>
      )}
    </Section>
  );
}
