type ProfileCardProps = {
  title: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
};

export default function ProfileCard({ title, name, email, phone, address }: ProfileCardProps) {
  return (
    <div className=" p-4  shadow-sm bg-white">
      <h4 className="text-sm font-semibold mb-2">{title}</h4>
      <p className="font-medium">{name}</p>
      {address && <p className="text-sm text-gray-600">{address}</p>}
      <p className="text-sm text-gray-600">Email: {email}</p>
      {phone && <p className="text-sm text-gray-600">Phone: {phone}</p>}
      <button className="text-blue-600 text-xs mt-2 hover:underline">EDIT {title.toUpperCase()}</button>
    </div>
  );
}
