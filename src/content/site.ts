export const site = {
  name: "Cynterra",
  domain: "cynterra.ai",
  url: "https://cynterra.ai",
  legacyDomain: "cynterra.net",
  tagline:
    "AI-era threats need an AI-era defender, delivered through the gateway infrastructure Australian government already trusts.",
  description:
    "Cloud-native secure gateways for Australian government, defence, and critical infrastructure. iRAP assessed, PROTECTED-capable, now with an AI detection and analysis layer built on the same infrastructure.",
  founded: 2017,
  address: "Level 4, Plaza Offices East, 35 Terminal Avenue, Canberra ACT 2609",
  phone: "+61 2 6160 1363",
  phoneHref: "tel:+61261601363",
  emails: {
    info: "info@cynterra.ai",
    support: "support@cynterra.ai",
    sales: "sales@cynterra.ai",
  },
  legacyEmails: {
    info: "info@cynterra.net",
    support: "support@cynterra.net",
    sales: "sales@cynterra.net",
  },
  cta: "Request a briefing",
} as const;

export const leadership = [
  {
    name: "Drago Gvozdanovic",
    title: "Chief Technology Officer",
    // TODO: verify with Cynterra: 2021 press describes Drago as "chief
    // executive" and one post as "Director"; the About page says CTO.
    // Using the About page title. See CLAIMS-TO-VERIFY.md.
    bio: "Twenty-five years inside the Australian Government, with a focus on data communications and virtualisation, and their application to convergence, lowering cost, and delivering efficiencies to customers.",
  },
  {
    name: "Robert",
    title: "Chief Operating Officer",
    // Surname not published on the current site. Do not invent one.
    bio: "An operations professional, Robert brings code and operational expertise to Cynterra's leadership. He orchestrates product development and streamlines Cynterra's practices.",
  },
] as const;
