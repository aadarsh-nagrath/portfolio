"use client"
import { useState, useEffect } from "react";
import { fetchGitHubProjects } from "@/lib/github";
import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";

interface Project {
  pid: number;
  p_name: string;
  p_description: string;
  p_url: string;
  language?: string;
  stars?: number;
  forks?: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchGitHubProjects();
      setProjects(data.slice(0, 6)); // Show top 6 projects
      setLoading(false);
    };
    loadProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="text-white/40">Loading projects...</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 border-t border-zinc-800">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-100">Projects</h2>
          <a
            href="https://github.com/aadarsh-nagrath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            View all on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <a
              key={project.pid}
              href={project.p_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 border border-zinc-800 hover:border-amber-500/30 rounded hover:bg-zinc-900/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-zinc-500 group-hover:text-amber-500 transition-colors duration-300" />
                  <h3 className="text-lg font-medium text-zinc-200 group-hover:text-amber-500 transition-colors duration-300">
                    {project.p_name}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-amber-500 transition-colors duration-300" />
              </div>

              <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                {project.p_description || "No description available"}
              </p>

              <div className="flex items-center gap-4 text-xs text-zinc-500">
                {project.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    {project.language}
                  </span>
                )}
                {project.stars !== undefined && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                )}
                {project.forks !== undefined && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {project.forks}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
