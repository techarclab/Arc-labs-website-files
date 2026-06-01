import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";

/*
 * radar-effect.jsx
 * Adapted for ARC LABS' stack: Create React App + JavaScript + Tailwind.
 * Original source was Next.js/TypeScript and used tailwind-merge + "use client".
 *   - "use client" removed (not used by CRA)
 *   - twMerge() replaced with your existing cn() helper (src/lib/utils.js)
 *   - TypeScript annotations removed
 * Animation (framer-motion) is already a project dependency.
 */

export const Circle = ({ className, children, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: (idx ?? 0) * 0.1, duration: 0.2 }}
      className={cn(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const Radar = ({ className }) => {
  const circles = new Array(8).fill(1);
  return (
    <div
      className={cn(
        "relative flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}
    >
      <style>{`
        @keyframes radar-spin {
          from { transform: rotate(20deg); }
          to   { transform: rotate(380deg); }
        }
        .animate-radar-spin {
          animation: radar-spin 10s linear infinite;
        }
      `}</style>

      {/* Rotating sweep line */}
      <div
        style={{ transformOrigin: "right center" }}
        className="animate-radar-spin absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent"
      >
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      {/* Concentric circles */}
      {circles.map((_, idx) => (
        <Circle
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: `1px solid rgba(6, 182, 212, ${1 - (idx + 1) * 0.1})`,
          }}
          key={`circle-${idx}`}
          idx={idx}
        />
      ))}
    </div>
  );
};

/*
 * IconContainer — base radar node. Kept for reuse, but the ARC ecosystem hub
 * (ArcEcosystemRadar.jsx) uses its own clickable card instead.
 */
export const IconContainer = ({ icon, text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: delay ?? 0 }}
      className="relative z-50 flex flex-col items-center justify-center space-y-2"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner">
        {icon}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-slate-400">{text}</div>
      </div>
    </motion.div>
  );
};
