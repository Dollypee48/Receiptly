
import React from 'react';
import Header from '../components/Header';
import ReceiptForm from '../components/ReceiptForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ReceiptBuilder = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/preview');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-4">
      <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Build Your Receipt</h2>
        <ReceiptForm />
        <button
          onClick={handleContinue}
          className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Continue to Preview
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ReceiptBuilder;
