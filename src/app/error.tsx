"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-32 sm:px-8">
      <p className="text-sm font-medium text-status-in-assessment">
        Something went wrong
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
        An unexpected error occurred
      </h1>
      <p className="max-w-md text-muted">
        The page failed to render. Try again. If the problem persists, contact
        support@cynterra.ai.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-cta-contrast hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
