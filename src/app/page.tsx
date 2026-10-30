"use client";

import React from "react";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlayStoreSection from "@/components/PlayStoreSection";
import ClosedTestingSection from "@/components/ClosedTestingSection";
import ContactFooterSection from "@/components/ContactFooterSection";
import { useTheme } from "@/context/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        theme === "light"
          ? "bg-[#f8fafc] text-zinc-900 selection:bg-[#ff7a00]/30 selection:text-black"
          : "bg-[#09090e] text-zinc-100 selection:bg-[#ff7a00]/30 selection:text-white"
      }`}
    >
      {/* Subtle Ambient Stardust Canvas */}
      {theme !== "light" && <ThreeBackground />}

      {/* Soft Ambient Light Gradient for Light */}
      {theme === "light" && (
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,122,0,0.08),rgba(99,102,241,0.05),transparent_70%)]" />
      )}

      {/* Main Studio Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <PlayStoreSection />
          <ClosedTestingSection />
        </main>
        <ContactFooterSection />
      </div>
    </div>
  );
}
