"use client";

import { useState } from "react";
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

interface AddressFormProps {
  title: string;
}

export default function AddressForm({ title }: AddressFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    region: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border-gray-100 p-6 rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
        <Input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
        <Input name="company" placeholder="Company Name (Optional)" value={form.company} onChange={handleChange} className="col-span-2" />
        <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="col-span-2" />
        <Select name="country" value={form.country} onChange={handleChange} options={[{ value: "Bangladesh", label: "Bangladesh" }, { value: "Rwanda", label: "Rwanda" }]} className="text-gray-700" />
        <Select name="region" value={form.region} onChange={handleChange} options={[{ value: "", label: "Select..." }, { value: "Dhaka", label: "Dhaka" }]} className="text-gray-700" />
        <Input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <Input name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="col-span-2" />
        <Input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="col-span-2" />
      </div>

      <Button className="mt-6" variant="primary" size="md">SAVE CHANGES</Button>
    </div>
  );
}
