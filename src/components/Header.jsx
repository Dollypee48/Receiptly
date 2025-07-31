import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Eye, Share2 } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/designer', label: 'Build', icon: <FileText size={18} /> },
    { to: '/preview', label: 'Preview', icon: <Eye size={18} /> },
    { to: '/about', label: 'About', icon: <Share2 size={18} /> },
  ];

  return (
    <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#0ec1c7] hover:text-white transition duration-300"
        >
          🧾 Receiptly
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 mt-2 sm:mt-0 text-sm font-medium">
          {navLinks.map(({ to, label, icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 ${
                  isActive
                    ? 'bg-[#0ec1c7]/10 text-[#0ec1c7]'
                    : 'hover:bg-white/10 hover:text-[#0ec1c7] text-white'
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
