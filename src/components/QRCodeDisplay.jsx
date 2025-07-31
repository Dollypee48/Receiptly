import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = () => {
  const receiptURL = 'https://example.com/receipt/12345'; 

  const downloadQRCode = () => {
    const canvas = document.getElementById('receipt-qr');
    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');

    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'receipt_qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="border border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
        <QRCodeCanvas
          id="receipt-qr"
          value={receiptURL}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin
          className="hover:scale-105 transition-transform"
        />
      </div>

      <p className="text-sm text-gray-600 break-words text-center w-full">
        {receiptURL.length > 40
          ? receiptURL.substring(0, 37) + '...'
          : receiptURL}
      </p>

      <button
        onClick={downloadQRCode}
        className="px-5 py-2 rounded-lg text-sm font-medium bg-black text-white hover:bg-gray-800 transition-all"
      >
        ⬇ Download QR Code
      </button>
    </div>
  );
};

export default QRCodeDisplay;
