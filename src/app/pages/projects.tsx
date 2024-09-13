import React, { useEffect, useState } from "react";
import GitCard from "../components/git-card";
import Custom404 from "./notFound";
import ProjectCard from "../components/project-card";
import { fetchGitHubProjects } from "../../lib/github";
import { selectedRepoNames } from "@/lib/data";

interface ProfileData {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Project {
  pid: number;
  p_name: string;
  p_description: string;
  p_url: string;
}

const ProjectScreen = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await fetch("https://api.github.com/users/aadarsh-nagrath");
        const profileData = await profileResponse.json();
        setProfileData(profileData);

        const projectsData = await fetchGitHubProjects();
        console.log('Projects Data:', projectsData); // Log the data

        const cleanedSelectedRepoNames = selectedRepoNames.map(name => name.trim().toLowerCase());
        console.log('Cleaned Selected Repo Names:', cleanedSelectedRepoNames);

        const filteredProjects = projectsData.filter((project: Project) =>
          cleanedSelectedRepoNames.includes(project.p_name.trim().toLowerCase())
        );
        console.log('Filtered Projects:', filteredProjects); // Log filtered projects

        setProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!profileData) {
    return <Custom404 />;
  }

  return (
    <div className="min-h-screen">
      {/* Profile Data */}
      <GitCard
        avatar_url={profileData.avatar_url}
        name={profileData.name}
        bio={profileData.bio}
        location={profileData.location}
        html_url={profileData.html_url}
        public_repos={profileData.public_repos}
        followers={profileData.followers}
        following={profileData.following}
      />

      {/* Projects Grid */}
      <section className="projects-container mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 ">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.pid}
                p_name={project.p_name}
                p_description={project.p_description}
                p_url={project.p_url}
              />
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectScreen;
