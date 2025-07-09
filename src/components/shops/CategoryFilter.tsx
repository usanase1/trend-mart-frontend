"use client";

import Checkbox from '@/components/ui/Checkbox';

type Props = {
  categories: string[];
  selected: string[];
  onChange: (updated: string[]) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: Props) {
  const toggle = (value: string) => {
    const newSelection = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    onChange(newSelection);
  };

  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">CATEGORY</h3>
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li key={cat} className="flex items-center gap-2">
            <Checkbox
              checked={selected.includes(cat)}
              onChange={() => toggle(cat)}
              label={cat}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
