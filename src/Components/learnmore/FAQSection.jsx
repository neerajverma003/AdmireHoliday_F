import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
 
const faqs = [
  {
    question: "How do I know which package is right for me?",
    answer: "Our travel consultants will discuss your preferences, budget, and interests to recommend the perfect package. You can also use the 'Plan My Trip' form on our website — just select 'Yes' under 'Do you need free consultant?', and our team will reach out to guide you personally."
  },
  {
    question: "Can I book flights and hotels separately through Admire Holidays?",
    answer: "Yes, we offer both package deals and individual bookings for flights, hotels, and sightseeing."
  },
  {
    question: "What happens after I submit the inquiry form?",
    answer: "Within 4-6 hours, our travel consultant will call you. You'll receive a detailed itinerary via email within 24 hours."
  },
  {
    question: "Do you help with visa processing?",
    answer: "Yes, we provide assistance for tourist visa documentation and processing for most international destinations."
  },
  {
    question: "Are your packages customizable for honeymooners or solo travelers?",
    answer: "Yes! We specialize in custom honeymoon trips, solo adventures, and curated itineraries based on your interests."
  },
  {
    question: "What if my flight gets delayed or cancelled?",
    answer: "Our team monitors travel disruptions and can help rebook or adjust the itinerary as needed."
  }
];
 
export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState(null);
 
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
 
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>
 
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}