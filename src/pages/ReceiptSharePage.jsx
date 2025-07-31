// src/pages/ReceiptSharePage.jsx
import React from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import { useNavigate } from 'react-router-dom';

const ReceiptSharePage = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/designer');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-4">📲 Share Your Receipt</h2>
        <p className="text-sm text-gray-600 mb-4">
          Scan the QR code below to view this receipt digitally.
        </p>

        <QRCodeDisplay />

        <button
          onClick={handleRestart}
          className="mt-6 px-5 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          🔁 Create New Receipt
        </button>
      </div>
    </div>
  );
};

export default ReceiptSharePage;
