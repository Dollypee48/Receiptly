
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ReceiptProvider } from './context/ReceiptContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReceiptProvider>
      <App />
    </ReceiptProvider>
  </React.StrictMode>
);
