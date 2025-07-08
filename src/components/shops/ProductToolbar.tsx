// components/shops/ProductToolbar.tsx
"use client";

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
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border px-3 py-2 text-sm rounded w-full sm:w-1/2"
      />

      {/* Sort & Results */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="border px-3 py-2 text-sm rounded"
        >
          <option value="default">Sort by</option>
          <option value="mostPopular">Most Popular</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>

        {/* Results Found */}
        <span className="text-sm text-gray-600">{resultsCount} results found</span>
      </div>
    </div>
  );
}
