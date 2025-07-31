
import React from 'react';
import { Trash2 } from 'lucide-react'; 

const ReceiptItemRow = ({ index, item, onChange, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-3 items-center animate-fade-in">
      <input
        type="text"
        value={item.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
        placeholder="Item name"
        className="flex-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Item name at row ${index + 1}`}
      />
      <input
        type="number"
        value={item.qty}
        onChange={(e) => onChange(index, 'qty', e.target.value)}
        placeholder="Qty"
        className="w-full sm:w-20 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Quantity at row ${index + 1}`}
        min="1"
      />
      <input
        type="number"
        value={item.price}
        onChange={(e) => onChange(index, 'price', e.target.value)}
        placeholder="Price"
        className="w-full sm:w-24 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Price at row ${index + 1}`}
        min="0"
        step="0.01"
      />
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors duration-200"
        aria-label={`Remove item at row ${index + 1}`}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default ReceiptItemRow;
