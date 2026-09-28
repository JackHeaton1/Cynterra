/**
 * Content model for the Cynterra site.
 *
 * CREDIBILITY RULE (see README): every service and capability MUST carry an
 * AssuranceStatus. Compliance claims render only through <AssuranceBadge />,
 * which takes this type, so it is structurally impossible to show a compliance
 * claim without a status attached.
 */

export type AssuranceStatus = "assessed" | "in-assessment" | "not-in-scope";

export interface GatewayService {
  slug: string;
  name: string;
  shortName: string;
  assurance: AssuranceStatus;
  useCase: string;
  description: string[];
  coreServices: string[];
  optionalServices: string[];
  deploymentNote: string;
  inPrimaryNav: boolean;
  verified: boolean;
  verifyNote?: string;
}

export interface AiCapability {
  slug: string;
  tag: "Detection" | "Defense" | "Interface" | "Intelligence";
  name: string;
  assurance: AssuranceStatus;
  summary: string;
  detail: string[];
  /** Existing, iRAP-assessed gateway services this capability builds on. */
  buildsOn: string[];
  href: string;
}

export interface Persona {
  title: string;
  body: string;
}

export interface Pillar {
  name: string;
  body: string;
}

export interface TrackRecordItem {
  year: string;
  date: string;
  title: string;
  body: string;
  href?: string;
}

export interface RetentionTier {
  label: string;
  statement: string;
  source: string;
  verified: boolean;
}

export interface InsightMeta {
  slug: string;
  title: string;
  date: string;
  source?: string;
  sourceUrl?: string;
  summary: string;
}
