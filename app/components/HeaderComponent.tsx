"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const HeaderComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-teal-600">
                VisionSnap AI
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                Insightful image recognition at your fingertips
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a
              href="#"
              className="text-gray-700 hover:text-teal-600 transition duration-150"
            >
              Home
            </a>
            <a
              href="#decode-your-image"
              className="text-gray-700 hover:text-teal-600 transition duration-150"
            >
              Decode Your Image
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-teal-600 transition duration-150"
            >
              Features
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 text-sm font-medium">
            <a
              href="#"
              className="block text-gray-700 hover:text-teal-600 transition duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#decode-your-image"
              className="block text-gray-700 hover:text-teal-600 transition duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              Decode Your Image
            </a>
            <a
              href="#features"
              className="block text-gray-700 hover:text-teal-600 transition duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
