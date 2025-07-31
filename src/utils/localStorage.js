const STORAGE_KEY = 'receipt_data';

export const saveReceiptToStorage = (data, key = STORAGE_KEY) => {
  try {
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
  } catch (error) {
    console.error('Save error:', error);
  }
};

export const loadReceiptFromStorage = (key = STORAGE_KEY) => {
  try {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  } catch (error) {
    console.error('Load error:', error);
    return null;
  }
};

export const clearReceiptStorage = (key = STORAGE_KEY) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Clear error:', error);
  }
};
