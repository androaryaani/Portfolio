import React, { useEffect, useRef } from 'react';
import { Brain, Code, Database, Users, Target, Lightbulb, Rocket, Award } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = contentRef.current?.querySelectorAll('.animate-on-scroll');
          if (elements) {
            Array.from(elements).forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-slide-up');
              }, index * 200);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aboutData = {
    intro: {
      title: "About Me",
      subtitle: "Passionate Data Scientist & ML Engineer",
      description: "I'm a dedicated data scientist and machine learning engineer who specializes in combining Data Science + AWS + DevOps + Agentic AI + Generative AI to create innovative solutions. My approach focuses on methodology and workflow optimization, solving every problem with a comprehensive multi-technology strategy that drives real-world impact."
    },
    highlights: [
      {
        icon: <Brain size={28} />,
        title: "Data Science Expertise",
        description: "Specialized in machine learning, statistical analysis, and predictive modeling to extract meaningful insights from complex datasets."
      },
      {
        icon: <Code size={28} />,
        title: "Full-Stack Development",
        description: "Proficient in web development, automation, and creating end-to-end solutions from data processing to user interfaces."
      },
      {
        icon: <Database size={28} />,
        title: "Big Data & Analytics",
        description: "Experience with data pipelines, database management, and business intelligence tools for scalable data solutions."
      },
      {
        icon: <Rocket size={28} />,
        title: "Innovation Driven",
        description: "Constantly exploring cutting-edge technologies like AI, containerization, and cloud platforms to stay ahead of the curve."
      }
    ],
    stats: [
      { number: "10+", label: "Projects Completed" },
      { number: "2", label: "Years Learning" },
      { number: "5+", label: "Technologies Mastered" },
      { number: "100%", label: "Passion for Innovation" }
    ],
    values: [
      {
        icon: <Target size={24} />,
        title: "Problem Solving",
        description: "I approach every challenge with analytical thinking and creative solutions."
      },
      {
        icon: <Lightbulb size={24} />,
        title: "Continuous Learning",
        description: "Always staying updated with the latest trends and technologies in data science."
      },
      {
        icon: <Users size={24} />,
        title: "Collaboration",
        description: "Believe in the power of teamwork and knowledge sharing for better outcomes."
      },
      {
        icon: <Award size={24} />,
        title: "Quality Focus",
        description: "Committed to delivering high-quality, efficient, and scalable solutions."
      }
    ]
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[var(--almond)] noise-bg">
      <div className="container mx-auto px-6" ref={contentRef}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            {aboutData.intro.title}
          </h2>
          <p className="text-2xl font-semibold mb-6" style={{ color: 'var(--raw-umber)' }}>
            {aboutData.intro.subtitle}
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--chamoisee)' }}>
            {aboutData.intro.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2 glow-text" style={{ color: 'var(--coffee)' }}>
                {stat.number}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--chamoisee)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aboutData.highlights.map((highlight, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700 glass-card p-8 hover:scale-105 hover:shadow-xl transition-all duration-300"
              style={{
                background: 'rgba(237, 224, 212, 0.15)',
                backdropFilter: 'blur(15px)',
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[var(--tan)] flex-shrink-0">
                  <div style={{ color: 'var(--coffee)' }}>
                    {highlight.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--coffee)' }}>
                    {highlight.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--chamoisee)' }}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section - Removed heading */}
        <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[var(--dun)]">
                    <div style={{ color: 'var(--coffee)' }}>
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--coffee)' }}>
                  {value.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--chamoisee)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default About;