"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Code2,
  Zap,
  CheckCircle2,
  Trophy,
  Award,
  GraduationCap,
  MapPin,
  FileDown,
  Sparkles,
} from "lucide-react";
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

export default function AboutSection() {
  const { theme } = useTheme();
  const isLightCard = theme === "hybrid" || theme === "light";
  const isLight = theme === "light";

  return (
    <section id="about" className="relative py-28 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ff7a00]" />
            ABOUT ME
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}
          >
            About Me – {portfolioData.developer.name}, Solo Developer & QA Engineer
          </h2>
        </motion.div>

        {/* Narrative & Photo Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Prominent Photo Frame with Studio Rim-Light */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#ff7a00] via-indigo-500 to-purple-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-700" />
              <div
                className={`relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] rounded-[2.25rem] overflow-hidden border-2 shadow-2xl ${
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
          </motion.div>

          {/* Story Narrative Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed ${
              isLight ? "text-zinc-700" : "text-zinc-300"
            }`}
          >
            <h3
              className={`text-xl sm:text-2xl font-bold ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Hi! My name is Abishek, and I’m an independent mobile game developer & automation test architect.
            </h3>

            <p>
              Ever since I entered technology, I’ve been fascinated not only by playing games and using software,
              but by the craft of building interactive worlds and reliable digital ecosystems that people love.
              I started learning programming and game design step-by-step, building real projects from scratch.
            </p>

            <p>
              Today, I run{" "}
              <strong className={isLight ? "text-zinc-950 font-bold" : "text-white"}>
                John Abishek Softwares
              </strong>{" "}
              (johnabisheksoftwares.dev) with 4 published production titles on the Google Play Console (
              <em>Bottle Shoot: Target Shooter</em>, <em>Arrow Go: Zen Logic Puzzle</em>, <em>Worship Connect</em>, and{" "}
              <em>Birthday Reminder</em>) and an active Google Play Closed Testing track for <em>VerseSnap</em>.
            </p>

            <p>
              By day, I work as an{" "}
              <strong className={isLight ? "text-zinc-950 font-bold" : "text-white"}>
                Automation Test Engineer at Exeter Premedia Services
              </strong>
              , where I engineered a scalable Playwright JS framework from scratch, boosted regression coverage by 60%, and earned
              two <strong className="text-[#ff7a00]">Torch Bearer Awards</strong> (Mar 2025, May 2023) and the
              <strong className="text-indigo-500 font-semibold"> Flash Forward Award</strong> (Aug 2024).
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <motion.a
                href="/Abishek_resume_sept.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-3 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg ${
                  isLight
                    ? "bg-zinc-950 text-white hover:bg-black"
                    : "bg-white text-black hover:bg-zinc-200"
                }`}
              >
                <FileDown className="w-4 h-4 text-[#ff7a00]" />
                View Full Resume (PDF)
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abishekkumar-v/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-3 rounded-xl text-xs font-semibold border transition shadow-sm ${
                  isLight
                    ? "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white border-white/10"
                }`}
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Dual Tone 4 Pillars Bento Grid (Crisp Pearl Cards with Rich Contrast) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {aboutPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`p-7 rounded-[2rem] border transition-all space-y-3 relative group shadow-lg ${
                isLightCard
                  ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 hover:border-[#ff7a00]/50 shadow-[0_16px_45px_rgba(0,0,0,0.14)]"
                  : "bg-[#111118] border-white/[0.08] hover:border-white/25 shadow-xl"
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
              <h4
                className={`text-xl font-bold transition-colors group-hover:text-[#ff7a00] ${
                  isLightCard ? "text-zinc-950" : "text-white"
                }`}
              >
                {pillar.title}
              </h4>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isLightCard ? "text-zinc-600 font-medium" : "text-zinc-400"
                }`}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
