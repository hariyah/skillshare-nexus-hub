
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ThumbsUp, MessageSquare, Clock, ChevronLeft } from 'lucide-react';

interface SkillHeroBannerProps {
  skill: {
    image: string;
    category: string;
    title: string;
    stats: {
      lessons: number;
      comments: number;
    };
    createdAt: string;
  };
  likesCount: number;
  isLiked: boolean;
  onLikeClick: () => void;
  onCommentClick: () => void;
}

const SkillHeroBanner: React.FC<SkillHeroBannerProps> = ({
  skill,
  likesCount,
  isLiked,
  onLikeClick,
  onCommentClick
}) => {
  return (
    <div 
      className="h-64 bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${skill.image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/skills" className="text-white flex items-center gap-1 mb-2 hover:underline">
            <ChevronLeft className="h-4 w-4" /> Back to all skills
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-secondary hover:bg-secondary/90">{skill.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{skill.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>{skill.stats.lessons} lessons</span>
            </div>
            <div 
              className={`flex items-center gap-2 cursor-pointer ${isLiked ? 'text-primary' : ''}`}
              onClick={onLikeClick}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{likesCount} likes</span>
            </div>
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={onCommentClick}
            >
              <MessageSquare className="h-4 w-4" />
              <span>{skill.stats.comments} comments</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Created {new Date(skill.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillHeroBanner;
