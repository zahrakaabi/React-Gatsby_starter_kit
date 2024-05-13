/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

// UIL ocal Components
import App from './App';
import * as serviceWorker from "./serviceWorkerRegistration";

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();