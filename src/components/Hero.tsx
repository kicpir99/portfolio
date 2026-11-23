"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, Download } from "lucide-react";
import { Lang, PROJECTS, SITE_META, UI_COPY } from "@/data/portfolio";

interface HeroProps {
  lang: Lang;
}

const FEATURED_IDS = ["bot-vinted", "beathub", "pasieka-usza"] as const;

export function Hero({ lang }: HeroProps) {
  const copy = UI_COPY[lang];
  const featured = PROJECTS.filter((p) =>
    (FEATURED_IDS as readonly string[]).includes(p.id)
  );
  const [activeId, setActiveId] = useState<string>(featured[0]?.id ?? "bot-vinted");
  const activeProject = featured.find((p) => p.id === activeId) ?? featured[0];
  const cvHref = lang === "pl" ? SITE_META.cv.pl : SITE_META.cv.en;

  const [countProgress, setCountProgress] = useState(1);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCountProgress(1);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 650;
    setCountProgress(0);

    function step(now: number) {
      const t = Math.min(1, (now - start) / duration);
      setCountProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="hero" aria-label={copy.hero.headline}>
      <div className="wrap h-full">
        <div className="hero-text hero-split hero-enter grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-start gap-5 lg:grid-cols-12 lg:grid-rows-1 lg:gap-6">
          <div className="hero-copy flex min-w-0 flex-col lg:col-span-6 lg:h-full">
            <div>
              <p className="mb-2 text-[14px] font-medium text-[var(--action)]">
                {copy.hero.status}
              </p>

              <h1 className="text-[var(--ink)]">{copy.hero.headline}</h1>

              <p className="mt-3 max-w-[54ch] text-[16px] leading-[1.5] text-[var(--ink)] sm:mt-4 sm:leading-[1.55]">
                {copy.hero.lead}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
                <a href="#projekty" className="btn-primary w-full sm:w-auto">
                  <span>{copy.hero.primaryCta}</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>
                <a href={cvHref} download className="btn-secondary w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  <span>{copy.hero.secondaryCta}</span>
                </a>
              </div>
            </div>

            {/* Keep stat figure at 24px (strictly under h2 28px+ at every width) */}
            <dl className="hero-facts mt-auto hidden grid-cols-3 gap-6 border-t border-[var(--line)] pt-4 sm:grid">
              {copy.hero.facts.map((fact) => {
                const shown = Math.max(1, Math.round(fact.value * countProgress));
                return (
                  <div key={fact.label} className="min-w-0">
                    <dt className="text-[14px] font-medium text-[var(--muted)]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-[22px] font-semibold leading-none tracking-tight text-[var(--ink)] lg:text-[24px]">
                      {shown}
                      {fact.suffix}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="hero-visual h-full min-h-0 min-w-0 lg:col-span-6">
            <div
              data-ui="hero-showcase"
              className="flex h-full flex-col overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-1.5">
                <div
                  className="flex flex-wrap items-center gap-2"
                  role="tablist"
                  aria-label="Wybrane projekty"
                >
                  {featured.map((proj) => (
                    <button
                      key={proj.id}
                      type="button"
                      role="tab"
                      aria-selected={proj.id === activeProject.id}
                      onClick={() => setActiveId(proj.id)}
                      className="tab-btn"
                    >
                      {proj.title}
                    </button>
                  ))}
                </div>
                <span className="font-mono-label text-[13px] font-medium text-[var(--ink)]">
                  {activeProject.year}
                </span>
              </div>

              <div className="hidden flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-4 py-2 sm:flex">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-label rounded-[6px] border border-[var(--line)] bg-[var(--surface)] px-2 py-0.5 text-[12px] text-[var(--ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#projekty"
                  className="inline-flex min-h-[36px] items-center text-[14px] font-semibold text-[var(--action)] hover:underline"
                >
                  {copy.hero.viewAllLink} &rarr;
                </a>
              </div>

              <div className="frame-zoom aspect-[16/9] max-h-[175px] w-full flex-1 overflow-hidden bg-[var(--bg)] sm:max-h-none sm:aspect-auto">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
