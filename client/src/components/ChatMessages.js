// Importation de React
import React from 'react';

// Définition du composant ChatMessages
const ChatMessages = ({ messages }) => {
  // Retourner le JSX qui compose la liste des messages
  return (
    <div className="chat-messages">
      {/* Itérer sur chaque message et créer une div pour chaque message */}
      {messages.map((msg, index) => (
        <div key={index} className={`message-bubble ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}>
          {msg.text} {/* Afficher le texte du message */}
        </div>
      ))}
    </div>
  );
};

// Exporter le composant
export default ChatMessages;