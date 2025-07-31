import React from 'react';
import { useReceipt } from '../context/ReceiptContext';

const Input = ({ label, value, onChange, type = 'text', placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ec1c7]"
    />
  </div>
);

const ReceiptForm = () => {
  const {
    receiptData,
    updateReceiptData,
    updateItem,
    addItem,
    removeItem,
  } = useReceipt();

  return (
    <form className="space-y-8 text-sm">
      {/* Store Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Store Name"
          value={receiptData.storeName}
          onChange={(e) => updateReceiptData('storeName', e.target.value)}
          placeholder="e.g. Tech Hub"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              updateReceiptData('storeLogo', URL.createObjectURL(e.target.files[0]))
            }
            className="block w-full text-sm"
          />
        </div>

        <Input
          label="Business Contact"
          value={receiptData.businessContact}
          onChange={(e) => updateReceiptData('businessContact', e.target.value)}
          placeholder="e.g. support@email.com"
        />

        <Input
          label="Customer Name"
          value={receiptData.customerName}
          onChange={(e) => updateReceiptData('customerName', e.target.value)}
          placeholder="e.g. Jane Doe"
        />
      </div>

      {/* Items */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Items</label>
        {receiptData.items.map((item, index) => (
          <div key={index} className="flex flex-wrap sm:flex-nowrap items-center gap-2 mb-2">
            <input
              type="text"
              value={item.name}
              placeholder="Item"
              onChange={(e) => updateItem(index, 'name', e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-2 py-1"
            />
            <input
              type="number"
              value={item.qty}
              placeholder="Qty"
              onChange={(e) => updateItem(index, 'qty', e.target.value)}
              className="w-20 rounded-md border border-gray-300 px-2 py-1"
            />
            <input
              type="number"
              value={item.price}
              placeholder="Price"
              onChange={(e) => updateItem(index, 'price', e.target.value)}
              className="w-24 rounded-md border border-gray-300 px-2 py-1"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700 text-lg"
              title="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="text-[#0ec1c7] font-medium hover:underline mt-1 text-sm"
        >
          + Add Item
        </button>
      </div>

      {/* Pricing */}
      <div className="grid md:grid-cols-3 gap-6">
        <Input
          type="number"
          label="Tax Rate (%)"
          value={receiptData.taxRate}
          onChange={(e) => updateReceiptData('taxRate', e.target.value)}
        />
        <Input
          type="number"
          label="Discount"
          value={receiptData.discount}
          onChange={(e) => updateReceiptData('discount', e.target.value)}
        />
        <Input
          type="number"
          label="Shipping"
          value={receiptData.shipping}
          onChange={(e) => updateReceiptData('shipping', e.target.value)}
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
        <textarea
          rows={3}
          value={receiptData.notes}
          onChange={(e) => updateReceiptData('notes', e.target.value)}
          placeholder="Optional: Add instructions or comments"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ec1c7]"
        />
      </div>
    </form>
  );
};

export default ReceiptForm;
