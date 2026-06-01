import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Cpu,
  Brain,
  Factory,
  MonitorSmartphone,
  GraduationCap,
  Package,
  Phone,
  Sparkles,
} from "lucide-react";
import { Radar } from "./radar-effect";

/*
 * ArcEcosystemRadar.jsx
 * ARC LABS Ecosystem Navigation Hub — a lead-gen "command center" built on the
 * radar effect. Adapted for THIS stack:
 *   - react-router-dom <Link> + crawlable hrefs (NOT next/link / router.push)
 *   - lucide-react icons (already installed; react-icons is NOT a dependency)
 *   - GA4 tracking via window.dataLayer (matches analytics-gtm-snippet.md).
 *     Marking generate_lead / navigation_click as GA4 key events requires the
 *     GTM install from that guide; until then these pushes are harmless no-ops.
 *
 * All hrefs already have matching routes in App.jsx, so navigation works today.
 *
 * NOTE on stats: the per-card numbers below are PLACEHOLDERS. Replace with real,
 * verifiable figures before launch — fabricated "250+ Schools" claims are a
 * trust/legal risk for B2B/CSR buyers (see audit §7). Set stat: null to hide.
 */

function trackEvent(name, pageName) {
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, page_name: pageName });
  }
}

// Reusable configuration array — add/remove nodes here only.
const ecosystemLinks = [
  { title: "Robotics Labs",   icon: Bot,               href: "/robotics-labs",  description: "Set up robotics labs in schools", stat: null },
  { title: "IoT Labs",        icon: Cpu,               href: "/iot-labs",       description: "Hands-on IoT lab infrastructure", stat: null },
  { title: "AI Labs",         icon: Brain,             href: "/ai-labs",        description: "AI & machine learning lab kits",  stat: null },
  { title: "Industrial IoT",  icon: Factory,           href: "/industrial-iot", description: "Smart monitoring for industry",   stat: null },
  { title: "Virtual Lab",     icon: MonitorSmartphone, href: "/virtual-lab",    description: "Simulated lab environments",      stat: null },
  { title: "STEM Courses",    icon: GraduationCap,     href: "/courses",        description: "Structured STEM programs",        stat: null },
  { title: "Products",        icon: Package,           href: "/products",       description: "Browse kits & components",        stat: null },
  { title: "Contact Us",      icon: Phone,             href: "/contact",        description: "Book a free consultation",        stat: null },
];

function EcosystemCard({ item, index }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group relative z-50"
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          to={item.href}
          onClick={() => trackEvent("navigation_click", item.title)}
          aria-label={`Explore ${item.title} — ${item.description}`}
          className="relative flex w-36 flex-col items-center gap-2 rounded-2xl border border-cyan-500/15 bg-white/[0.03] px-4 py-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-500/[0.06] hover:shadow-[0_0_28px_rgba(6,182,212,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/25 bg-slate-900/80 text-cyan-300 shadow-inner transition-colors duration-300 group-hover:text-cyan-200">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
          </span>

          <span className="text-sm font-semibold text-zinc-100">{item.title}</span>

          {item.stat ? (
            <span className="text-[11px] font-mono uppercase tracking-wide text-cyan-400/90">
              {item.stat}
            </span>
          ) : null}

          {/* Tooltip on hover */}
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-cyan-500/30 bg-slate-950/95 px-2.5 py-1 text-[11px] text-cyan-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
          >
            {item.description}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function ArcEcosystemRadar() {
  return (
    <section
      aria-labelledby="arc-ecosystem-heading"
      className="relative w-full overflow-hidden bg-[#09090b] py-20"
    >
      {/* Section heading */}
      <div className="mx-auto mb-12 max-w-2xl px-4 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-cyan-300">
          <Sparkles size={12} /> ARC LABS Ecosystem
        </div>
        <h2
          id="arc-ecosystem-heading"
          className="text-2xl font-bold text-zinc-100 sm:text-3xl"
        >
          One partner. The complete lab ecosystem.
        </h2>
        <p className="mt-3 text-sm text-zinc-400">
          Robotics, IoT, AI, Industrial IoT, Virtual Labs, and training — explore any
          part of the ARC LABS stack.
        </p>
      </div>

      {/* Hub */}
      <div className="relative mx-auto flex min-h-[26rem] w-full max-w-4xl flex-col items-center justify-center gap-6 px-4">
        {/* Center: ARC AI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-50 mb-2 flex flex-col items-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900 text-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.45)]">
            <Sparkles className="h-7 w-7" />
          </div>
          <span className="mt-2 text-sm font-bold tracking-wide text-cyan-200">ARC AI</span>
        </motion.div>

        {/* Navigation cards */}
        <div className="relative z-50 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {ecosystemLinks.map((item, i) => (
            <EcosystemCard key={item.href} item={item} index={i} />
          ))}
        </div>

        {/* Radar backdrop */}
        <Radar className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 md:opacity-60" />

        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-cyan-700/60 to-transparent" />
      </div>
    </section>
  );
}
