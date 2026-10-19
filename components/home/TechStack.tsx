"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { TechIcon } from "@/components/home/TechIcon";
import { techStackGroups } from "@/lib/tech-stack";

export function TechStack() {
  return (
    <Section id="skills" className="border-t border-border/60 bg-surface/30">
      <FadeIn>
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Tech Stack
        </h2>
      </FadeIn>

      <div className="mt-12 space-y-10">
        {techStackGroups.map((group, groupIndex) => (
          <FadeIn key={group.comment} delay={groupIndex * 0.08}>
            <p className="font-mono text-sm text-muted">{group.comment}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground">
                    <TechIcon name={item} />
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
