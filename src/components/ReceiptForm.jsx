// src/components/ReceiptForm.jsx
import React from 'react';
import { useReceipt } from '../context/ReceiptContext';

const ReceiptForm = () => {
  const {
    receiptData,
    updateReceiptData,
    updateItem,
    addItem,
    removeItem,
  } = useReceipt();

  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Store Name</label>
          <input
            type="text"
            value={receiptData.storeName}
            onChange={(e) => updateReceiptData('storeName', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              updateReceiptData('storeLogo', URL.createObjectURL(e.target.files[0]))
            }
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Business Contact</label>
          <input
            type="text"
            value={receiptData.businessContact}
            onChange={(e) => updateReceiptData('businessContact', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1">Customer Name</label>
          <input
            type="text"
            value={receiptData.customerName}
            onChange={(e) => updateReceiptData('customerName', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2">Items</label>
        {receiptData.items.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              placeholder="Item name"
              value={item.name}
              onChange={(e) => updateItem(index, 'name', e.target.value)}
              className="flex-1 border rounded p-2"
            />
            <input
              type="number"
              placeholder="Qty"
              value={item.qty}
              onChange={(e) => updateItem(index, 'qty', e.target.value)}
              className="w-20 border rounded p-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => updateItem(index, 'price', e.target.value)}
              className="w-24 border rounded p-2"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-600"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="text-blue-600 mt-2"
        >
          + Add Item
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1">Tax Rate (%)</label>
          <input
            type="number"
            value={receiptData.taxRate}
            onChange={(e) => updateReceiptData('taxRate', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Discount</label>
          <input
            type="number"
            value={receiptData.discount}
            onChange={(e) => updateReceiptData('discount', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Shipping</label>
          <input
            type="number"
            value={receiptData.shipping}
            onChange={(e) => updateReceiptData('shipping', e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1">Notes</label>
        <textarea
          value={receiptData.notes}
          onChange={(e) => updateReceiptData('notes', e.target.value)}
          className="w-full border rounded p-2"
        ></textarea>
      </div>
    </form>
  );
};

export default ReceiptForm;
