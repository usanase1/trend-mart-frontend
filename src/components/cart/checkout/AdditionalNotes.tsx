export default function AdditionalNotes() {
  return (
    <section>
      <h2 className="font-bold text-lg mb-2">Additional Information</h2>
      <textarea
        placeholder="Notes about your order, e.g. special notes for delivery"
        className="w-full border rounded p-2 min-h-[80px]"
      />
    </section>
  );
}
