import React from "react";
import { InputProps } from "@/types/ui";

const Input: React.FC<InputProps> = ({ label, error, className = "", wrapperClassName = "", ...props }) => (
  <div className={wrapperClassName}>
    {label && <label className="block text-sm font-medium mb-1">{label}</label>}
    <input
      className={`border px-3 py-2 rounded w-full ${error ? "border-red-500" : "border-gray-300"} ${className}`}
      {...props}
    />
    {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
  </div>
);

export default Input; 