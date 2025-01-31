import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Créez une racine avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez render pour afficher votre application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);