
import React from 'react';
import { Button } from '@/components/ui/button';

interface Lesson {
  id: string;
  title: string;
  duration: string;
}

interface LessonsTabProps {
  lessons: Lesson[];
}

const LessonsTab: React.FC<LessonsTabProps> = ({ lessons }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Lesson Plan</h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="bg-white rounded-lg border p-4 flex justify-between items-center">
            <div>
              <span className="text-sm font-medium text-gray-500">Lesson {index + 1}</span>
              <h3 className="font-medium">{lesson.title}</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{lesson.duration}</span>
              <Button>Start</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsTab;
