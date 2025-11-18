import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatBot from './ChatBot';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end">
      {/* Chat Interface */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 mb-4 overflow-hidden">
          <ChatBot onClose={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default ChatWidget;