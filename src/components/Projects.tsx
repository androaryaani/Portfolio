import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const projectsData = [
  {
    title: "WeatherWatch",
    description: "Advanced weather prediction and monitoring system using machine learning algorithms. Features real-time weather data analysis, forecasting models, and interactive visualizations for accurate weather predictions.",
    tech: ["Python", "Machine Learning", "Streamlit", "Weather API", "Data Analysis"],
    category: "Machine Learning",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/WeatherWatch",
    demo: "https://weather-watch.streamlit.app/"
  },
  {
    title: "Food Delivery Prediction",
    description: "Machine learning model for predicting food delivery times and optimizing delivery routes. Uses advanced algorithms to analyze historical data and provide accurate delivery time estimates.",
    tech: ["Python", "Machine Learning", "Streamlit", "Predictive Analytics", "Data Science"],
    category: "Machine Learning",
    image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/food-del-predication",
    demo: "https://food-del-predication.streamlit.app/"
  },
  {
    title: "VGUTDP Research System",
    description: "Advanced research management platform for VGUTDP with comprehensive data handling, automated workflows, and collaborative features for academic research projects.",
    tech: ["Research Management", "Data Processing", "Academic Tools", "Collaboration"],
    category: "Web-app",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/vgutdp",
    demo: "#"
  },
  {
    title: "Legalyze India",
    description: "Comprehensive legal analysis platform for Indian law with advanced search capabilities, case studies, and legal document processing. Features intelligent legal research tools and case management system.",
    tech: ["Legal Tech", "Document Processing", "Search Engine", "Case Management", "Indian Law"],
    category: "Web-app",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/legalyze-india",
    demo: "https://legalyzeindia.netlify.app/"
  },
  {
    title: "Streamlit Hand Game",
    description: "Interactive Tic-Tac-Toe game with computer vision hand detection. Built using Streamlit and OpenCV for real-time gesture recognition.",
    tech: ["Python", "Streamlit", "OpenCV", "Computer Vision"],
    category: "Artificial Intelligence",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani",
    demo: "#"
  },
  {
    title: "Personal AI Chatbot",
    description: "Custom chatbot built with Streamlit featuring natural language processing and personalized responses for various use cases.",
    tech: ["Python", "Streamlit", "NLP", "AI"],
    category: "Artificial Intelligence",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani",
    demo: "#"
  },
  {
    title: "Python Menu Based Project",
    description: "Interactive menu-driven Python application with multiple automation tools and utilities. Features command-line interface with organized menu system for various programming tasks and workflows.",
    tech: ["Python", "CLI", "Menu System", "Automation", "Interactive Tools"],
    category: "Python",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/menu-based-project",
    demo: "#"
  },
  {
    title: "EC2 AI Agent",
    description: "A Streamlit application that uses Large Language Models (Gemini) and LangChain to provide a natural language interface for AWS EC2 management. Features LLM-based intent extraction, conversational memory, multiple EC2 operations, and real-time updates with secure configuration.",
    tech: ["Python", "Streamlit", "LangChain", "Google Gemini", "boto3", "AWS EC2", "Pydantic"],
    category: "AWS",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/ec2-ai-agent",
    demo: "#"
  }
];

