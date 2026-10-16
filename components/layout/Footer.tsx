import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border-subtle">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted">© {year} {site.name}</p>
      </Container>
    </footer>
  );
}
