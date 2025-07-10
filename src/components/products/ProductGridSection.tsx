import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProductGrid from './ProductGrid';
import ProductListCard from './ProductListCard';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types/products';

interface ProductGridSectionProps {
  title?: string;
  subtitle?: string;
  renderCard?: (product: Product) => React.ReactNode;
}

const ProductGridSection: React.FC<ProductGridSectionProps> = ({ title = 'Products', subtitle, renderCard }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!products.length) return <div>No products found.</div>;

  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />
      <ProductGrid
        products={products}
        renderCard={renderCard || ((product) => <ProductListCard key={product.id} product={product} />)}
      />
    </section>
  );
};

export default ProductGridSection; 