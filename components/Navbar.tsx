'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-display font-bold text-gradient">
              AION
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg bg-gradient-indigo-violet text-white font-medium button-glow"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-morphism border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#products"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 mx-3 text-center rounded-lg bg-gradient-indigo-violet text-white font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
