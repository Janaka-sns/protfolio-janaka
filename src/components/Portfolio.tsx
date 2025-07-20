import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Attorney General's Office Automation System",
      description: "A comprehensive business automation system designed to streamline legal processes and document management for the Attorney General's Office. This enterprise-level solution improves efficiency and reduces manual workload.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker", "Camunda BPM"],
      features: [
        "Document Management System",
        "Workflow Automation",
        "User Role Management", 
        "Real-time Notifications",
        "Advanced Reporting",
        "Integration with Legacy Systems"
      ],
      stats: {
        duration: "8 months",
        teamSize: "5 developers",
        impact: "70% efficiency improvement"
      },
      category: "Enterprise"
    },
    {
      title: "Driving School Automation System",
      description: "A complete management solution for driving schools featuring student enrollment, instructor scheduling, progress tracking, and automated certification processes. Streamlines operations for driving schools of all sizes.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "REST APIs", "JWT"],
      features: [
        "Student Enrollment System",
        "Instructor Management",
        "Lesson Scheduling",
        "Progress Tracking",
        "Automated Payments",
        "Certificate Generation"
      ],
      stats: {
        duration: "6 months", 
        teamSize: "3 developers",
        impact: "50+ schools using"
      },
      category: "Business"
    },
    {
      title: "Enterprise Payment Gateway",
      description: "A secure, scalable payment processing system built for enterprise clients. Features advanced security measures, real-time transaction processing, and comprehensive analytics dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Microservices", "Oracle", "Docker", "Kubernetes"],
      features: [
        "Multi-payment Method Support",
        "Real-time Processing",
        "Advanced Security",
        "Analytics Dashboard",
        "API Integration",
        "Fraud Detection"
      ],
      stats: {
        duration: "12 months",
        teamSize: "8 developers", 
        impact: "99.9% uptime"
      },
      category: "FinTech"
    },
    {
      title: "Business Process Management Platform",
      description: "A comprehensive BPM platform using Camunda engine for workflow automation across various business domains. Enables organizations to model, execute, and optimize their business processes.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "Camunda BPM", "Angular", "MySQL", "Docker"],
      features: [
        "Visual Process Modeling",
        "Workflow Execution Engine",
        "Task Management",
        "Process Analytics",
        "Integration APIs",
        "Custom Form Builder"
      ],
      stats: {
        duration: "10 months",
        teamSize: "6 developers",
        impact: "40% process optimization"
      },
      category: "Automation"
    }
  ];

  const categories = ["All", "Enterprise", "Business", "FinTech", "Automation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and successful projects that demonstrate expertise in software engineering
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-surface text-muted-foreground hover:bg-surface-hover hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="card-elevated overflow-hidden hover-glow">
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/30">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-surface text-xs text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar size={14} className="text-primary mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">{project.stats.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users size={14} className="text-primary mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">{project.stats.teamSize}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Zap size={14} className="text-primary mr-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">{project.stats.impact}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              These projects represent just a portion of my work. I'd love to discuss how I can help 
              bring your next software engineering project to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-glow"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;