const smallToolsData = [
  // Python Tools
  {
    title: "RAM Check Tool",
    description: "System utility to monitor and analyze RAM usage with detailed memory statistics and performance metrics.",
    tech: ["Python", "System Monitoring", "Memory Analysis", "Streamlit"],
    category: "Python",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/ram-checker",
    demo: "https://ram-checker.streamlit.app/"
  },
  {
    title: "Search Engine",
    description: "Custom search engine implementation with web crawling capabilities and indexed search functionality.",
    tech: ["Python", "Web Crawling", "Search Algorithm", "Streamlit"],
    category: "Python",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/search-engine",
    demo: "https://search-engine-tool.streamlit.app/"
  },
  {
    title: "Digital Image Processor",
    description: "Image processing tool with filters, transformations, and enhancement capabilities for digital images.",
    tech: ["Python", "Image Processing", "OpenCV", "Streamlit"],
    category: "Python",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/Inbuilt-Digital-Image",
    demo: "https://inbuilt-digital-image.streamlit.app/"
  },
  {
    title: "Data Scraper from Google",
    description: "Web scraping tool to extract and analyze data from Google search results with automated data collection.",
    tech: ["Python", "Web Scraping", "Data Extraction", "Streamlit"],
    category: "Python",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/data-scraper",
    demo: "https://data-scraper-tool.streamlit.app/"
  },
  {
    title: "Python Menu Based Project",
    description: "Interactive command-line application with organized menu system for various Python utilities and tools.",
    tech: ["Python", "CLI", "Menu System"],
    category: "Python",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/Python-menu-Based",
    demo: "https://python-menu-based.streamlit.app/"
  },
  {
    title: "AI-Powered Web Scraper",
    description: "Advanced web scraping tool powered by artificial intelligence for intelligent data extraction. Features automated content parsing, smart data filtering, and interactive Streamlit interface.",
    tech: ["Python", "Streamlit", "AI", "Web Scraping"],
    category: "Python",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/ai-web-scraper/",
    demo: "https://aitool-web-scraper.streamlit.app/"
  },
  // AWS Tools
  {
    title: "AWS EC2 Instance Manager",
    description: "AWS automation tool to launch EC2 instances with custom configurations and automatic URL generation.",
    tech: ["AWS", "EC2", "Automation", "Cloud", "Streamlit"],
    category: "AWS",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/AWS-EC2-Launcher",
    demo: "https://aws-ec2-launcher.streamlit.app/"
  },
  // Linux Tools
  {
    title: "Icon Changer",
    description: "Linux utility to customize and change system icons with batch processing and theme management capabilities.",
    tech: ["Linux", "System Customization", "Shell Script"],
    category: "Linux",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/Icon-changer-in-Linux",
    demo: "https://icon-changer-in-linux.streamlit.app/"
  },
  {
    title: "Menu Based GUI and CLI Tool",
    description: "Dual-interface Linux application with both graphical and command-line interfaces for system administration.",
    tech: ["Linux", "GUI", "CLI", "System Admin"],
    category: "Linux",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/androaryaani/linux-SSH-GUI-CLI-menu",
    demo: "https://linux-ssh-gui-cli-menu.streamlit.app/"
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<any[]>(projectsData);
  
  const [activeToolFilter, setActiveToolFilter] = useState('All');
  const [filteredTools, setFilteredTools] = useState<any[]>(smallToolsData);

  const filters = ['All', 'Machine Learning', 'Artificial Intelligence', 'Python', 'Web-app', 'AWS'];
  const toolFilters = ['All', 'Python', 'Linux', 'AWS'];

  // Pagination logic for Featured Projects
  const [projectsToShow, setProjectsToShow] = useState(3);
  const displayedProjects = filteredProjects.slice(0, projectsToShow);
  const hasMoreProjects = filteredProjects.length > projectsToShow;

  // Pagination logic for Small Tools
  const [toolsToShow, setToolsToShow] = useState(4); // Show 4 tools initially (2 rows of 2)
  const displayedTools = filteredTools.slice(0, toolsToShow);
  const hasMoreTools = filteredTools.length > toolsToShow;

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
    }
    // Reset pagination when filter changes
    setProjectsToShow(3);
  }, [activeFilter]);

  useEffect(() => {
    if (activeToolFilter === 'All') {
      setFilteredTools(smallToolsData);
    } else {
      setFilteredTools(smallToolsData.filter(tool => tool.category === activeToolFilter));
    }
    // Reset pagination when filter changes
    setToolsToShow(4);
  }, [activeToolFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const projectCards = document.querySelectorAll('.project-card');
          projectCards.forEach((card, index) => {
            // Reset animation first
            card.classList.remove('animate-fade-up');
            setTimeout(() => {
              card.classList.add('animate-fade-up');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProjects, displayedProjects, projectsToShow]);

  // Separate effect to handle animation when projects are added via pagination
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      // Ensure all cards are visible and animated
      card.classList.remove('animate-fade-up');
      setTimeout(() => {
        card.classList.add('animate-fade-up');
      }, index * 100);
    });
  }, [projectsToShow, displayedProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[var(--dun)] noise-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            Featured Projects
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--chamoisee)' }}>
            Showcasing my latest work and experiments
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full glass-card transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-[var(--coffee)] text-[var(--almond)]' 
                    : 'hover:bg-[var(--tan)]'
                }`}
                style={{
                  color: activeFilter === filter ? 'var(--almond)' : 'var(--coffee)',
                  backgroundColor: activeFilter === filter ? 'var(--coffee)' : 'transparent'
                }}
              >
                <Filter size={16} className="inline mr-2" />
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card overflow-hidden transition-all duration-700"
              style={{
                background: 'rgba(237, 224, 212, 0.15)',
                backdropFilter: 'blur(15px)',
              }}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="project-image overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500"
                    />
                  </div>
                  
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--coffee)' }}>
                    {project.title}
                  </h3>
                  <p className="text-lg mb-6" style={{ color: 'var(--chamoisee)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: 'var(--tan)',
                          color: 'var(--coffee)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-card px-6 py-3 hover:scale-105 transition-transform duration-300"
                    >
                      <Github size={20} style={{ color: 'var(--coffee)' }} />
                      <span style={{ color: 'var(--coffee)' }}>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-card px-6 py-3 hover:scale-105 transition-transform duration-300"
                    >
                      <ExternalLink size={20} style={{ color: 'var(--coffee)' }} />
                      <span style={{ color: 'var(--coffee)' }}>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button for Featured Projects */}
        {hasMoreProjects && (
          <div className="text-center mt-12">
            <button
              onClick={() => setProjectsToShow(prev => prev + 3)}
              className="px-8 py-4 glass-card hover:scale-105 transition-all duration-300 font-semibold text-lg"
              style={{
                backgroundColor: 'var(--coffee)',
                color: 'var(--almond)'
              }}
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>

      {/* Small Tools Section */}
      <div className="container mx-auto px-6 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 glow-text" style={{ color: 'var(--coffee)' }}>
            Small Tools
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--chamoisee)' }}>
            Useful utilities and small programs
          </p>

          {/* Tool Filter Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {toolFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveToolFilter(filter)}
                className={`px-6 py-3 rounded-full glass-card transition-all duration-300 ${
                  activeToolFilter === filter
                    ? 'bg-[var(--coffee)] text-[var(--almond)]'
                    : 'hover:bg-[var(--tan)]'
                }`}
                style={{
                  color: activeToolFilter === filter ? 'var(--almond)' : 'var(--coffee)',
                  backgroundColor: activeToolFilter === filter ? 'var(--coffee)' : 'transparent'
                }}
              >
                <Filter size={16} className="inline mr-2" />
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedTools.map((tool, index) => (
            <div
              key={index}
              className="project-card glass-card overflow-hidden transition-all duration-700"
              style={{
                background: 'rgba(237, 224, 212, 0.15)',
                backdropFilter: 'blur(15px)',
              }}
            >
              <div className="p-6">
                <div className="project-image overflow-hidden mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-48 object-cover transition-transform duration-500 rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--coffee)' }}>
                  {tool.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--chamoisee)' }}>
                  {tool.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: 'var(--tan)',
                        color: 'var(--coffee)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-card px-4 py-2 hover:scale-105 transition-transform duration-300 text-sm"
                  >
                    <Github size={16} style={{ color: 'var(--coffee)' }} />
                    <span style={{ color: 'var(--coffee)' }}>Code</span>
                  </a>
                  <a
                    href={tool.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 glass-card px-4 py-2 hover:scale-105 transition-transform duration-300 text-sm"
                  >
                    <ExternalLink size={16} style={{ color: 'var(--coffee)' }} />
                    <span style={{ color: 'var(--coffee)' }}>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button for Small Tools */}
        {hasMoreTools && (
          <div className="text-center mt-12">
            <button
              onClick={() => setToolsToShow(prev => prev + 4)}
              className="px-8 py-4 glass-card hover:scale-105 transition-all duration-300 font-semibold text-lg"
              style={{
                backgroundColor: 'var(--coffee)',
                color: 'var(--almond)'
              }}
            >
              Show More Tools
            </button>
          </div>
        )}
      </div>

      <style>{`
        .animate-fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;