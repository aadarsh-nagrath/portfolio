import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  blogtitle: string;
  image: string;
  link: string;
  like: number;
  comment: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogtitle, image, link, like, comment }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || 'https://placehold.co/600x400'}
          alt={blogtitle}
          width={600}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold line-clamp-2 mb-4 group-hover:text-primary transition-colors">
          {blogtitle}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{like}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>{comment}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read Article
          <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
