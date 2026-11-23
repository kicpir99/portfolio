"use client";

import { Lang, SITE_META, TIMELINE, UI_COPY } from "@/data/portfolio";

interface ExperienceSectionProps {
  lang: Lang;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const copy = UI_COPY[lang].experience;

  return (
    <section
      id="doswiadczenie"
      className="section"
      style={{ "--h": 1, "--hm": 2 } as React.CSSProperties}
    >
      <div className="wrap flex flex-col justify-between gap-4">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 md:grid-cols-12 md:items-stretch md:gap-6">
          {/* Left col: flush timeline list */}
          <div className="flex min-w-0 flex-col justify-between md:col-span-6">
            <div>
              <h2 className="text-[var(--ink)]">{copy.heading}</h2>
              <p className="mt-1.5 max-w-[54ch] text-[16px] text-[var(--ink)]">
                {copy.subhead}
              </p>
            </div>

            <ul className="mt-3 divide-y divide-[var(--line)]">
              {TIMELINE.map((item) => (
                <li key={`${item.org}-${item.period}`} className="py-1.5 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[15px] font-semibold text-[var(--ink)] lg:text-[16px]">
                      {item.role[lang]}
                    </span>
                    <span className="font-mono-label text-[12px] font-medium text-[var(--action)] lg:text-[13px]">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-[14px] font-medium text-[var(--muted)]">
                    {item.org} · {item.location}
                  </div>
                  <p className="mt-0.5 text-[16px] leading-snug text-[var(--ink)]">
                    {item.details[lang]}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col: matched full height UI credentials card on k=6 split line */}
          <div className="min-w-0 md:col-span-6">
            <div
              data-ui="experience-profile"
              className="flex h-full flex-col justify-between gap-4 rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/images/avatar.jpg"
                  alt={SITE_META.name}
                  width={60}
                  height={60}
                  className="h-14 w-14 shrink-0 rounded-full border border-[var(--line)] bg-white object-contain lg:h-16 lg:w-16"
                />
                <div className="min-w-0">
                  <span className="font-mono-label inline-block text-[12px] font-medium text-[var(--action)]">
                    {copy.profileBadge}
                  </span>
                  <h3 className="mt-0.5 text-[var(--ink)]">{copy.profileRole}</h3>
                  <p className="mt-0.5 text-[14px] text-[var(--muted)]">
                    {copy.profileLocation}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-3.5">
                {[
                  { src: "/assets/icons/python.svg", label: "Python" },
                  { src: "/assets/icons/django.svg", label: "Django" },
                  { src: "/assets/icons/fastapi.svg", label: "FastAPI" },
                  { src: "/assets/icons/postgres.svg", label: "PostgreSQL" },
                  { src: "/assets/icons/docker.svg", label: "Docker" },
                ].map((tool) => (
                  <div key={tool.label} className="flex flex-col items-center gap-1">
                    <img
                      src={tool.src}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                    <span className="font-mono-label text-[11px] text-[var(--ink)]">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>

              <dl className="divide-y divide-[var(--line)]">
                {copy.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-wrap items-baseline justify-between gap-2 py-2"
                  >
                    <dt className="text-[14px] text-[var(--muted)]">{m.label}</dt>
                    <dd className="text-[14px] font-semibold text-[var(--ink)] lg:text-[15px]">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div>
                <a href="#kontakt" className="btn-primary w-full sm:w-auto">
                  {copy.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
