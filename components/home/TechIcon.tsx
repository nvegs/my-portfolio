import type { IconType } from "react-icons";
import {
  SiAngular,
  SiBootstrap,
  SiChartdotjs,
  SiCss,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import {
  MdAccessibility,
  MdDevices,
  MdOutlineSpeed,
  MdViewQuilt,
} from "react-icons/md";
import { TbApi, TbFlask } from "react-icons/tb";

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "JavaScript (ES6+)": SiJavascript,
  Angular: SiAngular,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  Redux: SiRedux,
  "RTK Query": SiRedux,
  "Framer Motion": SiFramer,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Jest: SiJest,
  Jasmine: TbFlask,
  "Chart.js": SiChartdotjs,
  "REST APIs": TbApi,
  "VS Code": DiVisualstudio,
  "Web Performance": MdOutlineSpeed,
  "WCAG Accessibility": MdAccessibility,
  Agile: SiJira,
  "Cross-Browser QA": MdDevices,
  "Responsive Design": MdViewQuilt,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = "h-3.5 w-3.5 shrink-0" }: TechIconProps) {
  const Icon = techIcons[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden />;
}
