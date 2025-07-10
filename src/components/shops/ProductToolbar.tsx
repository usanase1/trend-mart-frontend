// components/shops/ProductToolbar.tsx
"use client";

import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

type Props = {
  searchText: string;
  onSearchChange: (text: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  resultsCount: number;
};

export default function ProductToolbar({
  searchText,
  onSearchChange,
  sortOption,
  onSortChange,
  resultsCount,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
        className="text-sm"
        wrapperClassName="w-full sm:w-1/2"
      />

      {/* Sort & Results */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <Select
          value={sortOption}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSortChange(e.target.value)}
          options={[
            { value: "default", label: "Sort by" },
            { value: "mostPopular", label: "Most Popular" },
            { value: "priceLowHigh", label: "Price: Low to High" },
            { value: "priceHighLow", label: "Price: High to Low" },
            { value: "ratingHighLow", label: "Rating: High to Low" },
          ]}
          className="text-sm"
        />

        {/* Results Found */}
        <span className="text-sm text-gray-600">{resultsCount} results found</span>
      </div>
    </div>
  );
}
