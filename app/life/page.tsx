import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { lifeStories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Life",
  description:
    "Personal essays on rhythm, creativity, and staying human while building software.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export default function LifePage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Life"
        description="Stories that don't fit a sprint board — rituals, travel, and the hobbies that sharpen how I see interfaces."
      />
      <Container className="py-16 sm:py-20">
        <ul className="flex flex-col gap-12">
          {lifeStories.map((story) => (
            <li
              key={story.slug}
              id={story.slug}
              className="scroll-mt-28 max-w-2xl"
            >
              <article>
                <time
                  dateTime={story.date}
                  className="text-xs text-muted"
                >
                  {formatDate(story.date)}
                </time>
                <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground">
                  {story.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {story.excerpt}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Full essay coming soon — for now, this is the thread I keep
                  returning to when the week gets loud.
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
