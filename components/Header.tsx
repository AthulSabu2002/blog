"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearch } from '../hooks/useSearch';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    showResults,
    setShowResults,
    searchError,
    searchRef
  } = useSearch();

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
          
          {/* Search Bar */}
          <div className="relative hidden md:block flex-1 mx-8" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
              />
              <div className="absolute right-3 top-2.5">
                {isSearching ? (
                  <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Search Results */}
            {showResults && searchQuery.trim() !== '' && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                {isSearching ? (
                  <div className="px-4 py-3 text-sm text-gray-500">Searching...</div>
                ) : searchError ? (
                  <div className="px-4 py-3 text-sm text-red-500">Not found</div>
                ) : searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((post) => (
                      <li key={post.id} className="border-b border-gray-100 last:border-0">
                        <Link 
                          href={`/posts/${post.id}`}
                          className="block px-4 py-2 hover:bg-gray-50"
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery('');
                          }}
                        >
                          <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                          <p className="text-sm text-gray-500 truncate">{post.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>
          
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
          className={`md:hidden fixed left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 opacity-100' : 'top-[-100%] opacity-0'
          }`}
        >
          {/* Mobile Search Bar */}
          <div className="px-4 pt-4 pb-2" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
              />
              <div className="absolute right-3 top-2.5">
                {isSearching ? (
                  <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Mobile Search Results */}
            {showResults && searchQuery.trim() !== '' && (
              <div className="mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {isSearching ? (
                  <div className="px-4 py-3 text-sm text-gray-500">Searching...</div>
                ) : searchError ? (
                  <div className="px-4 py-3 text-sm text-red-500">Not found</div>
                ) : searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((post) => (
                      <li key={post.id} className="border-b border-gray-100 last:border-0">
                        <Link 
                          href={`/blog/${post.id}`}
                          className="block px-4 py-2 hover:bg-gray-50"
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery('');
                            setIsMenuOpen(false);
                          }}
                        >
                          <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                          <p className="text-sm text-gray-500 truncate">{post.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">No results found</div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
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