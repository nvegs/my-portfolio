export const site = {
  name: "Jordan Ellis",
  title: "Frontend Engineer",
  description:
    "Jordan Ellis builds fast, accessible interfaces and design systems for products people rely on every day.",
  url: "https://jordanellis.dev",
  email: "hello@jordanellis.dev",
  status: "Open to senior frontend roles · Remote-friendly",
  social: {
    github: "https://github.com/jordanellis",
    linkedin: "https://linkedin.com/in/jordanellis",
    x: "https://x.com/jordanellis",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/lab", label: "Lab" },
  { href: "/writing", label: "Writing" },
  { href: "/life", label: "Life" },
  { href: "/contact", label: "Contact" },
] as const;
