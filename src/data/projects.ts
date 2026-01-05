import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Rust VPN",
    description: "A multi-client VPN developed from scratch in Rust, enabling secure, encrypted communication between clients and masking user IP addresses to protect privacy",
    tags: ["Rust", "Docker"],
    github: "https://github.com",
  },
  {
    title: "Fluffy Friends",
    description: "A pet adoption web application with functionality to create user and admin accounts, adopt pets, and communicate with local adoption centers. Features a recommendation algorithm to personalize pet suggestions",
    tags: ["Java", "Spring", "React", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Immaculate Grid Solver",
    description: "Open-source tool to generate beautiful developer portfolios from JSON configuration. Supports multiple themes and customization options.",
    tags: ["Next.js", "TypeScript", "MDX", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with data visualization and location-based forecasts. Integrates multiple weather APIs for accurate predictions.",
    tags: ["React", "D3.js", "API Integration", "CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default projects