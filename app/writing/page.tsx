import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { writingPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on CSS, design systems, shipping discipline, and frontend craft.",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export default function WritingPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Writing"
        description="Longer notes I publish when a pattern keeps showing up in code review or user research."
      />
      <Container className="py-16 sm:py-20">
        <ul className="divide-y divide-border-subtle border-y border-border-subtle">
          {writingPosts.map((post) => (
            <li key={post.slug} id={post.slug} className="scroll-mt-28">
              <article className="py-8 sm:py-10">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {post.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
