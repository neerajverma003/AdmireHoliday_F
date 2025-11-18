import React from "react";
import { FaQuestionCircle, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center gap-2">
        <FaQuestionCircle className="text-blue-600" /> Help Center
      </h2>

      {/* <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h3>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-blue-800 mb-2">How do I book a holiday package?</h4>
          <p className="text-gray-700">
            You can book directly through our website by selecting your destination, dates, and preferred accommodations. 
            Follow the checkout process to complete your booking.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-blue-800 mb-2">What is your cancellation policy?</h4>
          <p className="text-gray-700">
            Cancellations made more than 30 days before departure receive a full refund. 
            Between 15-30 days, we offer a 50% refund. Cancellations within 14 days are non-refundable.
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-medium text-blue-800 mb-2">Do you offer travel insurance?</h4>
          <p className="text-gray-700">
            Yes, we offer comprehensive travel insurance options that you can add during the booking process.
          </p>
        </div>
      </div> */}

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Contact Us
        </h3>
        <p className="text-gray-700 mb-4">
          Our customer service team is available to assist you:
        </p>

        <div className="flex items-center gap-3 mb-3 text-gray-800">
          <FaPhone className="text-blue-600" />
          <span>
            <strong>Phone:</strong> 01140612834
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3 text-gray-800">
          <FaEnvelope className="text-blue-600" />
          <span>
            <strong>Email:</strong> info@admireholidays.com

          </span>
        </div>

        <div className="flex items-center gap-3 mb-4 text-gray-800">
          <FaClock className="text-blue-600" />
          <span>
            <strong>Hours:</strong> Monday-Friday: 8AM-8PM, Saturday: 9AM-5PM,
            Sunday: 10AM-4PM (EST)
          </span>
        </div>

        <p className="text-gray-700">
          For urgent matters during travel, please call our 24/7 emergency line:
          <span className="font-semibold"> 18001214252</span>
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Additional Resources
        </h3>
        <ul className="space-y-3">
          <li>
            <a
              href="/terms-conditions"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          {/* <li>
            <a
              href="/travel-tips"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Travel Tips and Guides
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Help;
