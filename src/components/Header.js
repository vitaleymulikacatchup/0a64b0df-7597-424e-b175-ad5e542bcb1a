import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const fadeInPreset = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: 'easeOut' }
});

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const MotionHeader = shouldReduceMotion ? 'header' : motion.header;
  const motionProps = shouldReduceMotion ? {} : fadeInPreset(0, 0.8);

  return (
    <MotionHeader 
      {...motionProps}
      className="relative bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-900">
              Teplin
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="nav-link">
              Login
            </a>
            <a href="#get-started" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-primary-900 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
            >
              Services
            </a>
            <a
              href="#work"
              className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
            >
              Work
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
            >
              About
            </a>
            <div className="pt-4 pb-3 border-t border-gray-100">
              <a
                href="#login"
                className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 rounded-md"
              >
                Login
              </a>
              <a
                href="#get-started"
                className="block mx-3 mt-2 btn-primary text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </MotionHeader>
  );
}

export default Header;