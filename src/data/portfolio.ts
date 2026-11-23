export type Lang = "pl" | "en";

export type ProjectCategory = "python-ai" | "web-ecommerce" | "commercial";

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  categories: ProjectCategory[];
  isCommercial: boolean;
  image: string;
  secondaryImage?: string;
  repoUrl?: string;
  liveUrl?: string;
  stack: string[];
  copy: Record<
    Lang,
    {
      subtitle: string;
      summary: string;
      problem: string;
      solution: string;
      highlights: string[];
    }
  >;
}

export interface SkillGroup {
  id: string;
  title: Record<Lang, string>;
  items: Array<{
    name: string;
    icon?: string;
    invertOnDark?: boolean;
  }>;
}

export interface ServiceItem {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  deliverables: Record<Lang, string[]>;
  icons: string[];
  codePreview: string[];
}

export interface TimelineItem {
  period: string;
  org: string;
  location: string;
  role: Record<Lang, string>;
  details: Record<Lang, string>;
}

export const SITE_META = {
  name: "Kacper Łamasz",
  email: "kacper.lamasz16@gmail.com",
  phone: "+48 518 777 166",
  github: "https://github.com/kicpir99",
  linkedin: "https://www.linkedin.com/in/kacper-lamasz",
  cv: {
    pl: "/cv/Kacper_Lamasz_CV_Python_Developer.pdf",
    en: "/cv/Kacper_Lamasz_CV_Python_Developer_EN.pdf",
  },
};

export const UI_COPY: Record<
  Lang,
  {
    skipToContent: string;
    nav: {
      projects: string;
      stack: string;
      services: string;
      experience: string;
      contact: string;
      downloadCv: string;
    };
    hero: {
      status: string;
      headline: string;
      lead: string;
      primaryCta: string;
      secondaryCta: string;
      viewAllLink: string;
      facts: Array<{ label: string; value: number; suffix: string }>;
    };
    projects: {
      heading: string;
      subhead: string;
      filters: Array<{ id: "all" | ProjectCategory; label: string }>;
      commercialBadge: string;
      problemLabel: string;
      solutionLabel: string;
      openDetails: string;
      viewLive: string;
      viewCode: string;
      closeDrawer: string;
    };
    architecture: {
      heading: string;
      subhead: string;
      nodes: Array<{ label: string; detail: string; icon: string; invertOnDark?: boolean }>;
    };
    services: {
      heading: string;
      subhead: string;
      cta: string;
      downloadCv: string;
    };
    experience: {
      heading: string;
      subhead: string;
      profileBadge: string;
      profileRole: string;
      profileLocation: string;
      metrics: Array<{ label: string; value: string }>;
      cta: string;
    };
    contact: {
      heading: string;
      subhead: string;
      copyEmail: string;
      copiedToast: string;
      cvPl: string;
      cvEn: string;
      form: {
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        topicLabel: string;
        topics: string[];
        messageLabel: string;
        messagePlaceholder: string;
        submit: string;
        sending: string;
        sentToast: string;
        mailtoFallbackToast: string;
        validationError: string;
      };
      footerNote: string;
    };
  }
