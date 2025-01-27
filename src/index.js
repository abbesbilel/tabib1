import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './page/DoctorOverview/components/framework.css';
import './page/DoctorOverview/components/normalize.css';
import './page/DoctorOverview/components/red.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
