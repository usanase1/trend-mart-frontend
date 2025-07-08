"use client";

import { useState } from "react";

export default function ChangePasswordForm() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border p-6 rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">Change Password</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="current"
          type="password"
          placeholder="Current Password (at least 8 characters)"
          value={passwords.current}
          onChange={handleChange}
          className="border px-3 py-2 rounded col-span-2"
        />
        <input
          name="new"
          type="password"
          placeholder="New Password (8+ characters)"
          value={passwords.new}
          onChange={handleChange}
          className="border px-3 py-2 rounded col-span-2"
        />
        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={passwords.confirm}
          onChange={handleChange}
          className="border px-3 py-2 rounded col-span-2"
        />
      </div>
      <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
        CHANGE PASSWORD
      </button>
    </div>
  );
}
