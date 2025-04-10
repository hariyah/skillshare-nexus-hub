
import React from 'react';
import SkillCard from '@/components/SkillCard';

interface Skill {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    comments: number;
    lessons: number;
  };
}

interface RelatedSkillsProps {
  currentSkillId: string;
  currentCategory: string;
  skills: Skill[];
}

const RelatedSkills: React.FC<RelatedSkillsProps> = ({ currentSkillId, currentCategory, skills }) => {
  const relatedSkills = skills
    .filter(s => s.category === currentCategory && s.id !== currentSkillId)
    .slice(0, 4);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Related Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              id={skill.id}
              title={skill.title}
              description={skill.description}
              image={skill.image}
              category={skill.category}
              authorName={skill.author.name}
              authorAvatar={skill.author.avatar}
              likesCount={skill.stats.likes}
              commentsCount={skill.stats.comments}
              lessonsCount={skill.stats.lessons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedSkills;
