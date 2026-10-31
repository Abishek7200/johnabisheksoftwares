import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";
import CursorSpotlight from "@/components/CursorSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnabisheksoftwares.dev"),
  title: "John Abishek Softwares | Independent Software Developer & QA Architect",
  description:
    "Official software showcase of John Abishek Softwares (johnabisheksoftwares.dev). Independent Software Developer & Test Automation Engineer building Google Play games, enterprise test automation, and multi-platform cloud systems.",
  keywords: [
    "John Abishek Softwares",
    "johnabisheksoftwares.dev",
    "Abishekkumar V",
    "Google Play Developer",
    "Worship Connect",
    "Bottle Shoot",
    "Arrow Go",
    "Birthday Reminder",
    "VerseSnap",
    "worshipconnectlive.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ja_portfolio_theme');
                  var theme = (saved === 'light' || saved === 'dark' || saved === 'hybrid') ? saved : 'hybrid';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.remove('theme-hybrid', 'theme-dark', 'theme-light');
                  document.documentElement.classList.add('theme-' + theme);
                  var isL = theme === 'light';
                  var bg = isL ? '#f8fafc' : '#09090e';
                  var text = isL ? '#0f172a' : '#f4f4f7';
                  var cs = isL ? 'light' : 'dark';
                  document.documentElement.style.setProperty('--page-bg', bg);
                  document.documentElement.style.setProperty('--page-text', text);
                  document.documentElement.style.backgroundColor = bg;
                  document.documentElement.style.color = text;
                  document.documentElement.style.colorScheme = cs;
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <CursorSpotlight />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
