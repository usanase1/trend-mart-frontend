import React from "react";
import { CheckboxProps } from '@/types/ui';

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className = "", wrapperClassName = "", ...props }) => (
  <div className={`flex items-center gap-2 ${wrapperClassName}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className={`accent-orange-500 ${className}`}
      {...props}
    />
    {label && <label>{label}</label>}
  </div>
);

export default Checkbox; 