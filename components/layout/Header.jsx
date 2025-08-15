'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Menu, X, ChevronDown } from 'lucide-react'
import AnimatedDropdown from '@/components/ui/animated-dropdown'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAcademiesOpen, setIsAcademiesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleAcademies = () => setIsAcademiesOpen(!isAcademiesOpen)

  const navItems = [
    { 
      name: 'Home', 
      href: '/',
    },
    { name: 'About', href: '/about' },
    { name: 'Our Academies', href: '#academies',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Ajmal Super 40', href: '/super40' },
        { name: 'Ajmal IAS Academy', href: '/ias' }
      ]
     },
    { name: 'News', href: '#news' },
    { name: 'Careers', href: '#careers' },
  ]

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <span className="text-gray-300 cursor-pointer"> Click here to join the AIIMS target batch 2025-26</span>
          </div>
        </div>
      </div>
      
      <header className="bg-gray-100 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  Ajmal Educare India Pvt Ltd
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="bg-gray-50/80 backdrop-blur-sm rounded-full px-6 py-2 border border-black-200/20">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.hasDropdown ? (
                      <AnimatedDropdown 
                        onItemClick={(academy) => {
                          window.location.href = academy.href;
                        }}
                      />
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>

          {/* Contact Us Button - Right Side */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              href="/contact"
              className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
            >
              Contact Us
              <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
              <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 py-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg py-2"
                        onClick={toggleAcademies}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isAcademiesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAcademiesOpen && (
                        <div className="ml-4 mt-4 space-y-4">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-primary transition-colors duration-300 py-1 text-base"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsAcademiesOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="#signin"
                className="block text-gray-800 hover:text-primary transition-colors duration-300 font-semibold text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </a>
              <Link
                href="/contact"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900 w-full mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
                <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path></svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  )
}

export default Header