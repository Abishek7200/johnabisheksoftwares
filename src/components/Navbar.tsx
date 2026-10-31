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
  FlaskConical,
  Mail,
  ArrowRight,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme, ThemeMode } from "@/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const isPortfolioPage = pathname?.startsWith("/portfolio");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, isMounted } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: "hybrid", label: "Hybrid", icon: <Contrast className="w-3.5 h-3.5" /> },
    { mode: "dark", label: "Dark", icon: <Moon className="w-3.5 h-3.5" /> },
    { mode: "light", label: "Light", icon: <Sun className="w-3.5 h-3.5" /> },
  ];

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? "bg-white/95 backdrop-blur-2xl border-b border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-[#09090e]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          : "bg-transparent pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div
          className={`pointer-events-auto transition-all duration-300 rounded-2xl px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 ${
            !scrolled
              ? isLight
                ? "bg-white/95 backdrop-blur-2xl border border-zinc-200/90 shadow-md"
                : "bg-[#0c0c14]/92 backdrop-blur-2xl border border-white/10 shadow-lg"
              : "bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Logo / Developer Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group focus:outline-none min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#ff7a00] to-indigo-500 p-[1px] shadow-md shrink-0">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-xs transition-colors ${isLight ? "bg-white text-zinc-900" : "bg-[#111118] text-white"
                  }`}
              >
                JA
              </div>
            </div>
            <div className="flex flex-col whitespace-nowrap min-w-0">
              <span
                className={`font-bold text-xs sm:text-sm tracking-tight transition-colors group-hover:text-[#ff7a00] truncate ${isLight ? "text-zinc-950" : "text-white"
                  }`}
              >
                John Abishek Softwares
              </span>
              <span className={`text-[10px] font-medium hidden sm:inline truncate ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                Independent Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className={`hidden lg:flex items-center gap-1 whitespace-nowrap p-1 rounded-xl border transition-colors ${isLight
              ? "bg-zinc-100/90 border-zinc-200"
              : "bg-black/50 border-white/[0.07]"
              }`}
          >
            {/* Softwares Tab */}
            <Link
              href="/"
              className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 z-10 ${!isPortfolioPage
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
                  className={`absolute inset-0 rounded-lg -z-10 shadow-sm ${isLight
                    ? "bg-white border border-zinc-200"
                    : "bg-white/10 border border-white/15"
                    }`}
                />
              )}
              <Gamepad2 className="w-3.5 h-3.5 text-[#ff7a00]" />
              <span>Softwares</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${!isPortfolioPage
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
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 ${isLight ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
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
              className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5 z-10 ${isPortfolioPage
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
                  className={`absolute inset-0 rounded-lg -z-10 shadow-sm ${isLight
                    ? "bg-white border border-zinc-200"
                    : "bg-white/10 border border-white/15"
                    }`}
                />
              )}
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>Portfolio</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isPortfolioPage
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
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors ${isLight ? "text-zinc-600 hover:text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Actions: Compact Theme Switcher, Google Play & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Compact Theme Switcher Pill */}
            <div
              className={`flex items-center p-0.5 rounded-xl border transition-colors ${isLight
                ? "bg-zinc-100 border-zinc-200"
                : "bg-black/50 border-white/10"
                }`}
            >
              {themeOptions.map((opt) => {
                const isSelected = isMounted ? theme === opt.mode : opt.mode === "hybrid";
                return (
                  <button
                    key={opt.mode}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setTheme(opt.mode)}
                    title={`Theme: ${opt.label}`}
                    aria-label={`Switch to ${opt.label} Theme`}
                    className={`relative p-1.5 rounded-lg text-xs flex items-center justify-center transition-colors cursor-pointer ${
                      isSelected
                        ? isLight
                          ? "text-zinc-950 shadow-xs"
                          : "text-white shadow-xs"
                        : isLight
                        ? "text-zinc-400 hover:text-zinc-900"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {isMounted && isSelected && (
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

            {/* Google Play CTA Button - Desktop & Tablet */}
            <a
              href={portfolioData.developer.playDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/20 transition-all items-center gap-1.5 whitespace-nowrap active:scale-95 shrink-0 cursor-pointer"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-black" />
              <span>Google Play</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Google Play Icon Button - Small Mobile Screens (< 640px) */}
            <a
              href={portfolioData.developer.playDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Official Google Play Profile"
              className="sm:hidden p-2 rounded-xl bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-md transition-all flex items-center justify-center shrink-0 active:scale-95 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-black" />
            </a>

            {/* Mobile Menu Hamburger Toggle Button - ALWAYS Visible on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border shrink-0 transition-colors cursor-pointer ${isLight
                ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800"
                : "bg-white/[0.06] hover:bg-white/[0.12] border-white/10 text-zinc-200"
                }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden pointer-events-auto mt-2 rounded-2xl p-4 shadow-2xl border ${isLight
                ? "bg-white/98 backdrop-blur-2xl border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                : "bg-[#111118]/98 backdrop-blur-2xl border-white/15 text-white shadow-[0_24px_60px_rgba(0,0,0,0.85)]"
                }`}
            >
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all ${!isPortfolioPage
                      ? "bg-[#ff7a00] text-black shadow-md"
                      : isLight
                        ? "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                        : "bg-white/[0.05] text-zinc-200 hover:bg-white/10"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4" />
                      Softwares
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${!isPortfolioPage ? "bg-black text-[#ff7a00]" : "bg-[#ff7a00]/20 text-[#ff7a00]"
                        }`}
                    >
                      4
                    </span>
                  </Link>

                  <Link
                    href="/portfolio"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all ${isPortfolioPage
                      ? "bg-indigo-600 text-white shadow-md"
                      : isLight
                        ? "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                        : "bg-white/[0.05] text-zinc-200 hover:bg-white/10"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-indigo-400" />
                      Portfolio
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${isPortfolioPage ? "bg-white text-indigo-600" : "bg-indigo-500/20 text-indigo-400"
                        }`}
                    >
                      CV
                    </span>
                  </Link>
                </div>

                {!isPortfolioPage && (
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="#closed-testing"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold border transition-all ${isLight
                        ? "bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100"
                        : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08]"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-purple-400" />
                        Closed Beta
                      </span>
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-400">
                        1 Active
                      </span>
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold border transition-all ${isLight
                        ? "bg-zinc-50 border-zinc-200 text-zinc-800 hover:bg-zinc-100"
                        : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08]"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-400" />
                        Contact
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  </div>
                )}

                {/* Prominent Google Play Mobile Action */}
                <a
                  href={portfolioData.developer.playDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 p-3 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Gamepad2 className="w-4 h-4 text-black" />
                  <span>Explore 4 Production Titles on Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Subtitle / Verification Tag */}
                <div
                  className={`pt-2 border-t text-center text-[10px] font-mono flex items-center justify-center gap-2 ${isLight ? "border-zinc-200 text-zinc-500" : "border-white/10 text-zinc-400"
                    }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Independent Software Developer · {portfolioData.domain}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
