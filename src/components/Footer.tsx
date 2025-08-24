import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6" style={{ backgroundColor: 'var(--coffee)' }}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content - Compact Single Column */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--almond)' }}>
            Aryan Saini
          </h3>
          <p className="text-sm mb-3 max-w-xl mx-auto" style={{ color: 'var(--chamoisee)' }}>
            Data Scientist & ML Engineer passionate about AI, cloud computing, and DevOps.
          </p>
          
          {/* Social Icons - Smaller */}
          <div className="flex justify-center space-x-3 mb-3">
            <a 
              href="https://github.com/androaryaani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-2 hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
            >
              <Github size={16} style={{ color: 'var(--almond)' }} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-saini-08a7052b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-2 hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
            >
              <Linkedin size={16} style={{ color: 'var(--almond)' }} />
            </a>
            <a 
              href="mailto:aryansaini941388@gmail.com"
              className="glass-card p-2 hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
            >
              <Mail size={16} style={{ color: 'var(--almond)' }} />
            </a>
            <a 
              href="tel:+919414966535"
              className="glass-card p-2 hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
            >
              <Phone size={16} style={{ color: 'var(--almond)' }} />
            </a>
          </div>

          {/* Quick Links - Horizontal with dots */}
          <nav className="flex flex-wrap justify-center gap-3 text-sm mb-4">
            <a 
              href="#hero" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Home
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#about" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              About
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#skills" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Skills
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#projects" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Projects
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#timeline" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Timeline
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#certificates" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Certificates
            </a>
            <span style={{ color: 'var(--chamoisee)' }}>•</span>
            <a 
              href="#contact" 
              className="hover:text-[var(--tan)] transition-colors duration-300"
              style={{ color: 'var(--chamoisee)' }}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom Footer - Single Line */}
        <div className="border-t border-[var(--tan)] pt-3">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-sm mb-2 sm:mb-0" style={{ color: 'var(--almond)' }}>
              © {currentYear} Aryan Saini. Made with{' '}
              <Heart size={14} className="inline mx-1 text-red-400" fill="currentColor" />{' '}
              and lots of coffee.
            </p>
            
            <div className="flex items-center space-x-3">
              <span className="text-xs" style={{ color: 'var(--chamoisee)' }}>
                Built with React & TypeScript
              </span>
              <button
                onClick={scrollToTop}
                className="glass-card p-2 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
                title="Back to top"
              >
                <ArrowUp size={16} style={{ color: 'var(--almond)' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;