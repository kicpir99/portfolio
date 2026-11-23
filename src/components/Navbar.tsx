"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { Drawer } from "vaul";
import { Lang, SITE_META, UI_COPY } from "@/data/portfolio";

interface NavbarProps {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
}

export function Navbar({ lang, onChangeLang }: NavbarProps) {
  const copy = UI_COPY[lang];
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#projekty");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const ids = ["top", "projekty", "architektura", "wspolpraca", "doswiadczenie", "kontakt"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { threshold: [0.25, 0.55], rootMargin: "-72px 0px -30% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const cvHref = lang === "pl" ? SITE_META.cv.pl : SITE_META.cv.en;

  const navLinks = [
    { href: "#projekty", label: copy.nav.projects },
    { href: "#architektura", label: copy.nav.stack },
    { href: "#wspolpraca", label: copy.nav.services },
    { href: "#doswiadczenie", label: copy.nav.experience },
    { href: "#kontakt", label: copy.nav.contact },
  ];

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          {copy.skipToContent}
        </a>

        <a
          href="#top"
          className="inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap font-semibold tracking-tight text-[var(--ink)]"
        >
          <span
            className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[var(--action)]"
            aria-hidden="true"
          />
          <span className="text-[15px]">{SITE_META.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Główna nawigacja">
          {navLinks.map((item) => {
            const isCurrent = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? "location" : undefined}
                className={`inline-flex min-h-[44px] items-center whitespace-nowrap text-[15px] font-medium transition-colors ${
                  isCurrent
                    ? "text-[var(--action)] underline decoration-2 underline-offset-8"
                    : "text-[var(--ink)] hover:text-[var(--action)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            type="button"
            onClick={() => onChangeLang(lang === "pl" ? "en" : "pl")}
            aria-label={lang === "pl" ? "Switch language to English" : "Przełącz język na polski"}
            className="btn-secondary btn-icon"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
            className="btn-secondary btn-icon"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a href={cvHref} download className="btn-primary">
            <Download className="h-4 w-4" />
            <span>{copy.nav.downloadCv}</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => onChangeLang(lang === "pl" ? "en" : "pl")}
            aria-label={lang === "pl" ? "Switch language to English" : "Przełącz język na polski"}
            className="btn-secondary btn-icon"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>

          <span className="hidden sm:inline-flex">
            <a href={cvHref} download className="btn-primary">
              <Download className="h-4 w-4" />
              <span>{copy.nav.downloadCv}</span>
            </a>
          </span>

          <Drawer.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Drawer.Trigger asChild>
              <button
                type="button"
                aria-label="Otwórz menu"
                aria-expanded={mobileOpen}
                className="btn-secondary btn-icon"
              >
                <Menu className="h-5 w-5" />
              </button>
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 z-50 bg-black/60" />
              <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 rounded-t-[16px] border-t border-[var(--line)] bg-[var(--bg)] p-6">
                <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[var(--line)]" />
                <div className="mb-4 flex items-center justify-between">
                  <Drawer.Title className="text-[17px] font-semibold text-[var(--ink)]">
                    {SITE_META.name}
                  </Drawer.Title>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Zamknij menu"
                    className="btn-secondary btn-icon"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-[44px] items-center rounded-[var(--r-md)] px-3 text-[16px] font-medium text-[var(--ink)] hover:bg-[var(--surface)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-[var(--line)] pt-5">
                  <button
                    type="button"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    className="btn-secondary w-full"
                  >
                    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    <span>{isDark ? "Tryb jasny" : "Tryb ciemny"}</span>
                  </button>
                  <a
                    href={cvHref}
                    download
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary w-full"
                  >
                    <Download className="h-4 w-4" />
                    <span>{copy.nav.downloadCv}</span>
                  </a>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </header>
  );
}
