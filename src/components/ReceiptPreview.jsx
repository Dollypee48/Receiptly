import React from 'react';
import { useReceipt } from '../context/ReceiptContext';

const ReceiptPreview = () => {
  const { receiptData } = useReceipt();

  const subtotal = receiptData.items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const taxAmount = (subtotal * receiptData.taxRate) / 100;
  const total =
    subtotal + taxAmount + Number(receiptData.shipping) - Number(receiptData.discount);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto border border-gray-300 text-gray-800 font-mono">
      {receiptData.storeLogo && (
        <img
          src={receiptData.storeLogo}
          alt="Store Logo"
          className="h-16 mx-auto mb-3 object-contain"
        />
      )}

      <h2 className="text-center text-xl font-bold uppercase tracking-wide mb-1">
        {receiptData.storeName}
      </h2>
      <p className="text-center text-sm text-gray-600 mb-4">{receiptData.businessContact}</p>

      <hr className="border-t border-dashed border-gray-400 my-2" />

      <div className="text-sm mb-3 space-y-1">
        <p><span className="font-semibold">Customer:</span> {receiptData.customerName}</p>
        <p><span className="font-semibold">Email:</span> {receiptData.customerEmail}</p>
        <p><span className="font-semibold">Receipt ID:</span> {receiptData.receiptId}</p>
        <p><span className="font-semibold">Date:</span> {receiptData.date}</p>
      </div>

      <table className="w-full text-sm mb-4 border-separate border-spacing-y-1">
        <thead>
          <tr className="text-left font-semibold border-b border-gray-300">
            <th>Item</th>
            <th className="text-center">Qty</th>
            <th className="text-right">Price (₦)</th>
          </tr>
        </thead>
        <tbody>
          {receiptData.items.map((item, idx) => (
            <tr key={idx} className="text-gray-700 border-b border-gray-100">
              <td>{item.name}</td>
              <td className="text-center">{item.qty}</td>
              <td className="text-right">{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="border-t border-dashed border-gray-400 my-2" />

      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>₦{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax ({receiptData.taxRate}%):</span>
          <span>₦{taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>₦{Number(receiptData.shipping).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span>
          <span>-₦{Number(receiptData.discount).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base pt-1 border-t border-gray-300 mt-2">
          <span>Total:</span>
          <span>₦{total.toFixed(2)}</span>
        </div>
      </div>

      {receiptData.notes && (
        <div className="mt-4 text-xs text-gray-600 italic">
          <strong>Note:</strong> {receiptData.notes}
        </div>
      )}
    </div>
  );
};

export default ReceiptPreview;
