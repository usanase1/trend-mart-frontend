'use client';
import React, { useState } from "react";
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import faqs from './faqData';
import Textarea from '@/components/ui/Textarea';

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
                <Button
                  type="button"
                  variant={openIndex === idx ? 'primary' : 'outline'}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold transition-all duration-200 focus:outline-none border ${openIndex === idx ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-black border-gray-200 hover:bg-gray-50'}`}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  style={{ boxShadow: openIndex === idx ? '0 2px 8px rgba(255, 152, 0, 0.15)' : undefined }}
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl font-bold">{openIndex === idx ? '−' : '+'}</span>
                </Button>
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
          <h2 className="text-lg font-bold mb-2 text-black">Don&apos;t find your answer? Ask for support.</h2>
          <p className="text-gray-700 text-sm mb-6">
            If you can&apos;t find your answer in our FAQ, please contact us using the form below. Our support team will respond as soon as possible.
          </p>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              required
              label="Email address"
            />
            <Input
              type="text"
              placeholder="Subject"
              required
              label="Subject"
            />
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
            <Textarea
              id="message"
              placeholder="Message (Optional)"
              label="Message (Optional)"
              rows={3}
            />
            <Button
              type="submit"
              fullWidth
              variant="primary"
              className="flex items-center justify-center gap-2 text-base"
            >
              SEND MESSAGE <span className="ml-2 text-xl">→</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
