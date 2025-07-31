import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Eye, Share2 } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/designer', label: 'Build', icon: <FileText size={16} /> },
    { to: '/preview', label: 'Preview', icon: <Eye size={16} /> },
    { to: '/share', label: 'Share', icon: <Share2 size={16} /> },
  ];

  return (
    <header className="bg-[#0f172a] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-[#0ec1c7] hover:text-white transition">
          🧾 Receiptly
        </Link>

        <nav className="flex space-x-6 text-sm font-medium">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 transition hover:text-[#0ec1c7] ${
                location.pathname === to ? 'text-[#0ec1c7]' : 'text-white'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
