
import React from 'react';
import { Award } from 'lucide-react';

interface AboutTabProps {
  content: string;
}

const AboutTab: React.FC<AboutTabProps> = ({ content }) => {
  return (
    <div className="animate-fade-in">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">About this Skill</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        
        <h3 className="text-xl font-bold mb-3">What you'll learn</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex gap-2 items-start">
            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Master the fundamentals of this skill</span>
          </li>
          <li className="flex gap-2 items-start">
            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Apply your skills to real-world projects and challenges</span>
          </li>
          <li className="flex gap-2 items-start">
            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Build confidence through structured practice and feedback</span>
          </li>
          <li className="flex gap-2 items-start">
            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Join a community of fellow learners sharing the same interests</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutTab;
