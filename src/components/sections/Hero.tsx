
export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-primary">Hi, I'm Alan Villagrand 👋</h1>
        <p className="text-muted-foreground mb-8">
          Full Stack Developer passionate about creating elegant
          solutions to complex problems. I specialize in
          building modern web applications with a focus on clean
          code and exceptional user experiences.
        </p>
        <p className="text-muted-foreground mb-8">
          Currently crafting digital experiences and turning
          ideas into reality through code. When I'm not coding,
          you'll find me exploring new technologies or
          contributing to open source projects.
        </p>
        <a href="#experience" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          View my work
          {/* <ArrowDown className="w-4 h-4" /> */}
        </a>
      </div>
    </section>
  );
}
