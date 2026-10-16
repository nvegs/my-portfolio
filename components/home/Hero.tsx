import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-border-subtle/60 pb-16 pt-12 sm:pb-24 sm:pt-20">
      <Container>
        <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.75rem]">
          Interface. Systems. Craft.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          I&apos;m {site.name.split(" ")[0]}. I design and ship frontend
          experiences — from design tokens and component libraries to the last
          millisecond of load time — so products feel calm, fast, and
          trustworthy.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/work">View selected work</Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
        <p className="mt-10 flex items-center gap-2 text-sm text-muted">
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent/80"
            aria-hidden
          />
          {site.status}
        </p>
      </Container>
    </section>
  );
}
