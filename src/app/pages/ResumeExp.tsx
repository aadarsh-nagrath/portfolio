import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        {/* Experience Timeline */}
        <div className="space-y-32">
          {/* Raga AI Experience */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full group-hover:scale-y-110 transition-transform duration-300" />
            <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="relative">
                <motion.div 
                  className="flex justify-between items-start mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                      Raga AI Inc
                    </h2>
                    <p className="text-2xl text-gray-300">DevOps Engineer Intern</p>
                    <p className="text-gray-400">Bengaluru, India</p>
                  </div>
                  <motion.span 
                    className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Feb 2025 – Present
                  </motion.span>
                </motion.div>

                <div className="space-y-4 text-gray-300">
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
                      <span className="text-blue-400 mt-1">•</span>
                      {text}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Kubernetes", "Cloud", "Terraform", "Python", "Bash", "Jenkins"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
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
            className="relative group"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full group-hover:scale-y-110 transition-transform duration-300" />
            <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="relative">
                <motion.div 
                  className="flex justify-between items-start mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                      Medoc Health
                    </h2>
                    <p className="text-2xl text-gray-300">Software Engineering Intern</p>
                    <p className="text-gray-400">Chandigarh, India</p>
                  </div>
                  <motion.span 
                    className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Mar 2024 – Sep 2024
                  </motion.span>
                </motion.div>

                <div className="space-y-4 text-gray-300">
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
                      <span className="text-purple-400 mt-1">•</span>
                      {text}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["AWS", "React", "Node.js", "Python", "OpenAI APIs", "Docker"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
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
            className="relative group"
          >
            <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-red-500 rounded-full group-hover:scale-y-110 transition-transform duration-300" />
            <div className="relative bg-gradient-to-r from-pink-500/10 to-red-500/10 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="relative">
                <motion.div 
                  className="flex justify-between items-start mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
        <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent mb-2">
                      Open-Source Contributions
                    </h2>
                    <p className="text-2xl text-gray-300">Contributor</p>
                    <p className="text-gray-400">Remote</p>
                  </div>
                  <motion.span 
                    className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    2023 – Present
                  </motion.span>
                </motion.div>

                <div className="space-y-4 text-gray-300">
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
                      <span className="text-pink-400 mt-1">•</span>
                      {text}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["React", "Node.js", "Java", "Python", "TypeScript", "JavaScript"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
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
