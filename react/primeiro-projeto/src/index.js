import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Esse arquivo faz toda a config do projeto

//* a var root é a raiz do projeto:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
// renderiza dentro da div root tudo que está no arquivo App.js


