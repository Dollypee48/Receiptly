// src/components/ReceiptItemRow.jsx
import React from 'react';

const ReceiptItemRow = ({ index, item, onChange, onRemove }) => {
  return (
    <div className="flex gap-2 mb-2">
      <input
        type="text"
        value={item.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
        placeholder="Item name"
        className="flex-1 p-2 border rounded"
      />
      <input
        type="number"
        value={item.qty}
        onChange={(e) => onChange(index, 'qty', e.target.value)}
        placeholder="Qty"
        className="w-20 p-2 border rounded"
      />
      <input
        type="number"
        value={item.price}
        onChange={(e) => onChange(index, 'price', e.target.value)}
        placeholder="Price"
        className="w-24 p-2 border rounded"
      />
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="text-red-600 px-2"
      >
        ✕
      </button>
    </div>
  );
};

export default ReceiptItemRow;
