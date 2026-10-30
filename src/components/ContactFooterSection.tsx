"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Globe,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function ContactFooterSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Test Automation / Mobile App Collaboration",
    message: "",
  });

  const copyDomain = () => {
    navigator.clipboard.writeText(`https://${portfolioData.domain}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0d59c664-59b8-47cb-a311-fb771598b8f8",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "New Inquiry from John Abishek Softwares",
          message: formState.message,
          from_name: "Portfolio Website Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setFormState({
          name: "",
          email: "",
          subject: "Test Automation / Mobile App Collaboration",
          message: "",
        });
        setTimeout(() => {
          setSent(false);
        }, 5000);
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Network connection error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className={`relative pt-24 pb-14 border-t transition-colors ${
        isLight
          ? "border-zinc-200 bg-white"
          : "border-white/10 bg-[#09090e]/90 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-b ${
            isLight ? "border-zinc-200" : "border-white/10"
          }`}
        >
          {/* Left 6 Columns: Studio Identity & Domain Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Portfolio & Developer Channels
            </div>

            <h2
              className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isLight ? "text-zinc-950" : "text-white"
              }`}
            >
              Let&apos;s connect &{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-400 to-[#ff7a00] bg-clip-text text-transparent">
                build together.
              </span>
            </h2>

            <p
              className={`text-base leading-relaxed max-w-xl ${
                isLight ? "text-zinc-600" : "text-zinc-300"
              }`}
            >
              Reach out for test automation engineering, Google Play Closed
              Testing cohorts, custom full-stack web platforms, or mobile application development.
            </p>

            <div
              className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm transition-colors ${
                isLight
                  ? "bg-white border-zinc-200/90 shadow-sm"
                  : "bg-[#12131d]/90 border-white/10 shadow-lg"
              }`}
            >
              <div
                className={`relative w-14 h-14 rounded-2xl overflow-hidden border shadow shrink-0 ${
                  isLight ? "border-zinc-200 bg-white" : "border-white/20 bg-zinc-900"
                }`}
              >
                <Image
                  src={portfolioData.developer.photoUrl}
                  alt={portfolioData.developer.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div
                  className={`text-sm font-bold ${
                    isLight ? "text-zinc-950" : "text-white"
                  }`}
                >
                  {portfolioData.developer.name}
                </div>
                <div className={`text-xs ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                  {portfolioData.developer.title}
                </div>
                <div className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Consulting & Mobile Projects
                </div>
              </div>
            </div>

            {/* Direct Contact Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`mailto:${portfolioData.developer.email}`}
                className={`p-3.5 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
                  isLight
                    ? "bg-white hover:bg-zinc-50 border-zinc-200/90 hover:border-[#ff7a00]/40 text-zinc-900 shadow-xs"
                    : "bg-[#12131d]/90 hover:bg-[#161726] border-white/10 hover:border-[#ff7a00]/40 text-zinc-200 shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-indigo-500" />
                </div>
                <div className="truncate">
                  <div className={`text-[10px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    Email Directly
                  </div>
                  <div className={`font-semibold truncate ${isLight ? "text-zinc-950" : "text-white"}`}>
                    {portfolioData.developer.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.developer.phone}`}
                className={`p-3.5 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
                  isLight
                    ? "bg-white hover:bg-zinc-50 border-zinc-200/90 hover:border-[#ff7a00]/40 text-zinc-900 shadow-xs"
                    : "bg-[#12131d]/90 hover:bg-[#161726] border-white/10 hover:border-[#ff7a00]/40 text-zinc-200 shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className={`text-[10px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    Phone / WhatsApp
                  </div>
                  <div className={`font-semibold ${isLight ? "text-zinc-950" : "text-white"}`}>
                    {portfolioData.developer.phone}
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
                  isLight
                    ? "bg-white hover:bg-zinc-50 border-zinc-200/90 hover:border-[#ff7a00]/40 text-zinc-900 shadow-xs"
                    : "bg-[#12131d]/90 hover:bg-[#161726] border-white/10 hover:border-[#ff7a00]/40 text-zinc-200 shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-blue-500" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <div className={`text-[10px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    LinkedIn Profile
                  </div>
                  <div className={`font-semibold flex items-center gap-1 ${isLight ? "text-zinc-950" : "text-white"}`}>
                    in/abishekkumar-v
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </div>
                </div>
              </a>

              <a
                href={portfolioData.developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
                  isLight
                    ? "bg-white hover:bg-zinc-50 border-zinc-200/90 hover:border-[#ff7a00]/40 text-zinc-900 shadow-xs"
                    : "bg-[#12131d]/90 hover:bg-[#161726] border-white/10 hover:border-[#ff7a00]/40 text-zinc-200 shadow-sm"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-purple-500" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div>
                  <div className={`text-[10px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    GitHub Profile
                  </div>
                  <div className={`font-semibold flex items-center gap-1 ${isLight ? "text-zinc-950" : "text-white"}`}>
                    github.com/Abishek7200
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </div>
                </div>
              </a>
            </div>

            {/* Domain Verification Card */}
            <div
              className={`p-5 rounded-3xl border space-y-3 transition-colors ${
                isLight
                  ? "bg-white border-zinc-200/90 shadow-sm"
                  : "bg-[#12131d]/90 border-white/10 shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-indigo-500" />
                  <span
                    className={`font-semibold text-sm sm:text-base ${
                      isLight ? "text-zinc-950" : "text-white"
                    }`}
                  >
                    https://{portfolioData.domain}
                  </span>
                </div>
                <button
                  onClick={copyDomain}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                    isLight
                      ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-200"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy URL
                    </>
                  )}
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-xs text-zinc-500">
                <div
                  className={`p-2 rounded-xl border flex items-center gap-1.5 ${
                    isLight ? "bg-zinc-100/80 border-zinc-200 text-zinc-800" : "bg-black/50 border-white/[0.08] text-zinc-300"
                  }`}
                >
                  <MapPin className="w-3 h-3 text-[#ff7a00]" />
                  <span>Chennai, India</span>
                </div>
                <div
                  className={`p-2 rounded-xl border ${
                    isLight ? "bg-zinc-100/80 border-zinc-200 text-zinc-800" : "bg-black/50 border-white/[0.08] text-zinc-300"
                  }`}
                >
                  app-ads.txt: <span className="text-emerald-500 font-bold">Ready</span>
                </div>
                <div
                  className={`p-2 rounded-xl border ${
                    isLight ? "bg-zinc-100/80 border-zinc-200 text-zinc-800" : "bg-black/50 border-white/[0.08] text-zinc-300"
                  }`}
                >
                  Play Store: <span className="text-indigo-400 font-bold">Linked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 6 Columns: Clean Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 rounded-[2rem] p-6 sm:p-8 border shadow-2xl ${
              isLight
                ? "bg-white border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                : "bg-gradient-to-b from-[#181926] to-[#111118] border-white/10"
            }`}
          >
            <div
              className={`flex items-center gap-2 pb-4 mb-5 border-b ${
                isLight ? "border-zinc-200" : "border-white/10"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#ff7a00]" />
              <span className={`text-xs font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                Send a Message to {portfolioData.developer.name}
              </span>
            </div>

            {sent ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className={`text-xl font-bold ${isLight ? "text-zinc-950" : "text-white"}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm max-w-sm mx-auto ${isLight ? "text-zinc-600" : "text-zinc-300"}`}>
                  Thank you for reaching out. I will get back to you shortly at {formState.email || "your email"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isLight ? "text-zinc-700" : "text-zinc-300"}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                          : "bg-black/60 border-white/10 text-white placeholder-zinc-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isLight ? "text-zinc-700" : "text-zinc-300"}`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                        isLight
                          ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                          : "bg-black/60 border-white/10 text-white placeholder-zinc-500"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? "text-zinc-700" : "text-zinc-300"}`}>
                    Subject / Project Interest
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                        : "bg-black/60 border-white/10 text-white placeholder-zinc-500"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? "text-zinc-700" : "text-zinc-300"}`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your app project, test automation requirements, or collaboration..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#ff7a00] ${
                      isLight
                        ? "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400"
                        : "bg-black/60 border-white/10 text-white placeholder-zinc-500"
                    }`}
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <div className={`text-[11px] ${isLight ? "text-zinc-500" : "text-zinc-400"}`}>
                    Direct response within 24 hours
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.04 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.96 } : {}}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                      isSubmitting
                        ? "bg-[#ff7a00]/70 text-black cursor-wait"
                        : "bg-[#ff7a00] hover:bg-[#ff8f26] text-black shadow-lg shadow-[#ff7a00]/25 cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom Studio Signature Bar */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isLight ? "text-zinc-500" : "text-zinc-500"
          }`}
        >
          <div>
            © 2026 <strong className={isLight ? "text-zinc-950" : "text-white"}>John Abishek Softwares</strong> (
            {portfolioData.domain}) · Crafted by Abishekkumar V
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className={`hover:text-[#ff7a00] transition-colors flex items-center gap-1 ${
                isLight ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
