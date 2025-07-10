export type OrderStatus = 'IN PROGRESS' | 'COMPLETED' | 'CANCELED';

export type Orders = {
  id: string;
  status: OrderStatus;
  date: string;
  total: string;
  items: number;
}; 