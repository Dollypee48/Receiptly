import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide" aria-label="Home">
          🧾 Receiptly
        </Link>
        <nav className="space-x-4 text-sm" aria-label="Main navigation">
          <Link to="/designer" className="hover:underline">
            Build
          </Link>
          <Link to="/preview" className="hover:underline">
            Preview
          </Link>
          <Link to="/share" className="hover:underline">
            Share
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
