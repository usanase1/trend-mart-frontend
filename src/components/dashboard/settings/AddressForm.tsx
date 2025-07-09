"use client";

import { useState } from "react";

interface AddressFormProps {
  title: string;
}

export default function AddressForm({ title }: AddressFormProps) {
  const [form, setForm] = useState({
    firstName: "Kevin",
    lastName: "Gilbert",
    company: "",
    address: "Road No. 13/x, House no. 1320/C, Flat No. 5D",
    country: "Bangladesh",
    region: "",
    city: "Dhaka",
    zip: "1207",
    email: "kevin12345@gmail.com",
    phone: "+1-202-555-0118",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border-gray-100 p-6 rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded" />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded" />
        <input name="company" placeholder="Company Name (Optional)" value={form.company} onChange={handleChange} className="col-span-2 border-gray-100 px-3 py-2 rounded" />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="col-span-2 border-gray-100 px-3 py-2 rounded" />
        <select name="country" value={form.country} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded">
          <option>Bangladesh</option>
          <option>Rwanda</option>
        </select>
        <select name="region" value={form.region} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded">
          <option>Select...</option>
          <option>Dhaka</option>
        </select>
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded" />
        <input name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded" />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded col-span-2" />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="border-gray-100 px-3 py-2 rounded col-span-2" />
      </div>

      <button className="mt-6 bg-[#FA8232] hover:bg-orange-600 text-white px-6 py-2 rounded">
        SAVE CHANGES
      </button>
    </div>
  );
}
