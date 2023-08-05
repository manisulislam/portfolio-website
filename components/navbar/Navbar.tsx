'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          _MD ANISUL ISLAM
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <div className="flex md:hidden">
          <button type="button" className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400" onClick={toggleMobileMenu}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3.5 5.5a1 1 0 011-1h14a1 1 0 110 2h-14a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2h-14a1 1 0 01-1-1zm1 4a1 1 0 100 2h10a1 1 0 100-2h-10z" />
            </svg>
          </button>
        </div>

        {/* Navigation links (visible on medium and larger screens) */}
        <div className={`hidden md:flex md:items-center md:space-x-4 ${isMobileMenuOpen ? 'hidden' : ''}`}>
          <Link href={"/"} className="text-white hover:text-gray-400">Home</Link>
          <Link href={"/skills"} className="text-white hover:text-gray-400">Skills</Link>
          <Link href={"/projects"} className="text-white hover:text-gray-400">Projects</Link>
          <Link href={"/contact"} className="text-white hover:text-gray-400">Contact</Link>
          
        </div>
      </div>

      {/* Mobile menu (hidden on medium and larger screens) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="px-2 py-3 space-y-2">
          <li><a href="#" className="block text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="block text-white hover:text-gray-400">Services</a></li>
          <li><a href="#" className="block text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
