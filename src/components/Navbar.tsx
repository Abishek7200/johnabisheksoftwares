"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad2,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
  Contrast,
  User,
  Layers,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme, ThemeMode } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const isPortfolioPage = pathname?.startsWith("/portfolio");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: "hybrid", label: "Hybrid", icon: <Contrast className="w-3.5 h-3.5" /> },
    { mode: "dark", label: "Dark", icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: "light", label: "Light", icon: <Sun className="w-3.5 h-3.5" /> },
  ];

  const isLight = theme === "light";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      {/* Top Brand Announcement Banner */}
      <div
        className={`py-1 px-4 text-center text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
          isLight
            ? "bg-white/95 text-zinc-600 border-b border-zinc-200/80 shadow-xs"
            : "bg-[#09090e]/95 text-zinc-400 border-b border-white/[0.06]"
        } backdrop-blur-xl`}
      >
        <span className="text-[#ff7a00]">JOHN ABISHEK SOFTWARES</span> · INDEPENDENT GAME & MOBILE STUDIO · {portfolioData.domain}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2.5">
        <div
          className={`pointer-events-auto transition-all duration-300 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 ${
            isLight
              ? scrolled
                ? "bg-white/95 backdrop-blur-2xl border border-zinc-200 shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
                : "bg-white/95 backdrop-blur-2xl border border-zinc-200/90 shadow-md"
              : scrolled
              ? "bg-[#0c0c14]/95 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
              : "bg-[#0c0c14]/92 backdrop-blur-2xl border border-white/10 shadow-lg"
          }`}
        >
          {/* Logo / Studio Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#ff7a00] to-indigo-500 p-[1px] shadow-md">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-xs transition-colors ${
                  isLight ? "bg-white text-zinc-900" : "bg-[#111118] text-white"
                }`}
              >
                JA
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span
                className={`font-bold text-xs sm:text-sm tracking-tight transition-colors group-hover:text-[#ff7a00] ${
                  isLight ? "text-zinc-950" : "text-white"
                }`}
              >
                John Abishek Softwares
              </span>
              <span className={`text-[10px] font-medium hidden sm:inline ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                Published Apps & Games Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className={`hidden lg:flex items-center gap-1 whitespace-nowrap p-1 rounded-xl border transition-colors ${
              isLight
                ? "bg-zinc-100/90 border-zinc-200"
                : "bg-black/50 border-white/[0.07]"
            }`}
          >
            {/* Softwares Studio Tab */}
            <Link
              href="/"
              className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 z-10 ${
                !isPortfolioPage
                  ? isLight
                    ? "text-zinc-950 font-bold"
                    : "text-white font-bold"
                  : isLight
                  ? "text-zinc-600 hover:text-zinc-950"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {!isPortfolioPage && (
                <motion.div
                  layoutId="active-nav-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className={`absolute inset-0 rounded-lg -z-10 shadow-sm ${
                    isLight
                      ? "bg-white border border-zinc-200"
                      : "bg-white/10 border border-white/15"
                  }`}
                />
              )}
              <Gamepad2 className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>Softwares</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  !isPortfolioPage
                    ? "bg-[#ff7a00] text-black"
                    : "bg-[#ff7a00]/20 text-[#ff7a00]"
                }`}
              >
                4
              </span>
            </Link>

            {/* In-page Anchor to Closed Beta when on Home */}
            {!isPortfolioPage && (
              <a
                href="#closed-testing"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 ${
                  isLight ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>Closed Beta</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-400">
                  1
                </span>
              </a>
            )}

            {/* Dedicated Developer Portfolio Page Link */}
            <Link
              href="/portfolio"
              className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 z-10 ${
                isPortfolioPage
                  ? isLight
                    ? "text-zinc-950 font-bold"
                    : "text-white font-bold"
                  : isLight
                  ? "text-zinc-700 hover:text-zinc-950"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {isPortfolioPage && (
                <motion.div
                  layoutId="active-nav-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className={`absolute inset-0 rounded-lg -z-10 shadow-sm ${
                    isLight
                      ? "bg-white border border-zinc-200"
                      : "bg-white/10 border border-white/15"
                  }`}
                />
              )}
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>Portfolio</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isPortfolioPage
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-500/20 text-indigo-400"
                }`}
              >
                CV
              </span>
            </Link>

            {/* Contact Anchor */}
            <a
              href="#contact"
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                isLight ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action: Short Theme Switcher & Official Google Play Link */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Compact Short Theme Switcher Pill (Icons only with active indicator) */}
            <div
              className={`flex items-center p-0.5 rounded-xl border transition-colors ${
                isLight
                  ? "bg-zinc-100 border-zinc-200"
                  : "bg-black/50 border-white/10"
              }`}
            >
              {themeOptions.map((opt) => {
                const isSelected = theme === opt.mode;
                return (
                  <button
                    key={opt.mode}
                    type="button"
                    onClick={() => setTheme(opt.mode)}
                    title={`Theme: ${opt.label}`}
                    aria-label={`Switch to ${opt.label} Theme`}
                    className={`relative p-1.5 sm:px-2 py-1 rounded-lg text-xs flex items-center justify-center transition-colors cursor-pointer ${
                      isSelected
                        ? isLight
                          ? "text-zinc-950 shadow-xs"
                          : "text-white shadow-xs"
                        : isLight
                        ? "text-zinc-400 hover:text-zinc-900"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="active-theme-pill"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        className={`absolute inset-0 rounded-lg -z-10 ${
                          isLight
                            ? "bg-white border border-zinc-200 shadow-sm"
                            : "bg-[#ff7a00]/20 border border-[#ff7a00]/40 text-[#ff7a00]"
                        }`}
                      />
                    )}
                    <span className={isSelected ? "text-[#ff7a00]" : ""}>{opt.icon}</span>
                  </button>
                );
              })}
            </div>

            {/* Google Play CTA Button */}
            <a
              href={portfolioData.developer.playDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/20 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 shrink-0"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-black" />
              <span>Google Play</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-xl border shrink-0 ${
                isLight
                  ? "bg-zinc-100 border-zinc-200 text-zinc-700"
                  : "bg-white/[0.06] border-white/10 text-zinc-300"
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`lg:hidden pointer-events-auto mt-2 rounded-2xl p-3 shadow-2xl border ${
                isLight
                  ? "bg-white/95 backdrop-blur-2xl border-zinc-200 text-zinc-900"
                  : "bg-[#111118]/95 backdrop-blur-2xl border border-white/10 text-white"
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                    !isPortfolioPage
                      ? "bg-[#ff7a00] text-black"
                      : isLight
                      ? "bg-zinc-100 text-zinc-900"
                      : "bg-white/[0.04] text-zinc-200"
                  }`}
                >
                  <span>Softwares & Games</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-black/20 text-black font-bold">
                    4 Live
                  </span>
                </Link>

                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                    isPortfolioPage
                      ? "bg-indigo-600 text-white"
                      : isLight
                      ? "bg-zinc-100 text-zinc-900"
                      : "bg-white/[0.04] text-zinc-200"
                  }`}
                >
                  <span>Developer Portfolio</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-bold">
                    Resume
                  </span>
                </Link>

                <a
                  href="#closed-testing"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium ${
                    isLight ? "bg-zinc-100 text-zinc-900" : "bg-white/[0.04] text-zinc-200"
                  }`}
                >
                  Closed Beta Track
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium ${
                    isLight ? "bg-zinc-100 text-zinc-900" : "bg-white/[0.04] text-zinc-200"
                  }`}
                >
                  Contact Studio
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
