"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { HeroDeveloperCard } from "@/components/home/HeroDeveloperCard";
import { TypingRole } from "@/components/home/TypingRole";

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="opacity-90"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="opacity-90"
    >
      <path d="M12 15V3" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] scroll-mt-24 items-center px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-terminal-blue/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-terminal-green" />
            {site.availabilityBadge}
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Hi, I&apos;m {site.shortName}
          </h1>

          <TypingRole />

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-md shadow-accent/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
              <ExternalLinkIcon />
            </Link>
            <a
              href={site.cvPath}
              download={site.cvDownloadName}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-accent/40 hover:bg-surface/80"
            >
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </motion.div>

        <HeroDeveloperCard />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-border/80 bg-surface/50 text-muted backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-foreground"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll to about section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
