// src/components/ReceiptPreview.jsx
import React from 'react';
import { useReceipt } from '../context/ReceiptContext';

const ReceiptPreview = () => {
  const { receiptData } = useReceipt();

  const subtotal = receiptData.items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const taxAmount = (subtotal * receiptData.taxRate) / 100;
  const total = subtotal + taxAmount + Number(receiptData.shipping) - Number(receiptData.discount);

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto border border-gray-200">
      {receiptData.storeLogo && (
        <img
          src={receiptData.storeLogo}
          alt="Store Logo"
          className="h-20 mx-auto mb-2 object-contain"
        />
      )}
      <h2 className="text-center text-lg font-bold mb-2">{receiptData.storeName}</h2>
      <p className="text-center text-sm mb-4">{receiptData.businessContact}</p>

      <hr className="my-2" />

      <p className="text-sm">
        <strong>Customer:</strong> {receiptData.customerName}
      </p>
      <p className="text-sm mb-2">
        <strong>Email:</strong> {receiptData.customerEmail}
      </p>
      <p className="text-sm mb-2">
        <strong>Receipt ID:</strong> {receiptData.receiptId}
      </p>
      <p className="text-sm mb-4">
        <strong>Date:</strong> {receiptData.date}
      </p>

      <table className="w-full text-sm mb-4">
        <thead>
          <tr>
            <th className="text-left">Item</th>
            <th className="text-right">Qty</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {receiptData.items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td className="text-right">{item.qty}</td>
              <td className="text-right">₦{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="my-2" />

      <div className="text-sm space-y-1">
        <p>
          <strong>Subtotal:</strong> ₦{subtotal.toFixed(2)}
        </p>
        <p>
          <strong>Tax ({receiptData.taxRate}%):</strong> ₦{taxAmount.toFixed(2)}
        </p>
        <p>
          <strong>Shipping:</strong> ₦{Number(receiptData.shipping).toFixed(2)}
        </p>
        <p>
          <strong>Discount:</strong> -₦{Number(receiptData.discount).toFixed(2)}
        </p>
        <p className="font-bold text-lg">
          <strong>Total:</strong> ₦{total.toFixed(2)}
        </p>
      </div>

      {receiptData.notes && (
        <div className="mt-4 text-xs text-gray-600">
          <strong>Notes:</strong> {receiptData.notes}
        </div>
      )}
    </div>
  );
};

export default ReceiptPreview;
