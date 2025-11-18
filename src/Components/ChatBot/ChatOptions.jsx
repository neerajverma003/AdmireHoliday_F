import React from 'react';

const ChatOptions = ({ options, onOptionSelect }) => {
  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onOptionSelect(option)}
          className="w-full text-left p-3 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChatOptions;