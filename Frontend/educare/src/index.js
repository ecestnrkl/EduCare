// ACHTUNG: npm install react-router-dom ausführen für (Findet man in Package.Json wieder)
// Sonst spinnt BrowserRouter und die Seite wird leer gezeigt
// Falls das passieren sollte > Zeile 5,16,18 löschen

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./NavbarTest.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>
);

reportWebVitals();




