
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { skillsData, Skill } from '@/data/skillsData';

// Import our new components
import SkillHeroBanner from '@/components/SkillDetail/SkillHeroBanner';
import SkillDetailTabs from '@/components/SkillDetail/SkillDetailTabs';
import SkillSidebar from '@/components/SkillDetail/SkillSidebar';
import RelatedSkills from '@/components/SkillDetail/RelatedSkills';

const SkillDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [skill, setSkill] = useState<Skill | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    // Simulate API fetch
    const fetchSkill = () => {
      setLoading(true);
      setTimeout(() => {
        const foundSkill = skillsData.find(s => s.id === id);
        setSkill(foundSkill || null);
        if (foundSkill) {
          setLikesCount(foundSkill.stats.likes);
        }
        setLoading(false);
      }, 500);
    };

    fetchSkill();
  }, [id]);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
      toast.info("Like removed");
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
      toast.success("Skill liked!");
    }
  };

  const handleCommentClick = () => {
    toast.info("Comments feature coming soon!");
  };

  const handleBookmarkClick = () => {
    toast.success("Skill saved to your bookmarks!");
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Skill not found state
  if (!skill) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skill Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the skill you're looking for.</p>
            <a href="/skills" className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90">Browse All Skills</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <SkillHeroBanner 
          skill={skill}
          likesCount={likesCount}
          isLiked={isLiked}
          onLikeClick={handleLikeClick}
          onCommentClick={handleCommentClick}
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <SkillDetailTabs 
                content={skill.content}
                lessons={skill.lessons}
                commentsCount={skill.stats.comments}
                onCommentClick={handleCommentClick}
              />
            </div>

            {/* Sidebar */}
            <div>
              <SkillSidebar 
                author={skill.author}
                onBookmarkClick={handleBookmarkClick}
                onShareClick={handleShareClick}
              />
            </div>
          </div>
        </div>
        
        {/* Related Skills */}
        <RelatedSkills 
          currentSkillId={skill.id}
          currentCategory={skill.category}
          skills={skillsData}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SkillDetail;
