import { useEffect, useState } from "react";
import BlogCard from "../components/blog-card";
import Custom404 from "./notFound";

interface BlogData {
    title: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    social_image: string;
}

export const BlogScreen = () => {
    const [data, setData] = useState<BlogData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
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
    
    if (loading) return <p>Loading...</p>;
    if (error) return <Custom404/>;

    return (
        <div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg sticky ">
            <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v10m8-10v10M5 11h14M5 15h14" />
                </svg>
                <h2 className="text-3xl font-bold">Blogs</h2>
            </div>
            <p className="mt-2 text-lg text-gray-200">
                Explore my latest articles, updates, and insights. Stay tuned for engaging content tailored just for you.
            </p>
            </div>
            <br/>

            <div className="flex flex-wrap gap-5 px-20 overflow-hidden ">
            {data && data.length > 0 ? (
                data.map((blog) => (
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
                <p>No blogs available</p>
            )}
        </div>
        </div>
    );
};

export default BlogScreen;
