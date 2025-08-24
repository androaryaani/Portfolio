import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, Database, Palette, Terminal, GitBranch, BarChart3, FileText, Play,
  Brain, Cpu, Container, Monitor, Settings, Users, MessageSquare, Target,
  Wrench, Cloud, Server, Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Programming');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const skillCards = document.querySelectorAll('.skill-card');
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-bounce-in');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  const skillCategories = {
    'Programming': [
      { name: 'Python', icon: <Code size={32} />, level: 90, color: 'var(--coffee)' },
      { name: 'HTML/CSS', icon: <FileText size={32} />, level: 85, color: 'var(--tan)' },
      { name: 'SQL', icon: <Database size={32} />, level: 80, color: 'var(--coffee)' },
    ],
    'Technical': [
      { name: 'Machine Learning', icon: <Brain size={32} />, level: 85, color: 'var(--coffee)' },
      { name: 'Artificial Intelligence', icon: <Cpu size={32} />, level: 80, color: 'var(--raw-umber)' },
      { name: 'Data Science', icon: <BarChart3 size={32} />, level: 90, color: 'var(--chamoisee)' },
      { name: 'Docker', icon: <Container size={32} />, level: 75, color: 'var(--tan)' },
      { name: 'Linux', icon: <Terminal size={32} />, level: 80, color: 'var(--coffee)' },
      { name: 'Jenkins', icon: <Settings size={32} />, level: 65, color: 'var(--raw-umber)' },
      { name: 'Cloud Computing', icon: <Cloud size={32} />, level: 70, color: 'var(--chamoisee)' },
      { name: 'DevOps', icon: <Server size={32} />, level: 70, color: 'var(--tan)' }
    ],
    'Soft Skills': [
      { name: 'Problem Solving', icon: <Target size={32} />, level: 95, color: 'var(--coffee)' },
      { name: 'Team Collaboration', icon: <Users size={32} />, level: 90, color: 'var(--raw-umber)' },
      { name: 'Communication', icon: <MessageSquare size={32} />, level: 85, color: 'var(--chamoisee)' },
      { name: 'Project Management', icon: <Settings size={32} />, level: 80, color: 'var(--tan)' },
      { name: 'Critical Thinking', icon: <Brain size={32} />, level: 90, color: 'var(--coffee)' },
      { name: 'Adaptability', icon: <Zap size={32} />, level: 95, color: 'var(--raw-umber)' }
    ],
    'Tools': [
      { name: 'VS Code', icon: <Terminal size={32} />, level: 90, color: 'var(--coffee)' },
      { name: 'Jupyter Notebook', icon: <Play size={32} />, level: 85, color: 'var(--raw-umber)' },
      { name: 'Git/GitHub', icon: <GitBranch size={32} />, level: 85, color: 'var(--chamoisee)' },
      { name: 'Power BI', icon: <BarChart3 size={32} />, level: 80, color: 'var(--tan)' },
      { name: 'Canva', icon: <Palette size={32} />, level: 75, color: 'var(--coffee)' },
      { name: 'Streamlit', icon: <Monitor size={32} />, level: 80, color: 'var(--raw-umber)' },
      { name: 'IntelliJ IDEA', icon: <Code size={32} />, level: 80, color: 'var(--chamoisee)' },
      { name: 'Android Studio', icon: <Monitor size={32} />, level: 75, color: 'var(--tan)' },
      { name: 'MySQL', icon: <Database size={32} />, level: 85, color: 'var(--coffee)' },
      { name: 'Anaconda', icon: <Terminal size={32} />, level: 90, color: 'var(--raw-umber)' },
      { name: 'AWS CLI', icon: <Cloud size={32} />, level: 70, color: 'var(--chamoisee)' }
    ]
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            Skills & Expertise
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--chamoisee)' }}>
            Comprehensive technical and professional capabilities
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-full glass-card transition-all duration-300 font-semibold ${
                  activeCategory === category 
                    ? 'bg-[var(--coffee)] text-[var(--almond)] scale-105' 
                    : 'hover:bg-[var(--tan)] hover:scale-105'
                }`}
                style={{
                  color: activeCategory === category ? 'var(--almond)' : 'var(--coffee)',
                  backgroundColor: activeCategory === category ? 'var(--coffee)' : 'transparent'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="skill-card glass-card p-6 text-center opacity-0 transform scale-75 transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'rgba(221, 184, 146, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="mb-4 flex justify-center">
                <div 
                  className="p-4 rounded-full transition-transform duration-300 hover:rotate-12"
                  style={{ backgroundColor: 'var(--tan)', color: skill.color }}
                >
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--coffee)' }}>
                {skill.name}
              </h3>
              
              {/* Skill Level Bar */}
              <div className="w-full bg-[var(--dun)] rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}40`
                  }}
                ></div>
              </div>
              <span className="text-sm font-medium" style={{ color: 'var(--chamoisee)' }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--coffee)' }}>
              Continuous Learning Journey
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--chamoisee)' }}>
              Before diving into data science, I explored various technologies driven by curiosity. I built websites, 
              developed mobile applications, and worked with different design tools. This multi-technology approach 
              helped me create small projects across different domains - from web development to app development. 
              All of this was self-learned, which strengthened my foundation and gave me a comprehensive understanding 
              of technology before specializing in data science.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-bounce-in {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        
        .skill-card:hover .skill-level-bar {
          box-shadow: 0 0 20px rgba(127, 85, 57, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Skills;