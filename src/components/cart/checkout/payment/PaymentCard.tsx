export default function PaymentCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <input
        type="text"
        placeholder="Name on Card"
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Card Number"
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Expire Date (MM/YY)"
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="CVC"
        className="border p-2 rounded"
      />
    </div>
  );
}
