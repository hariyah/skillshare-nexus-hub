
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Avatar } from './ui/avatar';
import { BookOpen, MessageSquare, ThumbsUp } from 'lucide-react';
import { Badge } from './ui/badge';

interface SkillCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  authorName: string;
  authorAvatar: string;
  likesCount: number;
  commentsCount: number;
  lessonsCount: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  authorName,
  authorAvatar,
  likesCount,
  commentsCount,
  lessonsCount,
}) => {
  return (
    <Link to={`/skills/${id}`}>
      <Card className="skill-card h-full hover:shadow-md transition-all duration-300">
        <div className="relative h-48 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2">
            <Badge className="bg-secondary hover:bg-secondary/90">{category}</Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <h3 className="skill-card-title line-clamp-1">{title}</h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="skill-card-description line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="pt-2 border-t flex justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <img src={authorAvatar} alt={authorName} />
            </Avatar>
            <span className="text-xs text-gray-600">{authorName}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-500">
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs">{lessonsCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-xs">{likesCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span className="text-xs">{commentsCount}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SkillCard;
