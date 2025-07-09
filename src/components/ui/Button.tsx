import React from "react";
import Link from "next/link";
import { ButtonProps } from '@/types/ui';

const baseStyles = {
  primary: "bg-orange-500 hover:bg-orange-600 text-white font-semibold",
  secondary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
  outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
  danger: "bg-red-500 hover:bg-red-600 text-white font-semibold",
  icon: "p-2 rounded-full flex items-center justify-center",
  link: "text-orange-500 hover:underline bg-transparent",
  success: "bg-green-500 hover:bg-green-600 text-white font-semibold",
};

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  as = "button",
  href,
  className = "",
  ...props
}) => {
  const classes = [
    "rounded transition flex items-center justify-center gap-2",
    baseStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a" && href) {
    return (
      <Link href={href} legacyBehavior>
        <a className={classes} {...props}>
          {iconLeft}
          {children}
          {iconRight}
        </a>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button; 