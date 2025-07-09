import React from "react";
import Button from "@/components/ui/Button";

interface ProductActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "danger" | "icon" | "link" | "success";
}

const ProductActionButton: React.FC<ProductActionButtonProps> = ({
  icon,
  onClick,
  ariaLabel,
  className = "",
  variant = "icon",
}) => (
  <Button
    variant={variant}
    onClick={onClick}
    aria-label={ariaLabel}
    className={`w-9 h-9 rounded-full shadow-md flex items-center justify-center ${className}`.trim()}
  >
    {icon}
  </Button>
);

export default ProductActionButton; 