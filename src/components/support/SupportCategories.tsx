import React from 'react';

const categories = [
  { icon: '/icons/Truck.png', label: 'Track Order' },
  { icon: '/icons/LockOpen.png', label: 'Reset Password' },
  { icon: '/icons/CreditCard.png', label: 'Payment Option' },
  { icon: '/icons/User.png', label: 'User & Account' },
  { icon: '/icons/Stack.png', label: 'Wishlist & Compare' },
  { icon: '/icons/Notepad.png', label: 'Shipping & Billing' },
  { icon: '/icons/CreditCard.png', label: 'Shoping Cart & Wallet' },
  { icon: '/icons/Storefront.png', label: 'Sell on Clicon' },
];

const borderColor = 'border-[#FA823233]'; // 20% opacity
const selectedBorderColor = 'border-[#FA8232]';
const cardShadow = 'shadow-none';
const selectedShadow = 'shadow-[0px_8px_40px_0px_#FA82321F]';

const SupportCategories: React.FC = () => (
  <div
    className="mx-auto w-full flex flex-col items-center justify-center gap-10 opacity-100 pt-8 px-2 sm:px-8 md:px-16 lg:px-[100px] xl:px-[300px] h-auto"
  >
    <h2 className="text-3xl font-semibold text-center mb-8">What can we assist you with today?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 w-full place-items-center">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className={`flex flex-row items-center w-full max-w-[312px] h-[80px] rounded-[4px] gap-4 opacity-100 border-2 bg-white p-6 cursor-pointer transition-all duration-200
            ${idx === 0 ? `${selectedBorderColor} ${selectedShadow}` : `${borderColor} ${cardShadow}`} hover:border-[#FA8232] hover:shadow-[0px_8px_40px_0px_#FA82321F]`}
        >
          <img src={cat.icon} alt={cat.label} className="w-6 h-6 mr-4" style={{ filter: 'invert(48%) sepia(97%) saturate(749%) hue-rotate(353deg) brightness(101%) contrast(101%)' }} />
          <span className="text-base font-medium text-black">{cat.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SupportCategories; 