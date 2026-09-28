import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieNotice } from "@/components/cookie-notice";
import { site } from "@/content/site";
import "./globals.css";

/* next/font self-hosts these at build time, so no runtime font CDN requests. */
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cynterra | Secure gateways for the AI era",
    template: "%s | Cynterra",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    url: site.url,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 4, Plaza Offices East, 35 Terminal Avenue",
    addressLocality: "Canberra",
    addressRegion: "ACT",
    postalCode: "2609",
    addressCountry: "AU",
  },
  telephone: site.phone,
  email: site.emails.info,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} flex min-h-svh flex-col antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-cta-contrast"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
