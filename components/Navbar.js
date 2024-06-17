// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <span className="text-2xl font-serif ml-2 text-primary">Indian Kitchen Eateries</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-lg text-secondary hover:text-primary transition duration-300">Home</Link>
          <Link href="/about" className="text-lg text-secondary hover:text-primary transition duration-300">About</Link>
          <Link href="/contact" className="text-lg text-secondary hover:text-primary transition duration-300">Contact</Link>
          <Link href="/cart" className="text-lg text-secondary hover:text-primary transition duration-300">Cart</Link>
          <Link href="/login" className="text-lg text-secondary hover:text-primary transition duration-300">Login</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary hover:text-primary transition duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-lg text-secondary hover:text-primary transition duration-300">Home</Link>
          <Link href="/about" className="block text-lg text-secondary hover:text-primary transition duration-300">About</Link>
          <Link href="/contact" className="block text-lg text-secondary hover:text-primary transition duration-300">Contact</Link>
          <Link href="/cart" className="block text-lg text-secondary hover:text-primary transition duration-300">Cart</Link>
          <Link href="/login" className="block text-lg text-secondary hover:text-primary transition duration-300">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
