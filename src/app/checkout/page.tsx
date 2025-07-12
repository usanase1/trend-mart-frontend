"use client";
import BillingForm from "@/components/cart/checkout/BillingForm";
import PaymentOptions from "@/components/cart/checkout/PaymentOptions";
import OrderSummary from "@/components/cart/checkout/OrderSummary";
import AdditionalNotes from "@/components/cart/checkout/AdditionalNotes";


export default function CheckoutPage() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <BillingForm />
        <PaymentOptions />
        <AdditionalNotes />
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
}
