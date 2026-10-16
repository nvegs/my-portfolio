"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/lib/site";

function SearchButton() {
  return (
    <button
      type="button"
      className="hidden items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-3 py-1.5 text-xs text-muted transition-colors hover:border-border hover:text-foreground md:inline-flex"
      aria-label="Search (coming soon)"
    >
      <span>Search</span>
      <kbd className="rounded border border-border-subtle bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted">
        ⌘K
      </kbd>
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-4 sm:py-5">
        <Link
          href="/"
          className="group flex min-w-0 flex-col gap-0.5 focus-visible:outline-offset-4"
        >
          <span className="truncate text-sm font-medium tracking-tight text-foreground">
            {site.name}
          </span>
          <span className="truncate text-xs text-muted">{site.title}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-surface text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <SearchButton />
          <Button
            href="/contact"
            variant="primary"
            className="hidden whitespace-nowrap sm:inline-flex"
          >
            Let&apos;s build something →
          </Button>
          <button
            type="button"
            className="inline-flex rounded-full border border-border-subtle p-2 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border-subtle lg:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-surface"
              >
                {label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 w-full">
              Let&apos;s build something →
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
