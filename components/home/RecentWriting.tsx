import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { writingPosts } from "@/lib/content";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function RecentWriting() {
  const featured = writingPosts.filter((p) => p.featured);

  return (
    <section
      className="border-t border-border-subtle/60 py-16 sm:py-24"
      aria-labelledby="writing-heading"
    >
      <Container>
        <SectionHeading
          id="writing-heading"
          title="Recent writing"
          subtitle="Notes on performance, design systems, and the habits that keep shipping sustainable."
        />

        <ul className="divide-y divide-border-subtle border-y border-border-subtle">
          {featured.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/writing#${post.slug}`}
                className="group block py-8 transition-colors hover:bg-surface/40 sm:py-10"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link
            href="/writing"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            All posts →
          </Link>
        </p>
      </Container>
    </section>
  );
}
