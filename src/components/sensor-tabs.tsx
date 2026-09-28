"use client";

import { useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface SensorTabItem {
  label: string;
  title: string;
  description: string;
  panel: React.ReactNode;
}

/**
 * Gateway-by-gateway view of the sensor network, one tab per gateway.
 * Sliding active indicator (after Aceternity's Animated Tabs). All panels share
 * one grid cell, so the section is always as tall as the tallest panel and the
 * page never jumps when switching tabs.
 */
export function SensorTabs({ items }: { items: SensorTabItem[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    setActive(index);
    tabRefs.current[index]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const last = items.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (index === last ? 0 : index + 1)
        : e.key === "ArrowLeft"
          ? (index === 0 ? last : index - 1)
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Gateways"
        className="inline-flex max-w-full flex-wrap gap-1 rounded-lg border border-border-subtle bg-surface p-1"
      >
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative rounded-md px-4 py-2 text-sm transition-colors focus-visible:outline-offset-0",
                selected ? "text-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {selected && (
                <motion.span
                  aria-hidden
                  layoutId={`${baseId}-indicator`}
                  className="absolute inset-0 rounded-md bg-surface-raised ring-1 ring-border-strong"
                  transition={reduce ? { duration: 0 } : { type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid">
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <motion.div
              key={item.label}
              role="tabpanel"
              id={`${baseId}-panel-${i}`}
              aria-labelledby={`${baseId}-tab-${i}`}
              aria-hidden={!selected}
              inert={!selected}
              initial={false}
              animate={{ opacity: selected ? 1 : 0, y: selected || reduce ? 0 : 6 }}
              // Outgoing panel vanishes at once; only the incoming one fades,
              // so two panels never overlap mid-transition.
              transition={{ duration: reduce || !selected ? 0 : 0.2, ease: "easeOut" }}
              className={cn(
                "[grid-area:1/1] grid content-start gap-6 rounded-lg border border-border-subtle bg-surface p-6 sm:p-8 md:grid-cols-2 md:gap-10",
                !selected && "pointer-events-none",
              )}
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
              <div>{item.panel}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
