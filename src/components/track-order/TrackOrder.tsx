"use client";

import { useState } from "react";
import Navbar from "../NavBar";
import Footer from "../layout/Footer";
import Breadcrumb from "../ui/Breadcrumb";

export default function TrackOrderForm() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderId || !email) {
      setError("Please enter both Order ID and Email.");
      setSuccess("");
      return;
    }

    
    setSuccess(`Tracking information for Order ID: ${orderId} will be sent to ${email}`);
    setError("");
  };

  return (
    <>
    <Navbar/>
    <Breadcrumb/>
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Track Order</h1>
      <p className="text-sm text-gray-600 mb-6">
        To track your order please enter your Order ID and Billing Email below.
        You should find your Order ID in your receipt or confirmation email.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            id="orderId"
            type="text"
            placeholder="ID..."
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md border-gray-100 shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Order ID that we sent to you in your email address.
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Billing Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md border-gray-100 shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Track Order
        </button>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && <p className="text-green-600 text-sm">{success}</p>}
      </form>
    </div>
    <Footer/>
    </>
  );
}
