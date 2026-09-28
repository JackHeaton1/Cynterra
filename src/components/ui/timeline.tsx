import { Reveal } from "@/components/motion";
import Link from "next/link";
import type { TrackRecordItem } from "@/content/types";

/** Dated record list: date in its own column, entries separated by rules. */
export function Timeline({ items }: { items: TrackRecordItem[] }) {
  return (
    <ol className="divide-y divide-border-subtle border-y border-border-subtle">
      {items.map((item, i) => (
        <li key={item.title} className="py-6">
          <Reveal delay={Math.min(i * 0.05, 0.2)} className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="text-sm text-faint">{item.date}</p>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.href ? (
                  <Link href={item.href} className="hover:text-accent">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
