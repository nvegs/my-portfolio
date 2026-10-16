import { Hero } from "@/components/home/Hero";
import { WorkHighlights } from "@/components/home/WorkHighlights";
import { PersonalRotation } from "@/components/home/PersonalRotation";
import { LabPreview } from "@/components/home/LabPreview";
import { RecentWriting } from "@/components/home/RecentWriting";
import { LifeBeyondCode } from "@/components/home/LifeBeyondCode";
import { FooterCta } from "@/components/home/FooterCta";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <WorkHighlights />
      <PersonalRotation />
      <LabPreview />
      <RecentWriting />
      <LifeBeyondCode />
      <FooterCta />
    </main>
  );
}
