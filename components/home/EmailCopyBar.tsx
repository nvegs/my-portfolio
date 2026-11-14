"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function EmailCopyBar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 shadow-sm sm:gap-3 sm:px-5">
      <a
        href={`mailto:${site.email}`}
        className="truncate font-mono text-sm text-foreground transition-colors hover:text-accent sm:text-base"
      >
        {site.email}
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="flex shrink-0 items-center justify-center rounded-md p-1 text-accent transition-colors hover:bg-accent/10 hover:text-accent"
        aria-label={copied ? "Email copied" : "Copy email to clipboard"}
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
    </div>
  );
}
