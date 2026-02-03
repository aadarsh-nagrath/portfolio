export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Aadarsh Nagrath. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/aadarsh-nagrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-amber-500 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aadarsh-nagrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-amber-500 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://dev.to/aadarsh-nagrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-amber-500 transition-colors duration-300"
            >
              Dev.to
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
