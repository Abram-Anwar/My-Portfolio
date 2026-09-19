import { MdOutlineHtml } from "react-icons/md";
import { LuCode } from "react-icons/lu";
import { IoMdColorPalette } from "react-icons/io";
import { VscDeveloperTools } from "react-icons/vsc";

export const skillGroup = [
  {
    title: "Frontend Foundation",
    icon: MdOutlineHtml,
    className: "foundation",
    skills: [
      "HTML5 & Semantic Web",
      "CSS3 Layouts & Flex/Grid",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Responsive Web Design",
    ],
  },
  {
    title: "React Development",
    icon: LuCode,
    className: "react",
    skills: [
      "Components, Props & State",
      "React Hooks",
      "Custom Hooks",
      "Context API",
      "React Router",
    ],
  },
  {
    title: "UI Styling & Systems",
    icon: IoMdColorPalette,
    className: "ui",
    skills: [
      "Tailwind CSS",
      "Modular CSS Architecture",
      "UI Components & Styling",
      "Glassmorphism & Effects",
      "Interactive Animations",
    ],
  },
  {
    title: "Development Workflow",
    icon: VscDeveloperTools,
    className: "workflow",
    skills: [
      "Git & GitHub",
      "Vite & npm",
      "LocalStorage Persistence",
      "REST API Integration",
      "Browser DevTools & Debugging",
    ],
  },
];

export const learningSkills = [
  "TypeScript",
  "Next.js",
  "Testing (Jest / React Testing Library)",
  "Advanced React Patterns",
  "Performance Optimization",
];