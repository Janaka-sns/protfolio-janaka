import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
const About = () => {
  const workExperience = [{
    title: "Senior Software Engineer",
    company: "Hitachi Digital Payment Solution", 
    period: "2024 - Present",
    responsibilities: ["Leading architecture decisions and technical strategy for enterprise payment solutions", "Driving innovation in microservices design and scalability improvements", "Mentoring development teams and establishing engineering best practices", "Collaborating with stakeholders to define technical roadmaps and deliverables"]
  }, {
    title: "Software Engineer",
    company: "Hitachi Digital Payment Solution", 
    period: "2021 - 2024",
    responsibilities: ["Led development of enterprise payment solutions using Java and Spring Boot", "Architected and implemented microservices architecture for scalable applications", "Mentored junior developers in best practices and code quality standards", "Collaborated with cross-functional teams to deliver critical business features"]
  }, {
    title: "Software Engineer",
    company: "Digiratina Technology Solutions",
    period: "2020 - 2021", 
    responsibilities: ["Developed full-stack web applications using Java, Angular, and modern frameworks", "Implemented business automation systems improving operational efficiency", "Designed and optimized database schemas for high-performance applications", "Participated in Agile development processes and sprint planning"]
  }];
  return <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about crafting efficient solutions and driving innovation in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>With over 4+ years of hands-on experience in software engineering, I specialize in building robust, scalable applications using Java technologies and modern front-end frameworks like Angular.</p>
                <p>
                  My passion lies in solving complex business problems through innovative software 
                  solutions. I thrive in collaborative environments where I can contribute to 
                  architectural decisions and mentor fellow developers.
                </p>
                <p>
                  Throughout my career, I've successfully delivered enterprise-level applications, 
                  focusing on clean code, performance optimization, and user experience. I'm constantly 
                  learning new technologies and best practices to stay at the forefront of software development.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="card-elevated p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-primary">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Bachelor of Science in Business Information Technology
                  </h4>
                  <p className="text-primary font-medium">Rajarata University of Sri Lanka</p>
                  <p className="text-sm text-muted-foreground">
                    Major: Software Engineering | Minor: Business Analytics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <div className="card-elevated p-8">
              <div className="flex items-center mb-8">
                <Briefcase className="text-primary mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-primary">Work Experience</h3>
              </div>
              
              <div className="space-y-8">
                {workExperience.map((job, index) => <div key={index} className="relative">
                    {index !== workExperience.length - 1 && <div className="absolute left-0 top-8 w-0.5 h-full bg-border"></div>}
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                          <p className="text-primary font-medium">{job.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar size={14} className="mr-1" />
                            {job.period}
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, i) => <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                              • {responsibility}
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
