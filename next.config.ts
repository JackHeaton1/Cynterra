import type { NextConfig } from "next";

/**
 * 301 redirect map for the cynterra.net → cynterra.ai migration.
 * Covers every known path on the legacy WordPress site, including the
 * footer's typo'd /secure-api-gateway link, which has real inbound links.
 * Keep cynterra.net live and redirecting for at least 6–12 months.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/technology", destination: "/platform" },
  { source: "/solutions", destination: "/platform" },
  {
    source: "/solutions/secure-internet-gateway-sig",
    destination: "/platform/secure-internet-gateway",
  },
  { source: "/solutions/secure-api-gateway", destination: "/platform/secure-api-gateway" },
  { source: "/secure-api-gateway", destination: "/platform/secure-api-gateway" },
  { source: "/solutions/secure-aws-gateway", destination: "/platform/secure-aws-gateway" },
  { source: "/solutions/secure-azure-gateway", destination: "/platform/secure-azure-gateway" },
  { source: "/solutions/secure-google-gateway", destination: "/platform/secure-google-gateway" },
  { source: "/solutions/office-365-gateway", destination: "/platform/office-365-gateway" },
  { source: "/divi_overlay/govlink", destination: "/platform/govlink-gateway" },
  { source: "/news", destination: "/insights" },
  { source: "/category/news", destination: "/insights" },
  { source: "/category/media", destination: "/insights" },
  { source: "/cynterra-wins-dta-contract", destination: "/insights/dta-secure-internet-gateway" },
  {
    source: "/cynterra-security-gateway-for-ip-australia",
    destination: "/insights/ip-australia-gateway",
  },
  { source: "/cynterra-on-mysec-tv", destination: "/insights/mysec-tv-interview" },
  {
    source: "/cynterra-a-finalist-in-innovation-australia-awards",
    destination: "/insights/innovationaus-2021-finalist",
  },
  { source: "/about-us", destination: "/about" },
  { source: "/company", destination: "/about" },
  { source: "/contact-us", destination: "/briefing" },
  { source: "/demonstrations", destination: "/briefing" },
  { source: "/resources", destination: "/insights" },
  { source: "/privacy-policy", destination: "/privacy" },
  { source: "/security-policy", destination: "/security" },
  // Linked from every legacy service page and external procurement documents.
  {
    source: "/wp-content/uploads/Cynterra-Services-Overview.pdf",
    destination: "/downloads/Cynterra-Services-Overview.pdf",
  },
  // WordPress cruft — collapse to home.
  { source: "/author/:path*", destination: "/" },
  { source: "/2021/:path*", destination: "/" },
  { source: "/wp-login.php", destination: "/" },
  { source: "/feed", destination: "/" },
  { source: "/comments/feed", destination: "/" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
