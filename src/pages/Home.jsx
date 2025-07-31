import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
     
      <section className="bg-white py-20 px-6 text-center shadow">
        <h1 className="text-4xl font-bold mb-4">Welcome to Receiptly</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Create, customize, and export beautiful professional receipts in minutes.
        </p>
        <Link
          to="/designer"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </section>

      
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Customizable Fields</h3>
            <p className="text-sm text-gray-600">
              Easily add your logo, business details, and itemized rows with full control.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Export & Print</h3>
            <p className="text-sm text-gray-600">
              Export your receipt to PDF or print directly from your browser.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">QR Code Enabled</h3>
            <p className="text-sm text-gray-600">
              Generate a QR code to share your receipt digitally with ease.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-2">📝</div>
              <h4 className="font-semibold mb-2">Step 1: Design</h4>
              <p className="text-sm text-gray-600">Use our intuitive editor to customize your receipt layout and fields.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📄</div>
              <h4 className="font-semibold mb-2">Step 2: Preview</h4>
              <p className="text-sm text-gray-600">See exactly how your receipt will look with a real-time preview.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📤</div>
              <h4 className="font-semibold mb-2">Step 3: Export</h4>
              <p className="text-sm text-gray-600">Download as PDF, print, or share via QR code — all in one click.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white border-t text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Receiptly. Built with ❤️ for professionals.
      </footer>
    </div>
  );
}
