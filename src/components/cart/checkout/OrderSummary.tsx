export default function OrderSummary() {
  const items = [
    { name: "Canon EOS 1500D", quantity: 1, price: 70 },
    { name: "Gaming Headphones", quantity: 3, price: 250 },
  ];

  const subtotal = 320;
  const discount = 24;
  const tax = 61.99;
  const total = subtotal - discount + tax;

  return (
    <aside className="border p-4 rounded shadow-sm bg-white">
      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
      <ul className="text-sm space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <hr className="my-3" />
      <div className="space-y-1 text-sm">
        <div className="flex justify-between"><span>Sub-total</span><span>${subtotal}</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
        <div className="flex justify-between"><span>Discount</span><span>-${discount}</span></div>
        <div className="flex justify-between"><span>Tax</span><span>${tax}</span></div>
        <div className="flex justify-between font-bold text-base mt-2">
          <span>Total</span><span>${total.toFixed(2)} USD</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded">
        PLACE ORDER →
      </button>
    </aside>
  );
}
