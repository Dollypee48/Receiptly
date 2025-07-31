// src/utils/printUtils.js

export const printReceipt = (elementId) => {
  const printContents = document.getElementById(elementId)?.innerHTML;
  if (!printContents) return;

  const printWindow = window.open('', '', 'height=700,width=800');
  printWindow.document.write('<html><head><title>Receipt</title>');
  printWindow.document.write('</head><body>');
  printWindow.document.write(printContents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
};
