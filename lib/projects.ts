export type ProjectCategory = "Frontend" | "Portfolio" | "Dashboard";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Uridium Group",
    description:
      "Official corporate website for the Uridium Group — responsive marketing experience for the group’s subsidiaries, services, and digital transformation story.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Frontend", "Portfolio"],
    live: "https://uridiumgroup.com/",
  },
  {
    title: "NLPC Payment Platform",
    description:
      "Customer-facing policy payment web app — guided flow for policy type, policy number, amount verification, recurring payments, and multiple checkout methods.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["Frontend"],
    live: "https://nlpc-payment-platform.vercel.app/",
  },
  {
    title: "Beam Connect LMS",
    description:
      "All-in-one LMS for Nigerian course creators — live classes with recordings, cohort programs, Naira payments, student analytics, and automated certificates (MVP).",
    tech: ["React", "Next.js", "TypeScript", "RTK Query"],
    categories: ["Frontend"],
    live: "https://www.beamconnect.online/",
  },
  {
    title: "MR3 Patient",
    description:
      "Digital health records platform — secure storage, health timelines, document uploads, and permission-based sharing for patients and families (web + mobile).",
    tech: ["React", "Redux", "REST APIs"],
    categories: ["Frontend"],
    live: "https://www.mr3.digital/",
  },
  {
    title: "USmartInvoice",
    description:
      "Invoicing and payments product for African businesses — React/Tailwind/Redux frontend with secure checkout flows and email notifications (Uridium Works).",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    categories: ["Frontend"],
  },
  {
    title: "Coronation Financial Reporting",
    description:
      "Enterprise financial reporting dashboard — balance sheets, trial balance, entity sync, intercompany transfers, reconciliation, and consolidated exports.",
    tech: ["React", "TypeScript", "Chart.js"],
    categories: ["Dashboard"],
  },
  {
    title: "OmniX Platform",
    description:
      "Internal enterprise platform at Uridium Works — scalable workflows and client-facing tools across finance and digital transformation initiatives.",
    tech: ["React", "Next.js", "TypeScript", "Angular"],
    categories: ["Frontend", "Dashboard"],
    live: "https://uridiumworks.com/",
  },
  {
    title: "Personal Portfolio",
    description:
      "This site — Next.js, TypeScript, Framer Motion, and Tailwind with dark mode, motion, and accessible UI patterns.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    categories: ["Frontend", "Portfolio"],
  },
];

export const projectFilters = ["All", "Frontend", "Portfolio", "Dashboard"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
