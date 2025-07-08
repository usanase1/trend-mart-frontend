"use client";
import { useState, useEffect } from "react";

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
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => toggle(cat)}
              className="accent-orange-500"
            />
            <label>{cat}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
