import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { caseStudyStats, roles } from "@/lib/content";

export function WorkHighlights() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          meta="8 yrs building interfaces teams can ship on"
          title="Good decisions. Real products."
        />

        <ul className="grid gap-5 lg:grid-cols-3">
          {roles.map((role) => (
            <li
              key={role.company}
              className="flex flex-col rounded-2xl border border-border-subtle bg-surface/40 p-6 transition-colors duration-200 hover:border-border sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                {role.company}
              </p>
              <p className="mt-3 text-lg font-medium leading-snug tracking-tight text-foreground">
                {role.metric}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {role.description}
              </p>
              <div className="mt-6">
                <ArrowLink href={role.href}>{role.linkLabel}</ArrowLink>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 border-t border-border-subtle pt-12 sm:grid-cols-3">
          {caseStudyStats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-xs text-muted">{stat.label}</p>
              <p className="mt-2 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.suffix}</p>
              <ArrowLink href={stat.href} className="mt-4">
                Case study
              </ArrowLink>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
