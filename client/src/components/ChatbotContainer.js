// src/components/ChatbotContainer.js
import React from 'react';

const ChatbotContainer = ({ children }) => {
  return (
    <div className="chatbot-container">
      {children}
    </div>
  );
};

export default ChatbotContainer;