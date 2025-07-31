// src/components/QRCodeDisplay.jsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = () => {
  const receiptURL = 'https://example.com/receipt/12345'; // Replace with dynamic or generated link

  const downloadQRCode = () => {
    const canvas = document.getElementById('receipt-qr');
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
    <div className="flex flex-col items-center">
      <QRCodeCanvas
        id="receipt-qr"
        value={receiptURL}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin
      />
      <p className="mt-2 text-xs text-gray-500">{receiptURL}</p>
      <button
        onClick={downloadQRCode}
        className="mt-4 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      >
        ⬇ Download QR Code
      </button>
    </div>
  );
};

export default QRCodeDisplay;
