
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReceiptPreview from '../components/ReceiptPreview';
import { useNavigate } from 'react-router-dom';

const ReceiptPreviewPage = () => {
  const navigate = useNavigate();
  const previewRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

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
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    while (position < canvas.height) {
      const canvasSlice = document.createElement('canvas');
      canvasSlice.width = canvas.width;
      canvasSlice.height = Math.min(pageHeight * 2, canvas.height - position);

      const ctx = canvasSlice.getContext('2d');
      ctx.drawImage(
        canvas,
        0,
        position,
        canvas.width,
        canvasSlice.height,
        0,
        0,
        canvas.width,
        canvasSlice.height
      );

      const imgDataSlice = canvasSlice.toDataURL('image/png');
      const heightInPDF = (canvasSlice.height * pdfWidth) / canvas.width;

      if (position !== 0) pdf.addPage();
      pdf.addImage(imgDataSlice, 'PNG', 0, 0, pdfWidth, heightInPDF);
      position += canvasSlice.height;
    }

    pdf.save('receipt.pdf');
  };

  const handleNext = () => {
    navigate('/share');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6 print:p-0">
        <h2 className="text-2xl font-bold text-center mb-6">Receipt Preview</h2>

        <div
          ref={previewRef}
          className="bg-white border p-4 rounded shadow print:border-none print:shadow-none"
        >
          <ReceiptPreview />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            🖨️ Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
          >
            📄 Download PDF
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            ➡ Continue to QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreviewPage;
