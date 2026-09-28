import type { AssuranceStatus } from "@/content/types";
import { cn } from "@/lib/utils";

/*
  CREDIBILITY RULE (see README): the ONLY way a compliance/assessment claim is
  rendered on this site. It takes an AssuranceStatus; there is deliberately no
  freeform-text variant, so an unqualified "iRAP assessed" badge cannot be
  attached to a service that hasn't been assessed.
  Colours come from the status ramp, never from the brand accent.
*/

const LABELS: Record<AssuranceStatus, string> = {
  assessed: "iRAP assessed",
  "in-assessment": "In assessment pipeline",
  "not-in-scope": "Not in assessment scope",
};

const STYLES: Record<AssuranceStatus, string> = {
  assessed: "text-status-assessed bg-status-assessed-bg",
  "in-assessment": "text-status-in-assessment bg-status-in-assessment-bg",
  "not-in-scope": "text-status-not-in-scope bg-status-not-in-scope-bg",
};

export function AssuranceBadge({
  status,
  className,
}: {
  status: AssuranceStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded px-2 py-0.5 text-xs font-medium",
        STYLES[status],
        className,
      )}
    >
      {LABELS[status]}
    </span>
  );
}
