import type { GatewayService } from "./types";

/**
 * The seven-gateway portfolio, transcribed from the verified content source.
 * Per-service variance in core/optional services is real and deliberate;
 * do not "tidy" the lists into one shared array.
 */

const CORE_COMMON = [
  "24×7 Portal",
  "Standard Reporting",
  "Customised Reporting (scheduled or on-demand)",
  "Central Log Management (CLM)",
  "Alert Management",
  "Intrusion Protection System (IPS)",
  "Anti-Malware Protection",
  "Web Filtering",
  "Application Control Firewall",
  "SSL Inspection",
  "Explicit Proxy",
];

const OPTIONAL_FULL = [
  "Denial of Service Protection (DOSP)",
  "Email Security Appliances",
  "DNS Hosting Services",
  "Alert Management",
  "Firewall AD Integration",
];

const SHARED_DEPLOYMENT_NOTE =
  "All Cynterra gateways report to a single management console, giving oversight, control, and assurance across multiple gateways in multiple cloud environments. Every gateway service can be bundled or deployed in a multi-gateway architectural model.";

export const services: GatewayService[] = [
  {
    slug: "secure-internet-gateway",
    name: "Secure Internet Gateway (SIG)",
    shortName: "Secure Internet Gateway",
    assurance: "assessed",
    useCase:
      "Fully redundant internet connectivity: secure internet access for end users and application services.",
    description: [
      "The Cynterra SIG is a highly redundant, highly available gateway providing secure access to the internet for end users and application services. Multiple instances and multiple sizes can be deployed to suit any geographical, network-throughput, network-separation, or architectural requirement.",
      "Every gateway logs to an organisation-specific repository, feeding centralised automated reporting. Analytical engines enrich the data for presentation on secure Kibana dashboards, with search across all recorded activity.",
    ],
    coreServices: [...CORE_COMMON, "Analytical Engine with search"],
    optionalServices: OPTIONAL_FULL,
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: true,
    verified: true,
  },
  {
    slug: "secure-aws-gateway",
    name: "Secure AWS Gateway",
    shortName: "AWS Gateway",
    assurance: "assessed",
    useCase:
      "A secure connection to the public cloud, within the public cloud, and between vendors' public clouds.",
    description: [
      "The Cynterra Cloud Gateway sits within the public cloud and is built to monitor and enforce your organisation's security policy to the public cloud, within it, and between public clouds. Multiple instances can be deployed to suit any geographical, network-throughput, network-separation, or architectural requirement.",
      "All cloud gateways log to an organisation-specific repository for centralised automated reporting, presented on secure Kibana dashboards. Elasticsearch makes log data searchable across the entire organisational dataset.",
    ],
    coreServices: CORE_COMMON,
    optionalServices: OPTIONAL_FULL,
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: true,
    verified: true,
  },
  {
    slug: "secure-azure-gateway",
    name: "Secure Azure Gateway",
    shortName: "Azure Gateway",
    assurance: "in-assessment",
    // TODO: verify with Cynterra: no detail page existed on the old site;
    // this use-case copy is derived from the shared cloud-gateway architecture.
    useCase:
      "A secure cloud gateway for Microsoft Azure environments, built on the shared Cynterra gateway architecture.",
    description: [
      "The Azure gateway applies Cynterra's shared cloud-gateway architecture to Microsoft Azure environments: single-tenanted, highly available, multi-instance, and deployable to any geographic, throughput, network-separation, or architectural requirement.",
      "Like every Cynterra gateway, it logs to an organisation-specific repository, feeding centralised automated reporting through analytical engines into Kibana dashboards with Elasticsearch.",
    ],
    coreServices: CORE_COMMON,
    optionalServices: [],
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: false,
    verified: false,
    verifyNote:
      "Listed in the legacy site's footer with no detail page. Use-case copy and service lists require verification with Cynterra.",
  },
  {
    slug: "secure-google-gateway",
    name: "Secure Google Gateway",
    shortName: "Google Cloud Gateway",
    assurance: "in-assessment",
    // TODO: verify with Cynterra: no detail page existed on the old site;
    // this use-case copy is derived from the shared cloud-gateway architecture.
    useCase:
      "A secure cloud gateway for Google Cloud environments, built on the shared Cynterra gateway architecture.",
    description: [
      "The Google Cloud gateway applies Cynterra's shared cloud-gateway architecture to GCP environments: single-tenanted, highly available, multi-instance, and deployable to any geographic, throughput, network-separation, or architectural requirement.",
      "Like every Cynterra gateway, it logs to an organisation-specific repository, feeding centralised automated reporting through analytical engines into Kibana dashboards with Elasticsearch.",
    ],
    coreServices: CORE_COMMON,
    optionalServices: [],
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: false,
    verified: false,
    verifyNote:
      "Listed in the legacy site's footer with no detail page. Use-case copy and service lists require verification with Cynterra.",
  },
  {
    slug: "secure-api-gateway",
    name: "Secure API Gateway",
    shortName: "API Gateway",
    assurance: "assessed",
    useCase:
      "An optimised gateway designed to service high-speed transactional application data.",
    description: [
      "New applications need a gateway optimised for their specific data requirements without compromising security obligations. The Cynterra API Gateway is designed for exactly that. Multiple instances can be deployed to suit any geographical, application, or architectural requirement.",
      "All API gateways log to an organisation-specific repository for centralised automated reporting, presented on secure Kibana dashboards, with Elasticsearch making log data searchable across the organisational dataset.",
    ],
    coreServices: CORE_COMMON,
    optionalServices: [],
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: true,
    verified: true,
  },
  {
    slug: "office-365-gateway",
    name: "Office 365 Gateway",
    shortName: "Office 365 Gateway",
    assurance: "assessed",
    useCase: "Secure transfer and filtering of an organisation's corporate email.",
    description: [
      "The Cynterra O365 security appliance monitors files and messages to identify malicious content: spam, malware, and phishing attempts. Policies can be recommended by Cynterra, defined by the customer, or both.",
      "The gateway logs everything to an organisation-specific repository for centralised automated reporting, presented through secure Kibana dashboards with Elasticsearch across the organisational dataset.",
    ],
    coreServices: CORE_COMMON,
    optionalServices: [],
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: true,
    verified: true,
  },
  {
    slug: "govlink-gateway",
    name: "GovLink Gateway",
    shortName: "GovLink Gateway",
    assurance: "in-assessment",
    // TODO: verify with Cynterra: the legacy page was an orphaned overlay
    // with no use-case copy; product status unclear (possibly deprecated).
    useCase:
      "Multi-site government deployment on the shared Cynterra gateway architecture.",
    description: [
      "GovLink applies the Cynterra gateway architecture to multi-site government deployments, with the Email Security Appliance included as a core service rather than an option.",
      "Like every Cynterra gateway, it logs to an organisation-specific repository, feeding centralised automated reporting through analytical engines into Kibana dashboards with Elasticsearch.",
    ],
    coreServices: [...CORE_COMMON, "Email Security Appliance"],
    optionalServices: [],
    deploymentNote: SHARED_DEPLOYMENT_NOTE,
    inPrimaryNav: false,
    verified: false,
    verifyNote:
      "Existed only as an orphaned overlay page on the legacy site. Product status requires verification with Cynterra before featuring in navigation.",
  },
];

export function getService(slug: string): GatewayService | undefined {
  return services.find((s) => s.slug === slug);
}
