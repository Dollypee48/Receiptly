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
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: input.scrollHeight,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let position = 0;

    while (position < canvas.height) {
      const sliceCanvas = document.createElement('canvas');
      const sliceHeight = Math.min(pageHeight * 2, canvas.height - position);

      sliceCanvas.width = canvas.width;
      sliceCanvas.height = sliceHeight;

      const ctx = sliceCanvas.getContext('2d');
      ctx.drawImage(canvas, 0, position, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

      const imgSlice = sliceCanvas.toDataURL('image/png');
      const sliceHeightInPDF = (sliceHeight * pdfWidth) / canvas.width;

      if (position !== 0) pdf.addPage();
      pdf.addImage(imgSlice, 'PNG', 0, 0, pdfWidth, sliceHeightInPDF);

      position += sliceHeight;
    }

    pdf.save('receipt.pdf');
  };

  const handleNext = () => navigate('/share');

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-[#1f2937] rounded-3xl shadow-2xl p-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-[#0ec1c7] tracking-tight mb-2">
            📑 Receipt Preview
          </h1>
          <p className="text-gray-300 text-sm">
            Review your receipt, download as PDF, print it, or share via QR code.
          </p>
        </header>

        <section
          ref={previewRef}
          className="bg-white rounded-xl p-6 shadow-inner border border-gray-200 text-black"
        >
          <ReceiptPreview />
        </section>

        <footer className="flex flex-col md:flex-row justify-center gap-4 print:hidden">
          <button
            onClick={handlePrint}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            🖨️ Print Receipt
          </button>
          <button
            onClick={handleDownloadPDF}
            className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            📥 Download PDF
          </button>
          <button
            onClick={handleNext}
            className="w-full md:w-auto bg-[#0ec1c7] hover:bg-[#0aa1a5] text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            ➡ Proceed to QR Code
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ReceiptPreviewPage;
