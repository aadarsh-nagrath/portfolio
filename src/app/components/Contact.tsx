"use client"
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800">
      <div className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Get in Touch</h2>
          <p className="text-zinc-400">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded focus:outline-none focus:border-amber-500/50 transition-colors text-zinc-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded focus:outline-none focus:border-amber-500/50 transition-colors text-zinc-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded focus:outline-none focus:border-amber-500/50 transition-colors text-zinc-100"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded focus:outline-none focus:border-amber-500/50 transition-colors resize-none text-zinc-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium rounded hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </button>

          {status === "success" && (
            <p className="text-amber-500 text-sm">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:anagrath1@gmail.com"
              className="text-zinc-400 hover:text-amber-500 transition-colors duration-300"
            >
              anagrath1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
