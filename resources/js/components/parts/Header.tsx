import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <svg className="w-10 h-10 text-deep-orange" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#FF5722" strokeWidth="4" />
            <path d="M50 15L84.641 75H15.359L50 15Z" stroke="#FF5722" strokeWidth="4" />
            <path d="M50 85L15.359 25H84.641L50 85Z" stroke="#FF5722" strokeWidth="4" />
            <circle cx="50" cy="50" r="5" fill="#FF5722" />
          </svg>
          <div className="flex flex-col">
            <span className="font-playfair font-bold text-xl text-deep-orange logo-text-width">Tantra Yoga Vidya</span>
            <span className="sanskrit-text text-sm text-deep-orange logo-text-width">तन्त्र योग विद्या</span>
          </div>
        </a>

        {/* Desktop Navigation and Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8 font-medium text-black">
            <a href="#courses" className="hover:text-deep-orange transition-colors">Courses</a>
            <a href="#resources" className="hover:text-deep-orange transition-colors">Resources</a>
            <a href="#blog" className="text-deep-orange font-medium">Blog</a>
            <a href="#community" className="hover:text-deep-orange transition-colors">Community</a>
            <a href="#retreats" className="hover:text-deep-orange transition-colors">Retreats</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-black font-medium hover:text-deep-orange transition-colors">Login</a>
            <a href="#" className="btn-primary font-bold py-2 px-7 rounded-md hover:scale-105 transition-transform">Sign Up</a>
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-gray-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 py-4">
          <nav className="space-y-2">
            <a href="#courses" className="block py-2 text-black hover:bg-gray-50">Courses</a>
            <a href="#resources" className="block py-2 text-black hover:bg-gray-50">Resources</a>
            <a href="#blog" className="block py-2 text-black hover:bg-gray-50 font-medium">Blog</a>
            <a href="#community" className="block py-2 text-black hover:bg-gray-50">Community</a>
            <a href="#retreats" className="block py-2 text-black hover:bg-gray-50">Retreats</a>
          </nav>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <a href="#" className="block text-center text-black font-medium py-2 px-5 rounded-md border border-gray-300 hover:bg-gray-100">Login</a>
            <a href="#" className="mt-2 block text-center btn-primary font-bold py-2 px-7 rounded-md hover:scale-105 transition-transform">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;