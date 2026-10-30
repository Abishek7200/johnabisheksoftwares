"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Gamepad2,
  Sparkles,
  ArrowRight,
  Heart,
  ExternalLink,
  Smartphone,
  Globe,
  Star,
  Flame,
  User,
  Radio,
  Layers,
  Activity,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { portfolioData, PublishedApp } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

// Keynote presentation disciplines
const disciplines = [
  {
    prefix: "Crafting Next-Gen",
    title: "Interactive Mobile Games",
    subtitle: "Engineered with 60 FPS physics engines, projectile trajectory math, and tactile arcade response.",
    tag: "Physics Engines & Arcade",
    accent: "from-[#ff7a00] via-amber-400 to-[#ff3b30]",
    glow: "rgba(255, 122, 0, 0.25)",
  },
  {
    prefix: "Architecting Robust",
    title: "Multi-Platform Cloud Suites",
    subtitle: "Live presentation systems powering Church & Media operations with real-time sync across Web, Desktop & Mobile.",
    tag: "Live Media Presentation",
    accent: "from-cyan-400 via-sky-300 to-indigo-400",
    glow: "rgba(0, 240, 255, 0.25)",
  },
  {
    prefix: "Designing Elegant",
    title: "Zen Directional Logic Puzzles",
    subtitle: "Minimalist spatial routing algorithms, obstacle avoidance networks, and soothing audiovisual feedback.",
    tag: "Spatial Logic & Algorithms",
    accent: "from-emerald-400 via-teal-300 to-cyan-400",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    prefix: "Delivering Reliable",
    title: "Android Smart Event Systems",
    subtitle: "Background WorkManager scheduling, SQLite encrypted storage, and personalized greeting card generation.",
    tag: "Native Android Architecture",
    accent: "from-purple-400 via-pink-400 to-[#ff7a00]",
    glow: "rgba(168, 85, 247, 0.25)",
  },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Keynote morphing title rotation
  const [discIndex, setDiscIndex] = useState(0);

  // Keynote Stage current game index
  const [stageIndex, setStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Heart reaction state
  const [heartsCount, setHeartsCount] = useState(154);
  const [floatingHearts, setFloatingHearts] = useState<
    { id: number; x: number; rot: number; color: string }[]
  >([]);

  const heartColors = ["#ff7a00", "#00f0ff", "#ef4444", "#ec4899", "#8b5cf6"];

  // Auto-cycle Keynote morphing headline
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setDiscIndex((prev) => (prev + 1) % disciplines.length);
    }, 4500);
    return () => clearInterval(titleInterval);
  }, []);

  // Auto-cycle Keynote Stage apps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const stageInterval = setInterval(() => {
      setStageIndex((prev) => (prev + 1) % portfolioData.publishedApps.length);
    }, 6000);
    return () => clearInterval(stageInterval);
  }, [isAutoPlaying]);

  const activeDiscipline = disciplines[discIndex];
  const activeApp: PublishedApp = portfolioData.publishedApps[stageIndex];

  const handleSendHeart = () => {
    setHeartsCount((prev) => prev + 1);
    const newId = Date.now() + Math.random();
    const randomX = (Math.random() - 0.5) * 100;
    const randomRot = (Math.random() - 0.5) * 45;
    const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];

    setFloatingHearts((prev) => [
      ...prev,
      { id: newId, x: randomX, rot: randomRot, color: randomColor },
    ]);

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newId));
    }, 1300);
  };

  return (
    <section
      id="hero"
      className="relative pt-44 sm:pt-48 md:pt-52 pb-20 overflow-hidden"
    >
      {/* Ambient Keynote Stage Spotlight Aura */}
      <div
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[720px] max-w-full h-[420px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 -z-10"
        style={{
          background: `radial-gradient(circle, ${activeDiscipline.glow} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Keynote Hero Command Center Header */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Top Live Studio Pill with Pulsing Status */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border shadow-lg backdrop-blur-xl ${
              isLight
                ? "bg-white/95 border-zinc-300 text-zinc-900 shadow-sm"
                : "bg-black/60 border-white/10 text-zinc-200"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7a00]" />
            </span>
            <span className="font-bold text-[#ff7a00]">JOHN ABISHEK SOFTWARES</span>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-400 hidden sm:inline">OFFICIAL PRODUCTION HUB</span>
            <span className="text-xs px-2 py-0.2 rounded-md bg-[#ff7a00]/15 text-[#ff7a00] font-bold ml-1">
              {activeDiscipline.tag}
            </span>
          </motion.div>

          {/* Keynote Morphing Title */}
          <div className="min-h-[140px] sm:min-h-[170px] md:min-h-[190px] flex flex-col items-center justify-center">
            <span
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
                isLight ? "text-zinc-800" : "text-zinc-400"
              }`}
            >
              {activeDiscipline.prefix}
            </span>

            <AnimatePresence mode="wait">
              <motion.h1
                key={discIndex}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mt-1 bg-gradient-to-r ${activeDiscipline.accent} bg-clip-text text-transparent`}
              >
                {activeDiscipline.title}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Morphing Subtitle with Keynote Shimmer */}
          <div className="min-h-[50px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={discIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className={`text-sm sm:text-lg leading-relaxed max-w-2xl font-medium ${
                  isLight ? "text-zinc-600" : "text-zinc-300"
                }`}
              >
                {activeDiscipline.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Holographic Keynote Telemetry HUD Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`grid grid-cols-2 sm:grid-cols-4 gap-3 w-full p-2.5 rounded-2xl border backdrop-blur-2xl ${
              isLight
                ? "bg-white/90 border-zinc-200/90 shadow-md"
                : "bg-black/55 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            }`}
          >
            <div
              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] ${
                isLight ? "bg-zinc-50 border-zinc-200 shadow-xs" : "bg-white/[0.03] border-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black font-mono text-[#ff7a00]">
                <span>4</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#ff7a00]/15 text-[#ff7a00]">LIVE</span>
              </div>
              <div className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Google Play Titles
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] ${
                isLight ? "bg-zinc-50 border-zinc-200 shadow-xs" : "bg-white/[0.03] border-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xl sm:text-2xl font-black font-mono text-[#00f0ff]">
                <span>1</span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#00f0ff]/15 text-[#00f0ff]">ACTIVE</span>
              </div>
              <div className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Closed Beta Track
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] ${
                isLight ? "bg-zinc-50 border-zinc-200 shadow-xs" : "bg-white/[0.03] border-white/[0.06]"
              }`}
            >
              <div className="text-xl sm:text-2xl font-black font-mono text-emerald-500">
                500+
              </div>
              <div className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Store Acquisitions
              </div>
            </div>

            <div
              className={`p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] ${
                isLight ? "bg-zinc-50 border-zinc-200 shadow-xs" : "bg-white/[0.03] border-white/[0.06]"
              }`}
            >
              <div className="text-xl sm:text-2xl font-black font-mono text-indigo-500">
                99.8%
              </div>
              <div className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
                Crash-Free Vitals
              </div>
            </div>
          </motion.div>

          {/* Action Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <motion.a
              href="#games"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-black" />
              <span>Explore Software Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-xs font-bold border transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                  isLight
                    ? "bg-zinc-950 text-white hover:bg-black border-zinc-950"
                    : "bg-white text-black hover:bg-zinc-200 border-white"
                }`}
              >
                <User className="w-4 h-4 text-[#ff7a00]" />
                <span>View Developer Portfolio & Resume</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </motion.div>
            </Link>

            <motion.a
              href="https://worshipconnectlive.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                isLight
                  ? "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200"
                  : "bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border-indigo-500/30"
              }`}
            >
              <Globe className="w-4 h-4 text-[#00f0ff]" />
              <span>Live Cloud Web App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Keynote Presentation Stage: Interactive 4-App Showcase Slider */}
        <div className="space-y-4">
          {/* Keynote Slide Selector Tabs */}
          <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] flex items-center gap-1.5 mr-2">
                <Sparkles className="w-3.5 h-3.5" />
                KEYNOTE STAGE:
              </span>

              {portfolioData.publishedApps.map((app, idx) => {
                const isActive = idx === stageIndex;
                return (
                  <button
                    key={app.id}
                    onClick={() => {
                      setStageIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap border ${
                      isActive
                        ? isLight
                          ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                          : "bg-white text-black border-white shadow-lg"
                        : isLight
                        ? "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:border-zinc-300"
                        : "bg-[#111118] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20"
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-70">0{idx + 1}</span>
                    <span>{app.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Play/Pause Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              title={isAutoPlaying ? "Pause Auto Keynote Presentation" : "Play Auto Keynote Presentation"}
              className={`p-2 rounded-xl border text-xs transition-colors shrink-0 cursor-pointer ${
                isLight
                  ? "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                  : "bg-black/60 border-white/10 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Keynote Main Stage Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0d0e17] shadow-2xl group">
            {/* Animated Laser Border Glow */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-r from-[#ff7a00] via-[#00f0ff] to-[#8b5cf6] opacity-35 group-hover:opacity-75 transition-opacity duration-700 blur-[2px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* 1024x500 Feature Graphic Banner */}
                <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] overflow-hidden bg-black">
                  <Image
                    src={activeApp.featureGraphic || activeApp.iconUrl}
                    alt={activeApp.name}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-center filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-95 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e17] via-black/45 to-black/20" />
                </div>

                {/* Top Stage Bar: Badges + Spectrum Visualizer */}
                <div className="absolute top-5 inset-x-5 flex items-center justify-between pointer-events-none z-20">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-black/80 backdrop-blur-md text-[#ff7a00] border border-[#ff7a00]/40 shadow-lg flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 fill-[#ff7a00]" />
                      PRODUCTION SHIPPED
                    </span>

                    {/* Audio frequency bars for Worship Connect or Physics Trajectory indicator */}
                    {activeApp.id === "worship-connect" ? (
                      <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30">
                        <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mr-1">Live Audio Wave</span>
                        <span className="w-1 h-3 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-1 h-5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                        <span className="w-1 h-4 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "450ms" }} />
                      </div>
                    ) : (
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-[10px] font-mono uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Google Play Verified</span>
                      </div>
                    )}
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-white border border-white/15 shadow">
                    {activeApp.category} · {activeApp.rating} ★
                  </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 bg-gradient-to-t from-[#0d0e17] via-[#0d0e17]/85 to-transparent z-20">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 bg-black">
                        <Image
                          src={activeApp.iconUrl}
                          alt={activeApp.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#ff7a00]">
                          {activeApp.category}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                          {activeApp.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                      {activeApp.tagline} — {activeApp.description}
                    </p>

                    {/* Telemetry / Capability Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold">
                      <span className="px-3 py-1 rounded-xl bg-white/[0.08] backdrop-blur-md text-zinc-200 border border-white/10 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-[#ff7a00] fill-[#ff7a00]" />
                        {activeApp.rating} Rating
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#ff7a00]/20 backdrop-blur-md text-[#ff7a00] border border-[#ff7a00]/30 font-mono">
                        {activeApp.consoleMetrics.acquisitions} Acquisitions
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 font-mono">
                        {activeApp.consoleMetrics.activeDevices} Active Devices
                      </span>
                    </div>
                  </div>

                  {/* Direct Action Launchers */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                    {activeApp.webAppUrl && (
                      <motion.a
                        href={activeApp.webAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3.5 rounded-2xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <Globe className="w-4 h-4 text-[#00f0ff]" />
                        <span>Open Live Web</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    )}
                    <motion.a
                      href={activeApp.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3.5 rounded-2xl text-xs font-bold bg-white hover:bg-zinc-200 text-black transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Smartphone className="w-4 h-4 text-[#ff7a00]" />
                      <span>On Google Play</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 'Show Some Love' Interactive Reaction Pod */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`p-6 sm:p-8 rounded-[2rem] border backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden transition-colors ${
            isLight
              ? "bg-white border-zinc-200 shadow-lg"
              : "bg-gradient-to-r from-zinc-900/90 via-[#0d0e17]/90 to-zinc-900/90 border-white/10 shadow-2xl"
          }`}
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] flex items-center gap-1.5 justify-center md:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
              COMMUNITY APPRECIATION
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
              Support Independent Software
            </h3>
            <p className={`text-xs sm:text-sm max-w-xl ${isLight ? "text-zinc-600 font-medium" : "text-zinc-400"}`}>
              Every click sends an energized heart to our telemetry feed. Thank you for playing our games and using our tools.
            </p>
          </div>

          <div className="relative flex items-center gap-4 shrink-0">
            {/* Floating Multi-Color Heart Particles */}
            <AnimatePresence>
              {floatingHearts.map((h) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 1, y: 0, x: h.x, scale: 1, rotate: 0 }}
                  animate={{
                    opacity: 0,
                    y: -95,
                    scale: 2,
                    rotate: h.rot,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="pointer-events-none absolute left-1/2 top-0 font-bold text-2xl select-none"
                  style={{ color: h.color }}
                >
                  ♥
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSendHeart}
              className="px-6 py-3.5 rounded-2xl text-xs font-bold bg-red-500/15 hover:bg-red-500/25 border border-red-500/35 text-red-400 transition-all flex items-center gap-2.5 shadow-lg group cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-red-500 text-red-500 group-hover:scale-125 transition-transform" />
              <span>SEND A HEART</span>
            </motion.button>

            <div className={`text-xs font-semibold ${isLight ? "text-zinc-600" : "text-zinc-400"}`}>
              <span className={`font-mono font-bold text-base ${isLight ? "text-zinc-950" : "text-white"}`}>{heartsCount}</span> hearts received
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}