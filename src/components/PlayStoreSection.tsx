"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Gamepad2,
  Smartphone,
  Star,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Maximize2,
  Globe,
  Monitor,
  X,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { portfolioData, PublishedApp } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";
import HoloCard from "./HoloCard";

// Interactive Holographic 3D Card with Dynamic Glare & Gyroscopic Tilt
function InteractiveGameCard({
  app,
  isSelected,
  onSelect,
}: {
  app: PublishedApp;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const { theme } = useTheme();
  const isLightCard = theme === "hybrid" || theme === "light";

  return (
    <HoloCard
      isSelected={isSelected}
      onClick={onSelect}
      className={`rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
        isLightCard
          ? isSelected
            ? "bg-gradient-to-b from-white via-white to-[#f4f6fa] border-[#ff7a00] shadow-[0_24px_60px_rgba(255,122,0,0.25)] ring-2 ring-[#ff7a00]/60"
            : "bg-gradient-to-b from-white via-white to-[#f4f6fa] border-zinc-200/90 hover:border-[#ff7a00]/50 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
          : isSelected
          ? "bg-[#111118] border-[#ff7a00] shadow-[0_16px_50px_rgba(255,122,0,0.22)] ring-1 ring-[#ff7a00]/50"
          : "bg-[#111118] border-white/[0.08] hover:border-white/25 shadow-xl hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
      }`}
    >
      {/* 1024x500 Feature Graphic Banner */}
      <div className="relative w-full aspect-[1024/500] overflow-hidden bg-black/80">
        <Image
          src={app.featureGraphic || app.iconUrl}
          alt={`${app.name} Feature Graphic`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t via-transparent to-black/25 ${
            isLightCard ? "from-white" : "from-[#111118]"
          }`}
        />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 shadow">
            RELEASED · GOOGLE PLAY
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#ff7a00] text-black shadow-md flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {app.rating}
          </span>
        </div>
      </div>

      {/* Card Content & Details (High contrast styling) */}
      <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between relative z-20">
        <div className="space-y-2.5">
          {/* App Icon + Title Header */}
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-xl overflow-hidden shadow-md shrink-0 border transition-colors ${
                isLightCard
                  ? "border-zinc-200/90 bg-white group-hover:border-[#ff7a00]"
                  : "border-white/15 bg-black group-hover:border-[#ff7a00]/40"
              }`}
            >
              <Image
                src={app.iconUrl}
                alt={app.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff7a00]">
                {app.category}
              </span>
              <h3
                className={`text-lg font-bold leading-tight truncate transition-colors group-hover:text-[#ff7a00] ${
                  isLightCard ? "text-zinc-950" : "text-white"
                }`}
              >
                {app.name}
              </h3>
            </div>
          </div>

          <p
            className={`text-xs leading-relaxed line-clamp-2 ${
              isLightCard ? "text-zinc-600 font-medium" : "text-zinc-300"
            }`}
          >
            {app.tagline}
          </p>

          {/* Console Telemetry Pills */}
          <div className="flex flex-wrap items-center gap-2 text-[10px]">
            <span
              className={`px-2.5 py-1 rounded-lg border font-medium ${
                isLightCard
                  ? "bg-zinc-100/90 border-zinc-200 text-zinc-700"
                  : "bg-white/[0.04] border-white/[0.08] text-zinc-300"
              }`}
            >
              Acquisitions: <strong className={isLightCard ? "text-zinc-950 font-bold" : "text-white"}>{app.consoleMetrics.acquisitions}</strong>
            </span>
            <span
              className={`px-2.5 py-1 rounded-lg border font-medium ${
                isLightCard
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-white/[0.04] border-white/[0.08] text-emerald-400"
              }`}
            >
              Active: <strong>{app.consoleMetrics.activeDevices}</strong>
            </span>
          </div>
        </div>

        {/* Actions Bar */}
        <div
          className={`pt-3 border-t flex items-center justify-between gap-2 ${
            isLightCard ? "border-zinc-200/80" : "border-white/[0.08]"
          }`}
        >
          <span className="text-[11px] font-semibold text-[#ff7a00] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            {isSelected ? "Currently Inspecting ↓" : "View Screenshots →"}
          </span>

          <div className="flex items-center gap-2">
            {app.webAppUrl && (
              <a
                href={app.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-500/20 hover:bg-indigo-500/35 text-indigo-700 border border-indigo-500/30 transition flex items-center gap-1"
              >
                <Globe className="w-3 h-3" />
                Web
              </a>
            )}
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 ${
                isLightCard
                  ? "bg-zinc-950 hover:bg-black text-white"
                  : "bg-white hover:bg-zinc-200 text-black"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#ff7a00]" />
              Play Store
            </a>
          </div>
        </div>
      </div>
    </HoloCard>
  );
}

export default function PlayStoreSection() {
  const { theme } = useTheme();
  const [selectedApp, setSelectedApp] = useState<PublishedApp>(
    portfolioData.publishedApps[0]
  );
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const isLight = theme === "light";

  return (
    <section id="games" className="relative py-24 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              PORTFOLIO CATALOG
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Games & Applications
            </h2>
            <p
              className={`mt-2 max-w-2xl text-sm sm:text-base ${
                isLight ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Published Android apps, mobile games, and cloud software engineered by{" "}
              <span className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>
                {portfolioData.developer.name}
              </span>
              . Click any project below to inspect its official Google Play screenshots and specifications.
            </p>
          </motion.div>

          <motion.a
            href={portfolioData.developer.playDeveloperUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/25 flex items-center gap-2 transition-all whitespace-nowrap"
          >
            <Gamepad2 className="w-4 h-4 text-black" />
            Official Google Play Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Bento Grid of Games & Apps — Dual Tone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.publishedApps.map((app) => (
            <InteractiveGameCard
              key={app.id}
              app={app}
              isSelected={app.id === selectedApp.id}
              onSelect={() => setSelectedApp(app)}
            />
          ))}
        </div>

        {/* Smooth Animated Project Deep-Dive Inspection Drawer (Dual-Tone Contrast Stage) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApp.id}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl p-6 sm:p-9 shadow-2xl space-y-8 border transition-colors ${
              isLight
                ? "bg-white border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                : "bg-gradient-to-b from-[#141520] to-[#111118] border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.7)]"
            }`}
          >
            {/* Top Title & Links */}
            <div
              className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b ${
                isLight ? "border-zinc-200" : "border-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl overflow-hidden shadow-xl shrink-0 border-2 ${
                    isLight ? "border-zinc-200 bg-white" : "border-white/20 bg-black"
                  }`}
                >
                  <Image
                    src={selectedApp.iconUrl}
                    alt={selectedApp.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Google Play Production
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${
                        isLight
                          ? "bg-zinc-100 text-zinc-700 border-zinc-200"
                          : "bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                      }`}
                    >
                      {selectedApp.packageName}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    {selectedApp.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#ff7a00] mt-0.5">
                    {selectedApp.tagline}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {selectedApp.webAppUrl && (
                  <motion.a
                    href={selectedApp.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition flex items-center gap-2 shadow-lg"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-300" />
                    Live Web App
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
                <motion.a
                  href={selectedApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-xl ${
                    isLight
                      ? "bg-zinc-950 text-white hover:bg-black"
                      : "bg-white text-black hover:bg-zinc-200"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#ff7a00]" />
                  Google Play Store
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </div>

            {/* Multi-Platform Ecosystem Matrix (Worship Connect Roadmap) */}
            {selectedApp.platforms && (
              <div
                className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                  isLight
                    ? "bg-zinc-50 border-zinc-200"
                    : "bg-white/[0.03] border-white/10"
                }`}
              >
                <div
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                    isLight ? "text-zinc-900" : "text-white"
                  }`}
                >
                  <Monitor className="w-4 h-4 text-[#ff7a00]" />
                  Multi-Platform Availability & Release Roadmap
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedApp.platforms.map((p, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isLight
                          ? "bg-white border-zinc-200"
                          : "bg-black/60 border-white/[0.06]"
                      }`}
                    >
                      <span className={`font-semibold ${isLight ? "text-zinc-900" : "text-zinc-200"}`}>
                        {p.label}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          p.status === "Live"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Official Google Play Screenshots Gallery */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ff7a00]" />
                  <h4
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isLight ? "text-zinc-900" : "text-white"
                    }`}
                  >
                    Official Store Screenshots (Click to enlarge)
                  </h4>
                </div>
                <span className={`text-xs ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                  {selectedApp.screenshots.length} screenshots
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {selectedApp.screenshots.map((ssUrl, idx) => (
                  <motion.div
                    key={ssUrl}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    onClick={() => setLightboxImg(ssUrl)}
                    className="group relative rounded-xl overflow-hidden border border-white/10 bg-black aspect-[9/16] cursor-pointer shadow-lg hover:border-[#ff7a00] hover:shadow-[0_8px_30px_rgba(255,122,0,0.25)] transition-all"
                  >
                    <Image
                      src={ssUrl}
                      alt={`${selectedApp.name} Screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* App Specifications & Capabilities */}
            <div
              className={`space-y-6 pt-4 border-t ${
                isLight ? "border-zinc-200" : "border-white/10"
              }`}
            >
              <div>
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                    isLight ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  About this Product
                </h4>
                <p
                  className={`text-sm leading-relaxed max-w-4xl ${
                    isLight ? "text-zinc-700" : "text-zinc-300"
                  }`}
                >
                  {selectedApp.description}
                </p>
              </div>

              {/* Highlights — Dual Tone Pearl Subcards */}
              <div className="space-y-2.5">
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    isLight ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedApp.highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className={`p-3.5 rounded-xl border flex items-start gap-2.5 transition-colors ${
                        theme === "hybrid"
                          ? "bg-white/[0.05] border-white/10 hover:border-[#ff7a00]/40 text-zinc-100"
                          : isLight
                          ? "bg-zinc-50 border-zinc-200 hover:border-[#ff7a00]/40 text-zinc-900"
                          : "bg-white/[0.03] border-white/[0.07] hover:border-[#ff7a00]/30 text-zinc-200"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-snug font-medium">
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span
                  className={`text-xs mr-2 flex items-center gap-1.5 ${
                    isLight ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#ff7a00]" />
                  Technologies:
                </span>
                {selectedApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                      isLight
                        ? "bg-zinc-100 text-zinc-800 border-zinc-200"
                        : "bg-white/[0.05] text-zinc-200 border-white/[0.08]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Screenshot Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-sm max-h-[88vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <Image
                src={lightboxImg}
                alt="Full Store Screenshot"
                width={720}
                height={1280}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
