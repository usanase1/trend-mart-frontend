type Product = { title: string; price: string };
export default function ProductsSection({ products }: { products: Product[] }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <div key={idx} className="border p-4 rounded-lg text-center">
            <div className="w-full h-32 bg-gray-100 mb-4"></div>
            <h3 className="font-semibold text-sm">{product.title}</h3>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 