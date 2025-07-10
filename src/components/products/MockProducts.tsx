import React from 'react';
import ProductGrid from './ProductGrid';
import ProductListCard from './ProductListCard';
import { Product } from '@/types/products';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    slug: 'wireless-headphones',
    price: 99.99,
    originalPrice: 129.99,
    discount: 23,
    rating: 4.5,
    reviews: 120,
    image: '/images/headphones.png',
    features: ['Bluetooth', 'Noise Cancelling'],
    inStock: true,
    brand: 'SoundMagic',
    subcategory: 'Audio',
    description: 'High quality wireless headphones with noise cancellation.',
    shortDescription: 'Wireless, noise-cancelling headphones.',
  },
  {
    id: '2',
    name: 'Smart Watch',
    slug: 'smart-watch',
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.2,
    reviews: 80,
    image: '/images/smartwatch.png',
    features: ['Heart Rate', 'GPS'],
    inStock: true,
    brand: 'TimeTech',
    subcategory: 'Wearables',
    description: 'Track your fitness and notifications on the go.',
    shortDescription: 'Fitness tracking smart watch.',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    slug: 'bluetooth-speaker',
    price: 59.99,
    originalPrice: 79.99,
    discount: 15,
    rating: 4.7,
    reviews: 200,
    image: '/images/speaker.png',
    features: ['Portable', 'Waterproof'],
    inStock: true,
    brand: 'BoomBox',
    subcategory: 'Audio',
    description: 'Portable waterproof speaker for outdoor fun.',
    shortDescription: 'Portable waterproof speaker.',
  },
  {
    id: '4',
    name: 'Fitness Tracker',
    slug: 'fitness-tracker',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.0,
    reviews: 60,
    image: '/images/fitnesstracker.png',
    features: ['Step Counter', 'Sleep Monitor'],
    inStock: true,
    brand: 'FitLife',
    subcategory: 'Wearables',
    description: 'Track your daily activity and sleep patterns.',
    shortDescription: 'Activity and sleep tracker.',
  },
];

const MockProducts: React.FC = () => (
  <ProductGrid
    products={mockProducts}
    renderCard={(product: Product) => <ProductListCard key={product.id} product={product} />}
  />
);

export default MockProducts; 