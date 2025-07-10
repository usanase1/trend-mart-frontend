export interface CategoryCardProps {
  image: string;
  name: string;
  onClick?: () => void;
}

export interface PromoBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaOnClick?: () => void;
  badgeText?: string;
} 