'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode toggle with memory
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <nav className="font-jakarta w-full bg-darkblue dark:bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo4.png"
            alt="Logo"
            width={120}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2348169273808" className="text-sm">
            Call Us: +2348169273808
          </a>

          <button className="px-6 py-2 bg-[#00aeff] text-white rounded-md hover:bg-blue transition duration-300 text-sm">
            Login / Join
          </button>

          <button onClick={toggleDarkMode} className="text-white ml-2">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="mr-3 text-white">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-darkblue dark:text-white px-4 pb-6 pt-4 space-y-4 shadow transition-all">
          <NavLinks mobile />

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700 space-y-3">
            <a href="tel:+2348169273808" className="block text-sm">
              Call Us: +2348169273808
            </a>
            <button className="w-full px-6 py-2 bg-[#00aeff] text-white rounded hover:bg-darkblue transition duration-300 text-sm">
              Sign In / Join
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClasses = mobile ? 'block py-1 text-sm' : 'text-sm';
  const hoverClass = 'hover:text-[#00aeff] dark:hover:text-[#00aeff] transition';

  return (
    <>
      <Link href="/" className={`${baseClasses} ${hoverClass}`}>
        Home
      </Link>
      <Link href="/listings" className={`${baseClasses} ${hoverClass}`}>
        Listings
      </Link>
      <Link href="/agents" className={`${baseClasses} ${hoverClass}`}>
        Agents
      </Link>
      <Link href="/about" className={`${baseClasses} ${hoverClass}`}>
        About
      </Link>
      <Link href="/contact" className={`${baseClasses} ${hoverClass}`}>
        Contact
      </Link>
      <Link href="/blog" className={`${baseClasses} ${hoverClass}`}>
        Blog
      </Link>
    </>
  );
};
