"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StickyScrollItem {
  title: string;
  description: string;
  panel: React.ReactNode;
}

/**
 * Sticky scroll reveal (after Aceternity's StickyScroll): one item revealed
 * per scroll step. Used for the "gateways as sensor network" explainer.
 * Collapses to a plain stacked list on small screens and reduced motion.
 */
export function StickyScroll({ items }: { items: StickyScrollItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.4", "end 0.6"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(items.length - 1, Math.floor(latest * items.length));
    setActive(idx);
  });

  if (reduce) {
    return (
      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.title} className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
            <div>{item.panel}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative grid gap-10 md:grid-cols-2">
      <div>
        {items.map((item, i) => (
          <div key={item.title} className="flex min-h-[16rem] flex-col justify-center py-8">
            <motion.h3
              animate={{ opacity: active === i ? 1 : 0.35 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="font-display text-xl font-semibold text-foreground"
            >
              {item.title}
            </motion.h3>
            <motion.p
              animate={{ opacity: active === i ? 1 : 0.35 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-3 text-sm leading-relaxed text-muted"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="sticky top-28">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              animate={{
                opacity: active === i ? 1 : 0,
                y: active === i ? 0 : 8,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={cn("col-start-1 row-start-1", active === i ? "relative" : "absolute inset-0")}
              aria-hidden={active !== i}
            >
              {item.panel}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
