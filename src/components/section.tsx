import { cn } from "@/lib/utils";

/** Document-like section shell with consistent horizontal rhythm. */
export function Section({
  children,
  className,
  id,
  ariaLabelledby,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24", className)}
    >
      {children}
    </section>
  );
}

/** Small section label: plain sentence case, one per section. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-sm font-semibold text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lede({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("mt-4 text-lg leading-relaxed text-muted", className)}>{children}</p>;
}
