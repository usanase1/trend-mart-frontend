import React from "react";

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
            <button
              type="button"
              className="text-blue-500 hover:underline text-sm font-medium focus:outline-none"
            >
              Resend Code
            </button>
          </div>
          <input
            id="verificationCode"
            name="verificationCode"
            type="text"
            autoComplete="off"
            className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your code"
          />
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded transition flex items-center justify-center gap-2"
          >
            VERIFY ME
            <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
