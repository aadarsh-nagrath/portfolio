import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code2, GitBranch, Calendar, MapPin, ArrowRight } from "lucide-react";

export const ResExpScreen = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-card">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)",
              "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
              "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="container relative mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Briefcase className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight">Professional Journey</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg mb-12"
            >
              A timeline of my professional experience and contributions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="space-y-24">
          {/* Raga AI Experience */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full" />
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Raga AI Inc</h2>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            <span>SDE DevOps Intern</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Bengaluru, India</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Feb 2025 – Present</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                      >
                        <Badge variant="secondary" className="px-4 py-2 text-lg">
                          Current Role
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      {[
                        "Spearheaded end-to-end deployment of AI products (Catalyst & Prism) across AWS, Azure, and GCP, leveraging Kubernetes, Argo CD, and Terraform for scalable, fault-tolerant infrastructure.",
                        "Engineered Jenkins pipelines and Bash/Python scripts to automate deployments, while optimizing ELK stack (Filebeat, Elasticsearch) and MySQL for high-availability production monitoring.",
                        "Implemented critical cloud services (S3, Key Vault, IAM) and managed Docker, Harbor, JFrog for artifact control, directly supporting enterprise client deployments with zero downtime."
                      ].map((text, index) => (
                        <motion.p
                          key={index}
                          className="flex items-start gap-3 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ x: 10 }}
                        >
                          <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          {text}
                        </motion.p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        { name: "Kubernetes", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
                        { name: "Cloud", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
                        { name: "Terraform", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
                        { name: "Python", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
                        { name: "Bash", color: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
                        { name: "Jenkins", color: "bg-red-500/10 text-red-500 border-red-500/20" }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline" className={`px-4 py-2 text-sm border ${skill.color}`}>
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medoc Health Experience */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full" />
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Code2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Medoc Health</h2>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Code2 className="h-4 w-4" />
                            <span>Software Engineering Intern</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Chandigarh, India</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Mar 2024 – Sep 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      {[
                        "Spearheaded the deployment of Medoc backend instances, achieving a 40% improvement in scalability and management efficiency by implementing Docker containerization.",
                        "Designed and implemented CI/CD pipelines via Cloud Deploy, automating build, test, and deployment workflows, reducing deployment lead time by 50% and ensuring seamless application delivery.",
                        "Automated deployment pipelines with Jenkins and GitLab CI, achieving a 50% reduction in deployment time and enhancing release efficiency."
                      ].map((text, index) => (
                        <motion.p
                          key={index}
                          className="flex items-start gap-3 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ x: 10 }}
                        >
                          <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          {text}
                        </motion.p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        { name: "AWS", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
                        { name: "React", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
                        { name: "Node.js", color: "bg-green-500/10 text-green-500 border-green-500/20" },
                        { name: "Python", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
                        { name: "OpenAI APIs", color: "bg-violet-500/10 text-violet-500 border-violet-500/20" },
                        { name: "Docker", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline" className={`px-4 py-2 text-sm border ${skill.color}`}>
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Open Source Experience */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary rounded-full" />
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <GitBranch className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">Open-Source Contributions</h2>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <GitBranch className="h-4 w-4" />
                            <span>Contributor</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>Remote</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>2023 – Present</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      {[
                        "Contributed over 1,000 lines of code to Plone Foundation repos (Dexterity, Volto, Mosaic) with 20% API performance gains; ideated for GSOC '23 on modern data-fetching APIs.",
                        "Also contributed to open-source projects like Rosenpass, ZIO-HTTP, Dub, and Hey via Algora, and actively involved in CNCF Meshery for cloud-native infrastructure design."
                      ].map((text, index) => (
                        <motion.p
                          key={index}
                          className="flex items-start gap-3 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ x: 10 }}
                        >
                          <ArrowRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          {text}
                        </motion.p>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        { name: "React", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
                        { name: "Node.js", color: "bg-green-500/10 text-green-500 border-green-500/20" },
                        { name: "Java", color: "bg-red-500/10 text-red-500 border-red-500/20" },
                        { name: "Python", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
                        { name: "TypeScript", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
                        { name: "JavaScript", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="outline" className={`px-4 py-2 text-sm border ${skill.color}`}>
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResExpScreen;
