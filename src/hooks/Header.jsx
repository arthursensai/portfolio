import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKey);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [mobileMenuOpen]);
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };
  
  return (
    <header className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-bold text-4xl text-gray-800 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            M<span className="text-blue-600">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const Icon = item.icon;
              
              return (
                <div key={item.href} className="relative py-4">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-1 font-medium transition duration-300 ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <Icon size={16} className="hidden sm:block" />
                    {item.label}
                  </a>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                  )}
                </div>
              );
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden flex items-center text-gray-700 hover:text-blue-600 transition duration-300" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button> 
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with animation */}
      <div 
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMobileMenuOpen(false);
          }
        }}
      >
        <div 
          className={`w-64 bg-white h-full p-5 shadow-xl transform transition-all duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end">
            <button 
              className="text-gray-700 hover:text-blue-600 transition duration-300" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col mt-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const Icon = item.icon;
              
              return (
                <div key={item.href} className="relative">
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-2 font-medium transition duration-300 py-3 ${
                      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </a>
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-blue-600 rounded-r my-auto top-0 bottom-0"></div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;