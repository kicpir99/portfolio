import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kacper Łamasz | Python / Backend Developer",
  description:
    "Portfolio programistyczne Kacpra Łamasza: Django, FastAPI, REST API, scraping, Docker i wdrożenia webowe (Next.js, React, WooCommerce).",
  openGraph: {
    title: "Kacper Łamasz | Python / Backend Developer",
    description:
      "Aplikacje webowe w Django i FastAPI, boty oraz automatyzacje w Dockerze, a także strony i sklepy internetowe.",
    images: [{ url: "/og-image.png", width: 1584, height: 396 }],
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kacper Łamasz | Python / Backend Developer",
    description:
      "Aplikacje webowe w Django i FastAPI, boty oraz automatyzacje w Dockerze.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      data-type="software"
      data-radius="soft"
      data-buttons="solid"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="page-type" content="software" />
        <meta name="site-kind" content="software" />
        <meta name="theme-color" content="#0a0d14" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter');setTimeout(function(){document.documentElement.classList.add('m-enter-done')},700);",
          }}
        />
      </head>
      <body>
        {/* Dealt: kind=software, palette=blue-black-cornflower, type=manrope, hero=triptych, nav=nav-centre, footer=footer-statement, close=close-type, rhythm=dark-band, buttons=solid, mark=ring */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
