import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { labProjects } from "@/lib/content";

export function LabPreview() {
  const featured = labProjects.slice(0, 4);

  return (
    <section className="py-16 sm:py-24" aria-labelledby="lab-heading">
      <Container>
        <SectionHeading
          id="lab-heading"
          title="Curiosity, put to work."
          subtitle="Side projects, performance tooling, and UI explorations — the sandbox where ideas earn their keep."
        />

        <ul className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/lab#${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border-subtle p-6 transition-all duration-200 hover:border-border hover:bg-surface/50 sm:p-8"
              >
                <h3 className="text-lg font-medium tracking-tight text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border-subtle px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link
            href="/lab"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            Browse the full lab →
          </Link>
        </p>
      </Container>
    </section>
  );
}
