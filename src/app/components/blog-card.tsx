import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import Noimg from "../../../public/no-img.png";
import Link from 'next/link';

interface BlogCardProps {
  like?: number;
  comment?: number;
  blogtitle?: string;
  image?: string;
  link?:string;
}

export const BlogCard: React.FC<BlogCardProps> = ({like = 0, comment=0, blogtitle = "Card Title", image =Noimg.src, link=""}) => {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        component="img"
        height="60" // Reduced the image height
        image={image}
        alt="img"
      />
      <CardHeader
        sx={{ padding: 0.4 }} // Remove padding and margin
        titleTypographyProps={{ variant: 'h6', fontSize: '1rem' }}
        title={blogtitle}
      />
      <hr/>
      <div className='flex flex-row justify-evenly items-center'>
        <Badge variant="outline">
          <ion-icon name="heart-sharp" style={{ fontSize: '20px', color: 'red' }}></ion-icon>
          {like} likes
        </Badge>
        <Badge variant="outline">
          <ion-icon name="chatbubble-sharp" style={{ fontSize: '20px', color: 'gray' }}></ion-icon>
          {comment}
        </Badge>
        <Button variant="ghost" className='rounded-full'>
          <Link href={link} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              View
            </a>
          </Link>
      </Button>
      </div>
    </Card>
  );
}

export default BlogCard;
