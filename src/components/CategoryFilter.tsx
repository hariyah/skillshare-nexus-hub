
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="space-y-3 mb-6">
      <h3 className="text-sm font-medium text-gray-700">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onSelect('all')}
          className="rounded-full text-sm h-8"
          size="sm"
        >
          All
          {selectedCategory === 'all' && (
            <Badge variant="secondary" className="ml-2 bg-white/20 text-white text-xs">
              {categories.length}
            </Badge>
          )}
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onSelect(category)}
            className="rounded-full text-sm h-8"
            size="sm"
          >
            {category}
            {selectedCategory === category && (
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white text-xs">
                ✓
              </Badge>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
