
import { 
  Code2, Database, Cloud, Wrench, Globe, Users, 
  FileCode, Terminal, GitBranch, Zap, Layers,
  Shield, Settings, Brain, MessageSquare, Target
} from 'lucide-react';

const Skills = () => {
  // Icon mapping for individual skills
  const skillIcons = {
    // Programming Languages
    "Java": FileCode,
    "TypeScript": FileCode,
    "JavaScript": FileCode,
    "Python": FileCode,
    "SQL": Database,
    
    // Frontend Technologies
    "Angular": Globe,
    "React": Globe,
    "HTML5/CSS3": Globe,
    "Tailwind CSS": Globe,
    "Bootstrap": Globe,
    
    // Backend & Databases
    "Spring Boot": Zap,
    "REST APIs": Layers,
    "MySQL": Database,
    "PostgreSQL": Database,
    "Oracle": Database,
    
    // DevOps & Tools
    "Docker": Terminal,
    "Git": GitBranch,
    "Microservices": Layers,
    "Agile/Scrum": Target,
    "Maven": Settings,
    
    // Business Solutions
    "Camunda BPM": Wrench,
    "Business Automation": Wrench,
    "System Architecture": Layers,
    "Performance Optimization": Zap,
    "Debugging": Wrench,
    
    // Soft Skills
    "Team Leadership": Users,
    "Mentoring": Users,
    "Problem Solving": Brain,
    "Communication": MessageSquare,
    "Project Management": Target
  };

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      icon: Globe,
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 90 },
        { name: "React", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "REST APIs", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Oracle", level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Microservices", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "Maven", level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: "Business Solutions",
      skills: [
        { name: "Camunda BPM", level: 80 },
        { name: "Business Automation", level: 85 },
        { name: "System Architecture", level: 80 },
        { name: "Performance Optimization", level: 85 },
        { name: "Debugging", level: 90 }
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Mentoring", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 85 },
        { name: "Project Management", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elevated p-6 hover-glow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skillIcons[skill.name] || Code2;
                  return (
                    <div key={skillIndex}>
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 bg-surface rounded mr-3">
                          <SkillIcon className="text-primary" size={16} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      
                      <div className="w-full bg-surface rounded-full h-2 ml-9">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `skillLoad 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-16">
          <div className="card-glass p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Team Members Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
