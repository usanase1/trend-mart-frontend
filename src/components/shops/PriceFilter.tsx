"use client";

import { useState } from "react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

type Props = {
  selectedRange: [number, number];
  onChange: (range: [number, number]) => void;
};

const presets: { label: string; range: [number, number] }[] = [
  { label: "All Prices", range: [0, 10000] }, 
  { label: "Under $20", range: [0, 20] },
  { label: "$25 to $100", range: [25, 100] },
  { label: "$100 to $300", range: [100, 300] },
  { label: "$300 to $500", range: [300, 500] },
  { label: "$500 to $1,000", range: [500, 1000] },
  { label: "$1,000 to $10,000", range: [1000, 10000] },
];

export default function PriceFilter({ selectedRange, onChange }: Props) {
  const [min, setMin] = useState(selectedRange[0]);
  const [max, setMax] = useState(selectedRange[1]);

  const handlePreset = (range: [number, number]) => {
    setMin(range[0]);
    setMax(range[1]);
    onChange(range);
  };

  const handleManualChange = () => {
    onChange([min, max]);
  };

  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold mb-4 uppercase">Price Range</h2>
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="number"
          className="text-sm"
          placeholder="Min price"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
        />
        <Input
          type="number"
          className="text-sm"
          placeholder="Max price"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
        />
        <Button
          variant="primary"
          size="sm"
          onClick={handleManualChange}
        >
          Apply
        </Button>
      </div>

      <ul className="space-y-2">
        {presets.map((preset, i) => (
          <li key={i}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="preset-price"
                onChange={() => handlePreset(preset.range)}
                checked={
                  selectedRange[0] === preset.range[0] &&
                  selectedRange[1] === preset.range[1]
                }
                className="accent-orange-500"
              />
              <span className="text-sm text-gray-800">{preset.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
