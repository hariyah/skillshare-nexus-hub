
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedSection from '@/components/FeaturedSection';
import SkillCard from '@/components/SkillCard';
import CategoryFilter from '@/components/CategoryFilter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { skillsData, categories, featuredSkill } from '@/data/skillsData';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get popular skills (most liked)
  const popularSkills = [...skillsData]
    .sort((a, b) => b.stats.likes - a.stats.likes)
    .slice(0, 4);

  // Get recent skills
  const recentSkills = [...skillsData]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  // Filter skills by selected category
  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Share Skills, <span className="text-primary">Grow Together</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg">
                  Connect with a community of learners and experts. Share your knowledge, learn new skills, and grow together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full">
                    Explore Skills
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Start Teaching
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="People learning together" 
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Skill */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedSection 
              title={featuredSkill.title} 
              description={featuredSkill.description}
              imageUrl={featuredSkill.image}
              buttonText={featuredSkill.buttonText}
              buttonLink={featuredSkill.buttonLink}
            />
          </div>
        </section>

        {/* Popular Skills */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Popular Skills</h2>
              <Link to="/skills">
                <Button variant="ghost" className="group">
                  View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularSkills.map((skill) => (
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
        </section>

        {/* Browse by Category */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSkills.slice(0, 8).map((skill) => (
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
            {filteredSkills.length > 8 && (
              <div className="mt-8 text-center">
                <Button variant="outline" className="rounded-full">
                  Load More
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Recent Skills */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Skills</h2>
              <Link to="/skills">
                <Button variant="ghost" className="group">
                  View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentSkills.map((skill) => (
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
        </section>

        {/* Join Community CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl py-12 px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to join our community?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Connect with like-minded individuals, share your expertise, and discover new skills. Start your learning journey today!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button size="lg" variant="secondary" className="rounded-full">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
