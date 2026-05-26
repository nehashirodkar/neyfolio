"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./chat/ChatWindow";

/**
 * Floating chat widget — fixed bottom-right on every page.
 * - Closed: round neon button.
 * - Open: chat panel slides up. ESC and the X button close it.
 */
export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Auto-open once per session — the chatbot is a centerpiece of the portfolio,
  // so first-time visitors get nudged into trying it. sessionStorage means we
  // don't re-pop it on every page navigation within the same visit.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("chat-auto-opened")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("chat-auto-opened", "1");
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Chat panel — anchored bottom-right, slides up when open */}
      <div
        aria-hidden={!open}
        className={`fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[400px] transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChatWindow />
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with the AI version of Neha"}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-110 transition-all duration-200"
      >
        {open ? (
          <X className="w-6 h-6" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
        )}
      </button>

      {/* "Chat with me" pulse hint — only when closed */}
      {!open && (
        <div className="hidden sm:block fixed bottom-7 right-24 z-40 text-xs text-slate-400 bg-slate-950/80 backdrop-blur border border-cyan-400/20 rounded-full px-3 py-1.5 pointer-events-none animate-pulse">
          Chat with me
        </div>
      )}
    </>
  );
}
