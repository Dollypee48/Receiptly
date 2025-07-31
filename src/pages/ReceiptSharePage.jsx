import React from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import { useNavigate } from 'react-router-dom';

const ReceiptSharePage = () => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/designer');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl bg-[#1f2937] rounded-3xl shadow-2xl p-10 space-y-8 text-center">
        <header>
          <h1 className="text-3xl font-extrabold text-[#0ec1c7] mb-2">
            📤 Share Receipt Instantly
          </h1>
          <p className="text-sm text-gray-300">
            Scan the QR code below to view your receipt digitally.
          </p>
        </header>

        <div className="flex justify-center">
          <QRCodeDisplay />
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-[#0ec1c7] hover:bg-[#0aa1a5] text-black font-semibold py-3 rounded-xl transition duration-200"
        >
          🔁 Create Another Receipt
        </button>

        <footer className="text-xs text-gray-400">
          Powered by <span className="font-semibold text-white">Receiptly</span>
        </footer>
      </div>
    </div>
  );
};

export default ReceiptSharePage;
