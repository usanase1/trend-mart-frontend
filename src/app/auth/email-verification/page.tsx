"use client";

import React, { useState, useEffect } from "react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { z } from 'zod';

export default function EmailVerificationPage() {
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check for token cookie
    if (typeof window !== 'undefined') {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
      if (token) {
        window.location.href = '/dashboard';
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors([]);
    setSuccess(null);
  };

  const otpSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    otp: z.string().min(4, 'OTP is required'),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Zod validation
    const result = otpSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.issues.map((err) => err.message));
      return;
    }
    setErrors([]);
    setSuccess(null);
    setLoading(true);
    try {
      const params = new URLSearchParams({
        email: formData.email,
        code: formData.otp
      }).toString();
      const res = await fetch(`https://trendmart-be.onrender.com/auth/verify-otp?${params}`, {
        method: "POST"
      });
      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }
      if (res.ok) {
        setSuccess(typeof data === "string" ? data : "Verification successful! You can now log in.");
        setTimeout(() => {
          window.location.href = "/auth/signin";
        }, 1500);
      } else {
        setErrors([
          typeof data === "string"
            ? data
            : data.message || "Verification failed."
        ]);
      }
    } catch {
      setErrors(["An error occurred. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl text-black text-center mb-2">Verify Your Email Address</h2>
        <p className="text-gray-400 text-center mb-6">
          We have sent a verification code to your email. <br />
          Please enter the code below to verify your email address.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {errors.length > 0 && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-sm">
              <ul className="list-disc pl-5">
                {errors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-sm">{success}</div>
          )}
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            id="otp"
            name="otp"
            type="text"
            autoComplete="off"
            placeholder="Enter your code"
            label="Verification Code"
            className="mb-0"
            value={formData.otp}
            onChange={handleInputChange}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="primary"
            className="flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? "Verifying..." : "VERIFY ME"}
            <span className="ml-2">→</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
