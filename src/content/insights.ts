import type { InsightMeta } from "./types";

/** Metadata for the MDX posts in src/content/insights/. */
export const insights: InsightMeta[] = [
  {
    slug: "dta-secure-internet-gateway",
    title: "Cynterra wins Digital Transformation Agency contract",
    date: "2021-04-26",
    source: "The Australian, David Swan",
    summary:
      "The DTA selects Cynterra's new-generation Secure Internet Gateway, configuring secure environments in under a day.",
  },
  {
    slug: "ip-australia-gateway",
    title: "Cynterra secures IP Australia's online applications",
    date: "2021-04-21",
    source: "CRN",
    sourceUrl:
      "https://www.crn.com.au/news/canberra-mssp-cynterra-scores-with-ip-australia-551489",
    summary:
      "A $250,000-per-year deal, in partnership with NTT Ltd, protecting the agency that administers Australia's patents and trade marks.",
  },
  {
    slug: "mysec-tv-interview",
    title: "Cynterra on MySec.TV",
    date: "2021-04-28",
    summary:
      "Drago Gvozdanovic joins MySec.TV to discuss the Digital Transformation Agency win.",
  },
  {
    slug: "innovationaus-2021-finalist",
    title: "Cynterra named a finalist in the InnovationAus 2021 Awards",
    date: "2021-10-10",
    sourceUrl:
      "https://www.innovationaus.com/innovationaus-2021-awards-cybersecurity-finalists/",
    summary:
      "Finalist in the Cybersecurity category of the InnovationAus 2021 Awards for Excellence.",
  },
];

export function getInsight(slug: string): InsightMeta | undefined {
  return insights.find((i) => i.slug === slug);
}
