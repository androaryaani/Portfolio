import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12" style={{ backgroundColor: 'var(--coffee)' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg" style={{ color: 'var(--almond)' }}>
              © 2024 Aryan Saini. Made with{' '}
              <Heart size={16} className="inline mx-1 text-red-400" fill="currentColor" />{' '}
              and lots of coffee.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a 
                href="#hero" 
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--almond)' }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--almond)' }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--almond)' }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--almond)' }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--almond)' }}
              >
                Contact
              </a>
            </nav>
            
            <button
              onClick={scrollToTop}
              className="glass-card p-3 hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
            >
              <ArrowUp size={20} style={{ color: 'var(--almond)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;