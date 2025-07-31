import React from 'react';
import ReceiptForm from '../components/ReceiptForm';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ReceiptBuilder = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/preview');
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-[#1f2937] rounded-3xl shadow-2xl p-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-[#0ec1c7] tracking-tight mb-2">
            🧾 Build Your Receipt
          </h1>
          <p className="text-gray-300 text-sm">
            Fill in your business and purchase details to generate a modern, shareable receipt.
          </p>
        </header>

        <section className="bg-white rounded-xl p-6 shadow-inner border border-gray-200 text-black">
          <ReceiptForm />
        </section>

        <footer className="text-right print:hidden">
          <button
            onClick={handleContinue}
            className="inline-flex items-center gap-2 bg-[#0ec1c7] hover:bg-[#0aa1a5] text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Continue to Preview <ArrowRight className="w-5 h-5" />
          </button>
        </footer>
      </div>

      <Footer />
    </div>
  );
};

export default ReceiptBuilder;
