"use client";

import { FormEvent, useState } from "react";
import { Check, Copy, Download, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Lang, SITE_META, UI_COPY } from "@/data/portfolio";

interface ContactFooterProps {
  lang: Lang;
}

export function ContactFooter({ lang }: ContactFooterProps) {
  const copy = UI_COPY[lang].contact;
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topicIndex, setTopicIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const topic = copy.form.topics[topicIndex] ?? copy.form.topics[0];

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(SITE_META.email);
      setCopied(true);
      toast.success(copy.copiedToast);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.open(`mailto:${SITE_META.email}`, "_self");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (honeypot) return;

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) nextErrors.name = copy.form.validationError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = copy.form.validationError;
    }
    if (message.trim().length < 2) nextErrors.message = copy.form.validationError;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatusText(copy.form.validationError);
      return;
    }

    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!web3Key) {
      const subject = encodeURIComponent(`[Portfolio] ${topic} - ${name.trim()}`);
      const body = encodeURIComponent(
        `${message.trim()}\n\nKontakt zwrotny: ${name.trim()} (${email.trim()})`
      );
      const mailtoHref = `mailto:${SITE_META.email}?subject=${subject}&body=${body}`;
      window.open(mailtoHref, "_self");
      setStatusText(copy.form.mailtoFallbackToast);
      toast.success(copy.form.mailtoFallbackToast);
      return;
    }

    setSubmitting(true);
    setStatusText(copy.form.sending);
    try {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          name: name.trim(),
          email: email.trim(),
          subject: `[Portfolio] ${topic}`,
          message: message.trim(),
        }),
      });
      if (!resp.ok) throw new Error("Submit failed");
      setStatusText(copy.form.sentToast);
      toast.success(copy.form.sentToast);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      const subject = encodeURIComponent(`[Portfolio] ${topic} - ${name.trim()}`);
      const body = encodeURIComponent(`${message.trim()}\n\n${email.trim()}`);
      window.open(`mailto:${SITE_META.email}?subject=${subject}&body=${body}`, "_self");
      setStatusText(copy.form.mailtoFallbackToast);
      toast.success(copy.form.mailtoFallbackToast);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer
      id="kontakt"
      className="footer closing section--alt"
      style={{ "--h": 1, "--hm": 1 } as React.CSSProperties}
    >
      <div className="wrap flex flex-col justify-between gap-2 lg:gap-6">
        <div className="grid grid-cols-1 items-start gap-2.5 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-6">
            <h2 className="text-[var(--ink)]">{copy.heading}</h2>
            <p className="mt-1 max-w-[50ch] text-[16px] text-[var(--ink)]">
              {copy.subhead}
            </p>

            <div className="mt-2.5 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
              <button type="button" onClick={handleCopyEmail} className="btn-primary">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copy.copyEmail}</span>
              </button>
              <a href={`mailto:${SITE_META.email}`} className="btn-secondary">
                <Mail className="h-4 w-4" />
                <span>{SITE_META.email}</span>
              </a>
            </div>

            <div className="mt-1.5 flex flex-wrap gap-2 sm:mt-3.5 sm:gap-3">
              <a href={SITE_META.cv.pl} download className="btn-secondary">
                <Download className="h-4 w-4" />
                <span>{copy.cvPl}</span>
              </a>
              <a href={SITE_META.cv.en} download className="btn-secondary">
                <Download className="h-4 w-4" />
                <span>{copy.cvEn}</span>
              </a>
            </div>

            <div className="mt-1.5 flex flex-wrap gap-2 sm:mt-3.5 sm:gap-3">
              <a
                href={SITE_META.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <img
                  src="/assets/icons/github.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] dark:invert"
                />
                <span>GitHub</span>
              </a>
              <a
                href={SITE_META.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <img
                  src="/assets/icons/linkedin.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <form
            action={`mailto:${SITE_META.email}`}
            method="post"
            encType="text/plain"
            onSubmit={handleSubmit}
            noValidate
            className="min-w-0 lg:col-span-6"
          >
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              checked={honeypot}
              onChange={(e) => setHoneypot(e.target.checked)}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-6">
              <div className="min-w-0 flex-1">
                <label htmlFor="contact-name" className="block text-[14px] font-medium text-[var(--ink)]">
                  {copy.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={copy.form.namePlaceholder}
                  className="mt-1 min-h-[44px] w-full rounded-[var(--r-btn)] border border-[var(--line-strong)] bg-[var(--surface)] px-3 text-[15px] text-[var(--ink)] focus:border-[var(--action)]"
                />
                {errors.name && (
                  <p className="mt-1 text-[13px] text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <label htmlFor="contact-email" className="block text-[14px] font-medium text-[var(--ink)]">
                  {copy.form.emailLabel}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={copy.form.emailPlaceholder}
                  className="mt-1 min-h-[44px] w-full rounded-[var(--r-btn)] border border-[var(--line-strong)] bg-[var(--surface)] px-3 text-[15px] text-[var(--ink)] focus:border-[var(--action)]"
                />
                {errors.email && (
                  <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-2 sm:mt-3">
              <label htmlFor="contact-topic" className="block text-[14px] font-medium text-[var(--ink)]">
                {copy.form.topicLabel}
              </label>
              <select
                id="contact-topic"
                name="topic"
                value={topicIndex}
                onChange={(e) => setTopicIndex(Number(e.target.value))}
                className="mt-1 min-h-[44px] w-full rounded-[var(--r-btn)] border border-[var(--line-strong)] bg-[var(--surface)] px-3 text-[15px] text-[var(--ink)] focus:border-[var(--action)]"
              >
                {copy.form.topics.map((opt, idx) => (
                  <option key={opt} value={idx}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-1.5 sm:mt-3">
              <label htmlFor="contact-msg" className="block text-[14px] font-medium text-[var(--ink)]">
                {copy.form.messageLabel}
              </label>
              <textarea
                id="contact-msg"
                name="message"
                rows={2}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={copy.form.messagePlaceholder}
                className="mt-1 h-[48px] w-full rounded-[var(--r-btn)] border border-[var(--line-strong)] bg-[var(--surface)] p-2 text-[15px] text-[var(--ink)] focus:border-[var(--action)] sm:h-[82px] sm:p-3"
              />
              {errors.message && (
                <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3 sm:mt-3">
              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
                <Send className="h-4 w-4" />
                <span>{submitting ? copy.form.sending : copy.form.submit}</span>
              </button>
              <p role="status" className="min-h-[24px] text-[14px] text-[var(--ink)]">
                {statusText}
              </p>
            </div>
          </form>
        </div>

        <div className="closing__links flex flex-col gap-5">
          <div className="hidden gap-6 lg:grid lg:grid-cols-4">
            <div>
              <p className="text-[16px] font-semibold text-[var(--ink)]">{SITE_META.name}</p>
              <p className="mt-2 text-[16px] text-[var(--ink)]">
                Python / Backend Developer · Django, FastAPI, PostgreSQL, Docker
              </p>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[var(--ink)]">
                {lang === "pl" ? "Sekcje strony" : "Navigation"}
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] text-[var(--ink)]">
                <li><a href="#projekty" className="hover:text-[var(--action)]">{UI_COPY[lang].nav.projects}</a></li>
                <li><a href="#architektura" className="hover:text-[var(--action)]">{UI_COPY[lang].nav.stack}</a></li>
                <li><a href="#wspolpraca" className="hover:text-[var(--action)]">{UI_COPY[lang].nav.services}</a></li>
                <li><a href="#doswiadczenie" className="hover:text-[var(--action)]">{UI_COPY[lang].nav.experience}</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[var(--ink)]">
                {lang === "pl" ? "Wybrane repozytoria" : "Repositories"}
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] text-[var(--ink)]">
                <li><a href="https://github.com/kicpir99/BeatHub" target="_blank" rel="noreferrer" className="hover:text-[var(--action)]">BeatHub (Django)</a></li>
                <li><a href="https://github.com/kicpir99/vinted-monitor-showcase" target="_blank" rel="noreferrer" className="hover:text-[var(--action)]">Bot Vinted (PyQt6)</a></li>
                <li><a href="https://github.com/kicpir99/job-hunter-bot" target="_blank" rel="noreferrer" className="hover:text-[var(--action)]">Job Hunter Bot (Gemini)</a></li>
                <li><a href="https://github.com/kicpir99/migratory-apiary-usza" target="_blank" rel="noreferrer" className="hover:text-[var(--action)]">Pasieka Usza (Woo REST)</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-[var(--ink)]">
                {lang === "pl" ? "Dokumenty i kontakt" : "Documents & links"}
              </p>
              <ul className="mt-2 space-y-1.5 text-[15px] text-[var(--ink)]">
                <li><a href={`mailto:${SITE_META.email}`} className="hover:text-[var(--action)]">{SITE_META.email}</a></li>
                <li><span>{SITE_META.phone}</span></li>
                <li><a href={SITE_META.cv.pl} download className="hover:text-[var(--action)]">{copy.cvPl}</a></li>
                <li><a href={SITE_META.cv.en} download className="hover:text-[var(--action)]">{copy.cvEn}</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[14px] text-[var(--ink)]">
            <span>{copy.footerNote}</span>
            <span>{SITE_META.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
