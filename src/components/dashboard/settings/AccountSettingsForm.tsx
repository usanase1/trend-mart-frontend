"use client";

import { useState } from "react";
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

export default function AccountSettingsForm() {
  const [formData, setFormData] = useState({
    displayName: "Kevin",
    username: "",
    fullName: "",
    email: "",
    secondaryEmail: "",
    phone: "",
    country: "",
    state: "",
    zip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border-gray-100 p-6 rounded-md">
      <h2 className="text-lg font-semibold mb-4">ACCOUNT SETTING</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Display Image + Inputs */}
        <div className="flex flex-col gap-4">
          <Input name="displayName" placeholder="Display name" value={formData.displayName} onChange={handleChange} />
          <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <Input name="secondaryEmail" placeholder="Secondary Email" value={formData.secondaryEmail} onChange={handleChange} />
          <Select name="country" value={formData.country} onChange={handleChange} options={[{ value: "Bangladesh", label: "Bangladesh" }, { value: "Rwanda", label: "Rwanda" }]} />
        </div>

        <div className="flex flex-col gap-4">
          <Input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <div className="flex gap-2">
            <Select name="state" value={formData.state} onChange={handleChange} options={[{ value: "Dhaka", label: "Dhaka" }, { value: "Kigali", label: "Kigali" }]} className="w-full text-gray-700" />
            <Input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="w-full" />
          </div>
        </div>
      </div>

      <Button className="mt-6" variant="primary" size="md">SAVE CHANGES</Button>
    </div>
  );
}
