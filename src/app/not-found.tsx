import Link from "next/link";
import { ArcMotif } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 overflow-hidden px-5 py-32 sm:px-8">
      <ArcMotif className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 text-foreground opacity-[0.04]" />
      <p className="text-sm font-medium text-accent">
        Error 404
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        This page isn&apos;t here
      </h1>
      <p className="max-w-md text-muted">
        If you followed a link from the old cynterra.net site, the content has likely moved.
        The platform, insights, and briefing pages carry everything forward.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-cta-contrast hover:opacity-90"
        >
          Back to home
        </Link>
        <Link
          href="/platform"
          className="rounded-md border border-border-strong px-5 py-2.5 text-sm text-muted hover:text-foreground"
        >
          The platform
        </Link>
      </div>
    </div>
  );
}
