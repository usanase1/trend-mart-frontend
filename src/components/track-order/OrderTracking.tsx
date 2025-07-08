"use client";

import {
  CheckCircle,
  Truck,
  Package,
  Handshake,
  MapPin,
  CalendarDays,
} from "lucide-react";
import React from "react";

// 👇 Properly typed to accept JSX as React.ReactNode
type Activity = {
  icon: React.ReactNode;
  message: string;
  timestamp: string;
};

type Step = {
  label: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  { label: "Order Placed", icon: <CheckCircle className="w-4 h-4 text-orange-500" /> },
  { label: "Packaging", icon: <Package className="w-4 h-4 text-orange-500" /> },
  { label: "On The Road", icon: <Truck className="w-4 h-4 text-gray-400" /> },
  { label: "Delivered", icon: <Handshake className="w-4 h-4 text-gray-400" /> },
];

const activities: Activity[] = [
  {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    message: "Your order has been delivered. Thank you for shopping at Clicon!",
    timestamp: "23 Jan, 2021 at 7:32 PM",
  },
  {
    icon: <Truck className="text-blue-500 w-5 h-5" />,
    message: "Our delivery man (John Wick) has picked up your order for delivery.",
    timestamp: "23 Jan, 2021 at 2:00 PM",
  },
  {
    icon: <MapPin className="text-blue-500 w-5 h-5" />,
    message: "Your order has reached last mile hub.",
    timestamp: "22 Jan, 2021 at 8:00 AM",
  },
  {
    icon: <MapPin className="text-blue-500 w-5 h-5" />,
    message: "Your order on the way to (last mile) hub.",
    timestamp: "21 Jan, 2021 at 5:32 AM",
  },
  {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    message: "Your order is successfully verified.",
    timestamp: "20 Jan, 2021 at 7:32 PM",
  },
  {
    icon: <CalendarDays className="text-blue-500 w-5 h-5" />,
    message: "Your order has been confirmed.",
    timestamp: "19 Jan, 2021 at 2:51 PM",
  },
];

export default function OrderTracking() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-sm text-gray-600">#96459761</div>
          <div className="text-xs text-gray-500">
            4 Products • Order Placed on <b>17 Jan, 2021</b> at <b>7:32 PM</b>
          </div>
        </div>
        <div className="text-blue-600 text-xl font-semibold">$1199.00</div>
      </div>

      {/* Progress bar */}
      <div className="text-sm text-gray-700 mb-3">
        Order expected arrival <b>23 Jan, 2021</b>
      </div>
      <div className="flex items-center justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-100 z-0" />
        {steps.map((step, i) => (
          <div key={i} className="z-10 flex flex-col items-center relative">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                i <= 1 ? "border-orange-500 bg-orange-500 text-white" : "border-orange-300 bg-white"
              }`}
            >
              {step.icon}
            </div>
            <div className="text-xs text-center mt-2">{step.label}</div>
          </div>
        ))}
      </div>

      {/* Activity Log */}
      <div>
        <h3 className="text-md font-semibold mb-4">Order Activity</h3>
        <ul className="space-y-4">
          {activities.map((a, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center">{a.icon}</div>
              <div>
                <p className="text-sm">{a.message}</p>
                <p className="text-xs text-gray-500">{a.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
