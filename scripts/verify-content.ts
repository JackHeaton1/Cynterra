/**
 * CI guard for the AI-capability credibility rule:
 * the four AI capabilities are new services; the existing iRAP assessment
 * covers the gateway services only. If a future edit marks any capability
 * 'assessed', this script fails the build instead of shipping the claim.
 *
 * Run: npm test
 */
import { capabilities } from "../src/content/capabilities";
import { services } from "../src/content/services";

let failures = 0;

for (const cap of capabilities) {
  if (cap.assurance === "assessed") {
    console.error(
      `FAIL: capability "${cap.name}" is marked 'assessed'. AI capabilities must remain ` +
        `'in-assessment' or 'not-in-scope' until a completed, verified iRAP assessment ` +
        `covers them.`,
    );
    failures++;
  }
}

for (const svc of services) {
  if (!svc.verified && svc.assurance === "assessed") {
    console.error(
      `FAIL: service "${svc.name}" is unverified (no legacy detail page) but marked ` +
        `'assessed'. Verify with Cynterra before claiming assessment coverage.`,
    );
    failures++;
  }
}

if (failures > 0) {
  console.error(`\n${failures} content credibility check(s) failed.`);
  process.exit(1);
}

console.log(
  `OK: ${capabilities.length} capabilities and ${services.length} services pass credibility checks.`,
);
