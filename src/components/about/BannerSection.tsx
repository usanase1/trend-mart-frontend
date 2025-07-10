import Image from 'next/image';

export default function BannerSection() {
  return (
    <div className="w-screen relative" style={{ minHeight: '400px' }}>
      <Image
        src="/images/banner.png"
        alt="Products Banner"
        fill
        className="object-cover w-[1920px] h-auto block"
        priority
      />
    </div>
  );
} 