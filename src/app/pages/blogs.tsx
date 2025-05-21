import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card";
import Custom404 from "./notFound";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Card, CardContent } from "../../components/ui/card";
import { Search, BookOpen } from "lucide-react";

interface BlogData {
    title: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    social_image: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
}

export const BlogScreen = () => {
    const [data, setData] = useState<BlogData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch("https://dev.to/api/articles?username=aadarsh-nagrath");
                if (!response.ok) {
                    throw new Error("Dev.to API call failed! Network error");
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);
    
    const filteredBlogs = data?.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = !selectedTag || blog.tag_list.includes(selectedTag);
        return matchesSearch && matchesTag;
    });

    const allTags = Array.from(new Set(data?.flatMap(blog => blog.tag_list) || []));
    
    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
        );
    }
    
    if (error) return <Custom404/>;

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="relative overflow-hidden bg-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
                <div className="container relative mx-auto px-4 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
                        </div>
                        <p className="text-muted-foreground text-lg mb-12">
                            Explore my latest articles, updates, and insights. Stay tuned for engaging content tailored just for you.
                        </p>

                        {/* Search Section */}
                        <Card className="max-w-2xl mx-auto">
                            <CardContent className="p-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 justify-center mt-8">
                            {allTags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant={selectedTag === tag ? "default" : "outline"}
                                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                >
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs && filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <BlogCard
                                key={blog.url}
                                like={blog.public_reactions_count}
                                comment={blog.comments_count}
                                image={blog.social_image}
                                blogtitle={blog.title}
                                link={blog.url}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-muted-foreground">No blogs found matching your criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogScreen;
