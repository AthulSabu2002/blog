"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Beyond UI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Homepage
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About us
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact us
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-gray-900 transition-colors">
              Demo
            </Link>
            <Link href="/get-started" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out text-center ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-4 pt-2">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              Homepage
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              About us
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              Features
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              Contact us
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-gray-900 transition-colors px-2 py-1">
              Demo
            </Link>
            <Link href="/get-started" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;