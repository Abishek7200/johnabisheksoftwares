"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileDown,
  ExternalLink,
  MapPin,
  Trophy,
  Award,
  GraduationCap,
  Sparkles,
  Gamepad2,
  Calendar,
  CheckCircle2,
  Check,
  Send,
  Mail,
  Phone,
  ShieldCheck,
  Layers,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ThreeBackground from "@/components/ThreeBackground";
import ContactFooterSection from "@/components/ContactFooterSection";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

const aboutPillars = [
  {
    num: "01",
    title: "Mobile Game & App Development",
    desc: "I'm an independent mobile developer from Chennai, India, focused on building arcade games (Bottle Shoot), zen logic puzzles (Arrow Go), and live church presentation tools (Worship Connect).",
    badge: "Google Play Store",
  },
  {
    num: "02",
    title: "Solo Full-Stack Development",
    desc: "I handle everything myself: UI/UX design, game physics, state management, REST APIs, local SQLite databases, cloud WebSockets, and Google Play Console release management.",
    badge: "End-to-End Delivery",
  },
  {
    num: "03",
    title: "Performance First & Low-End Optimization",
    desc: "Every title is optimized to run smoothly on low-end and flagship Android devices alike. Lightweight APK/AAB sizes under 28MB, steady 60 FPS loops, and zero memory leaks.",
    badge: "60 FPS · Play Vitals",
  },
  {
    num: "04",
    title: "Enterprise Test Automation & CI/CD",
    desc: "With 5+ years of QA automation expertise at Exeter Premedia Services, I build scalable Playwright JS and Jenkins CI/CD pipelines that slash execution times and boost coverage by 60%.",
    badge: "Torch Bearer Award",
  },
];

