import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/aadarsh-nagrath/repos';

interface ProjectResponse {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

interface Project {
  pid: number;
  p_name: string;
  p_description: string;
  p_url: string;
}

export const fetchGitHubProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get<ProjectResponse[]>(GITHUB_API_URL);
    return response.data.map(repo => ({
      pid: repo.id,
      p_name: repo.name,
      p_description: repo.description || '', // Default to empty string if no description
      p_url: repo.html_url,
    }));
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
