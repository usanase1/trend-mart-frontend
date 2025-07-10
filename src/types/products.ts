export interface BestDealCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onView?: (product: Product) => void;
}

export interface ProductGridProps {
  products: Product[];
  gridClassName?: string;
  renderCard: (product: Product) => React.ReactNode;
}

export interface ProductBannerProps {
  name: string;
  image: string;
  price: number;
  description?: string;
  shortDescription?: string;
  discount?: number;
  ctaText?: string;
  ctaOnClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  badgeText?: string;
  badgeColor?: string;
  children?: React.ReactNode;
}

export interface ProductListCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  inStock: boolean;
  brand: string;
  subcategory: string;
  category: string;
  description: string;
  shortDescription: string;
}; 