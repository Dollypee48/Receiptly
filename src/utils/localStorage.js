

const STORAGE_KEY = 'receipt_data';

export const saveReceiptToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadReceiptFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearReceiptStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
