import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = `group inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-[#5c2612] ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
