"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { useScrollProgress } from "@/components/providers/ScrollProgressProvider";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type NavHref = (typeof navLinks)[number]["href"];

function getActiveSection(): NavHref {
  const offset = window.scrollY + window.innerHeight * 0.28;
  let active: NavHref = navLinks[0].href;

  for (const { href } of navLinks) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el && el.offsetTop <= offset) {
      active = href;
    }
  }

  return active;
}

export function Navbar() {
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavHref>(navLinks[0].href);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setActiveSection(getActiveSection());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-stretch justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav
          className="relative hidden items-stretch gap-1 md:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center px-3 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute inset-x-3 bottom-0 z-10 h-0.5 rounded-full bg-accent"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <nav className="flex gap-3 md:hidden" aria-label="Primary mobile">
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

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-border/60"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 z-[1] h-0.5 origin-left bg-accent transition-[width] duration-150 ease-out will-change-[width]"
        style={{ width: `${scrollProgress * 100}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </header>
  );
}
