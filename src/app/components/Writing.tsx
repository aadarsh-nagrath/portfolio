"use client"
import { useState, useEffect } from "react";
import { ArrowUpRight, Heart, MessageCircle, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
}

export default function Writing() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=aadarsh-nagrath");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.slice(0, 5)); // Show latest 5 posts
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section id="writing" className="py-24 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12">Writing</h2>
        <div className="text-white/40">Loading articles...</div>
      </section>
    );
  }

  return (
    <section id="writing" className="py-24 border-t border-zinc-800">
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-zinc-100">Writing</h2>
          <a
            href="https://dev.to/aadarsh-nagrath"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-amber-500 transition-colors duration-300"
          >
            View all articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-zinc-800 pb-6 last:border-0"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-zinc-200 group-hover:text-amber-500 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.reading_time_minutes} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {post.public_reactions_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.comments_count}
                  </span>
                </div>

                {post.tag_list.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tag_list.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-zinc-500 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
