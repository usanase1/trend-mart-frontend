import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function LatestNewsSection() {
  return (
    <section className="my-16 bg-[#f8f9fb] py-12">
      <h2 className="text-2xl font-bold text-center mb-10">Latest News</h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
          <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
            <Image
              src="/images/blog-1.jpg"
              alt="Smartwatch on keyboard"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👤</span> Kristin
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">📅</span> 19 Dec, 2013
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👁️</span> 453
            </div>
          </div>
          <h3 className="text-md font-semibold mb-2">
            Cras nisl dolor, accumsan et metus sit amet, vulputate
            condimentum dolor.
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Maecenas scelerisque, arcu quis tempus egestas, ligula diam
            molestie lectus, tincidunt malesuada arcu metus posuere metus.
          </p>
          <Button as="button" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
            READ MORE →
          </Button>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
          <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
            <Image
              src="/images/blog-2.jpg"
              alt="Motherboard tech"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👤</span> Robert
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">📅</span> 28 Nov, 2015
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👁️</span> 738
            </div>
          </div>
          <h3 className="text-md font-semibold mb-2">
            Curabitur pulvinar aliquam lectus, non blandit erat mattis
            vitae.
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Mauris scelerisque odio id rutrum volutpat. Pellentesque urna
            odio, vulputate at tortor vitae, hendrerit blandit lorem.
          </p>
          <Button as="button" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
            READ MORE →
          </Button>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
          <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
            <Image
              src="/images/blog-3.jpg"
              alt="Smartphone on desk"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👤</span> Arlene
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">📅</span> 9 May, 2014
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">👁️</span> 826
            </div>
          </div>
          <h3 className="text-md font-semibold mb-2">
            Curabitur massa orci, consectetur et blandit ac, auctor et
            tellus.
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta,
            odio id suscipit mattis, risus augue condimentum purus.
          </p>
          <Button as="button" className="text-orange-500 font-semibold text-sm flex items-center gap-1 hover:underline">
            READ MORE →
          </Button>
        </div>
      </div>
    </section>
  );
} 