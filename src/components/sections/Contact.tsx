"use client";

import { FormEvent, useState } from "react";
import { Code2, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/lib/i18n/context";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading label={t.contact.label} title={t.contact.title} />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {t.contact.subtitle}
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`mailto:${t.contact.emailValue}`}
                  className="inline-flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                >
                  <Mail size={18} className="text-gold" />
                  {t.contact.emailValue}
                </a>
              </li>
              <li>
                <a
                  href="tel:+243000000000"
                  className="inline-flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                >
                  <Phone size={18} className="text-gold" />
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                >
                  <Share2 size={18} className="text-gold" />
                  {t.contact.linkedin}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                >
                  <Code2 size={18} className="text-gold" />
                  {t.contact.github}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/243000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-ivory/85 transition hover:text-gold"
                >
                  <MessageCircle size={18} className="text-gold" />
                  {t.contact.whatsapp}
                </a>
              </li>
              <li className="inline-flex items-start gap-3 text-ivory/85">
                <MapPin size={18} className="mt-0.5 text-gold" />
                {t.contact.location}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/8 bg-panel/80 p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm text-muted">
                  {t.contact.name}
                  <input
                    required
                    name="name"
                    className="mt-2 h-11 w-full rounded-md border border-white/10 bg-ink px-3 text-ivory outline-none focus:border-gold/50"
                  />
                </label>
                <label className="block text-sm text-muted">
                  {t.contact.email}
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 h-11 w-full rounded-md border border-white/10 bg-ink px-3 text-ivory outline-none focus:border-gold/50"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-muted">
                {t.contact.message}
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-md border border-white/10 bg-ink px-3 py-3 text-ivory outline-none focus:border-gold/50"
                />
              </label>
              <Button
                type="submit"
                className="mt-5"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? t.contact.sending
                  : status === "sent"
                    ? t.contact.success
                    : t.contact.send}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
