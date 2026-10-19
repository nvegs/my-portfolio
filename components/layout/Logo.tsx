"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link
      href="#home"
      className="group flex min-w-0 items-center gap-2.5 rounded-md outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
      aria-label={`${site.name}, ${site.logoTaglineFull} — home`}
    >
      <motion.div
        className="relative size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-cyan-600/90 ring-offset-2 ring-offset-background"
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 420, damping: 20 }}
      >
        <Image
          src="/branding/icon.png"
          alt=""
          width={36}
          height={36}
          className="size-full object-cover"
          priority
        />
      </motion.div>

      <div className="min-w-0 leading-none">
        <span className="block truncate text-xs font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-sm">
          {site.name}
        </span>
        <span className="mt-1 block whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.06em] text-muted sm:text-[10px] sm:tracking-[0.1em]">
          {site.logoTagline}
        </span>
      </div>
    </Link>
  );
}
