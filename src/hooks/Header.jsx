import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-gray-800">
            M<span className="text-blue-600">.</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition duration-300">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
          </nav>
          
          <button 
            className="md:hidden text-2xl text-gray-700" 
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button> 
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 bg-white h-full p-5">
            <div className="flex justify-end">
              <button 
                className="text-2xl text-gray-700" 
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mt-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;