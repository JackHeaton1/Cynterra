import { cn, formatList } from "@/lib/utils";

/** Names the assessed services a capability sits on, as a plain sentence. */
export function BuildsOn({ services, className }: { services: readonly string[]; className?: string }) {
  return (
    <p className={cn("text-sm text-faint", className)}>
      Builds on existing assessed services:{" "}
      <span className="text-muted">{formatList(services)}</span>.
    </p>
  );
}
