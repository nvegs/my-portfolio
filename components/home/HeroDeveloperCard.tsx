"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const stack = ["React", "Next", "Angular"] as const;

export function HeroDeveloperCard() {
  return (
    <motion.div
      className="w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end"
      initial={{ opacity: 0, y: 24, x: 12 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xl shadow-black/10 dark:shadow-black/40">
        <div className="flex items-center gap-3 border-b border-border bg-background/60 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/90" />
          </div>
          <span className="flex-1 text-center font-mono text-xs text-muted">
            developer.tsx
          </span>
          <span className="w-[52px]" aria-hidden />
        </div>

        <pre className="overflow-x-auto bg-code-panel p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <code>
            <span className="text-syntax-keyword">const</span>{" "}
            <span className="text-syntax-name">developer</span> = {"{"}
            {"\n"}
            {"  "}
            <span className="text-foreground/90">name:</span>{" "}
            <span className="text-syntax-string">&quot;{site.shortName}&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-foreground/90">role:</span>{" "}
            <span className="text-syntax-string">&quot;Frontend Eng&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-foreground/90">stack:</span>{" "}
            <span className="text-syntax-string">
              [&quot;{stack[0]}&quot;, &quot;{stack[1]}&quot;, &quot;{stack[2]}
              &quot;]
            </span>,
            {"\n"}
            {"  "}
            <span className="text-foreground/90">passion:</span>{" "}
            <span className="text-syntax-string">
              &quot;Building scalable web products for African creators&apos;
              businesses&quot;
            </span>
            {"\n"}
            {"};"}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
