import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Details } from './Components/Details';
import { LandingPage } from './Components/LandingPage';
import { FirstPage } from './Components/FirstPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

