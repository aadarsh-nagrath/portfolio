import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, GraduationCap, Code2, Star, BookOpen } from "lucide-react";

export const AnCScreen = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig);

  const achievements = [
    {
      title: "Hackathon Achievements",
      icon: Trophy,
      color: "from-blue-500/20 to-cyan-500/20",
      items: [
        {
          name: "IIT-R Cognizance",
          description: "Appreciated for innovative solution",
          date: "Aug 2024",
          type: "hackathon"
        },
        {
          name: "Hack-o-Octo",
          description: "Top 15 Finalist",
          date: "Aug 2024",
          type: "hackathon"
        }
      ]
    },
    {
      title: "Competitions & Activities",
      icon: Award,
      color: "from-purple-500/20 to-pink-500/20",
      items: [
        {
          name: "Debates & Speech",
          description: "Silver Medal in Regional Competition",
          date: "2023",
          type: "competition"
        },
        {
          name: "Chess Tournament",
          description: "Certificate of Excellence",
          date: "2023",
          type: "competition"
        },
        {
          name: "Entrepreneurship Community",
          description: "Active Member and Contributor",
          date: "2023-Present",
          type: "activity"
        }
      ]
    },
    {
      title: "Certifications",
      icon: GraduationCap,
      color: "from-emerald-500/20 to-teal-500/20",
      items: [
        {
          name: "AWS Academy Graduate",
          description: "Cloud Computing and Architecture",
          date: "2024",
          type: "certification"
        },
        {
          name: "IBM Software Engineering",
          description: "Professional Certification",
          date: "2024",
          type: "certification"
        }
      ]
    },
    {
      title: "Problem Solving",
      icon: Code2,
      color: "from-orange-500/20 to-amber-500/20",
      items: [
        {
          name: "LeetCode",
          description: "350+ Problems Solved",
          date: "2023-Present",
          type: "achievement"
        }
      ]
    }
  ];

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
              <Trophy className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight">Achievements & Certificates</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg mb-12"
            >
              A collection of my accomplishments, certifications, and contributions
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${section.color} p-8`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="group"
                      >
                        <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/40 transition-all duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                            <motion.span 
                              className="px-3 py-1 rounded-full text-sm bg-white/10 text-primary backdrop-blur-sm"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {item.date}
                            </motion.span>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: itemIndex * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnCScreen;
