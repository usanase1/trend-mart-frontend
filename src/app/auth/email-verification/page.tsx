import React from "react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function EmailVerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl text-black text-center mb-2">Verify Your Email Address</h2>
        <p className="text-gray-400 text-center mb-6">
          We have sent a verification code to your email. <br />
          Please enter the code below to verify your email address.
        </p>
        <form className="space-y-6">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="verificationCode" className="block text-gray-900 font-medium">
              Verification Code
            </label>
            <Button
              type="button"
              variant="link"
              className="text-blue-500 hover:underline text-sm font-medium focus:outline-none"
            >
              Resend Code
            </Button>
          </div>
          <Input
            id="verificationCode"
            name="verificationCode"
            type="text"
            autoComplete="off"
            placeholder="Enter your code"
            label="Verification Code"
            className="mb-0"
          />
          <Button
            type="submit"
            fullWidth
            variant="primary"
            className="flex items-center justify-center gap-2"
          >
            VERIFY ME
            <span className="ml-2">→</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
