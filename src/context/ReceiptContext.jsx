
import React, { createContext, useContext, useState } from 'react';

const ReceiptContext = createContext();

export const ReceiptProvider = ({ children }) => {
  const [receiptData, setReceiptData] = useState({
    storeName: '',
    storeLogo: null,
    businessContact: '',
    customerName: '',
    customerEmail: '',
    items: [{ name: '', qty: 1, price: 0 }],
    taxRate: 0,
    discount: 0,
    shipping: 0,
    paymentMethod: 'Cash',
    notes: '',
    date: new Date().toLocaleDateString(),
    receiptId: `R-${Math.floor(Math.random() * 100000)}`,
  });

  const updateReceiptData = (field, value) => {
    setReceiptData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateItem = (index, key, value) => {
    const newItems = [...receiptData.items];
    newItems[index][key] = key === 'name' ? value : Number(value);
    setReceiptData((prev) => ({
      ...prev,
      items: newItems,
    }));
  };

  const addItem = () => {
    setReceiptData((prev) => ({
      ...prev,
      items: [...prev.items, { name: '', qty: 1, price: 0 }],
    }));
  };

  const removeItem = (index) => {
    const newItems = [...receiptData.items];
    newItems.splice(index, 1);
    setReceiptData((prev) => ({
      ...prev,
      items: newItems,
    }));
  };

  return (
    <ReceiptContext.Provider
      value={{
        receiptData,
        updateReceiptData,
        updateItem,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ReceiptContext.Provider>
  );
};


export const useReceipt = () => useContext(ReceiptContext);
