export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'icon' | 'link' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

export interface CheckboxProps {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  wrapperClassName?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
}

export interface TagButtonProps {
  label: string;
  isSelected?: boolean;
  onClick?: (label: string) => void;
} 