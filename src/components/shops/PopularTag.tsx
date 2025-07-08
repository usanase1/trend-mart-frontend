
'use client';

import React, { useState } from 'react';

interface TagButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: (label: string) => void;
}

const TagButton: React.FC<TagButtonProps> = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick?.(label)}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition
        ${isSelected ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-100'}`}
    >
      {label}
    </button>
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
