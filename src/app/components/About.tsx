"use client"

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-800">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-zinc-100">About</h2>
        
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            I&apos;m a software developer passionate about building elegant solutions to complex problems. 
            My work spans full-stack development, with a focus on creating intuitive user experiences 
            and scalable architectures.
          </p>
          
          <p>
            Currently, I&apos;m exploring modern web technologies, cloud infrastructure, and best practices 
            in software engineering. I enjoy working on projects that challenge me to learn and grow.
          </p>

          <p>
            When I&apos;m not coding, you can find me writing technical articles, contributing to open source, 
            or exploring new tools and frameworks.
          </p>
        </div>

        <div className="pt-4">
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Docker", "AWS", "PostgreSQL", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 rounded text-sm font-mono text-zinc-400 hover:text-amber-500 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
