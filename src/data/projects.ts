import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "🦀 Rust VPN",
    description: "A multi-client VPN developed from scratch in Rust, enabling secure, encrypted communication between clients and masking user IP addresses to protect privacy.",
    tags: ["Rust"],
    github: "https://github.com/alanvillagrand/rust-vpn",
  },
  {
    title: "🐶 Fluffy Friends",
    description: "A pet adoption web application with functionality to create user and admin accounts, adopt pets, and communicate with local adoption centers. Features a recommendation algorithm to personalize pet suggestions",
    tags: ["Java", "Spring", "React", "MySQL"],
    github: "https://github.com/alanvillagrand/fluffy-friends",
  },
  {
    title: "⚾ Immaculate Grid Solver",
    description: "Web database application that solves the baseball immaculate grid. Utilized a relational database for efficient management of baseball data, ensuring accurate and precise player and team statistics.",
    tags: ["Python", "Flask", "MySQL"],
    github: "https://github.com/alanvillagrand/schematic-schemers-csi3335",
  },
  {
    title: "📊 Sorting Algorithm Visualizer",
    description: "A java program that visualizes common sorting algorithms such as bubble sort, insertion sort, merge sort, and quicksort.",
    tags: ["Java"],
    github: "https://github.com/alanvillagrand/sorting-algorithm-visualizer",
  },
];

export default projects