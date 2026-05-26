"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error";
      setError(msg);
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl p-8 text-center bg-slate-950/60 backdrop-blur border border-cyan-300/40 shadow-[0_0_30px_rgba(34,211,238,0.15)] space-y-3">
        <CheckCircle2 className="w-10 h-10 text-cyan-300 mx-auto" />
        <h3 className="text-xl font-semibold text-slate-100">Thanks — got it!</h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          I&apos;ll get back to you soon. In the meantime, you can also reach
          me on LinkedIn.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-xs text-cyan-300 hover:text-cyan-200 underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 bg-slate-950/60 backdrop-blur border border-cyan-400/15 space-y-4"
    >
      <h3 className="font-semibold text-lg text-slate-100">Send me a message</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={200}
          disabled={state === "submitting"}
          className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-900/80 border border-cyan-400/20 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400 disabled:opacity-50"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          maxLength={320}
          disabled={state === "submitting"}
          className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-900/80 border border-cyan-400/20 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400 disabled:opacity-50"
        />
      </div>

      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's on your mind?"
        rows={4}
        maxLength={5000}
        disabled={state === "submitting"}
        className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-900/80 border border-cyan-400/20 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400 disabled:opacity-50 resize-y"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          {state === "error" && error ? (
            <span className="text-rose-400">{error}</span>
          ) : (
            "I read every message."
          )}
        </p>
        <button
          type="submit"
          disabled={state === "submitting" || !name || !email || !message}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] disabled:opacity-50 transition"
        >
          {state === "submitting" ? "Sending…" : (
            <>
              Send <Send className="w-4 h-4" strokeWidth={2.4} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
