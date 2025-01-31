// Importation des modules nécessaires
import React, { useState } from 'react'; // Pour gérer l'état dans les composants
import ChatbotContainer from './components/ChatbotContainer'; // Composant contenant tout le chatbot
import ChatInput from './components/ChatInput'; // Composant pour saisir un message
import ChatMessages from './components/ChatMessages'; // Composant pour afficher les messages
import axios from 'axios'; // Pour faire des requêtes HTTP

function App() {
  // Utilisation de useState pour stocker les messages dans l'état
  const [messages, setMessages] = useState([]); // messages est une liste vide au départ

  // Fonction qui gère l'envoi d'un message
  const handleSendMessage = async (messageText) => {
    // Si le message est vide, on ne fait rien
    if (messageText.trim() === '') return;

    // Ajouter le message de l'utilisateur à la liste des messages
    setMessages(prevMessages => [...prevMessages, { text: messageText, type: 'user' }]);

    try {
      // Envoyer le message au serveur et attendre la réponse
      const res = await axios.post('http://localhost:8000/api/chat', {
        message: messageText,
      });

      // Si le serveur renvoie une réponse valide, ajouter la réponse du bot à la liste des messages
      if (res.data.reply) {
        setMessages(prevMessages => [...prevMessages, { text: res.data.reply, type: 'bot' }]);
      } else {
        // Sinon, afficher un message indiquant une réponse inattendue du serveur
        setMessages(prevMessages => [...prevMessages, { text: 'Réponse inattendue du serveur', type: 'bot' }]);
      }
    } catch (error) {
      // Si une erreur se produit lors de l'envoi du message, afficher un message d'erreur
      console.error("Erreur lors de l'envoi du message:", error);
      setMessages(prevMessages => [...prevMessages, { text: 'Erreur lors de l\'envoi du message', type: 'bot' }]);
    }
  };

  // Retourner le JSX qui compose l'interface utilisateur
  return (
    <ChatbotContainer>
      <h1>Chatbot</h1> {/* Titre du chatbot */}
      <ChatMessages messages={messages} /> {/* Afficher les messages */}
      <ChatInput onSendMessage={handleSendMessage} /> {/* Champ de saisie pour envoyer un nouveau message */}
    </ChatbotContainer>
  );
}

export default App; // Exporter le composant principal