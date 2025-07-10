import React from "react";
import Link from "next/link";
import { ButtonProps } from "@/types/ui";
import clsx from "clsx";

// Built-in variants
const variantStyles = {
  primary: "bg-orange-500 hover:bg-orange-600 text-white",
  secondary: "bg-blue-600 hover:bg-blue-700 text-white",
  outline: "border border-current text-current hover:bg-orange-50",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  link: "text-orange-500 hover:underline bg-transparent",
  icon: "p-2 rounded-full flex items-center justify-center",
};

// Size options
const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

interface ExtendedButtonProps extends ButtonProps {
  customColor?: string; // optional: e.g. "#FF5733" or "bg-pink-500"
}

const Button: React.FC<ExtendedButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  as = "button",
  href,
  className = "",
  customColor,
  ...props
}) => {
  const baseClass = "rounded transition flex items-center justify-center gap-2 cursor-pointer";
  const customStyle =
    customColor && customColor.startsWith("#")
      ? {
          backgroundColor: customColor,
          color: "#fff",
        }
      : undefined;

  const classes = clsx(
    baseClass,
    sizeStyles[size],
    !customColor ? variantStyles[variant] : "",
    fullWidth && "w-full",
    customColor && !customColor.startsWith("#") ? customColor : "",
    className
  );

  if (as === "a" && href) {
    return (
      <Link href={href} className={classes} style={customStyle}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  return (
    <button className={classes} style={customStyle} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

export default Button;
