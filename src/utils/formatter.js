// src/utils/formatter.js

export const formatCurrency = (amount, symbol = '₦') => {
  return `${symbol}${Number(amount).toFixed(2)}`;
};

export const formatDate = (date = new Date()) => {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};
