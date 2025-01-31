// src/App.js
import React, { useState } from 'react';
import ChatbotContainer from './components/ChatbotContainer';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import axios from 'axios'; // Ajoutez cette ligne pour importer axios

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (messageText) => {
    if (messageText.trim() === '') return;

    // Ajouter le message de l'utilisateur
    setMessages(prevMessages => [...prevMessages, { text: messageText, type: 'user' }]);

    try {
      const res = await axios.post('http://localhost:8000/api/chat', {
        message: messageText,
      });

      if (res.data.reply) {
        // Ajouter la réponse du bot
        setMessages(prevMessages => [...prevMessages, { text: res.data.reply, type: 'bot' }]);
      } else {
        setMessages(prevMessages => [...prevMessages, { text: 'Réponse inattendue du serveur', type: 'bot' }]);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setMessages(prevMessages => [...prevMessages, { text: 'Erreur lors de l\'envoi du message', type: 'bot' }]);
    }
  };

  return (
    <ChatbotContainer>
      <h1>Chatbot</h1>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatbotContainer>
  );
}

export default App;