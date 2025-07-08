'use client';
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer: (
      <>
        If you forgot your password, click on "Forgot Password?" on the sign-in page. Enter your registered email address and follow the instructions sent to your email to reset your password.
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
          <li>Go to the Sign In page and click on "Forgot Password?"</li>
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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="min-h-screen bg-white flex items-start justify-center py-12 px-4">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        {/* FAQ Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-10 text-black">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden">
                <button
                  className={`w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold transition-all duration-200 focus:outline-none border ${openIndex === idx ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-black border-gray-200 hover:bg-gray-50'} `}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  style={{ boxShadow: openIndex === idx ? '0 2px 8px rgba(255, 152, 0, 0.15)' : undefined }}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold">{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="bg-white px-6 pb-6 pt-2 shadow rounded-b-lg border-l border-r border-b border-orange-200 animate-fade-in">
                    <div className="text-gray-800 text-base">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-96 bg-yellow-100 rounded-lg shadow p-8 flex flex-col justify-start">
          <h2 className="text-lg font-bold mb-2 text-black">Don't find your answer? Ask for support.</h2>
          <p className="text-gray-700 text-sm mb-6">
            If you can't find your answer in our FAQ, please contact us using the form below. Our support team will respond as soon as possible.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              required
            />
            <textarea
              placeholder="Message (Optional)"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition flex items-center justify-center gap-2 text-base"
            >
              SEND MESSAGE <span className="ml-2 text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
