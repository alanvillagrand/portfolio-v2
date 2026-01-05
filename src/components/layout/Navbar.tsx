import { useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#about" className="text-primary hover:text-primary/80 transition-colors">
            &lt;AV /&gt;
          </a>
          <div className="flex gap-8">
            <a
              href="#about"
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === "about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              ~/about
            </a>
            <a
              href="#experience"
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === "experience" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              ~/experience
            </a>
            <a
              href="#projects"
              className={`text-sm hover:text-primary transition-colors ${
                activeSection === "projects" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              ~/projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
