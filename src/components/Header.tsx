import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="glass-card mx-4 mt-4 px-6 py-4 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold glow-text" style={{ color: 'var(--coffee)' }}>
            AS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-lg font-medium hover:text-[var(--raw-umber)] transition-colors duration-300 relative group"
                style={{ color: 'var(--coffee)' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--raw-umber)] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Download Resume Button */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                // Download the resume PDF
                const link = document.createElement('a');
                link.href = '/resume-aryan.pdf';
                link.download = 'Aryan-Resume.pdf';
                link.click();
              }}
              className="flex items-center space-x-2 glass-card px-6 py-3 hover:scale-105 transition-transform duration-300 font-semibold"
              style={{
                backgroundColor: 'var(--coffee)',
                color: 'var(--almond)'
              }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden glass-card p-3"
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: 'var(--coffee)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--coffee)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[var(--tan)]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg font-medium hover:text-[var(--raw-umber)] transition-colors duration-300"
                  style={{ color: 'var(--coffee)' }}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  // Download the resume PDF
                  const link = document.createElement('a');
                  link.href = '/resume-aryan.pdf';
                  link.download = 'Aryan-Resume.pdf';
                  link.click();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 glass-card px-6 py-3 mt-4 font-semibold justify-center"
                style={{
                  backgroundColor: 'var(--coffee)',
                  color: 'var(--almond)'
                }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;