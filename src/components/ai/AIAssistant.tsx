"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

type Msg = { role: "bot" | "user"; text: string };

function matchResponse(
  input: string,
  responses: {
    who: string;
    vision: string;
    projects: string;
    philosophy: string;
    default: string;
  }
) {
  const q = input.toLowerCase();
  if (
    q.includes("qui") ||
    q.includes("who") ||
    q.includes("soleil") ||
    q.includes("parcours")
  ) {
    return responses.who;
  }
  if (q.includes("vision") || q.includes("rêve") || q.includes("dream")) {
    return responses.vision;
  }
  if (
    q.includes("projet") ||
    q.includes("project") ||
    q.includes("réalisation") ||
    q.includes("durithi") ||
    q.includes("myuom")
  ) {
    return responses.projects;
  }
  if (
    q.includes("philo") ||
    q.includes("code") ||
    q.includes("culture") ||
    q.includes("humanité") ||
    q.includes("humanity")
  ) {
    return responses.philosophy;
  }
  return responses.default;
}

export function AIAssistant() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);

  const greet = useMemo(() => t.assistant.greet, [t.assistant.greet]);

  const ensureGreet = () => {
    setMessages((prev) =>
      prev.length === 0 ? [{ role: "bot", text: greet }] : prev
    );
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = matchResponse(trimmed, t.assistant.responses);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          ensureGreet();
        }}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-panel text-gold shadow-[0_10px_40px_rgba(201,162,39,0.25)] transition hover:scale-105 focus-ring"
        aria-label={t.assistant.title}
      >
        <Sparkles size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-5 z-40 flex h-[min(70vh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/95 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-label={t.assistant.title}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="font-display text-sm text-ivory">{t.assistant.title}</p>
                <p className="text-xs text-muted">{t.assistant.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-ivory/70 hover:bg-white/5 hover:text-ivory"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className={cn(
                    "max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    m.role === "bot"
                      ? "bg-white/5 text-ivory/90"
                      : "ml-auto bg-gold/15 text-gold"
                  )}
                >
                  {m.role === "bot" && (
                    <MessageCircle size={12} className="mb-1 inline text-gold" />
                  )}{" "}
                  {m.text}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {t.assistant.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-ivory/70 transition hover:border-gold/40 hover:text-gold"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <form
              className="flex gap-2 border-t border-white/10 p-3"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.assistant.placeholder}
                className="h-10 flex-1 rounded-md border border-white/10 bg-ink px-3 text-sm text-ivory outline-none focus:border-gold/50"
              />
              <Button type="submit" size="icon" aria-label="Send">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
