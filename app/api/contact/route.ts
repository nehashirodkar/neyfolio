import { supabaseServer } from "@/lib/supabase/server";

export const runtime = "nodejs";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string): boolean {
  // Tiny email regex — server-side sanity check only, not full RFC validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Email looks malformed" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return Response.json({ error: "Field too long" }, { status: 400 });
  }

  const { error } = await supabaseServer
    .from("contact_messages")
    .insert({ name: name.trim(), email: email.trim(), message: message.trim() });

  if (error) {
    console.error("Contact insert failed:", error);
    return Response.json(
      { error: "Couldn't save your message. Try emailing me on LinkedIn instead." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
