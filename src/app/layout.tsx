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
  title: "John Abishek Softwares | Official Games & Applications Studio",
  description:
    "Official software showcase of John Abishek Softwares (johnabisheksoftwares.dev). Published Android games and apps on Google Play (Worship Connect, Bottle Shoot, Arrow Go, Birthday Reminder) and active closed testing titles.",
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
