"use client";

import { useEffect, useState } from "react";
import { Lang } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ArchitectureAndStack } from "@/components/ArchitectureAndStack";
import { ServicesAndExperience } from "@/components/ServicesAndExperience";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("pl");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Navbar lang={lang} onChangeLang={setLang} />
      <main id="top">
        <Hero lang={lang} />
        <ProjectsShowcase lang={lang} />
        <ArchitectureAndStack lang={lang} />
        <ServicesAndExperience lang={lang} />
        <ExperienceSection lang={lang} />
      </main>
      <ContactFooter lang={lang} />
    </>
  );
}
