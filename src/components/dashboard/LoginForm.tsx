"use client";

import React, { useState } from "react";
import { z } from 'zod';
import { Eye, EyeOff } from "lucide-react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.issues.map((err) => err.message));
      return;
    }

    setErrors([]);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await fetch("https://trendmart-be.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // 🔥 crucial for cookie
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Login successful!");

        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect');
        setTimeout(() => {
          window.location.href = redirect || "/shop";
        }, 1000);
      } else {
        setErrors([data.message || "Login failed."]);
      }
    } catch {
      setErrors(["An error occurred. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm">
          <ul className="list-disc pl-5">{errors.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-sm">{success}</div>
      )}
      <Input
        id="email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
        label="Email Address"
      />
      <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">
          Password
        </label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="pr-12"
          />
          <Button
            type="button"
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 h-auto min-h-0"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <Button type="submit" fullWidth variant="primary" disabled={loading}>
        {loading ? "Signing in..." : "SIGN IN"}
      </Button>
    </form>
  );
}
