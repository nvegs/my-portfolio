import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <header className="border-b border-border-subtle/60 pb-12 pt-10 sm:pb-16 sm:pt-14">
      <Container>
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </Container>
    </header>
  );
}
