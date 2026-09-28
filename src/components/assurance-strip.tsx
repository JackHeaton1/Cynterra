import Link from "next/link";

/**
 * The persistent, quiet assurance strip, present on every key page,
 * shouting nowhere. States only what is true today: the gateway services
 * are iRAP assessed; the AI capabilities are in the assessment pipeline.
 */
export function AssuranceStrip() {
  return (
    <div className="border-y border-border-subtle bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-4 text-sm sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-muted">
          Gateway services are{" "}
          <span className="font-medium text-status-assessed">iRAP assessed</span> and
          PROTECTED-capable. AI capabilities are{" "}
          <span className="font-medium text-status-in-assessment">in the assessment pipeline</span>.
        </p>
        <Link
          href="/assurance"
          className="shrink-0 text-muted underline underline-offset-4 decoration-border-strong hover:text-foreground"
        >
          Status by service
        </Link>
      </div>
    </div>
  );
}
