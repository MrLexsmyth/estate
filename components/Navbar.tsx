'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  return (
    <nav className="font-jakarta left-0 w-full bg-darkblue dark:bg-gray-400 text-white dark:text-white alexx">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo4.png"
            alt="Logo"
            width={65}
            height={30}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+2348169273808" className="text-sm">
            Call Us: +2348169273808
          </a>

          <button className="px-6 py-2 bg-[#00aeff] text-white border border-transparent rounded hover:bg-darkblue transition duration-500">
            Sign In
          </button>

          <button onClick={toggleDarkMode} className="ml-2">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="mr-3">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-6 space-y-4 shadow-md">
          <NavLinks mobile />

          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <a href="tel:+2348169273808" className="block text-sm">
              Call Us: +2348169273808
            </a>
<button className="w-full mt-3 px-6 py-2 bg-[#00aeff] text-white border border-transparent rounded hover:bg-darkblue hover:border-[#00aeff] transition duration-200">
  Sign In
</button>

          </div>
        </div>
      )}
    </nav>
  )
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const baseClasses = mobile ? 'block text-sm py-1' : 'text-sm'
  const hoverClass = 'hover:text-[#00aeff] dark:hover:text-[#00aeff] transition'

  return (
    <>
      <Link href="/" className={`${baseClasses} ${hoverClass}`}>Home</Link>
      <Link href="/listings" className={`${baseClasses} ${hoverClass}`}>Listings</Link>
      <Link href="/agents" className={`${baseClasses} ${hoverClass}`}>Agents</Link>
      <Link href="/about" className={`${baseClasses} ${hoverClass}`}>About</Link>
      <Link href="/contact" className={`${baseClasses} ${hoverClass}`}>Contact</Link>
      <Link href="/blog" className={`${baseClasses} ${hoverClass}`}>Blog</Link>
    </>
  )
}
