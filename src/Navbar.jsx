import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <div className="text-4xl font-bold text-yellow-700">La Bodega Café</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-yellow-700 text-lg">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-yellow-700 text-lg">Menu</a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-700 text-lg">Contact</a>
          <a
            href="https://www.clover.com/online-ordering/la-bodega-cafe-posen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-yellow-700 text-lg"
          >
            Order Online
          </a>
          <a href="#ice-cream" className="text-gray-700 hover:text-yellow-700 text-lg">Ice Cream</a>

          {/* Desktop Hamburger (Subsections) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-yellow-700 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-yellow-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md px-4 py-4 space-y-3 md:absolute md:right-4 md:top-20 md:w-64">
          {/* Mobile-only: main nav + divider */}
          <div className="block md:hidden space-y-2">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Home</a>
            <a href="#menu" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Menu</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Contact</a>
            <a
              href="https://www.clover.com/online-ordering/la-bodega-cafe-posen/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-yellow-700"
            >
              Order Online
            </a>
            <a href="#ice-cream" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Ice Cream</a>
            <hr className="border-t border-gray-300 my-2" />
          </div>

          {/* Always visible subsections: desktop & mobile */}
          <a href="#monthly-specials" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Monthly Specials</a>
          <a href="#breakfast" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Breakfast</a>
          <a href="#hot-coffee" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Hot Coffee</a>
          <a href="#cold-coffee" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Cold Coffee</a>
          <a href="#lunch" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Lunch</a>
          <a href="#sandwiches" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Sandwiches</a>
          <a href="#specialty-drinks" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Specialty Drinks</a>
          <a href="#dessert" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-yellow-700">Dessert</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
