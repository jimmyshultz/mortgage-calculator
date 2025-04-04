"use client";

import React, { useState, useEffect, useRef } from 'react';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 border-none focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
        <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-16 right-0 left-0 bg-blue-900 shadow-lg transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <a 
                href="/" 
                className="block py-2 px-4 text-white hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/preapproval-calculator" 
                className="block py-2 px-4 text-white hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Preapproval Calculator
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="block py-2 px-4 text-white hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                className="block py-2 px-4 text-white hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default MobileNavigation; 