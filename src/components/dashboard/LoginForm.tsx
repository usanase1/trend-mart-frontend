"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateSignIn(formData: { email: string; password: string }) {
  const errors: string[] = [];
  if (!formData.email) {
    errors.push("Email is required.");
  } else if (!validateEmail(formData.email)) {
    errors.push("Please enter a valid email address.");
  }
  if (!formData.password) {
    errors.push("Password is required.");
  } else if (formData.password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }
  return errors;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateSignIn(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors([]);
    console.log("Sign in data:", formData);
    // TODO: handle sign-in logic here (call API, update context, etc.)
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleAppleSignIn = () => {
    console.log("Sign in with Apple");
  };

  return (
    <div>
      {/* Tabbed Header */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
        <Button
          type="button"
          variant="link"
          className="flex-1 text-center py-2 font-semibold text-[#222] dark:text-white border-b-2 border-[#FA8232] dark:border-yellow-400"
          disabled
        >
          Sign In
        </Button>
        <Button
          as="a"
          href="/auth/signup"
          variant="link"
          className="flex-1 text-center py-2 font-semibold text-gray-400 dark:text-gray-500 hover:text-[#FA8232] border-b-2 border-transparent"
        >
          Sign Up
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-2 rounded mb-2 text-sm">
            <ul className="list-disc pl-5">
              {errors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Email Field */}
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          label="Email Address"
          className="bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
        />

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <Button
              as="a"
              href="/auth/forgot-password"
              variant="link"
              className="text-xs text-blue-500 dark:text-blue-300 hover:text-blue-600 p-0 h-auto min-h-0"
            >
              Forget Password
            </Button>
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              label=""
              className="pr-12 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            />
            <Button
              type="button"
              variant="outline"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100 p-1 h-auto min-h-0"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          fullWidth
          variant="primary"
          className="flex items-center justify-center gap-2"
        >
          SIGN IN
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
        <span className="px-4 text-sm text-gray-500 dark:text-gray-300">or</span>
        <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* Social Login Buttons */}
      <Button
        onClick={handleGoogleSignIn}
        type="button"
        variant="outline"
        fullWidth
        className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700"
      >
        {/* Google logo svg */}
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-gray-700 dark:text-white font-medium">Sign in with Google</span>
      </Button>
      <Button
        onClick={handleAppleSignIn}
        type="button"
        variant="outline"
        fullWidth
        className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700"
      >
        <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span className="text-gray-700 dark:text-white font-medium">Sign in with Apple</span>
      </Button>
    </div>
  );
}
