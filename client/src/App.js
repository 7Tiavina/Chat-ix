// src/App.js
import React, { useState } from 'react';
import ChatbotContainer from './components/ChatbotContainer';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (reply) => {
    setMessages([...messages, reply]);
  };

  return (
    <ChatbotContainer>
      <h1 className="text-2xl font-bold mb-4 text-primary">Chatbot</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatbotContainer>
  );
}

export default App;