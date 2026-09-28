import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/** Restrained bento layout (after Aceternity's BentoGrid), brand-themed. */
export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("grid gap-4 md:grid-cols-2", className)}>{children}</div>;
}

export function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-border-strong sm:p-8",
        className,
      )}
    >
      <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
      <div className="relative">{children}</div>
    </div>
  );
}
