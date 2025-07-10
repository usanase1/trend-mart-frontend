'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ChangePasswordForm() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="border border-gray-100 p-6 rounded-md w-full">
      <h2 className="text-lg font-semibold mb-4">Change Password</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['current', 'new', 'confirm'].map((field) => (
          <div key={field} className="relative col-span-2">
            <Input
              name={field}
              type={show[field as keyof typeof show] ? 'text' : 'password'}
              placeholder={
                field === 'current'
                  ? 'Current Password (at least 8 characters)'
                  : field === 'new'
                  ? 'New Password (8+ characters)'
                  : 'Confirm Password'
              }
              value={passwords[field as keyof typeof passwords]}
              onChange={handleChange}
              className="pr-10"
            />
            <Button
              type="button"
              variant="icon"
              size="sm"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
              aria-label={`Toggle ${field} password visibility`}
              onClick={() => toggleVisibility(field as 'current' | 'new' | 'confirm')}
              iconLeft={show[field as keyof typeof show] ? <EyeOff size={18} /> : <Eye size={18} />}
            />
          </div>
        ))}
      </div>
      <Button className="mt-6" variant="primary" size="md">CHANGE PASSWORD</Button>
    </div>
  );
}
