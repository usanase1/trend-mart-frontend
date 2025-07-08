"use client";

type Props = {
  brands: string[];
  selected: string[];
  onChange: (updated: string[]) => void;
};

export default function BrandFilter({ brands, selected, onChange }: Props) {
  const toggle = (brand: string) => {
    const updated = selected.includes(brand)
      ? selected.filter((b) => b !== brand)
      : [...selected, brand];
    onChange(updated);
  };

  return (
    <div>
      <h3 className="font-bold mb-2">POPULAR BRANDS</h3>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {brands.map((brand) => (
          <li key={brand} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected.includes(brand)}
              onChange={() => toggle(brand)}
              className="accent-orange-500"
            />
            <label>{brand}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
