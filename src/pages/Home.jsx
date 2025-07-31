import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-[#0ec1c7] to-[#0aa1a5] animate-fade-in-down">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Welcome to <span className="text-black">Receiptly</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 mb-8">
          Create stunning, shareable receipts in seconds — fully customizable & export-ready.
        </p>
        <Link
          to="/designer"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 font-semibold shadow-lg"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1f2937] animate-fade-in-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Customizable Fields",
              desc: "Add your logo, business details, and line items with full control.",
            },
            {
              title: "Export & Print",
              desc: "Export your receipt to PDF or print directly from your browser.",
            },
            {
              title: "QR Code Enabled",
              desc: "Generate QR codes for digital sharing on any platform.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#111827] rounded-xl border border-[#0ec1c7] hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-[#0ec1c7]">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-[#0f172a] animate-fade-in-up">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#0ec1c7]">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "📝",
                title: "Design",
                desc: "Use our sleek editor to customize your layout and fields.",
              },
              {
                icon: "📄",
                title: "Preview",
                desc: "Real-time preview helps you perfect your receipt instantly.",
              },
              {
                icon: "📤",
                title: "Export",
                desc: "Download as PDF, print, or share via QR — one click away.",
              },
            ].map((step, index) => (
              <div key={index} className="p-6 bg-[#1e293b] rounded-xl hover:shadow-lg hover:scale-105 transition duration-300">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-[#0ec1c7]">{step.title}</h4>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-400 bg-[#111827] border-t border-[#0ec1c7]">
        &copy; {new Date().getFullYear()} Receiptly. Crafted with 💙 for modern professionals.
      </footer>
    </div>
  );
}
