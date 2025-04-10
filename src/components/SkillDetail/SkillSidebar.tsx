
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bookmark, Share2 } from 'lucide-react';

interface SkillSidebarProps {
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  onBookmarkClick: () => void;
  onShareClick: () => void;
}

const SkillSidebar: React.FC<SkillSidebarProps> = ({ author, onBookmarkClick, onShareClick }) => {
  return (
    <div className="bg-white border rounded-lg p-6 sticky top-6">
      <div className="flex items-center gap-4 mb-6 pb-6 border-b">
        <Avatar className="h-16 w-16">
          <img src={author.avatar} alt={author.name} />
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">{author.name}</h3>
          <p className="text-gray-600 text-sm">Instructor</p>
          <Button variant="outline" size="sm" className="mt-2">View Profile</Button>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6">{author.bio}</p>
      
      <div className="space-y-4">
        <Button className="w-full">Enroll in this Skill</Button>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={onBookmarkClick}
        >
          <Bookmark className="h-4 w-4" />
          Save for Later
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={onShareClick}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  );
};

export default SkillSidebar;
