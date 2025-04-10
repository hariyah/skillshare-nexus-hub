
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6 text-white/90">{description}</p>
          <Button asChild variant="secondary" className="rounded-full group">
            <a href={buttonLink} className="flex items-center gap-2">
              {buttonText}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={imageUrl} 
            alt="Featured" 
            className="rounded-lg shadow-2xl max-w-full h-auto object-cover"
            style={{ maxHeight: '320px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
