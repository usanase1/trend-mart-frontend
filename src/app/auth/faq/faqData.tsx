const faqs = [
  {
    question: "How do I reset my password?",
    answer: (
      <>
        If you forgot your password, click on &quot;Forgot Password?&quot; on the sign-in page. Enter your registered email address and follow the instructions sent to your email to reset your password.
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
          <li>Go to the Sign In page and click on &quot;Forgot Password?&quot;</li>
          <li>Enter your registered email address.</li>
          <li>Check your email for a password reset link and follow the instructions.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I change my account email?",
    answer:
      "To change your account email, go to your account settings, click on 'Edit Email', enter your new email address, and confirm the change via the verification email sent to you.",
  },
  {
    question: "Where can I view my order history?",
    answer:
      "You can view your order history by navigating to the 'My Orders' section in your account dashboard.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support using the form on this page or by emailing support@trendmart.com.",
  },
];

export default faqs; 