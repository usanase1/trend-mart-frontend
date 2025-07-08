'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type OrderStatus = 'IN PROGRESS' | 'COMPLETED' | 'CANCELED';

export type Orders = {
  id: string;
  status: OrderStatus;
  date: string;
  total: string;
  items: number;
};

type Props = {
  orders: Orders[];
  showLimit?: number;
  hideHeaderActions?: boolean;
};

const statusStyles: Record<OrderStatus, string> = {
  'IN PROGRESS': 'text-orange-500',
  COMPLETED: 'text-green-600',
  CANCELED: 'text-red-500',
};

export default function RecentOrdersTable({ orders, showLimit = 5, hideHeaderActions = false }: Props) {
  const displayOrders = showLimit ? orders.slice(0, showLimit) : orders;

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-base font-semibold">Recent Orders</h2>
        {!hideHeaderActions && (
          <Link href="/dashboard/track-order" className="text-blue-600 text-sm flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-left">
              <th className="px-4 py-3">Order ID</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayOrders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">#{order.id}</td>
                <td className={statusStyles[order.status]}>{order.status}</td>
                <td>{order.date}</td>
                <td>{order.total} ({order.items} products)</td>
                <td>
                  <Link href={`/dashboard/track-order/${order.id}`} className="text-blue-600 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
            {displayOrders.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
