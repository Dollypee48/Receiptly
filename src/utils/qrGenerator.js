// src/utils/qrGenerator.js

import QRCode from 'qrcode';

export const generateQRCode = async (data) => {
  try {
    const encoded = encodeURIComponent(JSON.stringify(data));
    const url = `${window.location.origin}/view?data=${encoded}`;
    return await QRCode.toDataURL(url);
  } catch (error) {
    console.error('QR Code generation failed:', error);
    return null;
  }
};
