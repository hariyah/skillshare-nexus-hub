
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  MoreVertical, 
  BookOpen,
  ThumbsUp,
  MessageSquare,
  Eye
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skillsData';
import { useToast } from '@/hooks/use-toast';

const MySkills = () => {
  const { toast } = useToast();
  // Mock user skills (normally would come from API)
  const [mySkills, setMySkills] = useState(skillsData.slice(0, 2));
  const [enrolledSkills, setEnrolledSkills] = useState(skillsData.slice(2, 5));
  
  // Delete a skill
  const handleDelete = (id: string) => {
    setMySkills(mySkills.filter(skill => skill.id !== id));
    toast({
      title: "Skill deleted",
      description: "Your skill has been successfully deleted.",
      variant: "default",
    });
  };

  // Unenroll from a skill
  const handleUnenroll = (id: string) => {
    setEnrolledSkills(enrolledSkills.filter(skill => skill.id !== id));
    toast({
      title: "Unenrolled",
      description: "You have unenrolled from this skill.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">My Skills</h1>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Skill
            </Button>
          </div>

          <Tabs defaultValue="teaching">
            <TabsList className="mb-8">
              <TabsTrigger value="teaching">Teaching</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="teaching" className="animate-fade-in">
              {mySkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mySkills.map((skill) => (
                    <Card key={skill.id} className="flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={skill.image} 
                          alt={skill.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-gray-700 rounded-full h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Link to={`/skills/${skill.id}`} className="flex items-center gap-2 w-full">
                                  <Eye className="h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link to={`/edit-skill/${skill.id}`} className="flex items-center gap-2 w-full">
                                  <Pencil className="h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleDelete(skill.id)}>
                                <div className="flex items-center gap-2 text-red-500">
                                  <Trash2 className="h-4 w-4" />
                                  Delete
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-secondary hover:bg-secondary/90">
                            {skill.category}
                          </Badge>
                          <div className="text-sm text-gray-500">
                            {new Date(skill.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mt-2">{skill.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 line-clamp-2">{skill.description}</p>
                      </CardContent>
                      <CardFooter className="border-t pt-4 mt-auto">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-4 text-gray-500">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              <span className="text-xs">{skill.stats.lessons}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-xs">{skill.stats.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span className="text-xs">{skill.stats.comments}</span>
                            </div>
                          </div>
                          <Link to={`/edit-skill/${skill.id}`}>
                            <Button variant="outline" size="sm">
                              <Pencil className="h-3 w-3 mr-1" /> Edit
                            </Button>
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">You're not teaching any skills yet</h3>
                  <p className="text-gray-500 mb-6">Share your expertise by creating a new skill</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Skill
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="learning" className="animate-fade-in">
              {enrolledSkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledSkills.map((skill) => (
                    <Card key={skill.id} className="flex flex-col">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={skill.image} 
                          alt={skill.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white text-gray-700 rounded-full h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Link to={`/skills/${skill.id}`} className="flex items-center gap-2 w-full">
                                  <Eye className="h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUnenroll(skill.id)}>
                                <div className="flex items-center gap-2 text-red-500">
                                  <Trash2 className="h-4 w-4" />
                                  Unenroll
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <CardHeader>
                        <Badge className="inline-flex bg-accent hover:bg-accent/90">
                          {skill.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mt-2">{skill.title}</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 line-clamp-2">{skill.description}</p>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">
                              {Math.floor(Math.random() * 100)}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button className="w-full">Continue Learning</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">You're not enrolled in any skills</h3>
                  <p className="text-gray-500 mb-6">Browse skills to start learning</p>
                  <Button asChild>
                    <Link to="/skills">Browse Skills</Link>
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="drafts" className="animate-fade-in">
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No draft skills</h3>
                <p className="text-gray-500 mb-6">Start creating a new skill</p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Skill
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MySkills;
