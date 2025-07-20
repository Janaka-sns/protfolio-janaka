import { Cog, Globe, Database, Code, Zap, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Business Automation",
      description: "Streamline your business processes with custom automation solutions using modern technologies like Camunda BPM and microservices architecture.",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Integration Solutions",
        "Performance Monitoring"
      ],
      technologies: ["Java", "Spring Boot", "Camunda BPM", "REST APIs"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Full-stack web development services creating responsive, scalable applications tailored to your business requirements.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Real-time Features",
        "API Integration"
      ],
      technologies: ["Angular", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend System Architecture",
      description: "Design and implement robust backend systems with microservices architecture, ensuring scalability and maintainability.",
      features: [
        "Microservices Design",
        "Database Architecture",
        "API Development",
        "Performance Optimization"
      ],
      technologies: ["Spring Boot", "MySQL", "PostgreSQL", "Docker"]
    },
    {
      icon: Code,
      title: "Software Consulting",
      description: "Technical consultation services including code reviews, architecture decisions, and technology stack recommendations.",
      features: [
        "Code Review",
        "Architecture Planning",
        "Technology Selection",
        "Best Practices Implementation"
      ],
      technologies: ["Agile", "DevOps", "Clean Code", "Design Patterns"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize existing applications for better performance, scalability, and user experience through advanced debugging and optimization techniques.",
      features: [
        "Performance Analysis",
        "Database Optimization",
        "Code Refactoring",
        "Scalability Improvements"
      ],
      technologies: ["Profiling Tools", "Query Optimization", "Caching", "Load Testing"]
    },
    {
      icon: Shield,
      title: "Mentoring & Training",
      description: "Technical mentoring services for development teams, including training on best practices, coding standards, and professional growth.",
      features: [
        "Technical Mentoring",
        "Code Quality Training",
        "Career Guidance",
        "Team Leadership"
      ],
      technologies: ["Leadership", "Teaching", "Team Building", "Knowledge Transfer"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software engineering services to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-elevated p-8 hover-glow group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-surface text-xs text-muted-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Let's discuss how I can help bring your software engineering needs to life. 
              Whether you need a complete solution or technical consultation, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-glow"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-glow"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;