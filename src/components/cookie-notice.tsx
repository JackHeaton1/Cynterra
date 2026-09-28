"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cynterra-cookie-notice-dismissed";

/**
 * Small informational cookies disclaimer. The site sets no tracking or
 * third-party cookies (consistent with the no-third-party-runtime rule),
 * so this is a notice with a single acknowledgement, not a consent wall.
 */
export function CookieNotice() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(window.localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-md flex-col gap-3 rounded-lg border border-border-subtle bg-surface p-4 shadow-md sm:left-auto sm:right-6 sm:mx-0"
    >
      <p className="text-xs leading-relaxed text-muted">
        This site uses only essential cookies. No tracking, no advertising, no third-party
        analytics. See our{" "}
        <Link href="/privacy" className="text-accent underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(STORAGE_KEY, "1");
            setDismissed(true);
          }}
          className="rounded-md bg-cta px-4 py-1.5 text-xs font-medium text-cta-contrast transition-opacity hover:opacity-90"
        >
          OK
        </button>
      </div>
    </div>
  );
}
