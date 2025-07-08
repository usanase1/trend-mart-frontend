type PaymentCardProps = {
  name: string;
  last4: string;
  amount: string;
  type: "visa" | "mastercard";
};

export default function PaymentCard({ name, last4, amount, type }: PaymentCardProps) {
  return (
    <div className={`rounded p-4 text-white w-72 ${type === "visa" ? "bg-blue-600" : "bg-green-600"}`}>
      <div className="text-lg font-semibold mb-2">{amount} USD</div>
      <div className="text-sm">CARD NUMBER</div>
      <div className="text-xl tracking-widest mt-1 mb-4">**** **** **** {last4}</div>
      <div className="text-sm">{type.toUpperCase()}</div>
      <div className="text-sm">{name}</div>
    </div>
  );
}
