import experiences from "@/data/experiences";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h2 className="mb-16 text-muted-foreground">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp}/>
          ))}
        </div>
      </div>
    </section>
  );
}
