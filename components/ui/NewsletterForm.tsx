"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 800));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 py-2">
        <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-sans text-sm text-stone-400">You're subscribed. Thank you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={state === "loading"}
        className="flex-1 min-w-0 font-sans text-sm bg-dark-800 border border-dark-700 text-cream placeholder:text-stone-600 rounded-full px-4 py-2.5 focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="flex-shrink-0 bg-gold text-dark font-sans text-xs font-700 px-4 py-2.5 rounded-full hover:bg-gold/80 transition-colors disabled:opacity-50"
      >
        {state === "loading" ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}
