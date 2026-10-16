import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { workCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in frontend performance, design systems, and product UI for health, commerce, and design-led teams.",
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Work"
        description="Selected engagements where frontend quality moved business metrics — migrations, design systems, and storefront speed."
      />
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-20 sm:gap-28">
          {workCaseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="scroll-mt-28 border-b border-border-subtle pb-20 last:border-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {study.company}
                </h2>
                <p className="text-sm text-muted">{study.period}</p>
              </div>
              <p className="mt-2 text-sm font-medium text-accent">
                {study.role}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                {study.summary}
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {study.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="rounded-xl border border-border-subtle bg-surface/40 px-4 py-4"
                  >
                    <p className="text-2xl font-medium tracking-tight text-foreground">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{m.label}</p>
                  </li>
                ))}
              </ul>

              <ul className="mt-10 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted sm:text-base">
                {study.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
