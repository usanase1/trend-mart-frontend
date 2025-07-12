"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@/lib/fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import PaymentCash from "./payment/PaymentCash";
import PaymentMomo from "./payment/PaymentMomo";
import PaymentCard from "./payment/PaymentCard";

const paymentMethods = [
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: <FontAwesomeIcon icon="dollar-sign" className="text-orange-500" />,
  },
  {
    id: "momo",
    label: "MoMo Pay",
    icon: <FontAwesomeIcon icon={faMobileAlt} className="text-orange-500" />,
  },
  // Venmo icon removed because it's not available in the current FontAwesome package
  {
    id: "paypal",
    label: "Paypal",
    icon: (
      <FontAwesomeIcon icon={["fab", "paypal"]} className="text-blue-600" />
    ),
  },
  {
    id: "amazon",
    label: "Amazon Pay",
    icon: (
      <FontAwesomeIcon icon={["fab", "amazon-pay"]} className="text-black" />
    ),
  },
  {
    id: "card",
    label: "Debit/Credit Card",
    icon: <FontAwesomeIcon icon="credit-card" className="text-orange-500" />,
  },
];

export default function PaymentOptions() {
  const [selected, setSelected] = useState("cod");

  return (
    <section className="border rounded p-6">
      <h2 className="font-bold text-lg mb-4">Payment Option</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex flex-col items-center justify-center border rounded-md px-2 py-4 cursor-pointer ${
              selected === method.id
                ? "border-orange-500"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <div className="text-2xl mb-2">{method.icon}</div>
            <span className="text-sm text-center">{method.label}</span>
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => setSelected(method.id)}
              className="mt-2"
            />
          </label>
        ))}
      </div>

      {/* Conditional Forms */}
      {selected === "cod" && <PaymentCash />}
      {selected === "momo" && <PaymentMomo />}
      {selected === "card" && <PaymentCard />}
    </section>
  );
}
