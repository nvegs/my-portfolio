import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lifeStories } from "@/lib/content";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function LifeBeyondCode() {
  const featured = lifeStories[0];

  return (
    <section className="py-16 sm:py-24" aria-labelledby="life-heading">
      <Container>
        <SectionHeading
          id="life-heading"
          title="There is life beyond the commit log."
          subtitle="I'm at my best when work has room for slowness — walks, film photography, and long-form learning that isn't on a roadmap."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Frontend craft is part discipline, part taste. The same attention I
            give to focus rings and skeleton states shows up in how I plan a
            trip or brew coffee on Sunday. Keeping that balance honest is how I
            avoid burning out on pixels.
          </p>

          <article className="rounded-2xl border border-border-subtle bg-surface/40 p-6 sm:p-8">
            <p className="text-xs text-muted">
              Featured · {formatDate(featured.date)}
            </p>
            <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground">
              {featured.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {featured.excerpt}
            </p>
            <Link
              href={`/life#${featured.slug}`}
              className="mt-6 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Read the story →
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}
