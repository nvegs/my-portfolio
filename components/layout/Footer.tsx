import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-8 sm:px-6 lg:px-8">
      <p className="mx-auto max-w-6xl text-center font-mono text-xs text-muted">
        Built by {site.shortName} · 2026
      </p>
    </footer>
  );
}
