import type { Experience } from "@/types/experience";

export default function ExperienceCard(exp: Experience) {
  return (
    <div className="border-l-2 border-primary pl-6 pb-8 last:pb-0">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-primary">▸</span>
            <h3 className="text-primary">{exp.company}: {exp.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{exp.description}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
      </div>
      <div className="flex flex-wrap gap-2 pl-6 mt-3">
        {exp.tags?.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs px-3 py-1 rounded bg-secondary/20 text-secondary border border-secondary/30"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* TODO: Add "more info" button to list more bullet points */}
    </div>
  )
}