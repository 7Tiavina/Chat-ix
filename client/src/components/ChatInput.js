// src/components/ChatInput.js
import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    try {
      const res = await axios.post('http://localhost:8000/api/chat', {
        message: message,
      });

      if (res.data.reply) {
        onSendMessage(res.data.reply);
      } else {
        onSendMessage('Réponse inattendue du serveur');
      }

      setMessage('');
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      onSendMessage('Erreur lors de l\'envoi du message');
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