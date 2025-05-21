import React, { useEffect, useState } from "react";
import GitCard from "../components/git-card";
import Custom404 from "./notFound";
import { fetchGitHubProjects } from "../../lib/github";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Github, Star, GitFork, Globe } from "lucide-react";

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
  language?: string;
  stars?: number;
  forks?: number;
}

type SortOption = "name" | "stars" | "forks";

const ITEMS_PER_PAGE = 9;

const ProjectScreen = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("stars");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await fetch("https://api.github.com/users/aadarsh-nagrath");
        const profileData = await profileResponse.json();
        setProfileData(profileData);

        const projectsData = await fetchGitHubProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.p_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.p_description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = selectedLanguage === "all" || project.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.p_name.localeCompare(b.p_name);
      case "stars":
        return (b.stars || 0) - (a.stars || 0);
      case "forks":
        return (b.forks || 0) - (a.forks || 0);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = sortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const languages = Array.from(new Set(projects.map(project => project.language).filter((lang): lang is string => lang !== undefined && lang !== null)));

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!profileData) {
    return <Custom404 />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Profile Section */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card border-b">
        <div className="w-full px-4 py-4">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-[200px] pb-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
          <p className="text-muted-foreground text-lg">
            A collection of my open-source contributions and personal projects
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <Select 
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map(lang => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select 
              value={sortBy} 
              onValueChange={(value: SortOption) => setSortBy(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stars">Sort by Stars</SelectItem>
                <SelectItem value="forks">Sort by Forks</SelectItem>
                <SelectItem value="name">Sort by Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProjects.map((project) => (
            <Card key={project.pid} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.p_name}</CardTitle>
                  <div className="flex gap-2">
                    {project.stars !== undefined && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </Badge>
                    )}
                    {project.forks !== undefined && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" />
                        {project.forks}
                      </Badge>
                    )}
                  </div>
                </div>
                {project.language && (
                  <Badge variant="outline" className="mt-2">
                    {project.language}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="line-clamp-2">
                  {project.p_description || "No description available"}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="default" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={project.p_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className="w-10 h-10"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectScreen;
