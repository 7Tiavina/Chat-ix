// Importation de React et Axios
import React, { useState } from 'react';

// Définition du composant ChatInput
const ChatInput = ({ onSendMessage }) => {
  // Utilisation de useState pour gérer le texte saisi dans le champ de saisie
  const [message, setMessage] = useState(''); // message est une chaîne vide au départ

  // Fonction appelée lorsque l'utilisateur clique sur le bouton "Send"
  const handleSendMessage = () => {
    // Si le message n'est pas vide, on l'envoie via la fonction onSendMessage passée en prop
    if (message.trim() !== '') {
      onSendMessage(message); // Appel de la fonction pour envoyer le message
      setMessage(''); // Réinitialiser le champ de saisie après avoir envoyé le message
    }
  };

  // Retourner le JSX qui compose le champ de saisie
  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Mettre à jour le texte saisi
        placeholder="Entrez votre message" // Texte par défaut dans le champ de saisie
      />
      <button onClick={handleSendMessage}>Send</button> {/* Bouton pour envoyer le message */}
    </div>
  );
};

// Exporter le composant
export default ChatInput;