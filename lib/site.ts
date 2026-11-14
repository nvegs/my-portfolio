export const site = {
  name: "Victory Nnabugwu",
  shortName: "Victory",
  title: "Software Engineer (Web & Mobile)",
  /** Shown under the logo; keep short so it fits the navbar */
  logoTagline: "SWE · React · Next · RN",
  logoTaglineFull:
    "Software Engineer · React · Next.js · Angular · React Native",
  description:
    "Software Engineer (Web & Mobile) with 6+ years building fast, scalable web and mobile apps with React, Next.js, Angular, TypeScript, and React Native — focused on performance, clean architecture, and products for the African market.",
  location: "Lagos, Nigeria",
  phone: "+2347069541209",
  phoneDisplay: "+234 706 954 1209",
  email: "victorynnabugwu13@gmail.com",
  /** Avatar-only mark (no name/tagline) — navbar logo & favicon source */
  brandIcon: "/branding/icon.png",
  cvPath: "/cv.pdf",
  cvDownloadName: "Victory_Nnabugwu_Software_Engineer_Resume.pdf",
  social: {
    github: "https://github.com/nvegs",
    linkedin: "https://www.linkedin.com/in/victorynnabugwu/",
    whatsapp: "https://wa.me/2347069541209",
    tiktok: "https://www.tiktok.com/@nvegs13?_r=1&_t=ZS-9Aht73R6WTk",
    threads: "https://www.threads.com/@nvegs13",
    x: "https://x.com/NVEGS_13",
    facebook: "https://www.facebook.com/share/18aVtF3wUG/",
  },
  availabilityBadge: "Remote & hybrid in Nigeria · open worldwide",
  workPreference:
    "In Nigeria, I only consider remote and hybrid software engineering roles. I'm also open to opportunities outside the country.",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const aboutStats = [
  { value: "6+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "40%", label: "Perf. Improvements" },
] as const;