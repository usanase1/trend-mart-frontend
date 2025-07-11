export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  stock: number;
  quantity: number;
}
;

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  cartTotal: number;
  itemCount: number;
}; 