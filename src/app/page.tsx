"use client"
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <About />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
