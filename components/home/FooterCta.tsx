import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FooterCta() {
  return (
    <section
      className="border-t border-border-subtle bg-surface/50 py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <Container className="max-w-3xl text-center sm:text-left">
        <h2
          id="cta-heading"
          className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Bring me the hard problem.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Complex UI, legacy migrations, design systems that need love, or a
          team that wants a frontend partner who cares about users and
          maintainers equally — I&apos;d like to hear about it.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <Button href="/contact">Get in touch</Button>
          <Button href={`mailto:${site.email}`} variant="secondary">
            {site.email}
          </Button>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 sm:justify-start">
          <li>
            <a
              href={site.social.github}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.social.linkedin}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.social.x}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              X
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
