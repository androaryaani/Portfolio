import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Phone, Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const contactContent = document.querySelectorAll('.contact-content');
          contactContent.forEach((content, index) => {
            setTimeout(() => {
              content.classList.add('animate-slide-in');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Check for admin access (press Ctrl+Shift+A to mark as owner)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        const isOwner = confirm('Mark this device as portfolio owner? (You will not receive visitor notifications from this device)');
        if (isOwner) {
          localStorage.setItem('portfolio_owner', 'true');
          alert('Device marked as portfolio owner. You will not receive visitor notifications from this device.');
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Enhanced visitor tracking with real SMS and email notifications
    const sendVisitorNotification = async () => {
      try {
        // Get detailed visitor info
        const visitorInfo = {
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          referrer: document.referrer || 'Direct visit',
          url: window.location.href,
          screenResolution: `${screen.width}x${screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          browser: navigator.userAgent.includes('Chrome') ? 'Chrome' :
                   navigator.userAgent.includes('Firefox') ? 'Firefox' :
                   navigator.userAgent.includes('Safari') ? 'Safari' : 'Other',
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
          country: 'India' // You can enhance this with IP geolocation if needed
        };

        // Check if not own visit
        const isOwnVisit = localStorage.getItem('portfolio_owner') === 'true';
        if (!isOwnVisit) {
          // Send email notification via FormSubmit
          const emailFormData = new FormData();
          emailFormData.append('_subject', '🚨 Portfolio Visitor Alert - Someone is viewing your portfolio!');
          emailFormData.append('visitor_time', visitorInfo.timestamp);
          emailFormData.append('visitor_browser', visitorInfo.browser);
          emailFormData.append('visitor_device', visitorInfo.isMobile ? 'Mobile' : 'Desktop');
          emailFormData.append('visitor_language', visitorInfo.language);
          emailFormData.append('visitor_platform', visitorInfo.platform);
          emailFormData.append('visitor_referrer', visitorInfo.referrer);
          emailFormData.append('portfolio_url', visitorInfo.url);
          emailFormData.append('screen_resolution', visitorInfo.screenResolution);
          emailFormData.append('visitor_timezone', visitorInfo.timezone);
          emailFormData.append('full_user_agent', visitorInfo.userAgent);
          emailFormData.append('_next', window.location.href);
          emailFormData.append('_captcha', 'false');

          // Send email notification
          fetch('https://formsubmit.co/aryansaini941388@gmail.com', {
            method: 'POST',
            body: emailFormData
          }).catch(error => console.log('Email notification failed:', error));

          // Send SMS notification via Netlify Function (TextLocal API)
          fetch('/.netlify/functions/visitor-sms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitorInfo)
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              console.log('✅ SMS notification sent successfully to +91-9414966535');
            } else {
              console.log('❌ SMS notification failed:', data.error);
            }
          })
          .catch(error => {
            console.log('🔧 SMS service not configured yet. Follow SMS_SETUP_GUIDE.md');
          });

          console.log('📧 Email notification sent, 📱 SMS notification attempted');
        } else {
          console.log('🚫 Visitor notification skipped - portfolio owner device');
        }
      } catch (error) {
        console.log('❌ Visitor tracking failed:', error);
      }
    };

    // Send visitor notification after 3 seconds (to ensure page is fully loaded)
    const visitorTimer = setTimeout(sendVisitorNotification, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(visitorTimer);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // Check if we're on localhost
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isLocalhost) {
      // On localhost, prevent default and show demo message
      e.preventDefault();
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        alert('Form is ready! FormSubmit will work when deployed. On localhost, emails are not sent.');
      }, 1000);
    } else {
      // On deployed site, let the form submit naturally to FormSubmit
      setIsSubmitting(true);
      // Don't prevent default - let FormSubmit handle it
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[var(--almond)] noise-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            Get In Touch
          </h2>
          <p className="text-xl" style={{ color: 'var(--chamoisee)' }}>
            Let's collaborate on something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-content opacity-0 transform -translate-x-10 transition-all duration-700">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--coffee)' }}>
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="glass-card p-3 rounded-full">
                    <Phone size={20} style={{ color: 'var(--coffee)' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--coffee)' }}>Phone</p>
                    <p style={{ color: 'var(--chamoisee)' }}>+91-9414966535</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="glass-card p-3 rounded-full">
                    <Mail size={20} style={{ color: 'var(--coffee)' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--coffee)' }}>Email</p>
                    <p style={{ color: 'var(--chamoisee)' }}>aryansaini941388@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="glass-card p-3 rounded-full">
                    <MapPin size={20} style={{ color: 'var(--coffee)' }} />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--coffee)' }}>Location</p>
                    <p style={{ color: 'var(--chamoisee)' }}>India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--tan)]">
                <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--coffee)' }}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/androaryaani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                  >
                    <Github size={20} style={{ color: 'var(--coffee)' }} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aryan-saini-08a7052b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin size={20} style={{ color: 'var(--coffee)' }} />
                  </a>
                  <a 
                    href="https://www.instagram.com/aryan_saini067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram size={20} style={{ color: 'var(--coffee)' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-content opacity-0 transform translate-x-10 transition-all duration-700">
            <div className="glass-card p-8">
              <form
                action="https://formsubmit.co/aryansaini941388@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="🚀 New Contact Form Submission from Portfolio!" />
                <input type="hidden" name="_next" value={window.location.origin + "/thank-you.html"} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I'll get back to you soon." />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--coffee)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--tan)] focus:outline-none focus:ring-2 focus:ring-[var(--raw-umber)] bg-white/50 backdrop-blur-sm"
                    style={{ color: 'var(--coffee)' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--coffee)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--tan)] focus:outline-none focus:ring-2 focus:ring-[var(--raw-umber)] bg-white/50 backdrop-blur-sm"
                    style={{ color: 'var(--coffee)' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--coffee)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--tan)] focus:outline-none focus:ring-2 focus:ring-[var(--raw-umber)] bg-white/50 backdrop-blur-sm resize-none"
                    style={{ color: 'var(--coffee)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 glass-card hover:scale-105 disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--coffee)',
                    color: 'var(--almond)'
                  }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </div>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-slide-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;