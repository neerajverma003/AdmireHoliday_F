import React from 'react';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start space-x-3 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-500' : 'bg-gray-500'
      }`}>
        {isBot ? (
          <Bot className="w-4 h-4 text-white" />
        ) : (
          <User className="w-4 h-4 text-white" />
        )}
      </div>
      
      {/* Message */}
      <div className={`max-w-[70%] ${isBot ? '' : 'text-right'}`}>
        <div className={`p-3 rounded-lg ${
          isBot 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-blue-500 text-white'
        }`}>
          <p className="text-sm">{message.text}</p>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;