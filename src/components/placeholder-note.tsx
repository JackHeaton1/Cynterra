/*
  Marks content that awaits a real, verified asset or fact from Cynterra.
  Visually obvious in development and greppable ("PlaceholderNote",
  "TODO: verify with Cynterra"). Every instance must be logged in
  CLAIMS-TO-VERIFY.md at the repo root.
*/
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-placeholder-note
      className="rounded-md border border-dashed border-status-in-assessment/60 bg-status-in-assessment-bg px-4 py-3 text-sm text-status-in-assessment"
    >
      <span className="font-semibold">
        TODO: verify with Cynterra:{" "}
      </span>
      {children}
    </div>
  );
}
