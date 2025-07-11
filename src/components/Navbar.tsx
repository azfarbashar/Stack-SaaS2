'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from './ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Stack SaaS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <Link href="/features" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Pricing
            </Link>
            <Button variant="ghost" size="sm" className="ml-4">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/features"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <div className="mt-4 space-y-2">
              <Button fullWidth>Sign In</Button>
              <Button variant="primary" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
