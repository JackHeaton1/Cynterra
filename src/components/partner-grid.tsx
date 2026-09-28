/*
  TODO: confirm current partner list and logo usage rights with Cynterra.

  The legacy About page displayed logos for: AWS · IP Australia · AustCyber ·
  Vocus · NTT · KBI (KBI.Media) · DTA · Microsoft. Only the NTT partnership
  (IP Australia contract) and the DTA relationship are corroborated by the
  published news items. Reusing a government agency's logo as an implied
  endorsement is exactly what this audience notices, so this component
  stays unused until the list and rights are confirmed.
  Logged in CLAIMS-TO-VERIFY.md.
*/

const PARTNERS = [
  "AWS",
  "IP Australia",
  "AustCyber",
  "Vocus",
  "NTT",
  "KBI.Media",
  "DTA",
  "Microsoft",
];

export function PartnerGrid() {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {PARTNERS.map((p) => (
        <li
          key={p}
          className="flex h-20 items-center justify-center rounded-lg border border-border-subtle text-sm text-muted"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}
