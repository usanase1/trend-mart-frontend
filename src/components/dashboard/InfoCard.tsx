type InfoCardProps = {
  title: string;
  value: string | number;
  color?: string;
};

export default function InfoCard({ title, value, color = "bg-blue-100 text-blue-800" }: InfoCardProps) {
  return (
    <div className={`p-4 rounded shadow-sm ${color}`}>
      <div className="text-sm">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
