import React, { useState, useEffect, useRef } from 'react';
import { Send, Minimize2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatOptions from './ChatOptions';
import LeadForm from './LeadForm';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userInput, setUserInput] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    destination: '',
    travelType: '',
    budget: '',
    timeframe: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message
    const welcomeMessage = {
      id: '1',
      text: "Hi! 👋 I'm your travel assistant. I'm here to help you plan your perfect trip! What type of travel are you interested in?",
      sender: 'bot',
      timestamp: new Date(),
      options: ['Vacation/Holiday', 'Business Travel', 'Adventure Travel', 'Family Trip', 'Honeymoon']
    };
    setMessages([welcomeMessage]);
  }, []);

  const addMessage = (text, sender, options) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionSelect = (option) => {
    addMessage(option, 'user');
    
    switch (currentStep) {
      case 'welcome':
        setLeadData(prev => ({ ...prev, travelType: option }));
        setTimeout(() => {
          addMessage("Great choice! Where would you like to go? 🇮🇳", 'bot', [
  'Delhi', 'Goa', 'Kerala', 'Rajasthan', 'Himachal Pradesh', 'Not sure yet'
]);

          setCurrentStep('destination');
        }, 1000);
        break;
        
      case 'destination':
        setLeadData(prev => ({ ...prev, destination: option }));
        setTimeout(() => {
          addMessage("Excellent! What's your approximate budget range? 💰", 'bot', [
  'Under ₹10,000', '₹10,000 - ₹30,000', '₹30,000 - ₹50,000', '₹50,000 - ₹1,00,000', 'Above ₹1,00,000'
]);

          setCurrentStep('budget');
        }, 1000);
        break;
        
      case 'budget':
        setLeadData(prev => ({ ...prev, budget: option }));
        setTimeout(() => {
          addMessage("Perfect! When are you planning to travel? 📅", 'bot', [
            'Within 1 month', '1-3 months', '3-6 months', '6-12 months', 'Just exploring'
          ]);
          setCurrentStep('timeframe');
        }, 1000);
        break;
        
      case 'timeframe':
        setLeadData(prev => ({ ...prev, timeframe: option }));
        setTimeout(() => {
          addMessage("Wonderful! I have some great options for you. To send you personalized recommendations, could you please share your contact details? 📧", 'bot');
          setShowLeadForm(true);
          setCurrentStep('lead');
        }, 1000);
        break;
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      addMessage(userInput, 'user');
      setUserInput('');
      
      // Simple bot response for custom messages
      setTimeout(() => {
        addMessage("Thank you for your message! For the best assistance, please use the options above or fill out the form to get personalized recommendations. 😊", 'bot');
      }, 1000);
    }
  };

  const handleLeadSubmit = (formData) => {
    setShowLeadForm(false);
    setTimeout(() => {
      addMessage(`Thank you, ${formData.name}! 🎉 I'll send personalized travel recommendations to ${formData.email} within 24 hours. Our travel expert will also contact you at ${formData.phone} to discuss your ${leadData.travelType.toLowerCase()} to ${leadData.destination}. Have a great day!`, 'bot');
    }, 500);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Travel Assistant</h3>
          <p className="text-sm opacity-90">Online now</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {messages.length > 0 && messages[messages.length - 1].options && (
          <ChatOptions
            options={messages[messages.length - 1].options}
            onOptionSelect={handleOptionSelect}
          />
        )}
        
        {showLeadForm && (
          <LeadForm
            onSubmit={handleLeadSubmit}
            leadData={leadData}
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;