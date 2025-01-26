import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/framework.css';
import './components/normalize.css';
import './components/red.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
