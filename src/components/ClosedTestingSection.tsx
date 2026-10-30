"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Users,
  CalendarClock,
  CheckCircle2,
  ExternalLink,
  Bug,
  Sparkles,
  ClipboardCheck,
  GitCommit,
  Send,
  X,
  ShieldCheck,
  Check,
} from "lucide-react";
import { portfolioData, ClosedTestingApp } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function ClosedTestingSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const isLightCard = theme === "hybrid" || theme === "light";

  const [feedbackApp, setFeedbackApp] = useState<ClosedTestingApp | null>(null);
  const [testerEmail, setTesterEmail] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [feedbackNote, setFeedbackNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFeedbackApp(null);
      setTesterEmail("");
      setDeviceModel("");
      setFeedbackNote("");
    }, 2200);
  };

  return (
    <section
      id="closed-testing"
      className="relative py-24 border-t border-white/[0.07]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#ff7a00] mb-2 flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-[#ff7a00]" />
              GOOGLE PLAY CONSOLE · ACTIVE CLOSED TESTING TRACK
            </div>
            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Closed Testing Beta Track
            </h2>
            <p
              className={`mt-2 max-w-3xl text-sm sm:text-base ${
                isLight ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Visible on Google Play Console: Upcoming Android titles undergo
              Google Play&apos;s mandatory{" "}
              <strong className={isLight ? "text-zinc-950" : "text-white"}>
                20+ Testers / 14-Day Continuous Closed Testing
              </strong>{" "}
              milestone before public launch. Join our tester community in 3 simple steps.
            </p>
          </div>

          {/* 3-Step Quick Onboarding Guide Pill */}
          <div
            className={`p-3.5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-semibold whitespace-nowrap self-start lg:self-auto shadow-sm ${
              isLight
                ? "bg-white border-zinc-200 text-zinc-800"
                : "bg-[#111118] border-white/10"
            }`}
          >
            <div className="flex items-center gap-2 text-indigo-600">
              <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center font-bold text-[11px]">
                1
              </span>
              Join Google Group
            </div>
            <span className="hidden sm:inline text-zinc-400">→</span>
            <div className="flex items-center gap-2 text-[#ff7a00]">
              <span className="w-5 h-5 rounded-full bg-[#ff7a00]/20 border border-[#ff7a00]/40 flex items-center justify-center font-bold text-[11px]">
                2
              </span>
              Web Opt-In
            </div>
            <span className="hidden sm:inline text-zinc-400">→</span>
            <div className="flex items-center gap-2 text-emerald-600">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-bold text-[11px]">
                3
              </span>
              Install on Play Store
            </div>
          </div>
        </div>

        {/* Closed Testing Featured Card */}
        {portfolioData.closedTestingApps.map((app) => {
          const dayProgress = Math.min(
            100,
            Math.round((app.testingDay / app.totalRequiredDays) * 100)
          );
          const testerProgress = Math.min(
            100,
            Math.round((app.activeTesters / app.targetTesters) * 100)
          );

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-6 sm:p-9 border shadow-2xl space-y-8 ${
                theme === "hybrid"
                  ? "bg-gradient-to-b from-[#181926] to-[#111118] border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
                  : isLight
                  ? "bg-white border-zinc-200/90 shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
                  : "bg-[#111118] border-white/10 shadow-2xl"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: App Details & 14-Day Progress */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#ff7a00]/15 text-[#ff7a00] border border-[#ff7a00]/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ff7a00] animate-pulse" />
                      Google Play Console: Active Closed Track
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isLight ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      {app.version}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold leading-tight ${
                        isLight ? "text-zinc-950" : "text-white"
                      }`}
                    >
                      {app.name}
                    </h3>
                    <p className="text-xs font-mono text-[#ff7a00] mt-1 truncate">
                      {app.packageName}
                    </p>
                    <p
                      className={`text-xs sm:text-sm mt-2.5 leading-relaxed ${
                        isLight ? "text-zinc-600 font-medium" : "text-zinc-300"
                      }`}
                    >
                      {app.description}
                    </p>
                  </div>

                  {/* 14-Day & 20-Tester Progress Bars */}
                  <div
                    className={`p-4 rounded-2xl border space-y-3.5 ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200"
                        : "bg-white/[0.03] border-white/[0.08]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span
                          className={`flex items-center gap-1.5 ${
                            isLight ? "text-zinc-700 font-semibold" : "text-zinc-300"
                          }`}
                        >
                          <CalendarClock className="w-3.5 h-3.5 text-[#ff7a00]" />
                          Google Play 14-Day Window
                        </span>
                        <span className="text-[#ff7a00] font-bold">
                          Day {app.testingDay} of {app.totalRequiredDays} ({dayProgress}%)
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden border ${
                          isLight
                            ? "bg-zinc-200 border-zinc-300"
                            : "bg-black border-white/[0.06]"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${dayProgress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[#ff7a00] to-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span
                          className={`flex items-center gap-1.5 ${
                            isLight ? "text-zinc-700 font-semibold" : "text-zinc-300"
                          }`}
                        >
                          <Users className="w-3.5 h-3.5 text-emerald-500" />
                          Opted-In Closed Testers
                        </span>
                        <span className="text-emerald-500 font-bold">
                          {app.activeTesters} / {app.targetTesters} Testers Required ({testerProgress}%)
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden border ${
                          isLight
                            ? "bg-zinc-200 border-zinc-300"
                            : "bg-black border-white/[0.06]"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${testerProgress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* What to Test Checklist */}
                  <div className="space-y-2">
                    <div
                      className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 ${
                        isLight ? "text-zinc-500" : "text-zinc-400"
                      }`}
                    >
                      <ClipboardCheck className="w-3.5 h-3.5 text-[#ff7a00]" />
                      Testing Focus Areas
                    </div>
                    <ul className="space-y-1.5">
                      {app.whatToTest.map((item, i) => (
                        <li
                          key={i}
                          className={`text-xs flex items-start gap-2 ${
                            isLight ? "text-zinc-700 font-medium" : "text-zinc-300"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                    <a
                      href={app.googleGroupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all text-center ${
                        isLight
                          ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-200"
                          : "bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border-white/10"
                      }`}
                    >
                      1. Join Group
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={app.webOptInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black flex items-center justify-center gap-1.5 transition-all text-center shadow-md active:scale-95"
                    >
                      2. Web Opt-In
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={app.androidTestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] text-[#ff7a00] border border-[#ff7a00]/30 flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      3. Play Link
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => setFeedbackApp(app)}
                      className="px-3 py-2.5 rounded-xl text-xs font-medium bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-600 border border-emerald-500/25 flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                    >
                      <Bug className="w-3 h-3" />
                      Feedback
                    </button>
                  </div>
                </div>

                {/* Right 5 Columns: Google Play Console Release Standards Card */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    className={`p-6 rounded-2xl border space-y-4 ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200"
                        : "bg-white/[0.03] border-white/10"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 pb-3 border-b ${
                        isLight ? "border-zinc-200" : "border-white/10"
                      }`}
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider ${
                          isLight ? "text-zinc-950" : "text-white"
                        }`}
                      >
                        Google Play Release Standards
                      </h4>
                    </div>

                    <div
                      className={`space-y-3 text-xs leading-relaxed ${
                        isLight ? "text-zinc-700" : "text-zinc-300"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className={isLight ? "text-zinc-950 font-bold" : "text-white"}>
                            API Level 35 Ready:
                          </strong>{" "}
                          Built targeting modern Android 15 specifications with predictive back gesture and edge-to-edge support.
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className={isLight ? "text-zinc-950 font-bold" : "text-white"}>
                            Play App Signing:
                          </strong>{" "}
                          Cryptographically signed with Google-managed key infrastructure.
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className={isLight ? "text-zinc-950 font-bold" : "text-white"}>
                            Automated Vitals:
                          </strong>{" "}
                          Zero crashes detected across closed testing devices over the 14-day observation window.
                        </div>
                      </div>
                    </div>

                    {/* Recent Release Notes */}
                    <div
                      className={`p-3.5 rounded-xl border space-y-1.5 ${
                        isLight
                          ? "bg-white border-zinc-200"
                          : "bg-black/60 border-white/[0.06]"
                      }`}
                    >
                      <div
                        className={`text-[11px] font-semibold flex items-center gap-1.5 ${
                          isLight ? "text-zinc-500" : "text-zinc-400"
                        }`}
                      >
                        <GitCommit className="w-3.5 h-3.5 text-[#ff7a00]" />
                        Recent Track Changelog
                      </div>
                      {app.recentChangelog.map((log, i) => (
                        <p
                          key={i}
                          className={`text-[11px] leading-relaxed ${
                            isLight ? "text-zinc-700 font-medium" : "text-zinc-300"
                          }`}
                        >
                          • {log}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tester Feedback Modal */}
      <AnimatePresence>
        {feedbackApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 border shadow-2xl space-y-5 ${
                isLight ? "bg-white border-zinc-200 text-zinc-900" : "bg-[#111118] border-white/20 text-white"
              }`}
            >
              <div
                className={`flex items-center justify-between pb-3 border-b ${
                  isLight ? "border-zinc-200" : "border-white/10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Bug className="w-5 h-5 text-[#ff7a00]" />
                  <h3 className="text-lg font-bold">
                    Submit Closed Tester Feedback
                  </h3>
                </div>
                <button
                  onClick={() => setFeedbackApp(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold">
                    Feedback Received!
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Thank you for helping test {feedbackApp.name} on the Google Play closed track.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Tester Google Account Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tester@gmail.com"
                      value={testerEmail}
                      onChange={(e) => setTesterEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                          : "bg-black border-white/10 text-white placeholder-zinc-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Device Model & Android Version
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pixel 8 (Android 15) or Samsung S23"
                      value={deviceModel}
                      onChange={(e) => setDeviceModel(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                          : "bg-black border-white/10 text-white placeholder-zinc-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Observations / Bug Details / Usability Feedback
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what you tested, any UI glitches, or performance remarks..."
                      value={feedbackNote}
                      onChange={(e) => setFeedbackNote(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                          : "bg-black border-white/10 text-white placeholder-zinc-500"
                      }`}
                    />
                  </div>

                  <div className="flex justify-end gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setFeedbackApp(null)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold border transition ${
                        isLight
                          ? "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border-zinc-200"
                          : "bg-white/[0.05] text-zinc-300 hover:bg-white/10 border-white/10"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-[#ff7a00] hover:bg-[#ff8f26] text-black flex items-center gap-1.5 transition shadow"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Report
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
