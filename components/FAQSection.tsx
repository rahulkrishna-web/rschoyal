"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What happens after I submit the form?",
      answer: "You'll get a confirmation on screen and our sales engineer will call you back within one working day to understand your plant size, current setup and answer pricing questions.",
    },
    {
      question: "What plant sizes does Wonder Mill fit?",
      answer: "Wonder Mill is designed as a modular system that scales easily. It can be integrated into new or existing setups ranging from medium 10 TPD (Tons Per Day) mills up to large-scale 500+ TPD commercial industrial processing plants.",
    },
    {
      question: "How much can I really save on power?",
      answer: "On average, mill owners report electricity savings of 25% to 35%. Our advanced high-efficiency motors, combined with automated stone-gap adjustment, ensure maximum grinding efficiency with minimal energy wastage.",
    },
    {
      question: "Is the system secure? Who can operate it?",
      answer: "Yes, security is built-in. The system features multi-level role-based authentication. Operators can control daily grinding gaps and recipes from the touch tablet, while advanced calibration, auditing logs, and factory defaults are secured behind manager credentials. All telemetry data is fully encrypted.",
    },
    {
      question: "Do you provide installation, training and after-sales service?",
      answer: "Absolutely. Our specialized engineering team handles the complete on-site installation, alignment, and testing. We provide structured training for your local operators over 2 days. For support, we offer 24/7 remote cloud diagnostics and a local field service network for immediate maintenance visits.",
    },
    {
      question: "What are the certifications?",
      answer: "Wonder Mill is ISO 9001 and ISO 22000 (Food Safety Management) certified. All control panels and digital components conform to CE, RoHS, and national electrical grid compliance guidelines.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 lg:py-28 relative z-10 section-bg-cream overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-15%] w-[45%] aspect-square bg-brand-cyan/3 rounded-full blur-[130px] pointer-events-none select-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-indigo tracking-widest uppercase block">
            Frequently Asked
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Answers to the questions buyers usually ask
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "glass-panel border-[#1c2722]/15 shadow-md shadow-black/[0.04]"
                    : "bg-white/60 border-[#1c2722]/8 hover:border-[#1c2722]/15 hover:bg-white/90 shadow-2xs"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left space-x-4 focus:outline-hidden"
                >
                  <span className={`text-base font-semibold leading-relaxed transition-colors duration-200 ${
                    isOpen ? "text-brand-indigo" : "text-[#1c2722]"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                    isOpen ? "bg-brand-indigo/10 text-brand-indigo" : "bg-[#1c2722]/5 text-[#3e4d46]"
                  }`}>
                    {isOpen ? (
                      <Minus className="h-4 w-4 transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="h-4 w-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Smooth collapse container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#3e4d46] leading-relaxed border-t border-[#1c2722]/6 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