> = {
  pl: {
    skipToContent: "Przejdź do treści",
    nav: {
      projects: "Projekty",
      stack: "Stack",
      services: "Współpraca",
      experience: "Doświadczenie",
      contact: "Kontakt",
      downloadCv: "Pobierz CV",
    },
    hero: {
      status: "Wrocław lub zdalnie · UoP, B2B i zlecenia",
      headline: "Programista Python i Backend Developer",
      lead: "Buduję aplikacje webowe w Django i FastAPI, REST API, narzędzia do scrapingu oraz automatyzacje w Dockerze. Łączę ponad 4 lata pracy inżynierskiej z wdrożeniami produkcyjnymi dla firm.",
      primaryCta: "Zobacz projekty",
      secondaryCta: "Pobierz CV",
      viewAllLink: "Wszystkie projekty",
      facts: [
        { label: "Wdrożone projekty", value: 6, suffix: "" },
        { label: "Realizacje komercyjne", value: 2, suffix: "" },
        { label: "Lata w inżynierii", value: 4, suffix: "+" },
      ],
    },
    projects: {
      heading: "6 projektów: Python, Django, FastAPI i Next.js",
      subhead: "Wybierz realizację, aby sprawdzić architekturę, kod na GitHub i działające demo.",
      filters: [
        { id: "all", label: "Wszystkie" },
        { id: "python-ai", label: "Python i AI" },
        { id: "web-ecommerce", label: "Web i E-commerce" },
        { id: "commercial", label: "Komercyjne" },
      ],
      commercialBadge: "Projekt komercyjny",
      problemLabel: "Cel",
      solutionLabel: "Rozwiązanie",
      openDetails: "Szczegóły wdrożenia",
      viewLive: "Otwórz demo",
      viewCode: "Kod na GitHub",
      closeDrawer: "Zamknij",
    },
    architecture: {
      heading: "Architektura Python i 4 warstwy stacku",
      subhead: "Przepływ danych od źródeł zewnętrznych i baz PostgreSQL po kontenery Docker i powiadomienia.",
      nodes: [
        { label: "Źródła i klienci", detail: "REST API, WooCommerce, portale WWW i formularze", icon: "/assets/icons/woocommerce.svg" },
        { label: "Logika w Pythonie", detail: "Django 6, FastAPI, Pydantic v2, AsyncIO i Playwright", icon: "/assets/icons/python.svg" },
        { label: "Dane i kontenery", detail: "PostgreSQL, SQLite, Docker Compose i testy Pytest", icon: "/assets/icons/docker.svg" },
        { label: "Wynik i alerty", detail: "Next.js, e-mail SMTP, Discord oraz Telegram", icon: "/assets/icons/nextjs.svg", invertOnDark: true },
      ],
    },
    services: {
      heading: "3 obszary współpracy: Boty, API i Strony",
      subhead: "Poza pracą etatową lub B2B realizuję konkretne zlecenia programistyczne w jasnych etapach.",
      cta: "Skontaktuj się",
      downloadCv: "Pobierz CV",
    },
    experience: {
      heading: "Doświadczenie i edukacja (2019-2026)",
      subhead: "Ponad 4 lata pracy inżynierskiej z systemami danych oraz 6-miesięczny program Python Developer Pro.",
      profileBadge: "Gotowość do pracy · Wrocław / Zdalnie",
      profileRole: "Kacper Łamasz — Python / Backend Developer",
      profileLocation: "Certyfikaty UDT · LearnIT Python Pro · 2 realizacje komercyjne",
      metrics: [
        { label: "Główny stack", value: "Python 3.10+ · Django 6 · FastAPI" },
        { label: "Bazy i kolejki", value: "PostgreSQL · SQLite · Docker" },
        { label: "Doświadczenie", value: "Kierownik Techniczny · Analityk OZE" },
      ],
      cta: "Przejdź do kontaktu",
    },
    contact: {
      heading: "Kontakt i CV Python Developer",
      subhead: "Napisz w sprawie rekrutacji Python/Backend albo wyceny konkretnego wdrożenia.",
      copyEmail: "Kopiuj e-mail",
      copiedToast: "Skopiowano adres kacper.lamasz16@gmail.com",
      cvPl: "CV po polsku (PDF)",
      cvEn: "CV po angielsku (PDF)",
      form: {
        nameLabel: "Imię lub firma",
        namePlaceholder: "Jan Kowalski",
        emailLabel: "Adres e-mail",
        emailPlaceholder: "jan@firma.pl",
        topicLabel: "Temat",
        topics: ["Rekrutacja (etat / B2B)", "Skrypt, bot lub scraping (Python)", "Strona lub sklep WWW", "Inny temat"],
        messageLabel: "Wiadomość",
        messagePlaceholder: "Opisz krótko stanowisko, wymagania albo zakres zlecenia...",
        submit: "Wyślij wiadomość",
        sending: "Wysyłanie...",
        sentToast: "Wiadomość została wysłana.",
        mailtoFallbackToast: "Przygotowano szkic wiadomości e-mail do Kacpra Łamasza.",
        validationError: "Uzupełnij imię, poprawny adres e-mail i treść wiadomości.",
      },
      footerNote: "Wrocław, Polska · Kod i wdrożenia: Kacper Łamasz",
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      projects: "Projects",
      stack: "Stack",
      services: "Services",
      experience: "Experience",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      status: "Wroclaw or Remote · Full-time, B2B & Freelance",
      headline: "Python & Backend Developer",
      lead: "I build web applications with Django and FastAPI, REST APIs, scraping pipelines, and Dockerized automation tools. Four years of engineering work in renewable energy now back my production deployments.",
      primaryCta: "View projects",
      secondaryCta: "Download CV",
      viewAllLink: "All projects",
      facts: [
        { label: "Shipped projects", value: 6, suffix: "" },
        { label: "Commercial builds", value: 2, suffix: "" },
        { label: "Engineering years", value: 4, suffix: "+" },
      ],
    },
    projects: {
      heading: "6 Projects: Python, Django, FastAPI & Next.js",
      subhead: "Select a project to inspect its architecture, live demo, and source repository on GitHub.",
      filters: [
        { id: "all", label: "All" },
        { id: "python-ai", label: "Python & AI" },
        { id: "web-ecommerce", label: "Web & E-commerce" },
        { id: "commercial", label: "Commercial" },
      ],
      commercialBadge: "Paid client project",
      problemLabel: "Goal",
      solutionLabel: "Implementation",
      openDetails: "Implementation details",
      viewLive: "Open live site",
      viewCode: "View on GitHub",
      closeDrawer: "Close",
    },
    architecture: {
      heading: "Python Architecture & 4-Layer Stack",
      subhead: "Production data flow from external APIs and PostgreSQL stores to Docker services and alerts.",
      nodes: [
        { label: "Inputs & clients", detail: "REST APIs, WooCommerce, web portals and forms", icon: "/assets/icons/woocommerce.svg" },
        { label: "Python core", detail: "Django 6, FastAPI, Pydantic v2, AsyncIO, Playwright", icon: "/assets/icons/python.svg" },
        { label: "Storage & ops", detail: "PostgreSQL, SQLite, Docker Compose and Pytest", icon: "/assets/icons/docker.svg" },
        { label: "Outputs & alerts", detail: "Next.js, HTML SMTP email, Discord, Telegram", icon: "/assets/icons/nextjs.svg", invertOnDark: true },
      ],
    },
    services: {
      heading: "3 Services: Bots, Backend API & Stores",
      subhead: "Alongside full-time backend roles, I deliver scoped freelance builds with clear milestones.",
      cta: "Get in touch",
      downloadCv: "Download CV",
    },
    experience: {
      heading: "Experience & Education (2019-2026)",
      subhead: "Over 4 years of engineering experience paired with the 6-month Python Developer Pro program.",
      profileBadge: "Available · Wroclaw / Remote",
      profileRole: "Kacper Łamasz — Python / Backend Developer",
      profileLocation: "UDT Certified · LearnIT Python Pro · 2 Paid Builds",
      metrics: [
        { label: "Core stack", value: "Python 3.10+ · Django 6 · FastAPI" },
        { label: "Data & infra", value: "PostgreSQL · SQLite · Docker" },
        { label: "Background", value: "Technical Lead · Energy Systems" },
      ],
      cta: "Contact Kacper",
    },
    contact: {
      heading: "Contact & Python Developer CV",
      subhead: "Reach out regarding a Python/Backend role or a scoped freelance project.",
      copyEmail: "Copy email",
      copiedToast: "Copied kacper.lamasz16@gmail.com",
      cvPl: "Polish CV (PDF)",
      cvEn: "English CV (PDF)",
      form: {
        nameLabel: "Name or company",
        namePlaceholder: "Jane Doe",
        emailLabel: "Email address",
        emailPlaceholder: "jane@company.com",
        topicLabel: "Topic",
        topics: ["Recruitment (Full-time / B2B)", "Python bot, scraper or automation", "Website or e-commerce store", "Other"],
        messageLabel: "Message",
        messagePlaceholder: "Share the role details or project scope...",
        submit: "Send message",
        sending: "Sending...",
        sentToast: "Message sent.",
        mailtoFallbackToast: "Prepared an email draft to Kacper Łamasz.",
        validationError: "Please enter your name, a valid email address, and a message.",
      },
      footerNote: "Wroclaw, Poland · Built by Kacper Łamasz",
    },
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "beathub",
    title: "BeatHub",
    year: "2025-2026",
    categories: ["python-ai", "web-ecommerce"],
    isCommercial: false,
    image: "/images/projects/beathub.png",
    repoUrl: "https://github.com/kicpir99/BeatHub",
    liveUrl: "https://beathub-ip60.onrender.com/",
    stack: ["Python", "Django 6", "DRF", "PostgreSQL", "Docker", "OAuth / JWT", "OpenAPI", "Turbo"],
    copy: {
      pl: {
        subtitle: "Platforma do streamingu audio",
        summary: "Aplikacja webowa z ciągłym odtwarzaczem globalnym, logowaniem OAuth/JWT i OpenAPI w Dockerze.",
        problem: "Płynne odtwarzanie audio między podstronami przy klasycznym backendzie Django.",
        solution: "Django 6 + DRF z Hotwired Turbo, autoryzacją OAuth/JWT oraz schematem drf-spectacular.",
        highlights: [
          "Ciągły odtwarzacz audio działający bez przeładowywania całej strony",
          "Zoptymalizowane zapytania Django ORM i parsowanie metadanych w mutagen",
          "Konteneryzacja w Dockerze oraz konfiguracja pod PostgreSQL i Render",
        ],
      },
      en: {
        subtitle: "Audio streaming platform",
        summary: "Web application with a persistent global player, OAuth/JWT auth, OpenAPI docs, and Docker.",
        problem: "Keeping audio playback uninterrupted across pages on a Django REST backend.",
        solution: "Django 6 and DRF paired with Hotwired Turbo, OAuth/JWT auth, and OpenAPI schemas.",
        highlights: [
          "Global player persisting across page navigation",
          "Tuned Django ORM queries and audio metadata parsing via mutagen",
          "Dockerized environment configured for PostgreSQL and Render",
        ],
      },
    },
  },
  {
    id: "bot-vinted",
    title: "Bot Vinted",
    year: "2026 · Q2",
    categories: ["python-ai", "commercial"],
    isCommercial: true,
    image: "/images/projects/bot-vinted.png",
    secondaryImage: "/images/projects/bot-vinted-history.png",
    repoUrl: "https://github.com/kicpir99/vinted-monitor-showcase",
    stack: ["Python 3", "PyQt6", "curl_cffi", "BeautifulSoup4", "SQLite", "SMTP (HTML)", "Telegram Bot API", "PyInstaller"],
    copy: {
      pl: {
        subtitle: "Komercyjny monitoring okazji i alerty e-mail",
        summary: "Płatna aplikacja desktopowa na Windows monitorująca oferty gier poniżej zadanego progu cenowego.",
        problem: "Szybkie alerty o tanich grach na PS4, PS5 i Switch bez duplikatów powiadomień.",
        solution: "Aplikacja PyQt6 z curl_cffi TLS, dopasowaniem tytułów, SQLite i wysyłką SMTP/Telegram.",
        highlights: [
          "Dopasowanie tytułów z tolerancją dopisków i słów wykluczających",
          "Wyliczanie oszczędności w powiadomieniach HTML e-mail i Telegram",
          "Spakowana do pliku .exe z przenoszeniem zapisu do AppData i instrukcją",
        ],
      },
      en: {
        subtitle: "Commercial deal monitor and email alerts",
        summary: "Paid Windows desktop application tracking boxed game listings below target price limits.",
        problem: "Deliver fast game deal alerts without duplicate notifications or manual refreshing.",
        solution: "PyQt6 desktop app using curl_cffi TLS requests, SQLite deduplication, and SMTP alerts.",
        highlights: [
          "Fuzzy title matching with exclusion keywords across four console lists",
          "Calculated savings inside HTML email templates and Telegram alerts",
          "Packaged as a standalone .exe with AppData fallback and guides",
        ],
      },
    },
  },
  {
    id: "job-hunter",
    title: "Job Hunter Bot",
    year: "2026 · Q1",
    categories: ["python-ai"],
    isCommercial: false,
    image: "/images/projects/job-hunter.png",
    repoUrl: "https://github.com/kicpir99/job-hunter-bot",
    stack: ["Python 3.10+", "Pydantic v2", "Google Gemini API", "discord.py", "Pytest", "SQLite", "Docker Compose"],
    copy: {
      pl: {
        subtitle: "Monitoring ofert pracy z oceną LLM",
        summary: "Scraper ogłoszeń IT oceniający dopasowanie ofert przez Google Gemini API i Pydantic v2.",
        problem: "Odsiewanie ogłoszeń wymagających innego seniority lub statusu studenta na kilku portalach.",
        solution: "Pipeline w Dockerze pobierający oferty, zapisujący stan w SQLite z alertami na Discorda.",
        highlights: [
          "Strukturyzowana ocena ofert przez google-genai z walidacją Pydantic v2",
          "Śledzenie statusów aplikacji i komendy zarządzające na bocie Discord",
          "Pokrycie logiki dopasowania testami jednostkowymi w Pytest",
        ],
      },
      en: {
        subtitle: "AI-assisted job monitoring bot",
        summary: "Automated IT job scraper scoring offer fit via Google Gemini API and Pydantic v2.",
        problem: "Filtering mismatched seniority and student-only roles manually across multiple job boards.",
        solution: "Containerized Python pipeline storing jobs in SQLite and sending Discord alerts.",
        highlights: [
          "Structured LLM screening with google-genai and Pydantic v2 validation",
          "Application status tracking through Discord bot commands",
          "Unit test suite written in Pytest running inside Docker Compose",
        ],
      },
    },
  },
  {
    id: "pasieka-usza",
    title: "Pasieka Usza",
    year: "2026 · Q1",
    categories: ["web-ecommerce", "commercial"],
    isCommercial: true,
    image: "/images/projects/pasieka-usza.png",
    repoUrl: "https://github.com/kicpir99/migratory-apiary-usza",
    liveUrl: "https://kicpir99.github.io/migratory-apiary-usza/",
    stack: ["Python (Automation)", "React 19", "TypeScript", "Tailwind CSS 4", "WooCommerce REST API", "Leaflet", "Vitest"],
    copy: {
      pl: {
        subtitle: "Sklep e-commerce w architekturze Headless",
        summary: "Komercyjny sklep z WooCommerce REST API, mapą 14 000 Paczkomatów i automatem wdrożeń w Pythonie.",
        problem: "Połączenie szybkiego frontu React z zapleczem WooCommerce, Paczkomatami i walidacją NIP.",
        solution: "Front React 19 i TypeScript z Leaflet oraz autorskim skryptem FTP w Pythonie.",
        highlights: [
          "Dynamiczne stany magazynowe i walidacja NIP dla zamówień firmowych",
          "Interaktywna mapa ponad 14 000 Paczkomatów InPost oparta na Leaflet",
          "Autorski skrypt w Pythonie automatyzujący build Vite i synchronizację FTP",
        ],
      },
      en: {
        subtitle: "Headless e-commerce storefront",
        summary: "Commercial store with WooCommerce REST API, 14k+ locker map, and Python deploy automation.",
        problem: "Connecting a fast React UI to WooCommerce stocks, parcel lockers, and B2B invoices.",
        solution: "React 19 + TypeScript storefront with Leaflet maps and Python FTP sync script.",
        highlights: [
          "Live stock synchronization and Polish VAT ID validation for B2B orders",
          "Interactive Leaflet map indexing over 14,000 InPost parcel lockers",
          "Custom Python script automating production Vite builds and FTP upload",
        ],
      },
    },
  },
  {
    id: "kuzenbot",
    title: "KuzenBot & Scraper",
    year: "2025-2026",
    categories: ["python-ai"],
    isCommercial: false,
    image: "/images/projects/kuzenbot.png",
    repoUrl: "https://github.com/kicpir99/KuzenBot",
    liveUrl: "https://kicpir99.github.io/KuzenBot/",
    stack: ["Python 3.10+", "PyQt6", "QThread", "ThreadPoolExecutor", "BeautifulSoup4", "REST API", "Oracle Cloud", "Inno Setup"],
    copy: {
      pl: {
        subtitle: "Nakładka desktopowa i serwis w chmurze",
        summary: "Nakładka na Windows bez ingerencji w pamięć gry, zasilana przez scraper w chmurze Oracle Cloud.",
        problem: "Podgląd statystyk gry w czasie rzeczywistym bez minimalizowania okna i modyfikacji procesu.",
        solution: "Aplikacja PyQt6 + QThread pobierająca dane REST API z serwisu na Linuxie OCI.",
        highlights: [
          "Wielowątkowe odświeżanie w QThread i lokalny bufor JSON cache",
          "Osobny scraper na maszynie Linux w Oracle Cloud z kolejką ponowień",
          "Instalator Windows przygotowany w Inno Setup w 9 wersjach językowych",
        ],
      },
      en: {
        subtitle: "Desktop overlay and cloud scraper service",
        summary: "Windows overlay avoiding process memory access, fed by a Linux scraper on Oracle Cloud.",
        problem: "Viewing live stats in-game without alt-tabbing or touching protected process memory.",
        solution: "PyQt6 QThread desktop client querying a cloud Linux scraper over REST API.",
        highlights: [
          "Non-blocking QThread workers with local JSON caching",
          "Dedicated multithreaded scraper on an Oracle Cloud Linux VM",
          "Windows installer built with Inno Setup supporting 9 languages",
        ],
      },
    },
  },
  {
    id: "krawczyk-studio",
    title: "Krawczyk & Partnerzy",
    year: "2025",
    categories: ["web-ecommerce"],
    isCommercial: false,
    image: "/images/projects/krawczyk-studio.png",
    repoUrl: "https://github.com/kicpir99/interior-architecture-studio",
    liveUrl: "https://interior-architecture-studio.vercel.app/",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Vitest", "Sonner", "Vaul"],
    copy: {
      pl: {
        subtitle: "Strona studia architektury wnętrz",
        summary: "Aplikacja w Next.js 16 z konfiguratorem 3D, suwakiem Przed/Po i kalkulatorem budżetu.",
        problem: "Czytelne pokazanie etapów projektu wnętrz oraz szacunkowego kosztorysu online.",
        solution: "Next.js App Router z axometrycznym podglądem 3D, suwakiem porównawczym i Vitest.",
        highlights: [
          "9-etapowy izometryczny konfigurator procesu inwestycji",
          "Interaktywny suwak Przed i Po oraz arkusz wyceny do druku",
          "Testy jednostkowe logiki kalkulatora w Vitest",
        ],
      },
      en: {
        subtitle: "Interior architecture studio site",
        summary: "Next.js 16 app featuring a 9-step isometric configurator, Before/After slider, and estimator.",
        problem: "Clarifying interior design phases and renovation costs before booking a call.",
        solution: "App Router application with CSS isometric stages, comparison slider, and Vitest.",
        highlights: [
          "9-step isometric investment configurator component",
          "Interactive Before/After slider and print-ready cost breakdown",
          "Calculator pricing logic covered by Vitest unit tests",
        ],
      },
    },
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "backend",
    title: { pl: "Python, Django 6 i FastAPI", en: "Python, Django 6 & FastAPI" },
    items: [
      { name: "Python 3.10+", icon: "/assets/icons/python.svg" },
      { name: "Django 6 & DRF", icon: "/assets/icons/django.svg" },
      { name: "FastAPI", icon: "/assets/icons/fastapi.svg" },
      { name: "Flask", icon: "/assets/icons/flask.svg", invertOnDark: true },
      { name: "Pydantic v2 / REST API" },
      { name: "OpenAPI / JWT / OAuth" },
    ],
  },
  {
    id: "data-devops",
    title: { pl: "PostgreSQL, SQLite i Docker", en: "PostgreSQL, SQLite & Docker" },
    items: [
      { name: "PostgreSQL", icon: "/assets/icons/postgres.svg" },
      { name: "SQLite", icon: "/assets/icons/sqlite.svg" },
      { name: "Docker & Compose", icon: "/assets/icons/docker.svg" },
      { name: "Pytest", icon: "/assets/icons/pytest.svg" },
      { name: "Linux (Bash)", icon: "/assets/icons/linux-tux.svg" },
      { name: "Git & GitHub Actions", icon: "/assets/icons/github-actions.svg" },
    ],
  },
  {
    id: "automation-ai",
    title: { pl: "Playwright, Scraping i Gemini AI", en: "Playwright, Scraping & Gemini AI" },
    items: [
      { name: "Playwright", icon: "/assets/icons/playwright.svg" },
      { name: "Google Gemini API", icon: "/assets/icons/google-gemini.svg" },
      { name: "discord.py", icon: "/assets/icons/discord-icon.svg" },
      { name: "curl_cffi & BeautifulSoup4" },
      { name: "SMTP & Telegram Bot API" },
      { name: "PyQt6 & PyInstaller" },
    ],
  },
  {
    id: "frontend",
    title: { pl: "React 19, Next.js 16 i WooCommerce", en: "React 19, Next.js 16 & WooCommerce" },
    items: [
      { name: "React 19", icon: "/assets/icons/react.svg" },
      { name: "Next.js 16", icon: "/assets/icons/nextjs.svg", invertOnDark: true },
      { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg" },
      { name: "WordPress", icon: "/assets/icons/wordpress-icon.svg", invertOnDark: true },
      { name: "WooCommerce REST", icon: "/assets/icons/woocommerce.svg" },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "bots-scraping",
    title: {
      pl: "Skrypty, boty i scraping w Pythonie",
      en: "Python bots, scrapers & automation",
    },
    description: {
      pl: "Monitoring ofert, integracje API i arkuszy oraz alerty na e-mail, Discorda i Telegrama.",
      en: "Automated monitoring scripts, API sync pipelines, and instant email or Telegram alerts.",
    },
    deliverables: {
      pl: [
        "Paczka .exe na Windows lub kontener Docker",
        "Deduplikacja rekordów w SQLite i PostgreSQL",
        "Prosta instrukcja uruchomienia dla zespołu",
      ],
      en: [
        "Standalone Windows .exe or Docker container",
        "SQLite or PostgreSQL deduplication pipelines",
        "Step-by-step setup guide for your team",
      ],
    },
    icons: [
      "/assets/icons/python.svg",
      "/assets/icons/playwright.svg",
      "/assets/icons/sqlite.svg",
    ],
    codePreview: ["pipeline: curl_cffi -> pydantic", "notify: SMTP + Telegram"],
  },
  {
    id: "backend-api",
    title: {
      pl: "Aplikacje Django i FastAPI",
      en: "Django & FastAPI backends",
    },
    description: {
      pl: "Backendy w Django i FastAPI z autoryzacją JWT, OpenAPI i konteneryzacją pod produkcję.",
      en: "Django and FastAPI backends featuring JWT auth, OpenAPI specs, and Docker readiness.",
    },
    deliverables: {
      pl: [
        "Modele relacyjne w PostgreSQL i migracje",
        "Testy w Pytest oraz schemat OpenAPI Swagger",
        "Wdrożenie na Linux VPS, Render lub Vercel",
      ],
      en: [
        "PostgreSQL relational schemas and migrations",
        "Pytest unit tests and OpenAPI Swagger docs",
        "Deployment to Linux VPS, Render, or Vercel",
      ],
    },
    icons: [
      "/assets/icons/django.svg",
      "/assets/icons/fastapi.svg",
      "/assets/icons/postgres.svg",
    ],
    codePreview: ["POST /api/v1/auth/jwt", "200 OK · OpenAPI 3.1"],
  },
  {
    id: "web-stores",
    title: {
      pl: "Strony Next.js i sklepy WooCommerce",
      en: "Next.js sites & WooCommerce stores",
    },
    description: {
      pl: "Szybkie witryny w Next.js lub WordPress oraz sklepy WooCommerce z mapą Paczkomatów.",
      en: "Fast Next.js or WordPress sites and WooCommerce stores with InPost locker maps.",
    },
    deliverables: {
      pl: [
        "Wersja desktop oraz mobile z optymalizacją SEO",
        "Formularze kontaktowe i mapa Paczkomatów InPost",
        "2 rundy poprawek przed oddaniem projektu",
      ],
      en: [
        "Responsive desktop and mobile builds with SEO",
        "Contact forms and InPost parcel locker maps",
        "2 revision rounds prior to launch",
      ],
    },
    icons: [
      "/assets/icons/react.svg",
      "/assets/icons/typescript.svg",
      "/assets/icons/woocommerce.svg",
    ],
    codePreview: ["Next.js Static + WP REST", "InPost Map · 14,000+ nodes"],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "12.2025 - 05.2026",
    org: "LearnIT",
    location: "learnit.com.pl",
    role: {
      pl: "Program Python Developer Pro (Django, FastAPI, AI)",
      en: "Python Developer Pro Program (Django, FastAPI, AI)",
    },
    details: {
      pl: "6-miesięczne szkolenie backendowe zakończone budową aplikacji w Django, FastAPI, Dockerze oraz Gemini API.",
      en: "6-month backend program focused on Django, FastAPI, PostgreSQL, Docker, and Gemini API.",
    },
  },
  {
    period: "09.2023 - 06.2024",
    org: "Solare Energy",
    location: "Wrocław",
    role: {
      pl: "Projektant Systemów i Analityk Danych",
      en: "Systems Designer & Data Analyst",
    },
    details: {
      pl: "Symulacje techniczne instalacji PV, weryfikacja dużych zbiorów danych wejściowych i przygotowanie ofert B2B.",
      en: "Technical PV simulations, validation of large input datasets, and B2B technical offers.",
    },
  },
  {
    period: "02.2020 - 08.2023",
    org: "EkspertPV",
    location: "Smolec / Wrocław",
    role: {
      pl: "Kierownik Działu Technicznego",
      en: "Head of Technical Department",
    },
    details: {
      pl: "Porządkowanie obiegu zleceń i uprawnień w CRM/ERP, helpdesk techniczny i szkolenia produktowe zespołu.",
      en: "Streamlined order workflows and CRM/ERP permissions, technical helpdesk, and team training.",
    },
  },
  {
    period: "09.2019 - 01.2021",
    org: "Szkoła Partnerska Viessmann",
    location: "Polska",
    role: {
      pl: "Technik urządzeń i systemów energetyki odnawialnej",
      en: "Renewable Energy Systems Technician",
    },
    details: {
      pl: "Kierunkowe wykształcenie techniczne oraz certyfikaty UDT w zakresie systemów energetycznych.",
      en: "Technical qualification and UDT certifications in renewable energy engineering systems.",
    },
  },
];
