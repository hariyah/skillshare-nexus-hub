
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

interface CommentsTabProps {
  commentsCount: number;
}

const CommentsTab: React.FC<CommentsTabProps> = ({ commentsCount }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Comments ({commentsCount})</h2>
        <Button>Add Comment</Button>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-start gap-4 mb-3">
            <Avatar>
              <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="User" />
            </Avatar>
            <div>
              <h4 className="font-medium">Sarah Mitchell</h4>
              <span className="text-sm text-gray-500">2 days ago</span>
            </div>
          </div>
          <p className="text-gray-700">This skill tutorial was exactly what I needed! The explanations were clear and the examples were very practical. I've already started applying what I learned to my own projects.</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="flex items-start gap-4 mb-3">
            <Avatar>
              <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="User" />
            </Avatar>
            <div>
              <h4 className="font-medium">Robert Taylor</h4>
              <span className="text-sm text-gray-500">1 week ago</span>
            </div>
          </div>
          <p className="text-gray-700">Great content, but I wish there were more advanced lessons. Could you consider adding a follow-up skill for those who've mastered the basics?</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsTab;
