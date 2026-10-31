import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-500">
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
