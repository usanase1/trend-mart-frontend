import type { Orders } from './types/orders';

export const mockOrders: Orders[] = [
  {
    id: "123456",
    status: "COMPLETED" as const,
    date: "July 6, 2025",
    total: "$219.00",
    items: 2,
  },
  {
    id: "123457",
    status: "IN PROGRESS" as const,
    date: "July 5, 2025",
    total: "$89.99",
    items: 1,
  },
  {
    id: "123458",
    status: "CANCELED" as const,
    date: "July 2, 2025",
    total: "$149.99",
    items: 3,
  },
  {
    id: "123459",
    status: "COMPLETED" as const,
    date: "June 28, 2025",
    total: "$299.00",
    items: 4,
  },
]; 