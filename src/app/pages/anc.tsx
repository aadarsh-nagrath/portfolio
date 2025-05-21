import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

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

  const getGradient = (type: string) => {
    switch (type) {
      case "hackathon":
        return "from-blue-400 to-cyan-500";
      case "competition":
        return "from-purple-400 to-pink-500";
      case "certification":
        return "from-green-400 to-emerald-500";
      case "activity":
        return "from-orange-400 to-red-500";
      case "achievement":
        return "from-yellow-400 to-orange-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

    return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="relative container mx-auto px-4 py-16 max-w-6xl">
        <motion.h1 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & Certificates
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(item.type)} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                      <div className="relative p-4 rounded-xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-200">{item.name}</h3>
                          <motion.span 
                            className="px-3 py-1 rounded-full text-sm bg-gray-800/50 text-gray-300 border border-gray-700/50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item.date}
                          </motion.span>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: itemIndex * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
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
