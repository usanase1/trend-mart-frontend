
'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

interface TagButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: (label: string) => void;
}

const TagButton: React.FC<TagButtonProps> = ({ label, isSelected, onClick }) => {
  return (
    <Button
      variant={isSelected ? "primary" : "outline"}
      size="sm"
      className={isSelected ? "border-orange-500" : "border-gray-300"}
      onClick={() => onClick?.(label)}
    >
      {label}
    </Button>
  );
};

const PopularTags: React.FC = () => {
  const tags = [
    'Game',
    'iPhone',
    'TV',
    'Asus Laptops',
    'Macbook',
    'SSD',
    'Graphics Card',
    'Power Bank',
    'Smart TV',
    'Speaker',
    'Tablet',
    'Microwave',
    'Samsung',
  ];

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <TagButton
            key={tag}
            label={tag}
            isSelected={selectedTag === tag}
            onClick={(label) =>
              setSelectedTag((prev) => (prev === label ? null : label))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
