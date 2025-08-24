import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Aryan Saini';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setShowCursor(false);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative noise-bg">
      <div className="container mx-auto px-6 hero-split flex items-center">
        {/* Left Side - Text Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold glow-text">
              <span className={`${showCursor ? 'typing-cursor' : ''}`} style={{ color: 'var(--coffee)' }}>
                {displayText}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium" style={{ color: 'var(--coffee)' }}>
              Data Scientist | ML Engineer
            </h2>
            <p className="text-xl md:text-2xl italic" style={{ color: 'var(--chamoisee)' }}>
              Turning curiosity into multi technology.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/androaryaani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover:scale-110 transition-transform duration-300"
            >
              <Github size={24} style={{ color: 'var(--coffee)' }} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-saini-08a7052b1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover:scale-110 transition-transform duration-300"
            >
              <Linkedin size={24} style={{ color: 'var(--coffee)' }} />
            </a>
            <a 
              href="https://www.instagram.com/aryan_saini067" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={24} style={{ color: 'var(--coffee)' }} />
            </a>
            <a 
              href="mailto:aryansaini41388@gmail.com"
              className="glass-card p-4 hover:scale-110 transition-transform duration-300"
            >
              <Mail size={24} style={{ color: 'var(--coffee)' }} />
            </a>
            <a 
              href="tel:+919414966535"
              className="glass-card p-4 hover:scale-110 transition-transform duration-300"
            >
              <Phone size={24} style={{ color: 'var(--coffee)' }} />
            </a>
          </div>
        </div>

        {/* Right Side - Personal Photo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Main Photo Container - Clean without fog */}
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[var(--coffee)] shadow-2xl">
              <img
                src="/WhatsApp Image 2024-05-02 at 21..jpg"
                alt="Aryan Saini"
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Subtle Border Glow Effect - Only 0.3 opacity */}
            <div 
              className="absolute inset-0 rounded-full border-2 pointer-events-none"
              style={{
                borderColor: 'var(--coffee)',
                opacity: 0.3,
                boxShadow: `0 0 30px rgba(127, 85, 57, 0.3)`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <button 
          onClick={() => scrollToSection('#about')}
          className="glass-card p-4 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <ChevronDown size={24} style={{ color: 'var(--raw-umber)' }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;