
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AboutTab from './AboutTab';
import LessonsTab from './LessonsTab';
import CommentsTab from './CommentsTab';

interface Lesson {
  id: string;
  title: string;
  duration: string;
}

interface SkillDetailTabsProps {
  content: string;
  lessons: Lesson[];
  commentsCount: number;
  onCommentClick: () => void;
}

const SkillDetailTabs: React.FC<SkillDetailTabsProps> = ({
  content,
  lessons,
  commentsCount,
  onCommentClick
}) => {
  return (
    <Tabs defaultValue="about">
      <TabsList className="mb-8">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="lessons">Lessons</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
      </TabsList>
      
      <TabsContent value="about">
        <AboutTab content={content} />
      </TabsContent>
      
      <TabsContent value="lessons">
        <LessonsTab lessons={lessons} />
      </TabsContent>
      
      <TabsContent value="comments">
        <CommentsTab commentsCount={commentsCount} />
      </TabsContent>
    </Tabs>
  );
};

export default SkillDetailTabs;
