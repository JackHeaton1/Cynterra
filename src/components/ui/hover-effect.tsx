"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HoverCardItem {
  href: string;
  title: string;
  description: string;
  footer?: React.ReactNode;
}

/** Card grid with hover highlight (after Aceternity's HoverEffect), re-themed. */
export function HoverEffect({
  items,
  className,
}: {
  items: HoverCardItem[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, i) => (
        <li
          key={item.href}
          className="relative"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === i && !reduce && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-lg bg-surface-raised"
                layoutId="hover-card-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
          <Link
            href={item.href}
            className="relative block h-full rounded-lg border border-border-subtle p-6 transition-colors hover:border-border-strong"
          >
            <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            {item.footer && <div className="mt-4">{item.footer}</div>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
