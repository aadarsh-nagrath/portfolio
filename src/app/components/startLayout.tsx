import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe, Code2, Cloud, Database, GitBranch, Award, Briefcase, GraduationCap, Star, Trophy, Calendar, Users, Bookmark, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogData {
  title: string;
  url: string;
  social_image: string;
  reading_time_minutes: number;
  tag_list: string[];
}

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
}

export default function StartLayout() {
  const [featuredRepo, setFeaturedRepo] = useState<GitHubRepo | null>(null);
  const [latestBlogs, setLatestBlogs] = useState<BlogData[]>([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/aadarsh-nagrath/repos?sort=updated&per_page=100");
        const repos = await response.json();
        // Find the repo with most commits
        const repoWithMostCommits = repos[0]; // First repo is the most recently updated
        setFeaturedRepo(repoWithMostCommits);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=aadarsh-nagrath");
        const blogs = await response.json();
        setLatestBlogs(blogs.slice(0, 2)); // Get latest 2 blogs
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchGitHubData();
    fetchBlogData();
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-background via-card to-background">
      <div className="h-full w-full">
        <div className="flex h-full">
          {/* Left Column */}
          <div className="w-1/3 flex flex-col gap-4 p-4">
            {/* Profile Card */}
            <Card className="flex-shrink-0">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full" />
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQF3w1vt7KGVmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588963624?e=1753315200&v=beta&t=Y11Ah0KnCQbg8SPMaA6DJB1kfnJxXBepy1RD7DTY9fE"
                      alt="Aadarsh"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-1">Aadarsh Nagrath</h2>
                  <p className="text-sm text-muted-foreground mb-4">Software Engineer & Open Source Contributor</p>
                  <div className="flex gap-2 w-full">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" 
                      onClick={() => window.location.href="https://github.com/aadarsh-nagrath"}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href="https://linkedin.com/in/aadarsh-nagrath"}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="flex-shrink-0">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-base">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{featuredRepo?.stargazers_count || 0}</p>
                      <p className="text-xs text-muted-foreground">GitHub Stars</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">100+</p>
                      <p className="text-xs text-muted-foreground">Contributions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">5+</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">2+</p>
                      <p className="text-xs text-muted-foreground">Years Exp.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Project */}
            <Card className="flex-shrink-0">
              <CardHeader className="pb-2 px-4 pt-4">
                <CardTitle className="text-base">Featured Project</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="space-y-2">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
                      alt="Project Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <h3 className="text-white text-sm font-semibold">{featuredRepo?.name || "Loading..."}</h3>
                      <p className="text-white/80 text-xs">{featuredRepo?.description || "Loading project description..."}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredRepo?.topics.slice(0, 5).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">{topic}</Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.location.href=featuredRepo?.html_url || "#"}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="w-2/3 flex flex-col p-4">
            <Tabs defaultValue="about" className="h-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="about" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  About
                </TabsTrigger>
                <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Skills
                </TabsTrigger>
                <TabsTrigger value="socials" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Socials
                </TabsTrigger>
              </TabsList>

              <div className="flex-1 overflow-hidden">
                <TabsContent value="about" className="h-full">
                  <Card className="h-full">
                    <CardHeader className="px-4 pt-4 pb-2">
                      <CardTitle>About Me</CardTitle>
                      <CardDescription>Software Engineer & Open Source Contributor</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Passionate Software Engineer with expertise in full-stack development, cloud computing, and DevOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in Cloud Computing at Chandigarh University.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        I have contributed to multiple open-source projects, including leading contributions to the Plone Foundation. I also have experience in developing and deploying scalable applications in a professional environment, with a strong focus on CI/CD pipelines and container orchestration.
                      </p>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <GraduationCap className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Education</p>
                            <p className="text-sm text-muted-foreground">B.E. Computer Science</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Award className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Specialization</p>
                            <p className="text-sm text-muted-foreground">Cloud Computing</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience">
                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Experience</CardTitle>
                      <CardDescription>My journey in software development</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {/* Raga AI Experience */}
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">DevOps Engineer Intern</h3>
                            <p className="text-sm text-muted-foreground">Raga AI Inc</p>
                            <p className="text-sm text-muted-foreground">Feb 2025 - Present</p>
                            <p className="mt-2 text-sm">Spearheaded end-to-end deployment of AI products (Catalyst & Prism) across AWS, Azure, and GCP, leveraging Kubernetes, Argo CD, and Terraform for scalable, fault-tolerant infrastructure.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">Kubernetes</Badge>
                              <Badge variant="secondary" className="text-xs">Cloud</Badge>
                              <Badge variant="secondary" className="text-xs">Terraform</Badge>
                              <Badge variant="secondary" className="text-xs">Python</Badge>
                              <Badge variant="secondary" className="text-xs">Bash</Badge>
                              <Badge variant="secondary" className="text-xs">Jenkins</Badge>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        {/* Medoc Health Experience */}
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Code2 className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Software Engineering Intern</h3>
                            <p className="text-sm text-muted-foreground">Medoc Health</p>
                            <p className="text-sm text-muted-foreground">Mar 2024 - Sep 2024</p>
                            <p className="mt-2 text-sm">Spearheaded the deployment of Medoc backend instances, achieving a 40% improvement in scalability and management efficiency by implementing Docker containerization.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">AWS</Badge>
                              <Badge variant="secondary" className="text-xs">React</Badge>
                              <Badge variant="secondary" className="text-xs">Node.js</Badge>
                              <Badge variant="secondary" className="text-xs">Python</Badge>
                              <Badge variant="secondary" className="text-xs">OpenAI APIs</Badge>
                              <Badge variant="secondary" className="text-xs">Docker</Badge>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        {/* Open Source Experience */}
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <GitBranch className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Open Source Contributor</h3>
                            <p className="text-sm text-muted-foreground">Plone Foundation & Others</p>
                            <p className="text-sm text-muted-foreground">2023 - Present</p>
                            <p className="mt-2 text-sm">Contributed over 1,000 lines of code to Plone Foundation repos with 20% API performance gains; actively involved in CNCF Meshery for cloud-native infrastructure design.</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs">React</Badge>
                              <Badge variant="secondary" className="text-xs">Node.js</Badge>
                              <Badge variant="secondary" className="text-xs">Java</Badge>
                              <Badge variant="secondary" className="text-xs">Python</Badge>
                              <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                              <Badge variant="secondary" className="text-xs">JavaScript</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Skills</CardTitle>
                      <CardDescription>My expertise and technologies I work with</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Code2 className="h-4 w-4" />
                          Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Java</Badge>
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">Go</Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Cloud className="h-4 w-4" />
                          Cloud & DevOps
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">AWS</Badge>
                          <Badge variant="secondary">Azure</Badge>
                          <Badge variant="secondary">Docker</Badge>
                          <Badge variant="secondary">Kubernetes</Badge>
                          <Badge variant="secondary">Terraform</Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          Databases
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">MySQL</Badge>
                          <Badge variant="secondary">MongoDB</Badge>
                          <Badge variant="secondary">PostgreSQL</Badge>
                          <Badge variant="secondary">GraphQL</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="socials">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect With Me</CardTitle>
                      <CardDescription>Let's connect and collaborate</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Globe className="h-4 w-4" />
                          Portfolio
                        </Button>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-sm text-muted-foreground">Chandigarh, India</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Blog Preview Section */}
                {activeTab !== "experience" && (
                  <div className="mt-4">
                    <Card>
                      <CardHeader className="px-4 pt-4 pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-base">Latest Blog Posts</CardTitle>
                            <CardDescription className="text-xs">Recent articles and insights</CardDescription>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8"
                            onClick={() => window.location.href="https://dev.to/aadarsh-nagrath"}
                          >
                            <Bookmark className="mr-2 h-3 w-3" />
                            View All
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 pb-4">
                        <div className="space-y-4">
                          {latestBlogs.map((blog) => (
                            <div key={blog.url} className="flex gap-4">
                              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                  src={blog.social_image}
                                  alt={blog.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold truncate">{blog.title}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                  {blog.tag_list.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">#{tag}</Badge>
                                  ))}
                                  <span className="text-xs text-muted-foreground">{blog.reading_time_minutes} min read</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
