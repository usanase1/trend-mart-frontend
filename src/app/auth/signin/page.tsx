// app/auth/signin/page.tsx
import LoginForm from "@/components/LoginForm";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8 border border-gray-200 bg-white">
        <LoginForm />
      </div>
    </main>
  );
}
