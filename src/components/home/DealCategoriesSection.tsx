import Image from 'next/image';
import aboutProductsData from '@/components/about/aboutProductsData';

export default function DealCategoriesSection() {
  // Group products into four categories (3 products each)
  const categories = [
    { title: 'Flash Sale Today', products: aboutProductsData.slice(0, 3) },
    { title: 'Best Sellers', products: aboutProductsData.slice(3, 6) },
    { title: 'Top Rated', products: aboutProductsData.slice(6, 9) },
    { title: 'New Arrival', products: aboutProductsData.slice(9, 12) },
  ];

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-sm font-bold uppercase mb-4">{cat.title}</h3>
            <div className="space-y-4">
              {cat.products.map((product, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-3 rounded border">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-contain w-20 h-20 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-medium line-clamp-2">{product.title}</h4>
                    <p className="text-[#2DA5F3] font-semibold text-[14px] leading-[20px] font-[Public Sans]">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 