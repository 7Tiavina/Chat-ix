// Importation de React
import React from 'react';

// Définition du composant ChatbotContainer
const ChatbotContainer = ({ children }) => {
  // Le composant prend ses enfants (children) et les enveloppe dans une div
  return (
    <div className="chatbot-container">
      {children} {/* Ici, les enfants sont rendus dans la div */}
    </div>
  );
};

// Exporter le composant
export default ChatbotContainer;