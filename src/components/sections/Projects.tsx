import projects from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="mb-16 text-muted-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project}/>
          ))}
        </div>
      </div>
    </section>
  );
}
