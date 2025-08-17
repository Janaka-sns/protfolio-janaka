import { ArrowDown, Download, Code2, Database, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[60px]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-0">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6 mt-[50px]">
              <p className="text-primary font-semibold text-lg mb-2">Hello, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 break-words leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">Janaka Kumara</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium break-words">Senior Software Engineer | Full-Stack Java & Angular</h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Results-driven Software Engineer with over 4 years of experience specializing in 
              Java technologies and front-end development. Passionate about creating scalable 
              business automation solutions and mentoring fellow developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={() => scrollToSection('portfolio')} className="btn-glow">
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-glow"
                onClick={() => {
                  // Google Drive direct download link
                  const cvUrl = "https://drive.google.com/uc?export=download&id=1vZdr4bsSHS9h0YS0tUwe5Mi-YlsqHHDP";
                  const link = document.createElement('a');
                  link.href = cvUrl;
                  link.download = 'Janaka_Kumara_CV.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-surface rounded-full">Java</span>
              <span className="px-3 py-1 bg-surface rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-surface rounded-full">Angular</span>
              <span className="px-3 py-1 bg-surface rounded-full">Microservices</span>
              <span className="px-3 py-1 bg-surface rounded-full">Docker</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Abstract Background Shapes */}
              <div className="absolute inset-0 -z-10">
                {/* Large organic shape */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-[40%_60%_70%_30%] blur-sm"></div>
                
                {/* Medium organic shape */}
                <div className="absolute top-10 -right-16 w-72 h-72 bg-gradient-to-bl from-accent/25 via-accent/15 to-transparent rounded-[60%_40%_30%_70%]"></div>
                
                {/* Small organic shape */}
                <div className="absolute -bottom-10 left-8 w-48 h-48 bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent rounded-[30%_70%_60%_40%]"></div>
                
                {/* Additional floating elements */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[50%_70%_30%_50%] blur-xl"></div>
                
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5"></div>
              </div>

              {/* Main Profile Image with Enhanced Effects */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent p-1 relative z-20 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden relative shadow-inner">
                  <img 
                    src="https://i.postimg.cc/wj9t3kyq/IMG-3914.avif"
                    alt="Janaka Kumara - Software Engineer" 
                    className="w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-110" 
                    onError={e => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl font-bold text-primary">JK</div>';
                      }
                    }} 
                  />
                  {/* Enhanced overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Tech Icons */}
              <div className="absolute -top-8 -left-8 w-12 h-12 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center shadow-lg hover-scale cursor-pointer">
                <Code2 size={20} className="text-primary" />
              </div>
              
              <div className="absolute top-8 -right-12 w-12 h-12 bg-background/90 backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shadow-lg hover-scale cursor-pointer">
                <Database size={20} className="text-accent" />
              </div>
              
              <div className="absolute -bottom-8 left-16 w-12 h-12 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center shadow-lg hover-scale cursor-pointer">
                <Globe size={20} className="text-primary" />
              </div>
              
              <div className="absolute bottom-16 -right-8 w-12 h-12 bg-background/90 backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shadow-lg hover-scale cursor-pointer">
                <Zap size={20} className="text-accent" />
              </div>
              
              {/* Badge - Experience */}
              <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl hover:bg-background/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-xs font-bold text-primary-foreground">4+</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Years</p>
                    <p className="text-xs text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Badge - Projects */}
              <div className="absolute -bottom-6 -left-8 bg-background/80 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl hover:bg-background/90 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-xs font-bold text-accent-foreground">20+</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Projects</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Scroll to about section">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;