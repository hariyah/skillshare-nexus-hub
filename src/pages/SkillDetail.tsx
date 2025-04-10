
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from "sonner";
import { 
  BookOpen, 
  ThumbsUp, 
  MessageSquare, 
  Clock, 
  Share2, 
  Bookmark, 
  Award,
  ChevronLeft
} from 'lucide-react';
import { skillsData, Skill } from '@/data/skillsData';

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

  if (!skill) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skill Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the skill you're looking for.</p>
            <Link to="/skills">
              <Button>Browse All Skills</Button>
            </Link>
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
                  onClick={handleLikeClick}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{likesCount} likes</span>
                </div>
                <div 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleCommentClick}
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="mb-8">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="lessons">Lessons</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="animate-fade-in">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">About this Skill</h2>
                    <p className="text-gray-700 mb-6">{skill.content}</p>
                    
                    <h3 className="text-xl font-bold mb-3">What you'll learn</h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex gap-2 items-start">
                        <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Master the fundamentals of {skill.title.toLowerCase()}</span>
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
                </TabsContent>
                
                <TabsContent value="lessons" className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Lesson Plan</h2>
                  <div className="space-y-4">
                    {skill.lessons.map((lesson, index) => (
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
                </TabsContent>
                
                <TabsContent value="comments" className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Comments ({skill.stats.comments})</h2>
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
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white border rounded-lg p-6 sticky top-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <Avatar className="h-16 w-16">
                    <img src={skill.author.avatar} alt={skill.author.name} />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.author.name}</h3>
                    <p className="text-gray-600 text-sm">Instructor</p>
                    <Button variant="outline" size="sm" className="mt-2">View Profile</Button>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{skill.author.bio}</p>
                
                <div className="space-y-4">
                  <Button className="w-full">Enroll in this Skill</Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleBookmarkClick}
                  >
                    <Bookmark className="h-4 w-4" />
                    Save for Later
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleShareClick}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Skills */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Related Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData
                .filter(s => s.category === skill.category && s.id !== skill.id)
                .slice(0, 4)
                .map((relatedSkill) => (
                  <SkillCard
                    key={relatedSkill.id}
                    id={relatedSkill.id}
                    title={relatedSkill.title}
                    description={relatedSkill.description}
                    image={relatedSkill.image}
                    category={relatedSkill.category}
                    authorName={relatedSkill.author.name}
                    authorAvatar={relatedSkill.author.avatar}
                    likesCount={relatedSkill.stats.likes}
                    commentsCount={relatedSkill.stats.comments}
                    lessonsCount={relatedSkill.stats.lessons}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillDetail;
