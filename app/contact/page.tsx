import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about frontend roles, consulting, or collaborations.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="Contact"
        description="Tell me what you're building, what's stuck, and what good looks like six months from now."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-base leading-relaxed text-muted">
              Prefer email? I read every message. For hiring teams, include
              stack, team shape, and whether the role is hands-on IC or lead.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${site.email}`}>Email me</Button>
              <Button href={site.social.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>

          <form
            className="rounded-2xl border border-border-subtle bg-surface/40 p-6 sm:p-8"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted/60 focus:border-accent"
                  placeholder="What would you like to build together?"
                />
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Send message
            </Button>
            <p className="mt-4 text-xs text-muted">
              This form opens your mail client — wire it to an API route when
              you&apos;re ready for production.
            </p>
          </form>
        </div>
      </Container>
    </main>
  );
}
