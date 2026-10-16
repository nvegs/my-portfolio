type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  id?: string;
};

export function SectionHeading({
  title,
  subtitle,
  meta,
  id,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-2xl sm:mb-14">
      {meta ? (
        <p className="mb-3 text-sm text-muted">{meta}</p>
      ) : null}
      <h2
        id={id}
        className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
