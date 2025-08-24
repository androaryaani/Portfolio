import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Download } from 'lucide-react';

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your actual certificates based on the files in the folder
  const certificates = [
    {
      id: 1,
      title: 'Professional Certificate',
      issuer: 'Aryan Saini Certification',
      date: '2024',
      description: 'Professional development and technical skills certification',
      fileUrl: '/certificates/Aryan saini.pdf',
      type: 'pdf',
      skills: ['Professional Development', 'Technical Skills']
    },
    {
      id: 2,
      title: 'Advanced Certification',
      issuer: 'Professional Institute',
      date: '2024',
      description: 'Advanced level certification in specialized technical domain',
      fileUrl: '/certificates/Aryan Saini (1).pdf',
      type: 'pdf',
      skills: ['Advanced Skills', 'Specialization']
    },
    {
      id: 3,
      title: 'Technical Excellence Certificate',
      issuer: 'Technical Authority',
      date: '2024',
      description: 'Recognition for technical excellence and innovation',
      fileUrl: '/certificates/Aryan Saini - 107.pdf',
      type: 'pdf',
      skills: ['Technical Excellence', 'Innovation']
    },
    {
      id: 4,
      title: 'AWS Certification',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'AWS cloud computing and services certification',
      fileUrl: '/certificates/aws.png',
      type: 'image',
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    },
    {
      id: 5,
      title: 'Red Hat Certification',
      issuer: 'Red Hat',
      date: '2024',
      description: 'Red Hat Linux and enterprise solutions certification',
      fileUrl: '/certificates/redhat.png',
      type: 'image',
      skills: ['Linux', 'Red Hat', 'System Administration']
    }
  ];

  const certificatesPerView = 3;
  const maxIndex = Math.max(0, certificates.length - certificatesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const downloadFile = (fileUrl: string, title: string, type: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    const extension = type === 'pdf' ? '.pdf' : '.png';
    link.download = `${title}${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            Certificates
          </h2>
          <p className="text-xl" style={{ color: 'var(--chamoisee)' }}>
            Professional certifications and achievements
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {certificates.length > certificatesPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
                style={{ color: 'var(--coffee)' }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full glass-card hover:scale-110 transition-all duration-300"
                style={{ color: 'var(--coffee)' }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Certificates Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / certificatesPerView)}%)` }}
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="glass-card p-6 h-full hover:scale-105 transition-all duration-300 group">
                    {/* Certificate Viewer */}
                    <div className="mb-4">
                      <div className="w-full h-64 rounded-lg overflow-hidden glass-card">
                        {cert.type === 'pdf' ? (
                          <iframe
                            src={cert.fileUrl}
                            className="w-full h-full"
                            title={cert.title}
                            style={{ border: 'none' }}
                          />
                        ) : (
                          <img
                            src={cert.fileUrl}
                            alt={cert.title}
                            className="w-full h-full object-contain bg-white"
                            style={{ borderRadius: '8px' }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--coffee)' }}>
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--raw-umber)' }}>
                        {cert.issuer}
                      </p>
                      <p className="text-sm mb-3" style={{ color: 'var(--chamoisee)' }}>
                        {cert.date}
                      </p>
                      <p className="text-sm mb-4" style={{ color: 'var(--chamoisee)' }}>
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs rounded-full glass-card"
                          style={{ color: 'var(--coffee)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => downloadFile(cert.fileUrl, cert.title, cert.type)}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card hover:scale-105 transition-all duration-300"
                        style={{ color: 'var(--coffee)' }}
                      >
                        <Download size={18} />
                        <span className="text-sm font-semibold">Download Certificate</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {certificates.length > certificatesPerView && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'glass-card scale-125' 
                      : 'bg-opacity-50 glass-card'
                  }`}
                  style={{ 
                    backgroundColor: currentIndex === index ? 'var(--coffee)' : 'var(--tan)' 
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;