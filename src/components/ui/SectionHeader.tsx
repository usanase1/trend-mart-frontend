import React from "react";
import { SectionHeaderProps } from '@/types/ui';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, rightContent }) => (
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
    {rightContent && <div>{rightContent}</div>}
  </div>
);

export default SectionHeader; 