"use client";

import { Lang, SKILL_GROUPS, UI_COPY } from "@/data/portfolio";

interface ArchitectureAndStackProps {
  lang: Lang;
}

export function ArchitectureAndStack({ lang }: ArchitectureAndStackProps) {
  const copy = UI_COPY[lang].architecture;

  return (
    <section
      id="architektura"
      className="section"
      style={{ "--h": 1, "--hm": 2 } as React.CSSProperties}
    >
      <div className="wrap flex flex-col justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[var(--ink)]">{copy.heading}</h2>
          <p className="mt-1 max-w-[62ch] text-[16px] text-[var(--ink)]">
            {copy.subhead}
          </p>
        </div>

        {/* 4-column architecture pipeline UI mock */}
        <div
          data-ui="architecture-pipeline"
          className="mt-1 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:mt-2 lg:grid-cols-4 lg:gap-6"
        >
          {copy.nodes.map((node, index) => (
            <div
              key={node.label}
              className="flex min-w-0 flex-col justify-between rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-3.5 lg:min-h-[192px]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-label text-[13px] font-semibold text-[var(--action)]">
                    0{index + 1} {index < copy.nodes.length - 1 ? "->" : ""}
                  </span>
                  <img
                    src={node.icon}
                    alt=""
                    width={36}
                    height={36}
                    className={`h-8 w-8 object-contain lg:h-9 lg:w-9 ${node.invertOnDark ? "dark:invert" : ""}`}
                  />
                </div>
                <div className="mt-2 text-[16px] font-semibold text-[var(--ink)]">
                  {node.label}
                </div>
                <p className="mt-0.5 text-[15px] leading-snug text-[var(--ink)] lg:text-[16px]">
                  {node.detail}
                </p>
              </div>
              <div className="flow-line mt-2.5" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Open 4-column skill lists: label flush left (0px stagger), SVG icon on right */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id} className="min-w-0">
              <h3 className="text-[var(--ink)]">{group.title[lang]}</h3>
              <ul className="mt-1.5 divide-y divide-[var(--line)]">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px] font-medium text-[var(--ink)] sm:text-[16px]">
                      {item.name}
                    </span>
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt=""
                        width={18}
                        height={18}
                        className={`h-[18px] w-[18px] shrink-0 object-contain ${
                          item.invertOnDark ? "dark:invert" : ""
                        }`}
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
