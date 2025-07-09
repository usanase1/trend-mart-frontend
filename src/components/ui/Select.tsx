import React from "react";
import { SelectProps } from '@/types/ui';

const Select: React.FC<SelectProps> = ({ label, options, error, className = "", wrapperClassName = "", ...props }) => (
  <div className={wrapperClassName}>
    {label && <label className="block text-sm font-medium mb-1">{label}</label>}
    <select className={`border px-3 py-2 rounded w-full ${error ? "border-red-500" : "border-gray-300"} ${className}`} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
  </div>
);

export default Select; 