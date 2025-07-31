import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-12 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-[#1f2937] rounded-3xl shadow-2xl p-10 space-y-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-[#0ec1c7] tracking-tight mb-2"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ✨ About Receiptly
          </motion.h1>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Receiptly is a modern, web-based receipt generator designed to help small businesses, freelancers, and individuals
            create professional digital receipts in seconds. Whether you're billing a client, confirming a purchase,
            or just organizing your records – Receiptly makes it quick and effortless.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-white text-black rounded-xl shadow-inner border border-gray-200 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-xl">🎨 Customizable Design</h3>
            <p className="text-sm text-gray-600 mt-2">Tailor each receipt to reflect your brand with ease.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white text-black rounded-xl shadow-inner border border-gray-200 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-xl">📤 Print & Download</h3>
            <p className="text-sm text-gray-600 mt-2">Seamlessly Print and Download receipts.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-white text-black rounded-xl shadow-inner border border-gray-200 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold text-xl">🔐 Private by Design</h3>
            <p className="text-sm text-gray-600 mt-2">Your data is never stored on our servers — only in your browser.</p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-400">Crafted with 💙 by the Receiptly Team</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
