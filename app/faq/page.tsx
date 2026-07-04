"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does tarot reading work?",
    answer: "Tarot reading uses a deck of symbolic cards to gain insight into your current situation, challenges, and potential outcomes. During your session, cards are drawn and interpreted based on your specific questions and concerns.",
  },
  {
    question: "Is my session confidential?",
    answer: "Absolutely. Everything shared during your session is kept completely private and confidential. Your trust and privacy are our top priority.",
  },
  {
    question: "What is the online session process like?",
    answer: "After booking, you'll receive a confirmation email with a video call link. At your scheduled time, simply join the call from any device with internet access — no special software needed.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You may reschedule or cancel your session up to 24 hours before your scheduled time at no charge. Cancellations within 24 hours may be subject to a fee.",
  },
  {
    question: "Do you offer refunds?",
    answer: "If you're unsatisfied with your session, please reach out within 48 hours and we'll work with you to find a fair resolution, which may include a partial or full refund depending on the circumstances.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, Google Pay, PhonePe, Paytm, credit/debit cards, net banking, and QR code payments through our secure payment system.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-body text-sm tracking-[0.3em] text-lavender-dark uppercase mb-4 block">
            Have Questions?
          </span>
          <h1 className="font-heading text-4xl md:text-6xl text-indigo">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-beige rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-beige/30 hover:bg-beige/50 transition-colors"
              >
                <span className="font-heading text-lg text-indigo pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl text-lavender-dark shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-cream">
                  <p className="font-body text-sm text-indigo/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}