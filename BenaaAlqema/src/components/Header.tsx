import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg ml-3">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                ق
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">القمة</h1>
              <p className="text-sm text-gray-600">للمقاولات العامة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              الرئيسية
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              من نحن
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              خدماتنا
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              مشاريعنا
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              اتصل بنا
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 ml-2" />
              <span>+966 12 345 6789</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              احصل على عرض سعر
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">من نحن</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">خدماتنا</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">مشاريعنا</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</a>
              <div className="flex items-center text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4 ml-2" />
                <span>+966 12 345 6789</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit">
                احصل على عرض سعر
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;