import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl tracking-tight text-[#00A8E8]">
              Zynexx
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Services
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              How It Works
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-6"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                How It Works
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}