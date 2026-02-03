"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="mb-6">
          <Image
            src="/profile.png"
            alt="Aadarsh Nagrath"
            width={140}
            height={140}
            className="rounded-full border border-amber-500/30 hover:border-amber-500/50 transition-colors duration-300 object-cover aspect-square"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          Aadarsh Nagrath
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/60 max-w-2xl">
          Software developer building modern web applications. 
          Currently focused on full-stack development with React, Next.js, and cloud technologies.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium rounded hover:from-amber-400 hover:to-yellow-500 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-amber-500/30 font-medium rounded hover:border-amber-500/60 hover:bg-amber-500/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex gap-6 pt-8">
          <a
            href="https://github.com/aadarsh-nagrath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aadarsh-nagrath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://dev.to/aadarsh-nagrath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            Dev.to
          </a>
        </div>
      </motion.div>
    </section>
  );
}
