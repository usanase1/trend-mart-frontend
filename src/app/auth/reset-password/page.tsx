"use client"
import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-2">Reset Password</h2>
        <p className="text-gray-500 text-center mb-6">
          Please enter your new password below.
        </p>
        <form className="space-y-5">
          <div>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="New password (8+ characters)"
              value={undefined}
              onChange={() => {}}
              label="Password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="outline"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
          <div>
            <Input
              id="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              value={undefined}
              onChange={() => {}}
              label="Confirm Password"
              className="pr-10"
            />
            <Button
              type="button"
              variant="outline"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirm((prev) => !prev)}
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </Button>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="primary"
            className="flex items-center justify-center gap-2"
          >
            RESET PASSWORD <ArrowRight size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
