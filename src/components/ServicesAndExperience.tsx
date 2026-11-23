"use client";

import { Download } from "lucide-react";
import { Lang, SERVICES, SITE_META, UI_COPY } from "@/data/portfolio";

interface ServicesAndExperienceProps {
  lang: Lang;
}

export function ServicesAndExperience({ lang }: ServicesAndExperienceProps) {
  const copy = UI_COPY[lang].services;
  const cvHref = lang === "pl" ? SITE_META.cv.pl : SITE_META.cv.en;

  return (
    <section
      id="wspolpraca"
      className="section section--alt"
      style={{ "--h": 1, "--hm": 2 } as React.CSSProperties}
    >
      <div className="wrap flex flex-col justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-[var(--ink)]">{copy.heading}</h2>
          <p className="mt-1 max-w-[60ch] text-[16px] text-[var(--ink)]">
            {copy.subhead}
          </p>
        </div>

        {/* Always balanced 3-up from 768px+ so zero half-empty row at 768/820 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-interactive flex min-w-0 flex-col justify-between p-4 lg:p-5"
            >
              <div>
                <div
                  data-ui="service-preview"
                  className="mb-3 flex flex-col justify-between gap-2 rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-3.5 md:h-[240px] lg:h-[214px]"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--line)] pb-2">
                    <span className="font-mono-label text-[11px] uppercase tracking-wide text-[var(--muted)]">
                      production · stack
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--status)]" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-3 py-1">
                    {service.icons.map((iconSrc) => (
                      <span
                        key={iconSrc}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-[var(--line)] bg-[var(--surface)] p-1.5 lg:h-11 lg:w-11"
                      >
                        <img
                          src={iconSrc}
                          alt=""
                          width={28}
                          height={28}
                          className="h-6 w-6 object-contain lg:h-7 lg:w-7"
                        />
                      </span>
                    ))}
                  </div>
                  <div className="font-mono-label text-[11px] leading-snug text-[var(--muted)] lg:text-[12px]">
                    <div>{service.codePreview[0]}</div>
                    <div className="text-[var(--action)]">{service.codePreview[1]}</div>
                  </div>
                </div>

                <h3 className="text-[var(--ink)]">{service.title[lang]}</h3>
                <p className="mt-1 text-[16px] leading-snug text-[var(--ink)]">
                  {service.description[lang]}
                </p>
              </div>

              <ul className="mt-2.5 space-y-1 text-[15px] text-[var(--ink)] lg:text-[16px]">
                {service.deliverables[lang].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--action)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a href="#kontakt" className="btn-primary w-full sm:w-auto">
            {copy.cta}
          </a>
          <a href={cvHref} download className="btn-secondary w-full sm:w-auto">
            <Download className="h-4 w-4" />
            <span>{copy.downloadCv}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
