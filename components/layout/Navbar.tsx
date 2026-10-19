"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <nav
            className="flex gap-3 md:hidden"
            aria-label="Primary mobile"
          >
            <Link
              href="#projects"
              className="font-mono text-xs text-muted hover:text-foreground"
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="font-mono text-xs text-muted hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
