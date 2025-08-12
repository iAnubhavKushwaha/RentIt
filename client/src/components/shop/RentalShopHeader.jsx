import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const RentalShopHeader = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Rental Shop', path: '/rental-shop' },
    { label: 'Wishlist', path: '/wishlist' },
  ];

  return (
    <header className="bg-white border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand/Logo Area */}
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center text-white font-bold">
            RS
          </div>
          <span className="text-lg font-semibold text-zinc-900 tracking-wider">
            Rental Shop
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                text-sm font-medium transition-all duration-300 
                relative group
                ${
                  location.pathname === link.path
                    ? 'text-zinc-900 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }
              `}
            >
              {link.label}
              <span 
                className={`
                  absolute bottom-[-4px] left-0 w-full h-0.5 bg-zinc-900 
                  transition-transform duration-300 origin-left
                  ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `}
              />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Contact Us */}
          <Link
            to="/contact"
            className="
              px-5 py-2 text-sm font-medium 
              bg-zinc-800 text-white 
              rounded-full 
              hover:bg-zinc-900 
              focus:outline-none 
              focus:ring-2 
              focus:ring-zinc-500 
              transition-all 
              shadow-md 
              hover:shadow-lg 
              transform hover:-translate-y-0.5
            "
          >
            Contact Us
          </Link>

          {/* Profile */}
          <button
            className="
              px-5 py-2 
              text-sm font-medium 
              border border-zinc-300 
              text-zinc-700 
              rounded-full 
              hover:bg-zinc-100 
              focus:outline-none 
              focus:ring-2 
              focus:ring-zinc-500 
              transition-all 
              shadow-sm 
              hover:shadow-md
            "
          >
            Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default RentalShopHeader;