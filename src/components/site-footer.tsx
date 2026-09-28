import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/content/site";
import { services } from "@/content/services";

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/assurance", label: "Assurance" },
  { href: "/sectors", label: "Sectors" },
  { href: "/insights", label: "Insights" },
  { href: "/briefing", label: "Request a briefing" },
];

const CAPABILITY_LINKS = [
  { href: "/ai-defence", label: "AI Defence" },
  { href: "/copilot", label: "Intelligence Copilot" },
  { href: "/intelligence", label: "Threat Intelligence Network" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Cynterra home" className="text-foreground">
              <Logo variant="wordmark" className="h-4 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Cloud-native secure gateways for Australian government, defence, and critical
              infrastructure, now the sensor network for AI-era defence.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-faint">
              <p>{site.address}</p>
              <p>
                <a href={site.phoneHref} className="hover:text-foreground">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.emails.info}`} className="hover:text-foreground">
                  {site.emails.info}
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Footer: platform">
            <h2 className="text-sm font-semibold text-foreground">Platform</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/platform" className="text-sm text-muted hover:text-foreground">
                  Platform overview
                </Link>
              </li>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/platform/${s.slug}`}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer: AI capabilities">
            <h2 className="text-sm font-semibold text-foreground">
              AI capabilities
            </h2>
            <ul className="mt-4 space-y-2">
              {CAPABILITY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer: company">
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-4 space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} Cynterra. Founded {site.founded}, Canberra. Essential
            cookies only. No tracking.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="text-xs text-faint hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/security" className="text-xs text-faint hover:text-foreground">
                Security Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
