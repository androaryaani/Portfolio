import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone, MapPin, Code2, Brain, Server } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--coffee)' }}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--almond)' }}>
              Aryan Saini
            </h3>
            <p className="text-base mb-4" style={{ color: 'var(--chamoisee)' }}>
              Data Scientist & ML Engineer passionate about combining AI, cloud computing, and DevOps to create innovative solutions. Currently focused on building expertise in multi-technology integration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/aryansaini"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
              >
                <Github size={20} style={{ color: 'var(--almond)' }} />
              </a>
              <a
                href="https://linkedin.com/in/aryansaini"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
              >
                <Linkedin size={20} style={{ color: 'var(--almond)' }} />
              </a>
              <a
                href="mailto:aryan@example.com"
                className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
              >
                <Mail size={20} style={{ color: 'var(--almond)' }} />
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
              >
                <Phone size={20} style={{ color: 'var(--almond)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--almond)' }}>
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#hero"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Projects
              </a>
              <a
                href="#timeline"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Timeline
              </a>
              <a
                href="#certificates"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Certificates
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--tan)] transition-colors duration-300"
                style={{ color: 'var(--chamoisee)' }}
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Skills Summary */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--almond)' }}>
              Core Expertise
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Brain size={16} style={{ color: 'var(--tan)' }} />
                <span style={{ color: 'var(--chamoisee)' }}>Data Science & AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server size={16} style={{ color: 'var(--tan)' }} />
                <span style={{ color: 'var(--chamoisee)' }}>Cloud & DevOps</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 size={16} style={{ color: 'var(--tan)' }} />
                <span style={{ color: 'var(--chamoisee)' }}>Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} style={{ color: 'var(--tan)' }} />
                <span style={{ color: 'var(--chamoisee)' }}>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[var(--tan)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-base" style={{ color: 'var(--almond)' }}>
                © {currentYear} Aryan Saini. Made with{' '}
                <Heart size={16} className="inline mx-1 text-red-400" fill="currentColor" />{' '}
                and lots of coffee. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{ color: 'var(--chamoisee)' }}>
                Built with React & TypeScript
              </span>
              <button
                onClick={scrollToTop}
                className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: 'rgba(237, 224, 212, 0.1)' }}
                title="Back to top"
              >
                <ArrowUp size={20} style={{ color: 'var(--almond)' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;