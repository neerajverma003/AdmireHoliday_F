import React, { useState } from 'react';
import { Send } from 'lucide-react';

const LeadForm = ({ onSubmit, leadData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, ...leadData });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
      <h4 className="font-semibold text-gray-800 mb-3">Get Your Personalized Travel Plan</h4>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requests or questions? (Optional)"
            rows={2}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Get My Travel Plan</span>
        </button>
      </form>
      
      <p className="text-xs text-gray-500 mt-2 text-center">
        We'll send you personalized recommendations within 24 hours
      </p>
    </div>
  );
};

export default LeadForm;