export default function PortfolioPage() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const isLightCard = theme === "light";

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isLight
          ? "bg-[#f8fafc] text-zinc-900 selection:bg-[#ff7a00]/30 selection:text-black"
          : "bg-[#09090e] text-zinc-100 selection:bg-[#ff7a00]/30 selection:text-white"
      }`}
    >
      {theme !== "light" && <ThreeBackground />}

      <div className="relative z-10">
        <Navbar />

        <main className="pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Top Return Banner to Software Studio */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#ff7a00] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                ← Back to Published Softwares & Games
              </Link>
              <span className="text-xs text-zinc-400 hidden sm:inline">
                Official Developer Curriculum Vitae & Portfolio
              </span>
            </div>

            {/* Hero: Developer Biography & Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Photo Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#ff7a00] via-indigo-500 to-purple-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-700" />
                  <div
                    className={`relative w-[290px] h-[360px] sm:w-[330px] sm:h-[410px] rounded-[2.25rem] overflow-hidden border-2 shadow-2xl ${
                      isLight ? "border-zinc-200 bg-white" : "border-white/20 bg-[#111118]"
                    }`}
                  >
                    <Image
                      src={portfolioData.developer.photoUrl}
                      alt={portfolioData.developer.name}
                      fill
                      priority
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 shadow-lg text-white">
                      <div className="text-sm font-bold text-white">
                        {portfolioData.developer.name}
                      </div>
                      <div className="text-xs text-zinc-300">
                        {portfolioData.developer.title}
                      </div>
                      <div className="text-[11px] text-[#ff7a00] font-medium flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        Chennai, Tamil Nadu, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  CREATOR OF JOHN ABISHEK SOFTWARES
                </div>

                <h1
                  className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}
                >
                  {portfolioData.developer.name}
                </h1>

                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-[#ff7a00] bg-clip-text text-transparent">
                  Automation Test Architect & Solo Mobile Engineer
                </div>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isLight ? "text-zinc-700" : "text-zinc-300"
                  }`}
                >
                  {portfolioData.developer.shortBio}
                </p>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isLight ? "text-zinc-700" : "text-zinc-300"
                  }`}
                >
                  {portfolioData.developer.detailedBio}
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Abishek_resume_sept.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black transition flex items-center gap-2 shadow-lg"
                  >
                    <FileDown className="w-4 h-4 text-black" />
                    Download Official Resume (PDF)
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abishekkumar-v/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-3 rounded-xl text-xs font-semibold border transition shadow-sm ${
                      isLight
                        ? "bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50"
                        : "bg-white/[0.06] hover:bg-white/[0.1] text-white border-white/10"
                    }`}
                  >
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>

                  <Link
                    href="/"
                    className={`px-5 py-3 rounded-xl text-xs font-semibold border transition shadow-sm flex items-center gap-2 ${
                      isLight
                        ? "bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100"
                        : "bg-indigo-500/20 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30"
                    }`}
                  >
                    <Gamepad2 className="w-4 h-4" />
                    Explore Published Softwares Catalog
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Developer Expertise */}
            <div className="pt-8 space-y-6">
              <h2
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                  isLight ? "text-zinc-950" : "text-white"
                }`}
              >
                Core Pillars & Development Philosophy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutPillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className={`p-7 rounded-[2rem] border transition-all space-y-3 relative shadow-lg ${
                      isLightCard
                        ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
                        : "bg-[#111118] border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold font-mono text-[#ff7a00]">
                        {pillar.num}.
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          isLightCard
                            ? "bg-zinc-100 text-zinc-800 border-zinc-200"
                            : "bg-white/[0.05] text-zinc-300 border border-white/10"
                        }`}
                      >
                        {pillar.badge}
                      </span>
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isLightCard ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isLightCard ? "text-zinc-600 font-medium" : "text-zinc-400"
                      }`}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Track Record at Exeter Premedia Services */}
            <div id="experience" className="pt-8 space-y-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                PROFESSIONAL CAREER TIMELINE
              </div>
              <h2
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  isLight ? "text-zinc-950" : "text-white"
                }`}
              >
                Work Experience & Enterprise Track Record
              </h2>

              <div className="space-y-6">
                {portfolioData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className={`rounded-3xl p-6 sm:p-8 border space-y-4 shadow-lg ${
                      isLightCard
                        ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
                        : "bg-[#111118] border-white/[0.08]"
                    }`}
                  >
                    <div
                      className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b ${
                        isLightCard ? "border-zinc-200" : "border-white/10"
                      }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3
                            className={`text-xl sm:text-2xl font-bold ${
                              isLightCard ? "text-zinc-950" : "text-white"
                            }`}
                          >
                            {exp.role}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#ff7a00]/15 text-[#ff7a00] border border-[#ff7a00]/30">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-indigo-600 font-semibold text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div
                        className={`flex flex-wrap items-center gap-4 text-xs font-medium ${
                          isLightCard ? "text-zinc-600" : "text-zinc-400"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#ff7a00]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        isLightCard ? "text-zinc-700" : "text-zinc-300"
                      }`}
                    >
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm font-medium ${
                            isLightCard ? "text-zinc-800" : "text-zinc-200"
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 pt-2 border-t ${
                        isLightCard ? "border-zinc-200" : "border-white/[0.08]"
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                            isLightCard
                              ? "bg-zinc-100 text-zinc-800 border-zinc-200"
                              : "bg-black/60 text-zinc-300 border-white/[0.08]"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notable Company Honors & Awards */}
            <div id="awards" className="pt-8 space-y-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#ff7a00]" />
                <h2
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}
                >
                  Notable Honors & Recognition at Exeter Premedia Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {portfolioData.awards.map((award) => (
                  <div
                    key={award.id}
                    className={`p-6 rounded-3xl border space-y-3 shadow-md ${
                      isLightCard
                        ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                        : "bg-[#111118] border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
                          {award.date}
                        </span>
                        <h4
                          className={`text-lg font-bold mt-1.5 ${
                            isLightCard ? "text-zinc-950" : "text-white"
                          }`}
                        >
                          {award.title}
                        </h4>
                        <p className="text-xs text-[#ff7a00] font-semibold">
                          {award.issuer}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#ff7a00]/15 border border-[#ff7a00]/30 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-[#ff7a00]" />
                      </div>
                    </div>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed pt-1 font-medium ${
                        isLightCard ? "text-zinc-600" : "text-zinc-300"
                      }`}
                    >
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-8">
              <div
                className={`lg:col-span-5 p-6 rounded-3xl border flex flex-col justify-between shadow-md ${
                  isLightCard
                    ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90"
                    : "bg-[#111118] border-white/[0.08]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-[#ff7a00] mb-2.5 text-xs font-bold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </div>
                  {portfolioData.education.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4
                        className={`text-base font-bold ${
                          isLightCard ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        className={`text-xs font-medium ${
                          isLightCard ? "text-zinc-600" : "text-zinc-300"
                        }`}
                      >
                        {edu.institution}
                      </p>
                      <div
                        className={`flex items-center gap-2 text-xs pt-1 ${
                          isLightCard ? "text-zinc-500" : "text-zinc-400"
                        }`}
                      >
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span className="text-[#ff7a00] font-bold">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`lg:col-span-7 p-6 rounded-3xl border shadow-md ${
                  isLightCard
                    ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90"
                    : "bg-[#111118] border-white/[0.08]"
                }`}
              >
                <div className="flex items-center gap-2 text-indigo-500 mb-2.5 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Industry Certifications & Credentials
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 ${
                        isLightCard
                          ? "bg-white border-zinc-200 text-zinc-900 shadow-xs"
                          : "bg-black/60 border-white/[0.08] text-zinc-200"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className={`font-semibold ${isLightCard ? "text-zinc-950" : "text-white"}`}>
                        {cert.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] ${
                          isLightCard ? "text-zinc-500" : "text-zinc-400"
                        }`}
                      >
                        ({cert.provider})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <ContactFooterSection />
      </div>
    </div>
  );
}

