"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { aboutStats, site } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          About Me
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn delay={0.1}>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I&apos;m a Software Engineer (Web &amp; Mobile) based in{" "}
              {site.location} with 6+ years of experience building fast,
              scalable web and mobile applications with React, Next.js, Angular,
              TypeScript, and React Native. I focus on clean architecture,
              performance, and great UX — especially for the African market.
            </p>
            <p>
              I&apos;m currently freelancing on end-to-end products with
              Supabase and Docker, while at Uridium Works I ship platforms like
              OmniX and Coronation financial reporting, mentor developers, and
              collaborate in agile teams. Past work includes Beam Connect, MR3
              Patient, and USmartInvoice — with strong attention to
              accessibility, testing, and real-world network conditions.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {aboutStats.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-mono text-2xl font-semibold text-foreground">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="overflow-hidden rounded-lg border border-border bg-terminal-bg font-mono text-sm shadow-lg shadow-black/20"
            role="img"
            aria-label="Terminal-style about summary"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/40 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/90" />
              <span className="ml-2 text-xs text-white/40">bash — about</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-terminal-green/90">
              <code>
                <span className="text-terminal-blue">$</span> cat about.txt
                {"\n\n"}
                <span className="text-white/70">Name:</span> {site.name}
                {"\n"}
                <span className="text-white/70">Role:</span> Software Engineer
                (Web &amp; Mobile)
                {"\n"}
                <span className="text-white/70">Location:</span> {site.location}{" "}
                🌍 — Remote / Hybrid (NG)
                {"\n"}
                <span className="text-white/70">Also open:</span> roles outside
                Nigeria
                {"\n"}
                <span className="text-white/70">Company:</span> Uridium Works
                Limited
                {"\n\n"}
                Stack: React, Next.js, React Native, Angular
                {"\n"}
                Focus: performance, clean arch, mobile + web
                <span className="text-terminal-blue">$</span>{" "}
                <span className="cursor-blink inline-block h-4 w-2 bg-terminal-green align-middle" />
              </code>
            </pre>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
