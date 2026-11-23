"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { Drawer } from "vaul";
import { Lang, ProjectCategory, PROJECTS, UI_COPY } from "@/data/portfolio";

interface ProjectsShowcaseProps {
  lang: Lang;
}

export function ProjectsShowcase({ lang }: ProjectsShowcaseProps) {
  const copy = UI_COPY[lang].projects;
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selectedId, setSelectedId] = useState<string>(PROJECTS[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const visibleProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const activeProject =
    visibleProjects.find((p) => p.id === selectedId) ?? visibleProjects[0] ?? PROJECTS[0];
  const activeCopy = activeProject.copy[lang];

  return (
    <section
      id="projekty"
      className="section section--alt"
      style={{ "--h": 1, "--hm": 1 } as React.CSSProperties}
    >
      <div className="wrap flex flex-col justify-between gap-3">
        <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <h2 className="text-[var(--ink)]">{copy.heading}</h2>
            <p className="mt-1 max-w-[58ch] text-[16px] text-[var(--ink)]">
              {copy.subhead}
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-3"
            role="tablist"
            aria-label="Filtr kategorii projektów"
          >
            {copy.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => {
                  const nextFilter = f.id;
                  setFilter(nextFilter);
                  const nextList =
                    nextFilter === "all"
                      ? PROJECTS
                      : PROJECTS.filter((p) => p.categories.includes(nextFilter));
                  if (nextList.length && !nextList.some((p) => p.id === selectedId)) {
                    setSelectedId(nextList[0].id);
                  }
                }}
                className="tab-btn"
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Full-width software app-frame */}
        <div
          data-ui="projects-explorer"
          className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)]"
        >
          {/* Wrapping mobile/tablet project tabs (< 1024px) */}
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-[var(--line)] px-4 py-1 lg:hidden"
            role="tablist"
            aria-label="Lista projektów"
          >
            {visibleProjects.map((proj) => (
              <button
                key={proj.id}
                type="button"
                role="tab"
                aria-selected={proj.id === activeProject.id}
                onClick={() => setSelectedId(proj.id)}
                className="tab-btn"
              >
                {proj.title}
              </button>
            ))}
          </div>

          <div className="grid min-h-0 flex-1 lg:grid-cols-12">
            {/* Desktop sidebar list (>= 1024px), compact rows so all 6 fit at 1024x768 */}
            <div
              className="hidden min-h-0 flex-col divide-y divide-[var(--line)] border-r border-[var(--line)] lg:col-span-4 lg:flex"
              role="tablist"
              aria-label="Lista projektów"
            >
              {visibleProjects.map((proj) => {
                const pCopy = proj.copy[lang];
                const isActive = proj.id === activeProject.id;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(proj.id)}
                    className={`flex min-h-0 flex-1 cursor-pointer flex-col items-start justify-center gap-0.5 px-4 py-2 text-left transition-colors ${
                      isActive
                        ? "border-l-[3px] border-l-[var(--action)] bg-[var(--accent-soft)]"
                        : "hover:bg-[var(--surface-alt)]"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="text-[15px] font-semibold text-[var(--ink)]">
                        {proj.title}
                      </span>
                      <span className="font-mono-label text-[12px] text-[var(--muted)]">
                        {proj.year}
                      </span>
                    </div>
                    <span className="text-[13px] leading-snug text-[var(--ink)]">
                      {pCopy.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active project preview stage */}
            <div className="flex min-h-0 flex-col justify-between gap-2 p-3.5 sm:p-5 lg:col-span-8">
              <div className="min-h-0 space-y-2">
                <div className="frame-zoom aspect-[16/10] max-h-[155px] w-full overflow-hidden rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] sm:max-h-[220px] xl:max-h-[260px]">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 pt-0.5">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <h3 className="text-[var(--ink)]">{activeProject.title}</h3>
                    {activeProject.isCommercial && (
                      <span className="font-mono-label rounded-[4px] border border-[var(--action)] px-2 py-0.5 text-[12px] font-medium text-[var(--action)]">
                        {copy.commercialBadge}
                      </span>
                    )}
                  </div>
                  <span className="text-[14px] font-medium text-[var(--muted)]">
                    {activeCopy.subtitle}
                  </span>
                </div>

                <p className="text-[16px] leading-[1.45] text-[var(--ink)]">
                  {activeCopy.summary}
                </p>

                <div className="hidden gap-3 xl:grid xl:grid-cols-2">
                  <div className="rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-3">
                    <div className="font-mono-label text-[12px] uppercase tracking-wide text-[var(--action)]">
                      {copy.problemLabel}
                    </div>
                    <p className="mt-1 text-[15px] leading-snug text-[var(--ink)]">
                      {activeCopy.problem}
                    </p>
                  </div>
                  <div className="rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-3">
                    <div className="font-mono-label text-[12px] uppercase tracking-wide text-[var(--action)]">
                      {copy.solutionLabel}
                    </div>
                    <p className="mt-1 text-[15px] leading-snug text-[var(--ink)]">
                      {activeCopy.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 sm:flex-none"
                  >
                    <span>{copy.viewLive}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {activeProject.repoUrl && (
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary flex-1 sm:flex-none"
                  >
                    <img
                      src="/assets/icons/github.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 dark:invert"
                    />
                    <span>{copy.viewCode}</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="btn-secondary w-full sm:ml-auto sm:w-auto"
                >
                  <Maximize2 className="h-4 w-4" />
                  <span>{copy.openDetails}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vaul Case Study Drawer */}
      <Drawer.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-50 bg-black/65" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mx-auto max-h-[88svh] max-w-3xl overflow-y-auto rounded-t-[16px] border-t border-[var(--line)] bg-[var(--surface)] p-6">
            <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[var(--line)]" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <Drawer.Title className="text-[20px] font-semibold text-[var(--ink)]">
                  {activeProject.title}
                </Drawer.Title>
                <p className="text-[14px] text-[var(--muted)]">{activeCopy.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={copy.closeDrawer}
                className="btn-secondary btn-icon"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {activeProject.secondaryImage && (
                <div className="overflow-hidden rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)]">
                  <img
                    src={activeProject.secondaryImage}
                    alt={`${activeProject.title} detail`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-label rounded-[6px] border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1 text-[12px] text-[var(--ink)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-2 text-[16px] text-[var(--ink)]">
              {activeCopy.highlights.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--action)]"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--line)] pt-5">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>{copy.viewLive}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {activeProject.repoUrl && (
                <a
                  href={activeProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>{copy.viewCode}</span>
                </a>
              )}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </section>
  );
}
