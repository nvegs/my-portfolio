"use client";

import type { IconType } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";
import {
  SiFacebook,
  SiGithub,
  SiThreads,
  SiTiktok,
  SiWhatsapp,
  SiX,
} from "react-icons/si";
import { EmailCopyBar } from "@/components/home/EmailCopyBar";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

const socialLinks: { name: string; href: string; Icon: IconType }[] = [
  { name: "WhatsApp", href: site.social.whatsapp, Icon: SiWhatsapp },
  { name: "TikTok", href: site.social.tiktok, Icon: SiTiktok },
  { name: "Threads", href: site.social.threads, Icon: SiThreads },
  { name: "X", href: site.social.x, Icon: SiX },
  { name: "Facebook", href: site.social.facebook, Icon: SiFacebook },
  { name: "GitHub", href: site.social.github, Icon: SiGithub },
  { name: "LinkedIn", href: site.social.linkedin, Icon: IoLogoLinkedin },
];

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/60">
      <FadeIn>
        <h2 className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
          Let&apos;s Build Something
        </h2>
        <p className="mt-3 max-w-xl text-muted">{site.workPreference}</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex justify-center sm:justify-start">
          <EmailCopyBar />
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <ul className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          {socialLinks.map(({ name, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-muted shadow-sm transition-colors hover:border-accent/50 hover:text-accent"
                aria-label={name}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}
