import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { rotationCards } from "@/lib/content";

export function PersonalRotation() {
  return (
    <section
      className="border-y border-border-subtle/60 bg-surface/30 py-16 sm:py-24"
      aria-labelledby="rotation-heading"
    >
      <Container>
        <SectionHeading
          id="rotation-heading"
          title="A few things in rotation."
          subtitle="Stack notes, a book on the nightstand, and one experiment that might become production code."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {rotationCards.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-border-subtle bg-background p-6 sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {card.tag}
              </p>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {card.body}
              </p>
              <ArrowLink href={card.href} className="mt-6">
                {card.linkLabel}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
