"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reset password for:", email)
    setIsSubmitted(true)
    // Handle password reset logic here
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
            <p className="text-gray-600 mb-6">
              We have sent a password reset link to <strong>{email}</strong>
            </p>
            <Link
              href="/signin"
              className="w-full bg-[#FA8232] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#FA8232]/90 focus:ring-2 focus:ring-[#FA8232] focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
            <p className="text-gray-600">
              Enter your email address and we&apos;ll send you a link to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              label="Email Address"
              className="mb-0"
            />

            <Button
              type="submit"
              fullWidth
              variant="primary"
              className="flex items-center justify-center gap-2"
            >
              Send Reset Link
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Button
              as="a"
              href="/signin"
              variant="link"
              fullWidth
              className="text-[#FA8232] hover:text-[#FA8232]/80 font-medium mt-8"
            >
              ← Back to Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
