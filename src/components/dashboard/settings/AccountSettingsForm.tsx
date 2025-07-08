"use client";

import { useState } from "react";

export default function AccountSettingsForm() {
  const [formData, setFormData] = useState({
    displayName: "Kevin",
    username: "",
    fullName: "Kevin Gilbert",
    email: "kevin.gilbert@gmail.com",
    secondaryEmail: "kevin12345@gmail.com",
    phone: "+1-202-555-0118",
    country: "Bangladesh",
    state: "Dhaka",
    zip: "1207",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border p-6 rounded-md">
      <h2 className="text-lg font-semibold mb-4">ACCOUNT SETTING</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Display Image + Inputs */}
        <div className="flex flex-col gap-4">
          <input name="displayName" placeholder="Display name" value={formData.displayName} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input name="secondaryEmail" placeholder="Secondary Email" value={formData.secondaryEmail} onChange={handleChange} className="border px-3 py-2 rounded" />
          <select name="country" value={formData.country} onChange={handleChange} className="border px-3 py-2 rounded">
            <option>Bangladesh</option>
            <option>Rwanda</option>
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border px-3 py-2 rounded" />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border px-3 py-2 rounded" />
          <div className="flex gap-2">
            <select name="state" value={formData.state} onChange={handleChange} className="border px-3 py-2 rounded w-full">
              <option>Dhaka</option>
              <option>Kigali</option>
            </select>
            <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
          </div>
        </div>
      </div>

      <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
        SAVE CHANGES
      </button>
    </div>
  );
}
