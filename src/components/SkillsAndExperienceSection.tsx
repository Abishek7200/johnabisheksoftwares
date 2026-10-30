"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  MapPin,
  Trophy,
  GraduationCap,
  Award,
  Check,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function SkillsAndExperienceSection() {
  const { theme } = useTheme();
  const isLightCard = theme === "hybrid" || theme === "light";
  const isLight = theme === "light";

  return (
    <section id="experience" className="relative py-24 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Career Timeline Header */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            CAREER & MILESTONES
          </div>
          <h2
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isLight ? "text-zinc-950" : "text-white"
            }`}
          >
            Work Experience & Track Record
          </h2>
          <p
            className={`mt-2 max-w-2xl text-sm sm:text-base ${
              isLight ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Professional software delivery, enterprise automated test infrastructure, and indie product development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 sm:p-8 border transition-all space-y-4 shadow-lg ${
                isLightCard
                  ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 hover:border-[#ff7a00]/40 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
                  : "bg-[#111118] border-white/[0.08] hover:border-white/20"
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
            </motion.div>
          ))}
        </div>

        {/* Company Honors & Notable Awards */}
        <div className="pt-4 space-y-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#ff7a00]" />
            <h3
              className={`text-2xl font-bold ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Notable Honors & Recognition at Exeter Premedia Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioData.awards.map((award) => (
              <div
                key={award.id}
                className={`p-6 rounded-3xl border transition-all space-y-3 shadow-md ${
                  isLightCard
                    ? "bg-gradient-to-b from-white to-[#f8f9fc] border-zinc-200/90 hover:border-[#ff7a00]/40 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                    : "bg-[#111118] border-white/[0.08] hover:border-[#ff7a00]/40"
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

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
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
    </section>
  );
}
