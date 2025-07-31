import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import ReceiptPreview from '../components/ReceiptPreview';

const ReceiptPreviewPage = () => {
  const previewRef = useRef(null);
  const navigate = useNavigate();

  const handlePrint = () => window.print();

  const handleDownloadPDF = async () => {
    const input = previewRef.current;
    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      windowWidth: input.scrollWidth,
      windowHeight: input.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('receipt.pdf');
  };

  const handleNext = () => navigate('/share');

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-[#1f2937] rounded-3xl shadow-2xl p-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-[#0ec1c7] tracking-tight mb-2">📑 Receipt Preview</h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            View your receipt below. You can download it as a PDF, print it, or continue to share.
          </p>
        </header>

        <section
          ref={previewRef}
          className="bg-white rounded-xl p-6 border border-gray-300 shadow-inner text-black overflow-auto"
        >
          <ReceiptPreview />
        </section>

        <footer className="flex flex-col md:flex-row justify-center gap-4 print:hidden pt-4">
          <button
            onClick={handlePrint}
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            🖨️ Print Receipt
          </button>

          <button
            onClick={handleDownloadPDF}
            className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            📥 Download PDF
          </button>

        </footer>
      </div>
    </div>
  );
};

export default ReceiptPreviewPage;
