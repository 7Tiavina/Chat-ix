// src/components/ChatInput.js
import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Entrez votre message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;