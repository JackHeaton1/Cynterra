"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/ai-defence", label: "AI Defence" },
  { href: "/copilot", label: "Copilot" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/assurance", label: "Assurance" },
  { href: "/sectors", label: "Sectors" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="text-foreground"
          aria-label="Cynterra home"
          onClick={() => setOpen(false)}
        >
          <Logo variant="wordmark" className="h-4 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-accent" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/briefing"
            className="hidden rounded-md bg-cta px-4 py-2 text-sm font-medium text-cta-contrast transition-opacity hover:opacity-90 sm:inline-block"
          >
            Request a briefing
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border-subtle text-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border-subtle bg-background px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm",
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? "text-accent"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/briefing"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-cta px-3 py-2 text-center text-sm font-medium text-cta-contrast"
              >
                Request a briefing
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
