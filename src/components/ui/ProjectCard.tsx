import type { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard(project: Project) {
  return(
    <div
      className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card/50"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-primary">▸</span>
          <h3 className="text-primary">{project.title}</h3>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags?.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs px-3 py-1 rounded bg-secondary/20 text-secondary border border-secondary/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}