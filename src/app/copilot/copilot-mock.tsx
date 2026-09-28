"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

/*
  Interactive mock of the Intelligence Copilot query interface.
  Unmistakably an illustration: pre-canned questions, fabricated-looking
  sample rows, and a permanent "illustration, not live data" label.
*/

interface MockResult {
  query: string;
  generated: string;
  rows: string[];
  summary: string;
}

const EXAMPLES: MockResult[] = [
  {
    query: "Show me unusual outbound traffic from Finance last week",
    generated:
      'source_vlan:"finance" AND direction:outbound AND anomaly_score:>0.7 AND @timestamp:[now-7d TO now]',
    rows: [
      "2026-07-16 14:22:41  finance-ws-114  → 185.220.x.x     2.4 MB   score 0.91",
      "2026-07-17 02:03:12  finance-ws-081  → ai-endpoint     11.8 MB  score 0.88",
      "2026-07-18 11:47:55  finance-srv-02  → unknown-cdn     640 KB   score 0.74",
    ],
    summary:
      "3 flows exceeded the anomaly threshold. The 02:03 transfer is outside the host's normal active hours and targets an unsanctioned AI endpoint.",
  },
  {
    query: "Which hosts talked to unsanctioned AI endpoints yesterday?",
    generated:
      'destination_category:"ai-endpoint" AND sanctioned:false AND @timestamp:[now-1d TO now]',
    rows: [
      "2026-07-22 09:41:07  corp-ws-233     → api.openai.com   14 req",
      "2026-07-22 10:15:52  corp-ws-198     → gemini endpoint   6 req",
      "2026-07-22 15:02:30  dev-ws-044      → unsanct. copilot 41 req",
    ],
    summary:
      "3 hosts contacted unsanctioned AI endpoints. dev-ws-044 shows sustained usage consistent with an installed coding assistant.",
  },
  {
    query: "Any spikes in blocked phishing across O365 this month?",
    generated:
      'gateway:"o365" AND verdict:blocked AND category:phishing AND @timestamp:[now-30d TO now] | timechart daily',
    rows: [
      "2026-07-03  ████████░░  81 blocked",
      "2026-07-11  ██████████  112 blocked  ← spike",
      "2026-07-19  █████░░░░░  54 blocked",
    ],
    summary:
      "One spike on 11 July: 112 blocked messages, 3.1× the daily median. Lure style scored as machine-generated in 87% of the spike sample.",
  },
  {
    query: "List API calls with agentic pacing signatures this week",
    generated:
      'gateway:"api" AND pacing_signature:agentic AND @timestamp:[now-7d TO now] | sort rate desc',
    rows: [
      "2026-07-20 22:10:03  /v2/records/search   412 req/min  interval σ 4 ms",
      "2026-07-21 03:33:18  /v2/records/export    88 req/min  interval σ 6 ms",
    ],
    summary:
      "2 sequences show sub-10ms interval variance, a machine-driven pacing no human operator produces. Both originated from a single external ASN.",
  },
  {
    query: "Summarise alerts by severity for the last 24 hours",
    generated: "alerts | stats count by severity | @timestamp:[now-24h TO now]",
    rows: [
      "critical   2",
      "high       11",
      "medium     47",
      "low        139",
    ],
    summary:
      "199 alerts in 24 hours. Both critical alerts relate to the same host and were escalated to the on-call analyst at 06:12.",
  },
];

export function CopilotMock() {
  const [selected, setSelected] = useState<MockResult | null>(null);
  const [phase, setPhase] = useState<"idle" | "thinking" | "done">("idle");
  const resultRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function run(example: MockResult) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelected(example);
    setPhase("thinking");
    timerRef.current = setTimeout(() => setPhase("done"), 550);
  }

  return (
    <div className="rounded-lg border border-border-subtle bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-border-subtle px-5 py-3">
        <p className="text-sm font-semibold text-foreground">
          Intelligence Copilot
        </p>
        <p className="rounded-sm bg-status-in-assessment-bg px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-status-in-assessment">
          Illustration, not live data
        </p>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 rounded-lg border border-border-strong bg-background px-4 py-3">
          <Search className="size-4 shrink-0 text-faint" aria-hidden />
          <span className="text-sm text-muted">
            {selected ? selected.query : "Ask your log data a question…"}
          </span>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-faint">
          Try an example
        </p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Example questions">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.query}
              type="button"
              onClick={() => run(ex)}
              aria-pressed={selected?.query === ex.query}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                selected?.query === ex.query
                  ? "border-accent text-accent"
                  : "border-border-subtle text-muted hover:border-border-strong hover:text-foreground"
              }`}
            >
              {ex.query}
            </button>
          ))}
        </div>

        <div ref={resultRef} aria-live="polite" className="mt-6 min-h-[10rem]">
          {phase === "thinking" && (
            <p className="text-xs text-faint">Translating question into query…</p>
          )}
          {phase === "done" && selected && (
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Generated query (visible, inspectable)
                </p>
                <pre className="mt-1 overflow-x-auto rounded-md bg-background p-3 font-mono text-xs text-accent">
                  {selected.generated}
                </pre>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  Results
                </p>
                <pre className="mt-1 overflow-x-auto rounded-md bg-background p-3 font-mono text-xs leading-relaxed text-muted">
                  {selected.rows.join("\n")}
                </pre>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted">{selected.summary}</p>
            </div>
          )}
          {phase === "idle" && (
            <p className="text-sm text-faint">
              Select an example question to see how the copilot translates it into a query and
              returns results from the organisation&apos;s own repository.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
