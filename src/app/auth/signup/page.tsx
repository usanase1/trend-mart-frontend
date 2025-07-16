"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Cookies from 'js-cookie';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod schema for registration
const registrationSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[0-9]/, 'Password must include at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must include at least one symbol'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function SignUpPage() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState<string[]>([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setApiErrors([]);
    setSuccess(null);
    setLoading(true);
    if (!agreedToTerms) {
      setApiErrors(["You must agree to the Terms and Privacy Policy."]);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("https://trendmart-be.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      let result;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await res.json();
      } else {
        result = { message: await res.text() };
      }
      if (res.ok) {
        setSuccess(result.message || "Registration successful! Please verify your email.");
        if (result.token) {
          Cookies.set('token', result.token, { expires: 7 });
        }
        reset();
        setTimeout(() => {
          window.location.href = "/auth/email-verification";
        }, 1500);
      } else {
        setApiErrors([result.message || "Registration failed."]);
        console.error('Registration error:', result);
      }
    } catch {
      setApiErrors(["An error occurred. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Sign up with Google")
    
  }

  const handleAppleSignUp = () => {
    console.log("Sign up with Apple")
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {/* Tabbed Header */}
          <div className="flex border-b border-gray-200 mb-8">
            <Link
              href="/signin"
              className="flex-1 text-center py-2 font-semibold text-gray-400 hover:text-[#FA8232] border-b-2 border-transparent"
            >
              Sign In
            </Link>
            <button
              className="flex-1 text-center py-2 font-semibold text-[#222] border-b-2 border-[#FA8232]"
              disabled
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Error Messages */}
            {(Object.keys(errors).length > 0 || apiErrors.length > 0) && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-sm">
                <ul className="list-disc pl-5">
                  {Object.values(errors).map((err, idx) => (
                    <li key={idx}>{err.message}</li>
                  ))}
                  {apiErrors.map((err, idx) => (
                    <li key={idx + 100}>{err}</li>
                  ))}
                </ul>
              </div>
            )}
            {success && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-sm">{success}</div>
            )}
            <Input
              id="username"
              {...register('username')}
              label="Username"
              type="text"
              placeholder="Enter your username"
              required
            />
            <Input
              id="fullName"
              {...register('fullName')}
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              required
            />
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              label="Phone Number"
              type="text"
              placeholder="Enter your phone number"
              required
            />
            <Input
              id="email"
              {...register('email')}
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              id="password"
              {...register('password')}
              label="Password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <Input
              id="confirmPassword"
              {...register('confirmPassword')}
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              required
            />
            {/* Terms Agreement */}
            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onChange={setAgreedToTerms}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the Trend Mart <Link href="/terms" className="text-blue-500 hover:underline">Terms of Conditions</Link> & <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
              </label>
            </div>
            {/* Submit Button */}
            <Button type="submit" variant="primary" fullWidth disabled={loading}>
              {loading ? "Registering..." : "Sign Up"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center gap-3"
            >
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
              <span className="text-gray-700 font-medium">Sign up with Google</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={handleAppleSignUp}
              className="flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-gray-700 font-medium">Sign up with Apple</span>
            </Button>
          </div>

          {/* Bottom Link */}
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/signin" className="font-medium text-[#FA8232] hover:text-[#FA8232]/80">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
