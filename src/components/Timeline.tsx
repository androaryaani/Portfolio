import React, { useEffect, useRef } from 'react';
import { GraduationCap, Code2, Briefcase, Brain, Server, Bot, Award, Rocket } from 'lucide-react';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timelineItems = document.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-slide-in');
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: 'Early 2022',
      title: 'Programming Foundation',
      description: 'Started my journey into programming and technology. Began learning fundamental programming concepts and exploring different technologies.',
      icon: <Code2 size={24} />,
      side: 'left'
    },
    {
      year: 'July 2023',
      title: 'BCA in AI & Data Science',
      description: 'Enrolled in Bachelor of Computer Applications with specialization in Artificial Intelligence & Data Science at Vivekananda Global University. Started formal education in AI/ML concepts.',
      icon: <GraduationCap size={24} />,
      side: 'right'
    },
    {
      year: 'Mid 2024',
      title: 'AWS Cloud Certification',
      description: 'Completed AWS Cloud with Artificial Intelligence (AI) Workshop certification. Gained expertise in cloud computing, AI services, and AWS infrastructure.',
      icon: <Brain size={24} />,
      side: 'left'
    },
    {
      year: 'Late 2024',
      title: 'Red Hat Linux Mastery',
      description: 'Achieved Red Hat Linux and enterprise solutions certification. Developed strong foundation in Linux system administration and enterprise technologies.',
      icon: <Server size={24} />,
      side: 'right'
    },
    {
      year: 'Late 2024',
      title: 'LinkedIn Professional Development',
      description: 'Completed LinkedIn Learning professional certification program. Enhanced career development skills and professional networking capabilities.',
      icon: <Award size={24} />,
      side: 'left'
    },
    {
      year: 'Early 2025',
      title: 'National Exhibition Participation',
      description: 'Participated in national level exhibition showcasing technical projects and innovations. Gained recognition for presentation and technical excellence.',
      icon: <Award size={24} />,
      side: 'right'
    },
    {
      year: 'Mid 2025',
      title: 'Hackathon Achievement',
      description: 'Participated in competitive hackathon and achieved recognition for innovative problem-solving and coding skills. Demonstrated ability to work under pressure and deliver creative solutions.',
      icon: <Code2 size={24} />,
      side: 'left'
    },
    {
      year: 'June 2, 2025',
      title: 'DevOps & AI Internship Begins',
      description: 'Started internship at Linux World Informatics Private Limited. Focused on DevOps practices, Generative AI, and Agentic AI technologies with hands-on industry experience.',
      icon: <Briefcase size={24} />,
      side: 'left'
    },
    {
      year: 'July 29-31, 2025',
      title: 'Startup Launch - The Creator Program 2025',
      description: 'In the final 3 days of internship, participated in "Hour of Legacy" - a 72-hour non-stop innovation sprint. Under mentorship of Mr. Vimal Daga Sir, ideated and launched a complete startup from scratch with slogan "Your Legal Bridge to Justice". Built solution, logo, vision, and presented with confidence.',
      icon: <Rocket size={24} />,
      side: 'right'
    },
    {
      year: 'August 1, 2025',
      title: 'Internship Completion & Certification',
      description: 'Successfully completed 2-month intensive internship program at Linux World Informatics. Received professional certification in DevOps, GenAI, and Agentic AI, culminating with successful startup launch.',
      icon: <Award size={24} />,
      side: 'left'
    },
    {
      year: 'August 2025',
      title: 'Entrepreneur & Technical Expert',
      description: 'Transitioned from intern to entrepreneur with startup launch experience. Achieved multiple professional certifications and built comprehensive expertise in AI, cloud computing, and startup development.',
      icon: <Bot size={24} />,
      side: 'right'
    },
    {
      year: 'Present',
      title: 'Data Science Preparation & Skill Building',
      description: 'Currently focused on intensive Data Science preparation, building strong foundation in machine learning, statistics, and analytics. Leveraging internship experience and startup knowledge to strengthen DS expertise.',
      icon: <Brain size={24} />,
      side: 'left'
    },
    {
      year: '2026 & Beyond',
      title: 'Multi-Technology Innovation Vision',
      description: 'Dream to create innovative solutions by combining Data Science + AWS + Agentic AI + Generative AI + DevOps + MLOps. Goal to build cutting-edge products that integrate all these technologies for revolutionary impact in the tech industry.',
      icon: <GraduationCap size={24} />,
      side: 'right'
    }
  ];

  return (
    <section id="timeline" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            My Journey
          </h2>
          <p className="text-xl" style={{ color: 'var(--chamoisee)' }}>
            Education and experience timeline
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--tan)]"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center mb-12 opacity-0 transform ${
                item.side === 'left' ? 'translate-x-10' : '-translate-x-10'
              } transition-all duration-700`}
            >
              {/* Left side content */}
              {item.side === 'left' && (
                <div className="w-1/2 pr-12 text-right">
                  <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm font-semibold mb-2" style={{ color: 'var(--raw-umber)' }}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--coffee)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--chamoisee)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center timeline-dot z-10">
                <div style={{ color: 'var(--coffee)' }}>
                  {item.icon}
                </div>
              </div>

              {/* Right side content */}
              {item.side === 'right' && (
                <div className="w-1/2 pl-12 ml-auto">
                  <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-sm font-semibold mb-2" style={{ color: 'var(--raw-umber)' }}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--coffee)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--chamoisee)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Empty space for opposite side */}
              {item.side === 'left' && <div className="w-1/2"></div>}
              {item.side === 'right' && <div className="w-1/2"></div>}
            </div>
          ))}
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

export default Timeline;