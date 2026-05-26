"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What did you do at Intuit?",
  "Tell me about your AML/KYC agent project.",
  "What's your experience with LangGraph?",
  "What roles are you applying for?",
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(content: string) {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: content.trim() };
    const next = [...messages, userMessage];
    setMessages(next);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry — something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="flex flex-col w-full h-[560px] rounded-2xl overflow-hidden bg-slate-950/60 backdrop-blur-md border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <div className="px-4 py-3 border-b border-cyan-400/10">
        <h2 className="font-semibold text-sm text-cyan-200">Chat with me</h2>
        <p className="text-xs text-slate-400">
          An AI version of me, grounded in my resume, projects, and case studies.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-slate-400">Try a question:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-cyan-400/30 text-slate-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm whitespace-pre-wrap leading-relaxed ${
                m.role === "user"
                  ? "bg-gradient-to-br from-cyan-500 to-violet-500 text-white"
                  : "bg-slate-900/80 border border-cyan-400/15 text-slate-100"
              }`}
            >
              {m.content ||
                (isLoading && i === messages.length - 1 ? "…" : "")}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-cyan-400/10 p-3 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my work…"
          disabled={isLoading}
          className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-900/80 border border-cyan-400/20 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-400 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] disabled:opacity-50 disabled:hover:shadow-none transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
