"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/lib/projects";

function matchesFilter(
  categories: readonly string[],
  filter: ProjectFilter,
): boolean {
  if (filter === "All") return true;
  return categories.includes(filter);
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p.categories, filter)),
    [filter],
  );

  return (
    <Section id="projects">
      <FadeIn>
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Featured Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((tab) => {
            const active = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                  active
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.06}>
            <motion.li
              className="flex h-full flex-col rounded-lg border border-border bg-surface/40 p-5"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-mono text-base font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase text-muted"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded bg-background px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3 font-mono text-xs">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </motion.li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
