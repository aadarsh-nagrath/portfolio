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
import Image from "next/image";
import { motion } from "framer-motion";

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

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
    <motion.div 
      className="h-screen w-full bg-background"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="h-full w-full">
        <div className="flex h-full">
          {/* Left Column */}
          <motion.div 
            className="w-1/3 flex flex-col gap-4 p-4"
            variants={containerVariants}
          >
            {/* Profile Card */}
            <motion.div variants={cardVariants}>
              <Card className="flex-shrink-0 border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="relative w-32 h-32 mb-4"
                      variants={imageVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full" />
                      <Image
                        src="https://media.licdn.com/dms/image/v2/D5603AQF3w1vt7KGVmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588963624?e=1757548800&v=beta&t=Id43NnH-4wGBUICcaOh9FXp1n1CyUPYCokPpagbEgC4"
                        alt="Aadarsh"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </motion.div>
                    <motion.h2 
                      className="text-xl font-bold mb-1 text-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Aadarsh Nagrath
                    </motion.h2>
                    <motion.p 
                      className="text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Software Engineer & Open Source Contributor
                    </motion.p>
                    <div className="flex gap-2 w-full">
                      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" 
                          onClick={() => window.location.href="https://github.com/aadarsh-nagrath"}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Button>
                      </motion.div>
                      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <Button 
                          variant="outline" 
                          className="flex-1 border-border hover:bg-accent hover:text-accent-foreground"
                          onClick={() => window.location.href="https://linkedin.com/in/aadarsh-nagrath"}
                        >
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Card */}
            <motion.div variants={cardVariants}>
              <Card className="flex-shrink-0 border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2 px-4 pt-4">
                  <CardTitle className="text-base text-foreground">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    variants={containerVariants}
                  >
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground">{featuredRepo?.stargazers_count || 0}</p>
                        <p className="text-xs text-muted-foreground">GitHub Stars</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">100+</p>
                        <p className="text-xs text-muted-foreground">Contributions</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Trophy className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">5+</p>
                        <p className="text-xs text-muted-foreground">Projects</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg font-bold">2+</p>
                        <p className="text-xs text-muted-foreground">Years Exp.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Featured Project */}
            <motion.div variants={cardVariants}>
              <Card className="flex-shrink-0 border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2 px-4 pt-4">
                  <CardTitle className="text-base text-foreground">Featured Project</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="space-y-2">
                    <motion.div 
                      className="relative aspect-[16/9] rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
                        alt="Project Preview"
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h3 className="text-white text-sm font-semibold">{featuredRepo?.name || "Loading..."}</h3>
                        <p className="text-white/80 text-xs">{featuredRepo?.description || "Loading project description..."}</p>
                      </div>
                    </motion.div>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredRepo?.topics.slice(0, 5).map((topic, index) => (
                        <motion.div
                          key={topic}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Badge variant="secondary" className="text-xs">{topic}</Badge>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-border hover:bg-accent hover:text-accent-foreground"
                        onClick={() => window.location.href=featuredRepo?.html_url || "#"}
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Project
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="w-2/3 flex flex-col p-4"
            variants={containerVariants}
          >
            <Tabs defaultValue="about" className="h-full" onValueChange={(value) => setActiveTab(value)}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TabsList className="grid w-full grid-cols-4 mb-4 bg-muted">
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
              </motion.div>

              <div className="flex-1 overflow-hidden">
                <TabsContent value="about" className="h-full">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full border-border hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="px-4 pt-4 pb-2">
                        <CardTitle className="text-foreground">About Me</CardTitle>
                        <CardDescription>Software Engineer & Open Source Contributor</CardDescription>
                      </CardHeader>
                      <CardContent className="px-4 pb-4 space-y-4">
                        <motion.p 
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          Passionate Software Engineer with expertise in full-stack development, cloud computing, and DevOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in Cloud Computing at Chandigarh University.
                        </motion.p>
                        <motion.p 
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          I&apos;ve contributed to multiple open-source projects, including leading contributions to the Plone Foundation. I also have experience in developing and deploying scalable applications in a professional environment, with a strong focus on CI/CD pipelines and container orchestration.
                        </motion.p>
                        <Separator className="bg-border" />
                        <motion.div 
                          className="grid grid-cols-2 gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <motion.div 
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <GraduationCap className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">Education</p>
                              <p className="text-sm text-muted-foreground">B.E. Computer Science</p>
                            </div>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Award className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">Specialization</p>
                              <p className="text-sm text-muted-foreground">Cloud Computing</p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="experience">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Professional Experience</CardTitle>
                        <CardDescription>My journey in software development</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {/* Raga AI Experience */}
                          <motion.div 
                            className="flex items-start gap-4"
                            variants={cardVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg mt-1">
                              <Briefcase className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">SDE DevOps Intern</h3>
                              <p className="text-sm text-muted-foreground">Raga AI Inc</p>
                              <p className="text-sm text-muted-foreground">Feb 2025 - Present</p>
                              <p className="mt-2 text-sm">Spearheaded end-to-end deployment of AI products (Catalyst & Prism) across AWS, Azure, and GCP, leveraging Kubernetes, Argo CD, and Terraform for scalable, fault-tolerant infrastructure.</p>
                              <motion.div 
                                className="flex flex-wrap gap-2 mt-2"
                                variants={containerVariants}
                              >
                                {["Kubernetes", "Cloud", "Terraform", "Python", "Bash", "Jenkins"].map((skill, index) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                  >
                                    <Badge variant="secondary" className="text-xs">{skill}</Badge>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                          <Separator />
                          {/* Medoc Health Experience */}
                          <motion.div 
                            className="flex items-start gap-4"
                            variants={cardVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg mt-1">
                              <Code2 className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Software Engineering Intern</h3>
                              <p className="text-sm text-muted-foreground">Medoc Health</p>
                              <p className="text-sm text-muted-foreground">Mar 2024 - Sep 2024</p>
                              <p className="mt-2 text-sm">Spearheaded the deployment of Medoc backend instances, achieving a 40% improvement in scalability and management efficiency by implementing Docker containerization.</p>
                              <motion.div 
                                className="flex flex-wrap gap-2 mt-2"
                                variants={containerVariants}
                              >
                                {["AWS", "React", "Node.js", "Python", "OpenAI APIs", "Docker"].map((skill, index) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                  >
                                    <Badge variant="secondary" className="text-xs">{skill}</Badge>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                          <Separator />
                          {/* Open Source Experience */}
                          <motion.div 
                            className="flex items-start gap-4"
                            variants={cardVariants}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-2 bg-primary/10 rounded-lg mt-1">
                              <GitBranch className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Open Source Contributor</h3>
                              <p className="text-sm text-muted-foreground">Plone Foundation & Others</p>
                              <p className="text-sm text-muted-foreground">2023 - Present</p>
                              <p className="mt-2 text-sm">Contributed over 1,000 lines of code to Plone Foundation repos with 20% API performance gains; actively involved in CNCF Meshery for cloud-native infrastructure design.</p>
                              <motion.div 
                                className="flex flex-wrap gap-2 mt-2"
                                variants={containerVariants}
                              >
                                {["React", "Node.js", "Java", "Python", "TypeScript", "JavaScript"].map((skill, index) => (
                                  <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                  >
                                    <Badge variant="secondary" className="text-xs">{skill}</Badge>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="skills">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Technical Skills</CardTitle>
                        <CardDescription>My expertise and technologies I work with</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.5 }}
                        >
                          <h3 className="font-semibold flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            Programming Languages
                          </h3>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            variants={containerVariants}
                          >
                            {["Java", "Python", "TypeScript", "JavaScript", "Go"].map((skill, index) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="secondary">{skill}</Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <h3 className="font-semibold flex items-center gap-2">
                            <Cloud className="h-4 w-4" />
                            Cloud & DevOps
                          </h3>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            variants={containerVariants}
                          >
                            {["AWS", "Azure", "Docker", "Kubernetes", "Terraform"].map((skill, index) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="secondary">{skill}</Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>

                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <h3 className="font-semibold flex items-center gap-2">
                            <Database className="h-4 w-4" />
                            Databases
                          </h3>
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            variants={containerVariants}
                          >
                            {["MySQL", "MongoDB", "PostgreSQL", "GraphQL"].map((skill, index) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="secondary">{skill}</Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="socials">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>Connect With Me</CardTitle>
                        <CardDescription>Let&apos;s connect and collaborate</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <motion.div 
                          className="grid grid-cols-2 gap-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {[
                            { icon: Github, label: "GitHub", href: "https://github.com/aadarsh-nagrath" },
                            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/aadarsh-nagrath" },
                            { icon: Mail, label: "Email", href: "mailto:anagrath1@gmail.com" },
                            { icon: Globe, label: "Portfolio", href: "https://aadarsh-nagrath.vercel.app" }
                          ].map((social, index) => (
                            <motion.div
                              key={social.label}
                              variants={cardVariants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button 
                                variant="outline" 
                                className="w-full justify-start gap-2"
                                onClick={() => window.open(social.href, "_blank")}
                              >
                                <social.icon className="h-4 w-4" />
                                {social.label}
                              </Button>
                            </motion.div>
                          ))}
                        </motion.div>
                        <Separator />
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                        >
                          <h3 className="font-semibold">Location</h3>
                          <p className="text-sm text-muted-foreground">Chandigarh, India</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                {/* Blog Preview Section */}
                {activeTab !== "experience" && (
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="px-4 pt-4 pb-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-base">Latest Blog Posts</CardTitle>
                            <CardDescription className="text-xs">Recent articles and insights</CardDescription>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8"
                              onClick={() => window.location.href="https://dev.to/aadarsh-nagrath"}
                            >
                              <Bookmark className="mr-2 h-3 w-3" />
                              View All
                            </Button>
                          </motion.div>
                        </div>
                      </CardHeader>
                      <CardContent className="px-4 pb-4">
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {latestBlogs.map((blog, index) => (
                            <motion.div 
                              key={blog.url} 
                              className="flex gap-4"
                              variants={cardVariants}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div 
                                className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Image
                                  src={blog.social_image}
                                  alt={blog.title}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold truncate">{blog.title}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                  {blog.tag_list.slice(0, 2).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">#{tag}</Badge>
                                  ))}
                                  <span className="text-xs text-muted-foreground">{blog.reading_time_minutes} min read</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
