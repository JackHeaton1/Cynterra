import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(200),
  organisation: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().max(50).optional(),
  message: z.string().min(1).max(5000),
  consent: z.literal(true),
  // Honeypot: accept any value here so a bot filling it still gets a
  // convincing 200; the branch below drops the submission silently.
  website: z.string().max(500).optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot tripped: pretend success, deliver nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: wire up delivery before launch. Options, in order of preference:
  //   1. Forward to sales@cynterra.ai via an Australian-hosted transactional
  //      mail provider (keep the sovereignty story consistent).
  //   2. Post into the existing CRM/ticketing system Cynterra uses.
  // Until then, submissions are accepted and logged server-side only.
  console.info("[briefing] request received", {
    organisation: parsed.data.organisation,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
