import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { labProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments in accessibility, motion, design tokens, and Next.js architecture.",
};

export default function LabPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Lab"
        description="A working notebook of prototypes — some ship, some teach, all stay honest about tradeoffs."
      />
      <Container className="py-16 sm:py-20">
        <ul className="grid gap-5 sm:grid-cols-2">
          {labProjects.map((project) => (
            <li
              key={project.slug}
              id={project.slug}
              className="scroll-mt-28 rounded-2xl border border-border-subtle p-6 transition-colors hover:border-border sm:p-8"
            >
              <h2 className="text-xl font-medium tracking-tight text-foreground">
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
