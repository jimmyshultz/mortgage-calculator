"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button with accessibility attributes */}
      <button
        type="button"
        onClick={toggleMenu}
        className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md p-2"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu with accessibility attributes */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 bg-blue-800 z-50 shadow-md"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/preapproval-calculator"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Preapproval
            </Link>
            <Link
              href="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation; 